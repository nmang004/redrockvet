import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: () => '⭐',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'petName',
      title: 'Pet Name',
      type: 'string',
      description: 'Optional: Name of the pet being treated'
    }),
    defineField({
      name: 'petType',
      title: 'Pet Type',
      type: 'string',
      options: {
        list: [
          { title: 'Dog', value: 'dog' },
          { title: 'Cat', value: 'cat' },
          { title: 'Bird', value: 'bird' },
          { title: 'Rabbit', value: 'rabbit' },
          { title: 'Reptile', value: 'reptile' },
          { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'clientPhoto',
      title: 'Client/Pet Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Photo of client with their pet (optional but recommended)'
    }),
    defineField({
      name: 'review',
      title: 'Review Text',
      type: 'text',
      validation: Rule => Rule.required().min(50).max(500),
      description: 'The testimonial content (50-500 characters)'
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      description: 'Star rating from 1-5'
    }),
    defineField({
      name: 'serviceReceived',
      title: 'Service Received',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Which service was this testimonial about?'
    }),
    defineField({
      name: 'veterinarian',
      title: 'Veterinarian',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      description: 'Which team member provided the service?'
    }),
    defineField({
      name: 'dateReceived',
      title: 'Date Received',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show prominently on homepage and testimonials page'
    }),
    defineField({
      name: 'approved',
      title: 'Approved for Display',
      type: 'boolean',
      description: 'Only approved testimonials will be shown on the website',
      initialValue: false
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          { title: 'Google Reviews', value: 'google' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Yelp', value: 'yelp' },
          { title: 'Direct Feedback', value: 'direct' },
          { title: 'Email', value: 'email' },
          { title: 'Phone Survey', value: 'phone' }
        ]
      },
      description: 'Where did this testimonial come from?'
    }),
    defineField({
      name: 'location',
      title: 'Client Location',
      type: 'string',
      description: 'City, State (optional for credibility)'
    })
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'petName',
      media: 'clientPhoto',
      rating: 'rating',
      approved: 'approved'
    },
    prepare(selection) {
      const { title, subtitle, media, rating, approved } = selection
      const stars = '⭐'.repeat(rating || 0)
      const status = approved ? '✅' : '⏳'
      return {
        title: `${title}${subtitle ? ` & ${subtitle}` : ''}`,
        subtitle: `${stars} ${status}`,
        media
      }
    }
  },
  orderings: [
    {
      title: 'Date Received (newest first)',
      name: 'dateDesc',
      by: [{ field: 'dateReceived', direction: 'desc' }]
    },
    {
      title: 'Rating (highest first)',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }]
    }
  ]
})