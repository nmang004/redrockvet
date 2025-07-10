import { StaffMember } from "@/data/staff";

interface StaffStructuredDataProps {
  staffMember: StaffMember;
}

export default function StaffStructuredData({ staffMember }: StaffStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: staffMember.name,
    jobTitle: staffMember.title,
    image: `https://redrockvet.com${staffMember.image}`,
    description: staffMember.bio,
    knowsAbout: staffMember.specialties,
    worksFor: {
      "@type": "VeterinaryClinic",
      name: "Red Rock Veterinary Health",
      url: "https://redrockvet.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colorado Springs",
        addressRegion: "CO",
        addressCountry: "US"
      }
    },
    url: `https://redrockvet.com/staff/${staffMember.slug}`,
    sameAs: [],
    ...(staffMember.education && {
      alumniOf: {
        "@type": "EducationalOrganization",
        name: staffMember.education
      }
    }),
    ...(staffMember.professionalMemberships && {
      memberOf: staffMember.professionalMemberships.map(membership => ({
        "@type": "Organization",
        name: membership
      }))
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}