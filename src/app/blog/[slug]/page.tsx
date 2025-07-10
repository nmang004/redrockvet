import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, User, Tag, Phone, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found | Red Rock Veterinary Health",
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.focusKeywords.join(", "),
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('![IMAGE]')) {
        const imageMatch = paragraph.match(/!\[IMAGE\]\(([^|]+)\|([^)]+)\)/);
        if (imageMatch) {
          const [, src, alt] = imageMatch;
          return (
            <div key={index} className="my-8">
              <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2 italic">
                {alt}
              </p>
            </div>
          );
        }
      }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium truncate">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={post.featuredImage}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <Card className="mt-12 bg-primary text-primary-foreground border-0">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Experience Exceptional Veterinary Care?
                </h3>
                <p className="text-lg mb-6 text-primary-foreground/90">
                  Contact Red Rock Veterinary Health today to schedule an appointment 
                  or learn more about our comprehensive pet care services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/services" className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
}