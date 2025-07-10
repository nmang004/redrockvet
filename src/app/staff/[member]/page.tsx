import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { staffMembers, getStaffMemberBySlug, getAllStaffSlugs } from "@/data/staff";
import { ArrowLeft, Award, GraduationCap, Heart, Users, Phone, Calendar } from "lucide-react";
import StaffStructuredData from "@/components/seo/StaffStructuredData";

export async function generateStaticParams() {
  const slugs = getAllStaffSlugs();
  return slugs.map((slug) => ({
    member: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { member: string };
}): Promise<Metadata> {
  const member = getStaffMemberBySlug(params.member);
  
  if (!member) {
    return {
      title: "Staff Member Not Found | Red Rock Veterinary Health",
    };
  }

  return {
    title: `${member.name} | Red Rock Veterinary Health`,
    description: `Learn more about ${member.name}, ${member.title} at Red Rock Veterinary Health. ${member.bio.slice(0, 160)}...`,
    keywords: `${member.name}, ${member.title}, veterinary team, Red Rock Veterinary Health, Colorado Springs, ${member.specialties.join(", ")}`,
    openGraph: {
      title: `${member.name} | Red Rock Veterinary Health`,
      description: `Learn more about ${member.name}, ${member.title} at Red Rock Veterinary Health.`,
      images: [
        {
          url: member.image,
          width: 1200,
          height: 630,
          alt: `${member.name} - ${member.title}`,
        },
      ],
    },
  };
}

export default function StaffMemberPage({
  params,
}: {
  params: { member: string };
}) {
  const member = getStaffMemberBySlug(params.member);
  
  if (!member) {
    notFound();
  }

  const otherMembers = staffMembers
    .filter((m) => m.id !== member.id)
    .slice(0, 3);

  return (
    <>
      <StaffStructuredData staffMember={member} />
      <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/staff" className="text-muted-foreground hover:text-foreground">
              Staff
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{member.name}</span>
          </div>
        </div>
      </nav>

      {/* Staff Member Profile */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image and Quick Info */}
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Quick Info
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{member.credentials}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{member.pronouns}</span>
                      </div>
                      {member.education && (
                        <div className="flex items-center justify-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span className="text-foreground text-sm">{member.education}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <Button variant="ghost" size="sm" className="mb-4" asChild>
                  <Link href="/staff">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Staff
                  </Link>
                </Button>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {member.name}
                </h1>
                <p className="text-2xl text-primary font-semibold mb-6">
                  {member.title}
                </p>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Memberships */}
              {member.professionalMemberships && member.professionalMemberships.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Professional Memberships
                  </h3>
                  <ul className="space-y-2">
                    {member.professionalMemberships.map((membership, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-foreground">{membership}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Personal Interests */}
              {member.personalInterests && (
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Personal Interests
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.personalInterests}
                  </p>
                </div>
              )}

              {/* Call to Action */}
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Ready to meet {member.name.split(' ')[0]}?
                  </h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Schedule an appointment today and experience the exceptional care 
                    that our dedicated team provides.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="secondary" size="lg" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="secondary" size="lg" className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Meet Other Team Members
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {otherMembers.map((otherMember) => (
              <Card key={otherMember.id} className="group hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                    <Image
                      src={otherMember.image}
                      alt={otherMember.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {otherMember.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {otherMember.title}
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/staff/${otherMember.slug}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}