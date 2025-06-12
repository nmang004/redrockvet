# Pet X Veterinary Website

A modern, responsive veterinary practice website built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS. This project replicates the Pet X Webflow template design with enhanced functionality and a complete content management system.

## 🌟 Features

- **Modern Design**: Professional veterinary practice aesthetic with warm orange primary (#FF6B35), navy secondary (#1A1A2E), and cream accent (#F7F5F3) colors
- **Responsive Layout**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Framer Motion animations including scroll-triggered effects, hover interactions, and counter animations
- **Content Management**: Full Sanity CMS integration with custom schemas for services, team members, blog posts, testimonials, and more
- **SEO Optimized**: Proper meta tags, Open Graph support, and semantic HTML structure
- **Accessibility**: WCAG 2.1 AA compliant design with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images, code splitting, and fast loading times
- **TypeScript**: Fully typed for better development experience and fewer bugs

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- A Sanity.io account (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pet-x-veterinary-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your Sanity configuration:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

4. **Set up Sanity CMS**
   - Create a new project at [sanity.io](https://www.sanity.io/)
   - Copy your project ID and add it to `.env.local`
   - Generate an API token with write permissions
   - Run the development server to access the studio

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the website and CMS**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   ├── studio/            # Sanity Studio
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
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

### Colors
- **Primary**: #FF6B35 (Warm Orange)
- **Secondary**: #1A1A2E (Navy)
- **Accent**: #F7F5F3 (Cream)
- **Background**: Cream (#F7F5F3)
- **Text**: Navy (#1A1A2E)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Built with Shadcn/ui for consistency and accessibility
- Custom utility classes for gradients and effects
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. **UI Components**: Use Shadcn/ui CLI
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Custom Components**: Create in appropriate directory under `src/components/`

3. **Page Sections**: Add to `src/components/sections/` and follow existing patterns

### Working with Sanity CMS

1. **Adding New Schemas**: Create in `src/sanity/schemas/` and export from `index.ts`
2. **Querying Data**: Use pre-built queries in `src/sanity/client.ts`
3. **Images**: Use `urlFor()` helper for image transformations

### Animation Guidelines

- Use Framer Motion for all animations
- Follow consistent timing: 0.3s for quick interactions, 0.6s for page elements
- Implement `whileInView` for scroll-triggered animations
- Use `viewport={{ once: true }}` to prevent re-triggering

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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
