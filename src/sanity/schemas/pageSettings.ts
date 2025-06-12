import { defineType, defineField } from 'sanity'

export const pageSettings = defineType({
  name: 'pageSettings',
  title: 'Page Settings',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Phone Number', type: 'string' },
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' },
        { name: 'emergencyPhone', title: 'Emergency Phone', type: 'string' }
      ]
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'keywords', title: 'Meta Keywords', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', title: 'Default OG Image', type: 'image' }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})