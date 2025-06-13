import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for real-time data and to avoid CORS issues
  perspective: 'published', // Only fetch published documents
  token: process.env.SANITY_API_TOKEN, // Read token from environment
})
