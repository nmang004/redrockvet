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
  // Temporarily commented out Sanity CMS integration
  // const [teamMembers, setTeamMembers] = useState<TeamMember[] | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchTeamMembers = async () => {
  //     try {
  //       const query = `*[_type == "teamMember"] | order(order asc, name asc) {
  //         _id,
  //         name,
  //         title,
  //         credentials,
  //         bio,
  //         photo {
  //           "url": asset->url,
  //           "alt": asset->altText
  //         },
  //         specialties,
  //         experience
  //       }`;
  //       
  //       console.log('Fetching team members with query:', query);
  //       const data = await client.fetch(query);
  //       console.log('Team members data received:', data);
  //       setTeamMembers(Array.isArray(data) ? data : []);
  //     } catch (error) {
  //       console.error('Error fetching team members:', error);
  //       setTeamMembers([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTeamMembers();
  // }, []);

  // Temporarily commented out loading state
  // if (loading) {
  //   return (
  //     <div className="py-16">
  //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  //         <div className="text-center">
  //           <p className="text-muted-foreground">Loading team members...</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

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
        
        {/* Static team member content from Red Rock Veterinary Health */}
        <div className="space-y-12">
          {/* Dr. Robbie Unsell */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Dr. Robbie Unsell</h3>
              <p className="text-primary font-semibold mb-1">DVM</p>
              <p className="text-primary font-semibold italic mb-1">Owner & Founder</p>
              <p className="text-sm text-muted-foreground italic">(He/Him)</p>
            </div>
            <div className="prose max-w-none">
              <p className="mb-4">Dr. Robbie Unsell is a dedicated veterinarian who brings a unique blend of experience, compassion, and expertise to Red Rock Veterinary Health. After graduating from Colorado State University's College of Veterinary Medicine and Biomedical Sciences in 2021, Dr. Unsell has been committed to providing exceptional care for pets and their families.</p>
              <p className="mb-4">His journey into veterinary medicine began with a deep love for animals and a desire to make a meaningful difference in their lives. Throughout his education and early career, Dr. Unsell developed a particular interest in preventive care, surgery, and building strong relationships with pet owners to ensure the best possible outcomes for their beloved companions.</p>
              <p className="mb-4">As the founder of Red Rock Veterinary Health, Dr. Unsell is passionate about creating a practice that prioritizes both medical excellence and compassionate care. His approach combines cutting-edge veterinary techniques with a warm, understanding demeanor that puts both pets and their owners at ease.</p>
              <p>When he's not caring for his four-legged patients, Dr. Unsell enjoys exploring the beautiful Colorado outdoors, spending time with his own pets, and continuing his education to stay current with the latest advances in veterinary medicine.</p>
            </div>
          </div>

          {/* Lauren Anderson */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Lauren Anderson</h3>
              <p className="text-primary font-semibold mb-1">Hospital Manager & Fear Free Director</p>
              <p className="text-sm text-muted-foreground italic">(She/Her)</p>
            </div>
            <div className="prose max-w-none">
              <p className="mb-4">Lauren Anderson brings exceptional leadership and organizational skills to Red Rock Veterinary Health as our Hospital Manager and Fear Free Director. With extensive experience in veterinary practice management, Lauren ensures that our hospital runs smoothly while maintaining the highest standards of patient care and client service.</p>
              <p className="mb-4">As our Fear Free Director, Lauren is specially trained in creating low-stress environments for pets during their veterinary visits. She understands that many animals experience anxiety during medical appointments, and she works diligently to implement Fear Free techniques that help reduce stress and create positive experiences for both pets and their owners.</p>
              <p className="mb-4">Lauren's background includes comprehensive training in practice management, team leadership, and Fear Free handling techniques. Her dedication to continuing education ensures that our team stays current with the latest best practices in veterinary care and animal handling.</p>
              <p>Outside of work, Lauren enjoys spending time with her own pets and exploring the natural beauty of Colorado Springs. Her passion for animal welfare extends beyond the clinic, and she's actively involved in local animal rescue efforts.</p>
            </div>
          </div>

          {/* Angela Payne Lebron */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Angela Payne Lebron</h3>
              <p className="text-primary font-semibold mb-1">Hospital Administrative Director</p>
              <p className="text-sm text-muted-foreground italic">(She/Her)</p>
            </div>
            <div className="prose max-w-none">
              <p className="mb-4">Angela Payne Lebron serves as our Hospital Administrative Director, bringing years of experience in healthcare administration and client relations to Red Rock Veterinary Health. Her expertise in managing the administrative aspects of veterinary care ensures that our clients receive seamless service from scheduling through follow-up care.</p>
              <p className="mb-4">Angela's role encompasses overseeing client communications, managing appointments, coordinating care between departments, and ensuring that all administrative processes support our commitment to exceptional veterinary care. Her attention to detail and dedication to client satisfaction make her an invaluable member of our team.</p>
              <p className="mb-4">With a background in healthcare administration and a genuine love for animals, Angela understands the importance of clear communication and compassionate service. She works closely with pet owners to address their concerns, answer questions, and ensure that every visit to our clinic is as smooth and stress-free as possible.</p>
              <p>Angela is passionate about animal welfare and enjoys volunteering with local animal organizations. When she's not at the clinic, she loves spending time with her family and exploring the many outdoor activities that Colorado Springs has to offer.</p>
            </div>
          </div>

          {/* Maggie Kohn */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Maggie Kohn</h3>
              <p className="text-primary font-semibold mb-1">Lead Surgery & Anesthesia Technician</p>
              <p className="text-sm text-muted-foreground italic">(She/Her)</p>
            </div>
            <div className="prose max-w-none">
              <p className="mb-4">Maggie Kohn is our highly skilled Lead Surgery & Anesthesia Technician, bringing specialized expertise in surgical support and anesthesia monitoring to Red Rock Veterinary Health. Her extensive training and experience ensure that our surgical patients receive the highest level of care throughout their procedures.</p>
              <p className="mb-4">As our lead surgical technician, Maggie is responsible for preparing surgical suites, assisting during procedures, and monitoring patients under anesthesia. Her keen attention to detail and deep understanding of surgical protocols contribute significantly to the success of our surgical outcomes.</p>
              <p className="mb-4">Maggie's expertise extends beyond the operating room. She plays a crucial role in educating pet owners about pre and post-surgical care, ensuring that pets have the best possible recovery experience. Her compassionate approach helps ease the concerns of pet owners during what can be a stressful time.</p>
              <p>When she's not in the surgical suite, Maggie enjoys continuing her education in veterinary technology and spending time with her own pets. Her commitment to professional development ensures that she stays current with the latest advances in veterinary surgical techniques and anesthesia protocols.</p>
            </div>
          </div>

          {/* Courtney Slice */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Courtney Slice</h3>
              <p className="text-primary font-semibold mb-1">Registered Veterinary Technician</p>
              <p className="text-sm text-muted-foreground italic">(She/Her)</p>
            </div>
            <div className="prose max-w-none">
              <p className="mb-4">Courtney Slice is a dedicated Registered Veterinary Technician who brings enthusiasm, skill, and compassionate care to every patient interaction at Red Rock Veterinary Health. Her comprehensive training in veterinary technology enables her to provide excellent support in all aspects of animal care.</p>
              <p className="mb-4">As an RVT, Courtney's responsibilities include assisting with examinations, administering medications, collecting samples for laboratory analysis, and providing nursing care to hospitalized patients. Her gentle approach and patience with animals make her particularly effective at helping anxious pets feel more comfortable during their visits.</p>
              <p className="mb-4">Courtney is passionate about client education and takes pride in helping pet owners understand their pets' health needs. She enjoys explaining treatment plans, demonstrating home care techniques, and answering questions to ensure that pet owners feel confident in caring for their beloved companions.</p>
              <p>Outside of work, Courtney is an avid animal lover who enjoys hiking with her dogs and volunteering at local animal shelters. Her commitment to animal welfare and her genuine care for both pets and their families make her a valued member of our team.</p>
            </div>
          </div>

          {/* Liz Fisher */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Liz Fisher</h3>
              <p className="text-primary font-semibold mb-1">Registered Veterinary Technician & Behavioral Trainer</p>
              <p className="text-sm text-muted-foreground italic">(She/Her)</p>
            </div>
            <div className="prose max-w-none">
              <p className="mb-4">Liz Fisher combines her expertise as a Registered Veterinary Technician with specialized training in animal behavior, making her a unique and valuable asset to Red Rock Veterinary Health. Her dual specialization allows her to address both the medical and behavioral needs of our patients.</p>
              <p className="mb-4">As an RVT, Liz provides comprehensive veterinary care including patient assessment, treatment assistance, and client education. Her additional training in animal behavior enables her to help pet owners address behavioral concerns and develop training plans that improve the quality of life for both pets and their families.</p>
              <p className="mb-4">Liz is particularly skilled at working with anxious or fearful animals, using positive reinforcement techniques and behavior modification strategies to help pets feel more comfortable in the veterinary setting. Her expertise in Fear Free handling techniques complements our hospital's commitment to reducing stress for all our patients.</p>
              <p>When she's not working with patients, Liz enjoys continuing her education in veterinary behavior and training techniques. She's passionate about the human-animal bond and believes that addressing behavioral issues is just as important as treating medical conditions for overall pet wellness.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}