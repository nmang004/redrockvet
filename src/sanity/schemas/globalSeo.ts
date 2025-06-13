import { defineType, defineField } from 'sanity'

export const globalSeo = defineType({
  name: 'globalSeo',
  title: 'Global SEO Settings',
  type: 'document',
  icon: () => '🌐',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Name',
      type: 'string',
      description: 'Internal name for these settings',
      initialValue: 'Global SEO Settings',
      readOnly: true
    }),
    
    // Site Basics
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'Default title for the website',
      validation: Rule => Rule.required().max(60)
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Default meta description for the website',
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'Primary domain URL (e.g., https://redrockvet.com)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Open Graph Image',
      type: 'image',
      description: 'Default image for social media sharing (1200x630px)',
      options: {
        hotspot: true,
      }
    }),

    // Analytics & Tracking
    defineField({
      name: 'analytics',
      title: 'Analytics & Tracking',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'googleAnalyticsId',
          title: 'Google Analytics 4 ID',
          type: 'string',
          description: 'GA4 Measurement ID (e.g., G-XXXXXXXXXX)'
        },
        {
          name: 'gtmId',
          title: 'Google Tag Manager ID',
          type: 'string',
          description: 'GTM Container ID (e.g., GTM-XXXXXXX)'
        },
        {
          name: 'facebookPixelId',
          title: 'Facebook Pixel ID',
          type: 'string',
          description: 'Facebook Pixel ID for tracking'
        },
        {
          name: 'customTrackingScripts',
          title: 'Custom Tracking Scripts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Script Name', type: 'string' },
                { name: 'script', title: 'Script Code', type: 'text' },
                { 
                  name: 'placement', 
                  title: 'Placement', 
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Head', value: 'head' },
                      { title: 'Body Start', value: 'bodyStart' },
                      { title: 'Body End', value: 'bodyEnd' }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }),

    // Schema Markup
    defineField({
      name: 'schemaMarkup',
      title: 'Schema Markup',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'businessType',
          title: 'Business Type',
          type: 'string',
          options: {
            list: [
              { title: 'Veterinary Care', value: 'VeterinaryCare' },
              { title: 'Animal Hospital', value: 'AnimalHospital' },
              { title: 'Local Business', value: 'LocalBusiness' }
            ]
          },
          initialValue: 'VeterinaryCare'
        },
        {
          name: 'businessName',
          title: 'Business Name',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'businessAddress',
          title: 'Business Address',
          type: 'object',
          fields: [
            { name: 'streetAddress', title: 'Street Address', type: 'string' },
            { name: 'city', title: 'City', type: 'string' },
            { name: 'state', title: 'State', type: 'string' },
            { name: 'postalCode', title: 'Postal Code', type: 'string' },
            { name: 'country', title: 'Country', type: 'string', initialValue: 'US' }
          ]
        },
        {
          name: 'businessPhone',
          title: 'Business Phone',
          type: 'string'
        },
        {
          name: 'businessHours',
          title: 'Business Hours',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { 
                  name: 'day', 
                  title: 'Day', 
                  type: 'string',
                  options: {
                    list: [
                      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                      'Friday', 'Saturday', 'Sunday'
                    ]
                  }
                },
                { name: 'opens', title: 'Opens', type: 'string', description: 'e.g., 08:00' },
                { name: 'closes', title: 'Closes', type: 'string', description: 'e.g., 17:00' }
              ]
            }
          ]
        },
        {
          name: 'priceRange',
          title: 'Price Range',
          type: 'string',
          description: 'e.g., $$, $$$',
          options: {
            list: [
              { title: '$', value: '$' },
              { title: '$$', value: '$$' },
              { title: '$$$', value: '$$$' },
              { title: '$$$$', value: '$$$$' }
            ]
          }
        }
      ]
    }),

    // Verification & Tools
    defineField({
      name: 'verification',
      title: 'Search Engine Verification',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'googleSiteVerification',
          title: 'Google Site Verification',
          type: 'string',
          description: 'Google Search Console verification code'
        },
        {
          name: 'bingSiteVerification',
          title: 'Bing Site Verification',
          type: 'string',
          description: 'Bing Webmaster Tools verification code'
        }
      ]
    }),

    // Advanced SEO
    defineField({
      name: 'advanced',
      title: 'Advanced SEO Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'robotsTxt',
          title: 'Robots.txt Additional Rules',
          type: 'text',
          description: 'Additional rules to add to robots.txt'
        },
        {
          name: 'customMetaTags',
          title: 'Custom Meta Tags',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Tag Name', type: 'string' },
                { name: 'property', title: 'Property', type: 'string' },
                { name: 'content', title: 'Content', type: 'string' }
              ]
            }
          ]
        },
        {
          name: 'headerScripts',
          title: 'Custom Header Scripts',
          type: 'text',
          description: 'Custom scripts to inject in <head>'
        },
        {
          name: 'footerScripts',
          title: 'Custom Footer Scripts',
          type: 'text',
          description: 'Custom scripts to inject before </body>'
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'siteTitle'
    },
    prepare(selection) {
      return {
        title: 'Global SEO Settings',
        subtitle: selection.title
      }
    }
  }
})