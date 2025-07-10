import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Pet Care Blog - Red Rock Veterinary Health",
  description: "Expert advice on pet health, nutrition, behavior, and care from our experienced veterinary team at Red Rock Veterinary Health.",
  keywords: "pet care blog, veterinary advice, pet health tips, Colorado Springs veterinarian, pet care tips"
};

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Tag className="w-4 h-4 mr-2" />
              Expert Veterinary Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pet Care Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert advice, tips, and insights from our veterinary team to help you 
              keep your pets healthy and happy.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {blogPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-card border-0 shadow-lg cursor-pointer">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <Image
                          src={post.featuredImage}
                          alt={post.imageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.slice(0, 2).map((category, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readingTime} min</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-primary font-medium text-sm group-hover:text-primary/80 transition-colors">
                            Read More
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Blog posts will be added soon. Stay tuned for expert veterinary advice!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Have Questions About Your Pet's Health?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8">
            Our experienced veterinary team is here to help. Contact us today to schedule 
            a consultation or learn more about our comprehensive pet care services.
          </p>
          <Button size="lg" className="text-lg px-8 py-3 shadow-glow">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Appointment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}