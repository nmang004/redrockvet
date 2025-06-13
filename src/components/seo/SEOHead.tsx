import Head from 'next/head'
import { client } from '@/sanity/lib/client'
import { useEffect, useState } from 'react'

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

interface GlobalSEOData {
  siteTitle: string
  siteDescription: string
  siteUrl: string
  defaultOgImage?: {
    url: string
  }
  analytics?: {
    googleAnalyticsId?: string
    gtmId?: string
    facebookPixelId?: string
  }
  verification?: {
    googleSiteVerification?: string
    bingSiteVerification?: string
  }
  advanced?: {
    customMetaTags?: Array<{
      name?: string
      property?: string
      content: string
    }>
    headerScripts?: string
  }
}

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
  pageType?: 'website' | 'article' | 'service'
  seoData?: SEOData
  pathname?: string
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  ogImage,
  canonical,
  noIndex = false,
  pageType = 'website',
  seoData,
  pathname = ''
}: SEOHeadProps) {
  const [globalSeo, setGlobalSeo] = useState<GlobalSEOData | null>(null)

  useEffect(() => {
    const fetchGlobalSeo = async () => {
      try {
        const query = `*[_type == "globalSeo"][0] {
          siteTitle,
          siteDescription,
          siteUrl,
          defaultOgImage {
            "url": asset->url
          },
          analytics,
          verification,
          advanced
        }`
        
        const data = await client.fetch(query)
        if (data) {
          setGlobalSeo(data)
        }
      } catch (error) {
        console.error('Error fetching global SEO:', error)
      }
    }

    fetchGlobalSeo()
  }, [])

  // Use SEO data from CMS if available, fallback to props
  const finalTitle = seoData?.metaTitle || title || globalSeo?.siteTitle || 'Red Rock Veterinary'
  const finalDescription = seoData?.metaDescription || description || globalSeo?.siteDescription || 'Professional veterinary care for your pets'
  const finalKeywords = seoData?.focusKeywords || keywords
  const finalOgTitle = seoData?.ogTitle || finalTitle
  const finalOgDescription = seoData?.ogDescription || finalDescription
  const finalOgImage = seoData?.ogImage?.url || ogImage || globalSeo?.defaultOgImage?.url
  const finalCanonical = seoData?.canonicalUrl || canonical || (globalSeo?.siteUrl ? `${globalSeo.siteUrl}${pathname}` : undefined)
  const finalNoIndex = seoData?.noIndex ?? noIndex

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords.length > 0 && (
        <meta name="keywords" content={finalKeywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      {finalCanonical && <link rel="canonical" href={finalCanonical} />}
      
      {/* Robots */}
      {finalNoIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      {finalOgImage && <meta property="og:image" content={finalOgImage} />}
      {finalCanonical && <meta property="og:url" content={finalCanonical} />}
      {globalSeo?.siteTitle && <meta property="og:site_name" content={globalSeo.siteTitle} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {finalOgImage && <meta name="twitter:image" content={finalOgImage} />}
      
      {/* Additional Meta Tags from CMS */}
      {seoData?.additionalMetaTags?.map((tag, index) => {
        if (tag.name) {
          return <meta key={index} name={tag.name} content={tag.content} />
        } else if (tag.property) {
          return <meta key={index} property={tag.property} content={tag.content} />
        }
        return null
      })}
      
      {/* Global Custom Meta Tags */}
      {globalSeo?.advanced?.customMetaTags?.map((tag, index) => {
        if (tag.name) {
          return <meta key={`global-${index}`} name={tag.name} content={tag.content} />
        } else if (tag.property) {
          return <meta key={`global-${index}`} property={tag.property} content={tag.content} />
        }
        return null
      })}
      
      {/* Search Engine Verification */}
      {globalSeo?.verification?.googleSiteVerification && (
        <meta name="google-site-verification" content={globalSeo.verification.googleSiteVerification} />
      )}
      {globalSeo?.verification?.bingSiteVerification && (
        <meta name="msvalidate.01" content={globalSeo.verification.bingSiteVerification} />
      )}
      
      {/* Analytics Scripts */}
      {globalSeo?.analytics?.googleAnalyticsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${globalSeo.analytics.googleAnalyticsId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${globalSeo.analytics.googleAnalyticsId}');
              `,
            }}
          />
        </>
      )}
      
      {globalSeo?.analytics?.gtmId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${globalSeo.analytics.gtmId}');
            `,
          }}
        />
      )}
      
      {globalSeo?.analytics?.facebookPixelId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${globalSeo.analytics.facebookPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
      
      {/* Custom Header Scripts */}
      {globalSeo?.advanced?.headerScripts && (
        <script
          dangerouslySetInnerHTML={{
            __html: globalSeo.advanced.headerScripts,
          }}
        />
      )}
    </Head>
  )
}