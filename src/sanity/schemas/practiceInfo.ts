import { defineType, defineField } from 'sanity'

export const practiceInfo = defineType({
  name: 'practiceInfo',
  title: 'Practice Information',
  type: 'document',
  icon: () => '🏥',
  fields: [
    defineField({
      name: 'name',
      title: 'Practice Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'hours',
      title: 'Operating Hours',
      type: 'object',
      fields: [
        { name: 'monday', title: 'Monday', type: 'string' },
        { name: 'tuesday', title: 'Tuesday', type: 'string' },
        { name: 'wednesday', title: 'Wednesday', type: 'string' },
        { name: 'thursday', title: 'Thursday', type: 'string' },
        { name: 'friday', title: 'Friday', type: 'string' },
        { name: 'saturday', title: 'Saturday', type: 'string' },
        { name: 'sunday', title: 'Sunday', type: 'string' },
        { name: 'emergency', title: 'Emergency Hours', type: 'string' },
        { name: 'holidays', title: 'Holiday Hours', type: 'text' }
      ]
    }),
    defineField({
      name: 'location',
      title: 'Location Details',
      type: 'object',
      fields: [
        { name: 'address', title: 'Street Address', type: 'string', validation: Rule => Rule.required() },
        { name: 'city', title: 'City', type: 'string', validation: Rule => Rule.required() },
        { name: 'state', title: 'State', type: 'string', validation: Rule => Rule.required() },
        { name: 'zipCode', title: 'ZIP Code', type: 'string', validation: Rule => Rule.required() },
        { name: 'coordinates', title: 'GPS Coordinates', type: 'geopoint' },
        { name: 'parkingInfo', title: 'Parking Information', type: 'text' },
        { name: 'accessibility', title: 'Accessibility Features', type: 'text' }
      ]
    }),
    defineField({
      name: 'statistics',
      title: 'Practice Statistics',
      type: 'object',
      fields: [
        { name: 'yearsInBusiness', title: 'Years in Business', type: 'number' },
        { name: 'petsServed', title: 'Pets Served (total)', type: 'number' },
        { name: 'surgicalProcedures', title: 'Surgical Procedures (annual)', type: 'number' },
        { name: 'teamMembers', title: 'Team Members', type: 'number' },
        { name: 'emergencyCases', title: 'Emergency Cases (annual)', type: 'number' }
      ]
    }),
    defineField({
      name: 'facilities',
      title: 'Facility Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Feature Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
          ]
        }
      ]
    }),
    defineField({
      name: 'equipment',
      title: 'Medical Equipment',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of major medical equipment and technologies'
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications & Accreditations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Certification Name', type: 'string' },
            { name: 'issuingOrganization', title: 'Issuing Organization', type: 'string' },
            { name: 'dateReceived', title: 'Date Received', type: 'date' },
            { name: 'expirationDate', title: 'Expiration Date', type: 'date' },
            { name: 'logo', title: 'Certification Logo', type: 'image' }
          ]
        }
      ]
    }),
    defineField({
      name: 'insuranceAccepted',
      title: 'Insurance Plans Accepted',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of pet insurance companies accepted'
    }),
    defineField({
      name: 'paymentMethods',
      title: 'Payment Methods Accepted',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Cash, Credit Cards, CareCredit, etc.'
    }),
    defineField({
      name: 'emergencyProtocol',
      title: 'Emergency Protocol',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' }
          ]
        }
      ]
    }),
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Value Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' }
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
})