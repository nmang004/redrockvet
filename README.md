# Red Rock Veterinary Health Website

A modern, responsive veterinary practice website built with Next.js 15, TypeScript, Tailwind CSS v4, and Sanity CMS. Originally based on the Pet X template, this project has been completely rebranded for Red Rock Veterinary Health with custom design, comprehensive service pages, and full content management capabilities.

## 🌟 Features

- **Red Rock Branding**: Professional veterinary practice design with deep red primary (#B31B1B), dark gray secondary (#2C2C2C), and light gray background (#F5F5F5)
- **Comprehensive Service Pages**: Dedicated pages for all 6 veterinary services with detailed information and pricing
- **Responsive Layout**: Mobile-first design optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion animations including scroll-triggered effects, hover interactions, and counter animations
- **Content Management**: Full Sanity CMS integration with custom schemas for services, team members, blog posts, testimonials, and more
- **SEO Optimized**: Proper meta tags, Open Graph support, and semantic HTML structure for each service page
- **Accessibility**: WCAG 2.1 AA compliant design with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images, code splitting, and fast loading times with Next.js 15
- **TypeScript**: Fully typed for better development experience and fewer bugs

## 🏥 Service Pages

The website includes comprehensive service pages for all veterinary offerings:

1. **Wellness Exams** (`/services/wellness`)
   - Annual checkups and health screenings
   - Vaccination programs
   - Nutritional counseling
   - Starting from $89

2. **Surgery Services** (`/services/surgery`)
   - Spay/neuter procedures
   - Soft tissue and orthopedic surgery
   - Emergency surgical procedures
   - Starting from $299

3. **Dental Care** (`/services/dental`)
   - Professional dental cleaning
   - Tooth extractions and oral surgery
   - Digital dental X-rays
   - Starting from $149

4. **Emergency Care** (`/services/emergency`)
   - 24/7 emergency services
   - Trauma and critical care
   - Emergency surgery capabilities
   - Starting from $199

5. **Vaccinations** (`/services/vaccinations`)
   - Core and lifestyle vaccines
   - Customized vaccination schedules
   - Titer testing available
   - Starting from $45

6. **Diagnostics** (`/services/diagnostics`)
   - Digital X-rays and ultrasound
   - Complete blood work panels
   - Urinalysis and lab testing
   - Starting from $125

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- A Sanity.io account (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nmang004/redrockvet.git
   cd redrockvet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Sanity configuration:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=8tgbdisl
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the website and CMS**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Service pages
│   │   ├── wellness/      # Wellness exam service
│   │   ├── surgery/       # Surgery services
│   │   ├── dental/        # Dental care
│   │   ├── emergency/     # Emergency care
│   │   ├── vaccinations/  # Vaccination services
│   │   └── diagnostics/   # Diagnostic services
│   ├── studio/            # Sanity Studio
│   ├── team/              # Team page
│   ├── globals.css        # Global styles with Red Rock colors
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── layout/           # Layout components (header, footer)
│   ├── sections/         # Page sections (hero, services, etc.)
│   ├── ui/               # Shadcn/ui components
│   └── forms/            # Form components
├── sanity/               # Sanity CMS configuration
│   ├── schemas/          # Content schemas
│   └── client.ts         # Sanity client setup
└── lib/                  # Utility functions
```

## 🎨 Design System

### Red Rock Brand Colors (OKLCH Color Space)
- **Primary**: `oklch(0.45 0.15 15)` - Deep Red (#B31B1B)
- **Secondary**: `oklch(0.2 0.005 0)` - Dark Gray (#2C2C2C)
- **Background**: `oklch(0.97 0.005 0)` - Light Gray (#F5F5F5)
- **Accent**: `oklch(0.95 0.005 0)` - Off White (#F0F0F0)
- **Muted**: `oklch(0.55 0.005 0)` - Medium Gray (#7A7A7A)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components Architecture
- **Server Components**: For SEO metadata and static content
- **Client Components**: For interactive elements with Framer Motion
- **Shadcn/ui**: For consistent UI components and accessibility
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (currently disabled during builds for deployment)

### Architecture Patterns

#### Service Pages Structure
Each service page follows this pattern:
- **page.tsx**: Server component with metadata export for SEO
- **[service]-content.tsx**: Client component with Framer Motion animations
- **Separation of Concerns**: Server-side rendering for SEO, client-side for interactivity

#### Component Guidelines
1. **Server Components**: Use for static content, metadata, and data fetching
2. **Client Components**: Use for interactive elements, animations, and state management
3. **Shared UI**: Leverage Shadcn/ui for consistent design patterns

### Adding New Service Pages

1. **Create Service Directory**
   ```bash
   mkdir src/app/services/[service-name]
   ```

2. **Add Server Component** (`page.tsx`)
   ```tsx
   import { Metadata } from "next";
   import ServiceContent from "./service-content";

   export const metadata: Metadata = {
     title: "Service Name - Red Rock Veterinary Health",
     description: "Service description for SEO",
   };

   export default function ServicePage() {
     return <ServiceContent />;
   }
   ```

3. **Add Client Component** (`service-content.tsx`)
   ```tsx
   "use client";
   
   import { motion } from "framer-motion";
   // Component implementation with animations
   ```

### Working with Sanity CMS

1. **Adding New Schemas**: Create in `src/sanity/schemas/` and export from `index.ts`
2. **Querying Data**: Use pre-built queries in `src/sanity/client.ts`
3. **Images**: Use `urlFor()` helper for image transformations
4. **Red Rock Logo**: Stored as `/red-rock-logo.jpg` with proper optimization

### Animation Guidelines

- **Framer Motion**: Use for all animations and interactions
- **Consistent Timing**: 0.3s for quick interactions, 0.6s for page elements
- **Scroll Triggers**: Implement `whileInView` for scroll-triggered animations
- **Performance**: Use `viewport={{ once: true }}` to prevent re-triggering

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Set Environment Variables**
   - Add Sanity configuration in Vercel dashboard
   - Ensure all required variables are set

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Build Configuration

The project includes optimized build settings:
- ESLint warnings disabled during builds for faster deployment
- TypeScript strict mode enabled for development
- Optimized image handling with Next.js Image component
- Static generation for service pages

## 📧 Contact Information

- **Website**: [https://redrockvet.com](https://redrockvet.com)
- **Emergency Line**: (555) 123-4567
- **Email**: info@redrockvet.com

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved by Red Rock Veterinary Health.

---

Built with ❤️ for Red Rock Veterinary Health using Next.js 15, TypeScript, Tailwind CSS v4, and Sanity CMS.