import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Care Blog - Pet X Veterinary",
  description: "Expert advice on pet health, nutrition, behavior, and care from our experienced veterinary team.",
};

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pet Care Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert advice, tips, and insights from our veterinary team to help you 
            keep your pets healthy and happy.
          </p>
        </div>
        
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Blog posts will be populated from Sanity CMS when content is added.
          </p>
        </div>
      </div>
    </div>
  );
}