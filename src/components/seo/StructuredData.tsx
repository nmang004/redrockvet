import Head from 'next/head'
import { client } from '@/sanity/lib/client'
import { useEffect, useState } from 'react'

interface BusinessStructuredDataProps {
  pageType?: 'homepage' | 'service' | 'blog' | 'contact'
  serviceData?: {
    name: string
    description: string
    price?: string
  }
  blogData?: {
    title: string
    description: string
    author: string
    publishedAt: string
    image?: string
  }
}

interface GlobalSchemaData {
  businessType: string
  businessName: string
  businessAddress: {
    streetAddress?: string
    city?: string
    state?: string
    postalCode?: string
    country?: string
  }
  businessPhone?: string
  businessHours?: Array<{
    day: string
    opens: string
    closes: string
  }>
  priceRange?: string
  siteUrl: string
}

export default function StructuredData({
  pageType = 'homepage',
  serviceData,
  blogData
}: BusinessStructuredDataProps) {
  const [globalSchema, setGlobalSchema] = useState<GlobalSchemaData | null>(null)

  useEffect(() => {
    const fetchGlobalSchema = async () => {
      try {
        const query = `*[_type == "globalSeo"][0] {
          siteUrl,
          schemaMarkup {
            businessType,
            businessName,
            businessAddress,
            businessPhone,
            businessHours,
            priceRange
          }
        }`
        
        const data = await client.fetch(query)
        if (data?.schemaMarkup) {
          setGlobalSchema({
            ...data.schemaMarkup,
            siteUrl: data.siteUrl
          })
        }
      } catch (error) {
        console.error('Error fetching schema data:', error)
      }
    }

    fetchGlobalSchema()
  }, [])

  if (!globalSchema) return null

  const generateBusinessSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": globalSchema.businessType || "VeterinaryCare",
      "name": globalSchema.businessName,
      "url": globalSchema.siteUrl
    }

    if (globalSchema.businessAddress) {
      const address = globalSchema.businessAddress
      if (address.streetAddress) {
        (baseSchema as any).address = {
          "@type": "PostalAddress",
          "streetAddress": address.streetAddress,
          "addressLocality": address.city,
          "addressRegion": address.state,
          "postalCode": address.postalCode,
          "addressCountry": address.country || "US"
        }
      }
    }

    if (globalSchema.businessPhone) {
      (baseSchema as any).telephone = globalSchema.businessPhone
    }

    if (globalSchema.priceRange) {
      (baseSchema as any).priceRange = globalSchema.priceRange
    }

    if (globalSchema.businessHours && globalSchema.businessHours.length > 0) {
      (baseSchema as any).openingHoursSpecification = globalSchema.businessHours.map(hours => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": hours.day,
        "opens": hours.opens,
        "closes": hours.closes
      }))
    }

    return baseSchema
  }

  const generateServiceSchema = () => {
    if (!serviceData) return null

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceData.name,
      "description": serviceData.description,
      "provider": {
        "@type": globalSchema.businessType || "VeterinaryCare",
        "name": globalSchema.businessName
      },
      ...(serviceData.price && {
        "offers": {
          "@type": "Offer",
          "price": serviceData.price,
          "priceCurrency": "USD"
        }
      })
    }
  }

  const generateBlogSchema = () => {
    if (!blogData) return null

    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogData.title,
      "description": blogData.description,
      "author": {
        "@type": "Person",
        "name": blogData.author
      },
      "publisher": {
        "@type": "Organization",
        "name": globalSchema.businessName
      },
      "datePublished": blogData.publishedAt,
      ...(blogData.image && {
        "image": blogData.image
      })
    }
  }

  const getSchemaForPage = () => {
    const schemas = [generateBusinessSchema()]

    if (pageType === 'service' && serviceData) {
      schemas.push(generateServiceSchema())
    }

    if (pageType === 'blog' && blogData) {
      schemas.push(generateBlogSchema())
    }

    return schemas.filter(Boolean)
  }

  const schemas = getSchemaForPage()

  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </Head>
  )
}