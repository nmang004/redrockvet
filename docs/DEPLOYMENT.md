# Deployment Guide

This document covers how to deploy the Pet X Veterinary website to various hosting platforms.

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers excellent performance.

### Prerequisites
- GitHub, GitLab, or Bitbucket repository
- Vercel account (free tier available)
- Sanity project set up

### Step-by-Step Deployment

1. **Push Code to Repository**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your Git provider
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   In Vercel dashboard, add these environment variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site

### Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
   ```

3. **SSL Certificate**
   - Automatically handled by Vercel
   - Certificate provisioning may take up to 24 hours

## 🌐 Netlify Deployment

### Manual Deployment

1. **Build the Project**
   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop your `out` folder

### Git-based Deployment

1. **Connect Repository**
   - New site from Git
   - Choose your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

2. **Environment Variables**
   Add in Site Settings > Environment Variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

## ☁️ AWS Amplify

### Console Deployment

1. **Create New App**
   - AWS Amplify Console
   - Choose "Host web app"
   - Connect repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

3. **Environment Variables**
   Add in App Settings > Environment Variables

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
      - NEXT_PUBLIC_SANITY_DATASET=production
      - SANITY_API_TOKEN=your-api-token
```

## 🔄 CI/CD Setup

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
        env:
          NEXT_PUBLIC_SANITY_PROJECT_ID: ${{ secrets.SANITY_PROJECT_ID }}
          NEXT_PUBLIC_SANITY_DATASET: ${{ secrets.SANITY_DATASET }}
          SANITY_API_TOKEN: ${{ secrets.SANITY_API_TOKEN }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🌍 Environment Variables Reference

### Required Variables
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### Optional Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your-facebook-pixel-id
```

## 🛠 Build Configuration

### Next.js Config
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For Docker deployments
  images: {
    domains: ['cdn.sanity.io'], // For Sanity images
  },
  // Add any other configuration needed
}

module.exports = nextConfig
```

## 📊 Performance Optimization

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Bundle Analyzer
```bash
npm install @next/bundle-analyzer
```

```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

## 🔍 Monitoring and Debugging

### Error Tracking with Sentry
```bash
npm install @sentry/nextjs
```

### Performance Monitoring
- Use Vercel Analytics for deployment insights
- Monitor Core Web Vitals
- Set up error boundaries for graceful failures

## 🚨 Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   - Check environment variables are set
   - Verify all dependencies are in package.json
   - Ensure Sanity credentials are correct

2. **Images Not Loading**
   - Add Sanity CDN domain to next.config.js
   - Verify image URLs are correct
   - Check CORS settings in Sanity

3. **404 Errors**
   - Ensure all routes are properly defined
   - Check file naming conventions
   - Verify dynamic routes are configured

4. **Slow Loading**
   - Enable compression
   - Optimize images
   - Use proper caching headers

### Debug Commands
```bash
# Local build test
npm run build && npm start

# Analyze bundle size
ANALYZE=true npm run build

# Check for TypeScript errors
npm run type-check
```

## 📝 Deployment Checklist

Before deploying to production:

- [ ] All environment variables configured
- [ ] Sanity project set up and schemas deployed
- [ ] DNS records configured for custom domain
- [ ] SSL certificate provisioned
- [ ] Error tracking configured
- [ ] Analytics set up
- [ ] Performance monitoring enabled
- [ ] Backup strategy in place
- [ ] Team has access to deployment platform
- [ ] Documentation updated

## 🔒 Security Considerations

- Never commit API tokens to version control
- Use environment variables for all sensitive data
- Enable HTTPS/SSL for all deployments
- Configure proper CORS settings
- Regular security updates for dependencies
- Use Dependabot or similar for automated updates

## 📞 Support

For deployment issues:
1. Check platform-specific documentation
2. Verify environment variables
3. Test build process locally
4. Contact hosting platform support if needed