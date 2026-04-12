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
    bio: "Dr. Robbie Unsell is the passionate owner and founder of Red Rock Veterinary Health, bringing exceptional veterinary expertise and compassionate care to Colorado Springs. After graduating from the prestigious Royal Veterinary College in London in 2013, Dr. Unsell spent several rewarding years at Bear Creek Veterinary Clinic before founding Red Rock Veterinary Health to continue providing personalized, Fear Free care to his loyal clients and their beloved pets. He has dedicated his career to advancing veterinary medicine and building strong, lasting relationships with pet families.",
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
    id: "dr-dan-muelhaupt",
    name: "Dr. Dan Muelhaupt",
    title: "Veterinarian",
    credentials: "DVM, MPH",
    pronouns: "He/Him",
    image: "/staff/drdan.jpg",
    imageAlt: "Dr. Dan Muelhaupt, Veterinarian at Red Rock Veterinary Health",
    slug: "dr-dan-muelhaupt",
    bio: "We are excited to welcome Dr. Dan Muelhaupt to Red Rock Veterinary Health beginning October 22, 2025! Dr. Dan joins us from the Animal Hospital of Colorado Springs where he has served as the Medical Director and as an Associate Veterinarian since 2016. Dr. Dan and Dr. Robbie met during the R&D phase of Red Rock Vet and became fast friends.",
    education: "Doctor of Veterinary Medicine, Virginia-Maryland College of Veterinary Medicine; Master of Public Health (Infectious Disease) candidacy, Virginia Tech; Bachelor of Science in Zoology, North Carolina State University",
    specialties: [
      "Soft Tissue Surgery",
      "Internal Medicine",
      "Dentistry",
      "Preventive Medicine",
      "Chronic Condition Management"
    ],
    personalInterests: "At home, Dr. Dan and his wife, Kat, share life with a lively crew of dogs, cats, fish, & chickens. When he's not at the hospital, you'll likely find him snowboarding, hiking, kayaking, or working on projects in his woodshop. He loves staying active outdoors and is thrilled to now be caring for pets and families here on the Westside."
  },
  {
    id: "dr-jaime-clevenger",
    name: "Dr. Jaime Clevenger",
    title: "Veterinarian",
    credentials: "DVM MPH FFCP-V",
    pronouns: "",
    image: "/staff/dr-jaime-clevenger.webp",
    imageAlt: "Dr. Jaime Clevenger, Veterinarian at Red Rock Veterinary Health",
    slug: "dr-jaime-clevenger",
    bio: "Dr. Jaime Clevenger completed her undergraduate studies in Molecular and Cell Biology at the University of California, Berkeley, before earning her Doctor of Veterinary Medicine from the University of California, Davis School of Veterinary Medicine. She further expanded her expertise by completing a Master of Public Health at the UC Davis School of Medicine, with a focus on zoonotic infectious diseases. She has been practicing veterinary medicine in general and emergency practice for over 20 years.\n\nOriginally from California, Dr. Clevenger has called Manitou & Colorado Springs home for the past fourteen years. She has developed a deep connection to the community and enjoys all that Colorado has to offer—especially time spent in the mountains and outdoors.\n\nDr. Clevenger shares her home with her partner, their two children, three mischievous cats, and two sometimes well-behaved (but always adorable) dogs.",
    education: "Doctor of Veterinary Medicine, University of California, Davis; Master of Public Health (Zoonotic Infectious Diseases), UC Davis School of Medicine; B.S. Molecular and Cell Biology, University of California, Berkeley",
    specialties: [
      "General Practice",
      "Emergency Medicine",
      "Zoonotic Infectious Diseases",
      "Fear Free Techniques"
    ],
    certifications: ["fearfree"]
  },
  {
    id: "lauren-anderson",
    name: "Lauren Anderson",
    title: "Hospital Manager & Fear Free Director",
    credentials: "Dip.ABST Elite FFCP-VT",
    pronouns: "They/Them",
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
    image: "/staff/angela.jpg",
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
    id: "nicole-payne",
    name: "Nicole Payne",
    title: "Client Care Coordinator",
    credentials: "",
    pronouns: "She/Her",
    image: "/staff/nicole.jpg",
    imageAlt: "Nicole Payne, Client Care Coordinator at Red Rock Veterinary Health",
    slug: "nicole-payne",
    bio: "Nicole is currently studying English and joined Red Rock Veterinary Health for her very first job in the veterinary field. She's excited to learn all she can about veterinary medicine, client care, and Fear Free handling, and loves being part of a team that's so dedicated to the well-being of both pets and people.",
    education: "Currently studying English",
    specialties: [
      "Client Care",
      "Fear Free Handling",
      "Veterinary Medicine Support"
    ],
    personalInterests: "Outside of work, Nicole enjoys exercising and building her strength, writing her own novels, and spending time with her cat Hoshi—the center of her world (and a very sassy kitty!)."
  },
  {
    id: "maggie-kohn",
    name: "Maggie Kohn",
    title: "Lead Surgery & Anesthesia Technician, Director of Veterinary Technician Education",
    credentials: "RVT FFCP-VT",
    pronouns: "",
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
    pronouns: "",
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
    id: "emma-osborne",
    name: "Emma Osborne",
    title: "Registered Veterinary Technician",
    credentials: "RVT",
    pronouns: "She/Her",
    image: "/staff/emma-osborne.webp",
    imageAlt: "Emma Osborne, Registered Veterinary Technician at Red Rock Veterinary Health",
    slug: "emma-osborne",
    bio: "",
    specialties: []
  },
  {
    id: "michael-hronsky",
    name: "Michael Hronsky",
    title: "Veterinary Technician",
    credentials: "",
    pronouns: "He/Him",
    image: "/staff/michael-hronsky.webp",
    imageAlt: "Michael Hronsky, Veterinary Technician at Red Rock Veterinary Health",
    slug: "michael-hronsky",
    bio: "",
    specialties: []
  },
  {
    id: "madeleine-lieljuris",
    name: "Madeleine Lieljuris",
    title: "Veterinary Assistant",
    credentials: "",
    pronouns: "",
    image: "/staff/madeleine-lieljuris.webp",
    imageAlt: "Madeleine Lieljuris, Veterinary Assistant at Red Rock Veterinary Health",
    slug: "madeleine-lieljuris",
    bio: "",
    specialties: []
  },
  {
    id: "emma-reab",
    name: "Emma Reab",
    title: "Hospital Assistant",
    credentials: "",
    pronouns: "She/Her",
    image: "/staff/emma-reab.webp",
    imageAlt: "Emma Reab, Hospital Assistant at Red Rock Veterinary Health",
    slug: "emma-reab",
    bio: "",
    specialties: []
  },
  {
    id: "leyla-gulati",
    name: "Leyla Gulati",
    title: "Hospital Assistant",
    credentials: "",
    pronouns: "She/Her",
    image: "/staff/leyla-gulati.webp",
    imageAlt: "Leyla Gulati, Hospital Assistant at Red Rock Veterinary Health",
    slug: "leyla-gulati",
    bio: "",
    specialties: []
  },
  {
    id: "samantha-marlow",
    name: "Samantha Marlow",
    title: "Receptionist",
    credentials: "",
    pronouns: "She/Her",
    image: "/staff/samantha-marlow.webp",
    imageAlt: "Samantha Marlow, Receptionist at Red Rock Veterinary Health",
    slug: "samantha-marlow",
    bio: "",
    specialties: []
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
    image: "/staff/certs/recover.jpg",
    alt: "RECOVER Rescuer Animal CPR Certification"
  }
};

export function getAllStaffSlugs(): string[] {
  return staffMembers.map(member => member.slug);
}