"use client";

import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  _id: string;
  name: string;
  title: string;
  credentials?: string;
  bio?: any;
  photo?: {
    url: string;
    alt?: string;
  };
  email?: string;
  phone?: string;
  specialties?: string[];
  experience?: number;
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const query = `*[_type == "teamMember"] | order(order asc, name asc) {
          _id,
          name,
          title,
          credentials,
          bio,
          photo {
            "url": asset->url,
            "alt": asset->altText
          },
          specialties,
          experience
        }`;
        
        console.log('Fetching team members with query:', query);
        const data = await client.fetch(query);
        console.log('Team members data received:', data);
        setTeamMembers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching team members:', error);
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading team members...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our passionate team of veterinary professionals is dedicated to providing 
            the highest quality care for your beloved pets.
          </p>
        </div>
        
        {!teamMembers || teamMembers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Team member profiles will be populated from Sanity CMS when content is added.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    {member.photo?.url && (
                      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                        <Image
                          src={member.photo.url}
                          alt={member.photo.alt || member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-1">{member.title}</p>
                      {member.credentials && (
                        <p className="text-sm text-muted-foreground mb-4">{member.credentials}</p>
                      )}
                      
                      {member.bio && Array.isArray(member.bio) && member.bio.length > 0 && (
                        <div className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {member.bio.map((block: any, idx: number) => {
                            if (block._type === 'block' && block.children) {
                              return (
                                <p key={idx} className="mb-2">
                                  {block.children.map((child: any, childIdx: number) => child.text).join('')}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </div>
                      )}
                      
                      {member.specialties && member.specialties.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-sm mb-2">Specialties:</h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {member.specialties.map((spec, idx) => (
                              <span
                                key={idx}
                                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {member.experience && (
                        <p className="text-xs text-muted-foreground mb-4">
                          {member.experience} years of experience
                        </p>
                      )}
                      
                      <div className="space-y-1">
                        {member.email && (
                          <p className="text-xs text-muted-foreground">
                            <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                              {member.email}
                            </a>
                          </p>
                        )}
                        {member.phone && (
                          <p className="text-xs text-muted-foreground">
                            <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                              {member.phone}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}