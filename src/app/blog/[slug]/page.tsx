import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { type ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, User, Tag, Phone, BookOpen } from "lucide-react";

const SITE_URL = "https://redrockvet.com";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Red Rock Veterinary Health",
    };
  }

  const canonical = `/blog/${post.slug}`;

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.focusKeywords.join(", "),
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: "article",
      url: canonical,
      publishedTime: post.publishedAt,
      authors: [post.author],
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

// Inline formatting: **bold** and [label](href) links (internal -> Link, external/tel -> <a>).
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];

    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>
      );
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        if (href.startsWith("/")) {
          nodes.push(
            <Link
              key={`${keyPrefix}-l-${i}`}
              href={href}
              className="text-primary hover:underline font-medium"
            >
              {label}
            </Link>
          );
        } else {
          const external = href.startsWith("http");
          nodes.push(
            <a
              key={`${keyPrefix}-l-${i}`}
              href={href}
              className="text-primary hover:underline font-medium"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </a>
          );
        }
      } else {
        nodes.push(token);
      }
    }

    lastIndex = regex.lastIndex;
    i++;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

// Block-level renderer. Backward-compatible with the existing markdown subset
// (## headings, ![IMAGE](src|alt), paragraphs) and adds ### subheadings,
// bullet/numbered lists, and quick-take / key-takeaway / safety callout boxes.
function renderContent(content: string): ReactNode[] {
  return content.split("\n\n").map((rawBlock, index) => {
    const block = rawBlock.trim();
    const key = `block-${index}`;

    if (block.startsWith("### ")) {
      return (
        <h3 key={key} className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          {renderInline(block.replace(/^###\s+/, ""), key)}
        </h3>
      );
    }

    if (block.startsWith("## ")) {
      return (
        <h2 key={key} className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
          {renderInline(block.replace(/^##\s+/, ""), key)}
        </h2>
      );
    }

    if (block.startsWith("![IMAGE]")) {
      const imageMatch = block.match(/!\[IMAGE\]\(([^|]+)\|([^)]+)\)/);
      if (imageMatch) {
        const [, src, alt] = imageMatch;
        return (
          <div key={key} className="my-8">
            <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2 italic">{alt}</p>
          </div>
        );
      }
    }

    if (block.startsWith("[[QUICKTAKE]]")) {
      const lines = block.split("\n");
      const title = lines[0].replace("[[QUICKTAKE]]", "").trim();
      const bullets = lines
        .slice(1)
        .filter((l) => l.trim().startsWith("- "))
        .map((l) => l.trim().replace(/^-\s+/, ""));
      return (
        <div key={key} className="my-8 rounded-r-lg border-l-4 border-primary bg-primary/5 p-6">
          {title && (
            <p className="text-sm font-bold uppercase tracking-wide text-primary mb-3">
              {title}
            </p>
          )}
          <ul className="list-disc pl-5 space-y-2 text-foreground">
            {bullets.map((b, bi) => (
              <li key={`${key}-qt-${bi}`} className="leading-relaxed">
                {renderInline(b, `${key}-qt-${bi}`)}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (block.startsWith("[[KEYTAKEAWAY]]")) {
      const text = block.replace("[[KEYTAKEAWAY]]", "").trim();
      return (
        <div key={key} className="my-6 rounded-r-lg border-l-4 border-primary bg-accent p-4">
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-1">
            Key Takeaway
          </p>
          <p className="text-foreground leading-relaxed">{renderInline(text, key)}</p>
        </div>
      );
    }

    if (block.startsWith("[[SAFETY]]")) {
      const text = block.replace("[[SAFETY]]", "").trim();
      return (
        <div key={key} className="my-6 rounded-r-lg border-l-4 border-amber-500 bg-amber-50 p-4">
          <p className="text-sm font-bold uppercase tracking-wide text-amber-700 mb-1">
            ⚠ Safety
          </p>
          <p className="text-amber-900 leading-relaxed">{renderInline(text, key)}</p>
        </div>
      );
    }

    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);

    if (lines.length > 0 && lines.every((l) => l.startsWith("- "))) {
      return (
        <ul key={key} className="list-disc pl-6 space-y-2 mb-4 text-muted-foreground">
          {lines.map((l, li) => (
            <li key={`${key}-li-${li}`} className="leading-relaxed">
              {renderInline(l.replace(/^-\s+/, ""), `${key}-li-${li}`)}
            </li>
          ))}
        </ul>
      );
    }

    if (lines.length > 0 && lines.every((l) => /^\d+\.\s/.test(l))) {
      return (
        <ol key={key} className="list-decimal pl-6 space-y-2 mb-4 text-muted-foreground">
          {lines.map((l, li) => (
            <li key={`${key}-oli-${li}`} className="leading-relaxed">
              {renderInline(l.replace(/^\d+\.\s+/, ""), `${key}-oli-${li}`)}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <p key={key} className="text-muted-foreground leading-relaxed mb-4">
        {renderInline(block, key)}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.metaDescription,
    image: `${SITE_URL}${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Red Rock Veterinary Health",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/RRHVLogo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={articleSchema} />
      {post.faqJsonLd && <JsonLd raw={post.faqJsonLd} />}

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
            {renderContent(post.content)}
          </div>

          {/* FAQ */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq) => (
                  <details key={faq.question} className="group bg-accent rounded-lg">
                    <summary className="flex justify-between items-center gap-4 cursor-pointer p-6 font-semibold text-foreground hover:bg-accent/80 rounded-lg">
                      {faq.question}
                      <span className="text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

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
