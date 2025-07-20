export interface StaffMember {
  id: string;
  name: string;
  title: string;
  credentials: string;
  pronouns: string;
  image: string;
  imageAlt: string;
  slug: string;
  bio: string;
  education?: string;
  specialties: string[];
  professionalMemberships?: string[];
  personalInterests?: string;
  certifications?: string[];
}

export const staffMembers: StaffMember[] = [
  {
    id: "dr-robbie-unsell",
    name: "Dr. Robbie Unsell",
    title: "Owner & Founder",
    credentials: "BVetMed MRCVS Elite FFCP-V",
    pronouns: "He/Him",
    image: "/staff/rob.jpg",
    imageAlt: "Dr. Robbie Unsell, Owner & Founder of Red Rock Veterinary Health",
    slug: "dr-robbie-unsell",
    bio: "Dr. Robbie Unsell is the passionate owner and founder of Red Rock Veterinary Health, bringing exceptional veterinary expertise and compassionate care to Colorado Springs. After graduating from the prestigious Royal Veterinary College in London in 2013, Dr. Unsell has dedicated his career to advancing veterinary medicine and building strong relationships with pet families.",
    education: "Royal Veterinary College, London (2013)",
    specialties: [
      "Internal Medicine",
      "Dental Surgery", 
      "Allergic Skin Disease",
      "Urgent Care"
    ],
    professionalMemberships: [
      "Colorado Veterinary Medical Association",
      "American Veterinary Medical Association", 
      "Independent Veterinary Practitioners Association",
      "American Association of Feline Practitioners"
    ],
    personalInterests: "When not caring for his four-legged patients, Dr. Unsell enjoys exploring the beautiful Colorado outdoors, spending time with his own pets, and continuing his education to stay current with the latest advances in veterinary medicine.",
    certifications: ["fearfreeelite", "ivpa", "rcvs", "catfriendly"]
  },
  {
    id: "lauren-anderson",
    name: "Lauren Anderson",
    title: "Hospital Manager & Fear Free Director",
    credentials: "Dip.ABST Elite FFCP-VT",
    pronouns: "She/They",
    image: "/staff/lauren.jpg",
    imageAlt: "Lauren Anderson, Hospital Manager & Fear Free Director",
    slug: "lauren-anderson",
    bio: "Lauren Anderson brings exceptional leadership and organizational expertise to Red Rock Veterinary Health as our Hospital Manager and Fear Free Director. With a Master's Level Diploma in Animal Behavior Science and Technology, Lauren ensures our hospital operates at the highest standards while creating stress-free environments for all our patients.",
    education: "Master's Level Diploma in Animal Behavior Science and Technology",
    specialties: [
      "Reactivity Management",
      "Cooperative Care",
      "Animal Behavior",
      "Fear Free Techniques",
      "Practice Management"
    ],
    personalInterests: "Outside of work, Lauren enjoys spending time with her own pets and exploring the natural beauty of Colorado Springs. Her passion for animal welfare extends beyond the clinic, and she's actively involved in local animal rescue efforts.",
    certifications: ["fearfreeelite"]
  },
  {
    id: "angela-payne-lebron",
    name: "Angela Payne Lebron",
    title: "Hospital Administrative Director",
    credentials: "FFCP",
    pronouns: "She/Her",
    image: "/red-rock-logo.png",
    imageAlt: "Angela Payne Lebron, Hospital Administrative Director",
    slug: "angela-payne-lebron",
    bio: "Angela Payne Lebron serves as our Hospital Administrative Director, bringing years of experience in healthcare administration and client relations to Red Rock Veterinary Health. With studies in both business and English, Angela ensures seamless administrative operations and exceptional client experiences.",
    education: "Business and English studies",
    specialties: [
      "Client Relations",
      "Healthcare Administration",
      "Administrative Operations",
      "Fear Free Professional Certification"
    ],
    personalInterests: "Angela is passionate about animal welfare and enjoys volunteering with local animal organizations. When she's not at the clinic, she loves spending time with her family and exploring the many outdoor activities that Colorado Springs has to offer.",
    certifications: ["fearfree"]
  },
  {
    id: "maggie-kohn",
    name: "Maggie Kohn",
    title: "Lead Surgery & Anesthesia Technician, Director of Veterinary Technician Education",
    credentials: "RVT FFCP-VT",
    pronouns: "She/Her",
    image: "/staff/maggie.jpeg",
    imageAlt: "Maggie Kohn, Lead Surgery & Anesthesia Technician",
    slug: "maggie-kohn",
    bio: "Maggie Kohn is our highly skilled Lead Surgery & Anesthesia Technician and Director of Veterinary Technician Education. With specialized training from Pima Medical Institute, Maggie ensures the highest standards of surgical care and mentors the next generation of veterinary technicians.",
    education: "Veterinary Technician, Pima Medical Institute",
    specialties: [
      "Surgery",
      "Anesthesia",
      "Surgical Procedures",
      "Technician Training",
      "Patient Monitoring"
    ],
    personalInterests: "When she's not in the surgical suite, Maggie enjoys continuing her education in veterinary technology and spending time with her own pets. Her commitment to professional development ensures she stays current with the latest advances in veterinary surgical techniques.",
    certifications: ["fearfree"]
  },
  {
    id: "courtney-slice",
    name: "Courtney Slice",
    title: "Registered Veterinary Technician",
    credentials: "RVT FFCP-VT, B.A., A.A.S.",
    pronouns: "She/Her",
    image: "/staff/courtney.jpeg",
    imageAlt: "Courtney Slice, Registered Veterinary Technician",
    slug: "courtney-slice",
    bio: "Courtney Slice is a dedicated Registered Veterinary Technician who brings enthusiasm, skill, and compassionate care to every patient interaction. With a Bachelor's in Business Administration and an Associate of Applied Science in Veterinary Technology, Courtney provides comprehensive support in all aspects of animal care.",
    education: "Bachelor's in Business Administration, Associate of Applied Science in Veterinary Technology",
    specialties: [
      "Fear Free Care",
      "Feline Medicine",
      "Companion Animal Dentistry",
      "Patient Care",
      "Client Education"
    ],
    personalInterests: "Outside of work, Courtney is an avid animal lover who enjoys hiking with her dogs and volunteering at local animal shelters. Her commitment to animal welfare and genuine care for pets and their families makes her a valued team member.",
    certifications: ["fvma", "catfriendly", "fearfree"]
  },
  {
    id: "liz-fisher",
    name: "Liz Fisher",
    title: "Registered Veterinary Technician & Behavioral Trainer",
    credentials: "RVT, Elite FFCP-VT, KPA CTP",
    pronouns: "She/Her",
    image: "/staff/liz.jpg",
    imageAlt: "Liz Fisher, Registered Veterinary Technician & Behavioral Trainer",
    slug: "liz-fisher",
    bio: "Liz Fisher combines her expertise as a Registered Veterinary Technician with specialized training in animal behavior, making her a unique asset to Red Rock Veterinary Health. With a B.S. in Zoology and Karen Pryor Academy Certified Training Partner certification, Liz addresses both medical and behavioral needs of our patients.",
    education: "B.S. in Zoology, Karen Pryor Academy Certified Training Partner",
    specialties: [
      "Animal Behavior",
      "Behavioral Training",
      "Fear Free Techniques",
      "Patient Assessment",
      "Positive Reinforcement Training"
    ],
    personalInterests: "When she's not working with patients, Liz enjoys continuing her education in veterinary behavior and training techniques. She's passionate about the human-animal bond and believes that addressing behavioral issues is as important as treating medical conditions.",
    certifications: ["fearfreeelite", "karen", "hart", "lsh"]
  },
  {
    id: "kim-weigelt",
    name: "Kim Weigelt",
    title: "Registered Veterinary Technician",
    credentials: "RVT FFCP-VT",
    pronouns: "She/Her",
    image: "/staff/kim.jpg",
    imageAlt: "Kim Weigelt, Registered Veterinary Technician",
    slug: "kim-weigelt",
    bio: "Kim Weigelt is a Registered Veterinary Technician with over 10 years of experience in emergency and general practice. Certified as a Fear Free and Cat Friendly professional, as well as a RECOVER Rescuer in animal CPR, Kim's passion lies in anesthesia and emergency/intensive care. Originally from the Chicago suburbs, Kim found her home in Colorado in 2016, rejoining familiar faces from Bear Creek Vet to help create a calm, compassionate environment at Red Rock Veterinary Health.",
    specialties: [
      "Anesthesia",
      "Emergency Care",
      "Intensive Care",
      "Animal CPR",
      "Fear Free Techniques"
    ],
    personalInterests: "Whether she's rescuing animals from California wildfires, studying to further her veterinary knowledge, or raising butterflies at home, Kim brings heart and dedication to everything she does—always putting your pet's comfort and care first. Fun fact: She shares her adventures with Leon, her lovable 3-legged pup!",
    certifications: ["fearfree", "catfriendly", "recover"]
  }
];

export function getStaffMemberBySlug(slug: string): StaffMember | undefined {
  return staffMembers.find(member => member.slug === slug);
}

export const certificationMetadata = {
  fearfree: {
    name: "Fear Free Certified Professional",
    image: "/staff/certs/fearfree.png",
    alt: "Fear Free Certified Professional"
  },
  fearfreeelite: {
    name: "Fear Free Elite Certified Professional",
    image: "/staff/certs/fearfreeelite.png",
    alt: "Fear Free Elite Certified Professional"
  },
  ivpa: {
    name: "Independent Veterinary Practitioners Association",
    image: "/staff/certs/ivpa.png",
    alt: "Independent Veterinary Practitioners Association"
  },
  rcvs: {
    name: "Royal College of Veterinary Surgeons",
    image: "/staff/certs/rcvs.png",
    alt: "Royal College of Veterinary Surgeons"
  },
  catfriendly: {
    name: "Cat Friendly Veterinarian",
    image: "/staff/certs/catfriendly.png",
    alt: "Cat Friendly Veterinarian - American Association of Feline Practitioners"
  },
  fvma: {
    name: "Florida Veterinary Medical Association",
    image: "/staff/certs/fvma.png",
    alt: "Florida Veterinary Medical Association"
  },
  karen: {
    name: "Karen Pryor Academy",
    image: "/staff/certs/karen.png",
    alt: "Karen Pryor Academy Certified Training Partner"
  },
  hart: {
    name: "HART Certification",
    image: "/staff/certs/hart.png",
    alt: "HART Certification"
  },
  lsh: {
    name: "LSH Certification",
    image: "/staff/certs/lsh.jpg",
    alt: "LSH Certification"
  },
  recover: {
    name: "RECOVER Rescuer Animal CPR",
    image: "/staff/certs/recover.png",
    alt: "RECOVER Rescuer Animal CPR Certification"
  }
};

export function getAllStaffSlugs(): string[] {
  return staffMembers.map(member => member.slug);
}