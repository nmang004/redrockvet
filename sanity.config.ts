import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'red-rock-veterinary',
  title: 'Red Rock Veterinary Health CMS',
  
  projectId: '8tgbdisl',
  dataset: 'production',
  apiVersion: '2024-05-04',
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: '2024-05-04',
      defaultDataset: 'production'
    })
  ],
  
  schema: {
    types: schemaTypes,
  }
})