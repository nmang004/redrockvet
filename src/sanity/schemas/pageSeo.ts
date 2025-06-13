import { defineType, defineField } from 'sanity'

export const pageSeo = defineType({
  name: 'pageSeo',
  title: 'Page SEO Settings',
  type: 'document',
  icon: () => '📄',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Homepage', value: 'homepage' },
          { title: 'About Us', value: 'about' },
          { title: 'Services', value: 'services' },
          { title: 'Team', value: 'team' },
          { title: 'Blog', value: 'blog' },
          { title: 'Contact', value: 'contact' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title that appears in search results (50-60 characters recommended)',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Description that appears in search results (150-160 characters recommended)',
          validation: Rule => Rule.max(160)
        },
        {
          name: 'focusKeywords',
          title: 'Focus Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Primary keywords this page should rank for',
          validation: Rule => Rule.max(5)
        },
        {
          name: 'ogTitle',
          title: 'Open Graph Title',
          type: 'string',
          description: 'Title for social media sharing (leave empty to use meta title)',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'ogDescription',
          title: 'Open Graph Description',
          type: 'text',
          description: 'Description for social media sharing (leave empty to use meta description)',
          validation: Rule => Rule.max(160)
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px recommended)',
          options: {
            hotspot: true,
          }
        },
        {
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          description: 'Prevent search engines from indexing this page',
          initialValue: false
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Override the canonical URL if needed'
        },
        {
          name: 'additionalMetaTags',
          title: 'Additional Meta Tags',
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
        }
      ]
    }),
    defineField({
      name: 'content',
      title: 'Page Content Overrides',
      type: 'object',
      description: 'Override default page content for better SEO',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'heroTitle',
          title: 'Hero Title Override',
          type: 'string',
          description: 'Override the default hero title'
        },
        {
          name: 'heroSubtitle',
          title: 'Hero Subtitle Override',
          type: 'text',
          description: 'Override the default hero subtitle'
        },
        {
          name: 'customContent',
          title: 'Additional Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' }
              ],
              lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Number', value: 'number' }
              ],
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' }
                ],
                annotations: [
                  {
                    title: 'URL',
                    name: 'link',
                    type: 'object',
                    fields: [
                      {
                        title: 'URL',
                        name: 'href',
                        type: 'url'
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'page',
      metaTitle: 'seo.metaTitle'
    },
    prepare(selection) {
      const { title, metaTitle } = selection
      return {
        title: `${title.charAt(0).toUpperCase()}${title.slice(1)} Page SEO`,
        subtitle: metaTitle || 'No meta title set'
      }
    }
  }
})