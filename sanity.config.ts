import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'pet-x-veterinary',
  title: 'Pet X Veterinary CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool()
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  theme: {
    // Customize the studio theme to match Pet X branding
    primaryColor: '#FF6B35', // Orange primary
    secondaryColor: '#1A1A2E', // Navy secondary
  }
})