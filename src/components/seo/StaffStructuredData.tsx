import { StaffMember } from "@/data/staff";

interface StaffStructuredDataProps {
  staffMember: StaffMember;
}

export default function StaffStructuredData({ staffMember }: StaffStructuredDataProps) {
  const redRock = {
    "@type": "VeterinaryClinic",
    name: "Red Rock Veterinary Health",
    url: "https://redrockvet.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colorado Springs",
      addressRegion: "CO",
      addressCountry: "US"
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: staffMember.name,
    jobTitle: staffMember.title,
    image: `https://redrockvet.com${staffMember.image}`,
    description: staffMember.bio,
    knowsAbout: staffMember.specialties,
    // Employed team members work for Red Rock; visiting specialist partners are
    // independent — they work for their own organization and are only affiliated
    // with Red Rock, where they provide care on-site.
    ...(staffMember.isPartner
      ? {
          ...(staffMember.partnerOrg && {
            worksFor: {
              "@type": "Organization",
              name: staffMember.partnerOrg,
              ...(staffMember.partnerOrgUrl && { url: staffMember.partnerOrgUrl })
            }
          }),
          affiliation: redRock
        }
      : { worksFor: redRock }),
    url: `https://redrockvet.com/staff/${staffMember.slug}`,
    sameAs: staffMember.partnerOrgUrl ? [staffMember.partnerOrgUrl] : [],
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