import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

interface SEOData {
  metaTitle?: string
  metaDescription?: string
  focusKeywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: {
    url: string
    alt?: string
  }
  noIndex?: boolean
  canonicalUrl?: string
  additionalMetaTags?: Array<{
    name?: string
    property?: string
    content: string
  }>
}

export function usePageSEO(pageSlug: string) {
  const [seoData, setSeoData] = useState<SEOData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPageSEO = async () => {
      try {
        const query = `*[_type == "pageSeo" && page == $page][0] {
          seo {
            metaTitle,
            metaDescription,
            focusKeywords,
            ogTitle,
            ogDescription,
            ogImage {
              "url": asset->url,
              "alt": asset->altText
            },
            noIndex,
            canonicalUrl,
            additionalMetaTags
          }
        }`
        
        const data = await client.fetch(query, { page: pageSlug })
        setSeoData(data?.seo || null)
      } catch (error) {
        console.error('Error fetching page SEO:', error)
        setSeoData(null)
      } finally {
        setLoading(false)
      }
    }

    if (pageSlug) {
      fetchPageSEO()
    }
  }, [pageSlug])

  return { seoData, loading }
}

export function useServiceSEO(serviceSlug: string) {
  const [seoData, setSeoData] = useState<SEOData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServiceSEO = async () => {
      try {
        const query = `*[_type == "service" && slug.current == $slug][0] {
          seo {
            metaTitle,
            metaDescription,
            focusKeywords,
            ogTitle,
            ogDescription,
            ogImage {
              "url": asset->url,
              "alt": asset->altText
            },
            noIndex,
            canonicalUrl
          }
        }`
        
        const data = await client.fetch(query, { slug: serviceSlug })
        setSeoData(data?.seo || null)
      } catch (error) {
        console.error('Error fetching service SEO:', error)
        setSeoData(null)
      } finally {
        setLoading(false)
      }
    }

    if (serviceSlug) {
      fetchServiceSEO()
    }
  }, [serviceSlug])

  return { seoData, loading }
}

export function useBlogSEO(blogSlug: string) {
  const [seoData, setSeoData] = useState<SEOData | null>(null)
  const [blogData, setBlogData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogSEO = async () => {
      try {
        const query = `*[_type == "blogPost" && slug.current == $slug][0] {
          title,
          excerpt,
          featuredImage {
            "url": asset->url,
            "alt": asset->altText
          },
          author->{
            name
          },
          publishedAt,
          seo {
            metaTitle,
            metaDescription,
            focusKeywords,
            ogTitle,
            ogDescription,
            ogImage {
              "url": asset->url,
              "alt": asset->altText
            },
            noIndex,
            canonicalUrl
          }
        }`
        
        const data = await client.fetch(query, { slug: blogSlug })
        setSeoData(data?.seo || null)
        setBlogData(data)
      } catch (error) {
        console.error('Error fetching blog SEO:', error)
        setSeoData(null)
        setBlogData(null)
      } finally {
        setLoading(false)
      }
    }

    if (blogSlug) {
      fetchBlogSEO()
    }
  }, [blogSlug])

  return { seoData, blogData, loading }
}