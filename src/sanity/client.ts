import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Reusable GROQ queries
export const queries = {
  // Page Settings
  pageSettings: `*[_type == "pageSettings"][0]{
    title,
    description,
    logo,
    contactInfo,
    socialMedia,
    seo
  }`,

  // Services
  allServices: `*[_type == "service"] | order(order asc){
    _id,
    name,
    slug,
    description,
    icon,
    image,
    features,
    pricing,
    category,
    featured
  }`,

  featuredServices: `*[_type == "service" && featured == true] | order(order asc){
    _id,
    name,
    slug,
    description,
    icon,
    image,
    features,
    pricing
  }`,

  serviceBySlug: `*[_type == "service" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    description,
    fullDescription,
    icon,
    image,
    features,
    pricing,
    duration,
    category
  }`,

  // Team Members
  allTeamMembers: `*[_type == "teamMember" && status == "active"] | order(order asc){
    _id,
    name,
    slug,
    title,
    credentials,
    photo,
    bio,
    specialties,
    experience,
    featured
  }`,

  teamMemberBySlug: `*[_type == "teamMember" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    title,
    credentials,
    photo,
    bio,
    specialties,
    education,
    experience,
    personalInterests,
    quote
  }`,

  // Blog Posts
  allBlogPosts: `*[_type == "blogPost" && status == "published"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author->{name, photo},
    categories,
    publishedAt,
    readingTime,
    featured
  }`,

  featuredBlogPosts: `*[_type == "blogPost" && status == "published" && featured == true] | order(publishedAt desc)[0..2]{
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author->{name, photo},
    categories,
    publishedAt,
    readingTime
  }`,

  blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    content,
    author->{name, title, photo, bio},
    categories,
    tags,
    publishedAt,
    readingTime,
    seo
  }`,

  // Testimonials
  featuredTestimonials: `*[_type == "testimonial" && approved == true && featured == true] | order(dateReceived desc){
    _id,
    clientName,
    petName,
    clientPhoto,
    review,
    rating,
    serviceReceived->{name},
    veterinarian->{name}
  }`,

  allTestimonials: `*[_type == "testimonial" && approved == true] | order(dateReceived desc){
    _id,
    clientName,
    petName,
    clientPhoto,
    review,
    rating,
    serviceReceived->{name},
    veterinarian->{name},
    dateReceived
  }`,

  // FAQs
  faqsByCategory: `*[_type == "faq"] | order(category asc, order asc){
    _id,
    question,
    answer,
    category,
    featured
  }`,

  featuredFaqs: `*[_type == "faq" && featured == true] | order(order asc){
    _id,
    question,
    answer,
    category
  }`,

  // Practice Info
  practiceInfo: `*[_type == "practiceInfo"][0]{
    name,
    hours,
    location,
    statistics,
    facilities,
    equipment,
    certifications,
    insuranceAccepted,
    paymentMethods,
    emergencyProtocol,
    missionStatement,
    values
  }`
}

// Helper functions for fetching data
export const sanityFetch = async (query: string, params: any = {}) => {
  return await client.fetch(query, params)
}