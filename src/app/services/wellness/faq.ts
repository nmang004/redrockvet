// Wellness & Preventive Care service-page FAQ — Month 1 finalized copy
// (owner-confirmed June 2026). `wellnessFaqs` renders on the page;
// `wellnessFaqSchema` is the verbatim FAQPage JSON-LD.

import type { ServiceFaq } from "../fear-free/faq";

export const wellnessFaqs: ServiceFaq[] = [
  {
    question: "What is included in a Red Rock annual wellness exam?",
    answer:
      "A Red Rock wellness exam includes a full nose-to-tail physical (heart, lungs, lymph nodes, abdomen, joints, eyes, ears, mouth, skin), a behavioral and lifestyle review, weight and body condition scoring, vaccinations appropriate to your pet's age and lifestyle, parasite screening, and a personalized care plan for the year ahead. For pets age 7 and older we highly recommend senior bloodwork and urinalysis screening. Routine visits run about 30 minutes for established patients and 45 to 60 minutes for first-time visits.",
  },
  {
    question: "How often should my dog or cat have a wellness exam?",
    answer:
      "For most adult dogs and cats (1 to 6 years), once a year is standard. Puppies and kittens visit every 3 to 4 weeks until at least 16 weeks of age, with the final puppy vaccine often given between 16 and 20 weeks (per AAHA 2022 guidelines). Mature pets (cats 7 to 10, dogs 7+ for medium and large breeds, 5+ for giant breeds) typically benefit from annual wellness exams paired with senior bloodwork screening as the pet ages. Senior pets (10+ for cats per AAFP guidelines, 7+ for most dogs) usually shift to twice-yearly wellness visits because age-related changes can develop quickly and early detection makes a meaningful difference in outcomes.",
  },
  {
    question: "How much does an annual vet exam cost in Colorado Springs?",
    answer:
      "Our standard exam fee is $79 (a same-day urgent exam is $109), in line with other independent veterinary hospitals on the Westside. Add-ons like vaccines, fecal testing, heartworm testing, and bloodwork are itemized separately so you see what each component costs. For straightforward wellness visits we will give you the total before any service is performed, no surprise charges.",
  },
  {
    question: "How much is a puppy's first vet visit at Red Rock?",
    answer:
      "A puppy's first comprehensive visit at Red Rock includes a thorough physical exam (our standard $79 exam fee), the first round of core vaccines, any lifestyle vaccines your puppy needs, a fecal test, intestinal deworming, and a behavioral evaluation if you would like one. We also set up a personalized vaccine and wellness schedule for the first year and talk through nutrition, socialization, and microchipping. Vaccines and tests are itemized so you see the cost of each component, and we strongly encourage owners to bring their new puppy in within the first week of adoption.",
  },
  {
    question: "Do you offer wellness plans or packages?",
    answer:
      "We do not sell wellness packages or subscription plans. We do offer wellness discounts on dental cleanings, but we do not bundle care into one-size-fits-all packages, because every pet is unique and that kind of packaging is something corporate practices commonly push. Instead, we give you a clear, personalized annual care recommendation at every visit so you know exactly what is recommended and what each component costs. For most clients this works out to a predictable annual spend without locking into a contract.",
  },
  {
    question: "What vaccines does my dog need in Colorado Springs?",
    answer:
      "Core vaccines for every dog at Red Rock are distemper, parvovirus, and adenovirus (given together as the DAPP combination), leptospirosis (a core vaccine here given Colorado's wildlife exposure, especially in foothill neighborhoods where deer, raccoons, and rodents are common), and rabies (legally required). Lifestyle vaccines we may recommend based on your dog include Bordetella (for dogs that board, attend daycare, or go to dog parks), canine influenza, Lyme (worth discussing if you travel with your dog or live near foothills with deer or elk activity), and rattlesnake (for dogs that hike or live where rattlesnakes are active).",
  },
  {
    question: "What vaccines does my cat need in Colorado Springs?",
    answer:
      "Core vaccines for every cat in Colorado are rabies (legally required) and FVRCP (feline viral rhinotracheitis, calicivirus, and panleukopenia combo). For cats that go outside, are exposed to other cats, or live in multi-cat households, we also recommend FeLV (feline leukemia). We do not vaccinate against everything available, we tailor the protocol to your cat's lifestyle to avoid unnecessary vaccines.",
  },
  {
    question: "What do I need to bring to my pet's first wellness visit?",
    answer:
      "Bring any prior medical records (rabies certificate, vaccine history, previous exam notes), your pet's current food (or a photo of the bag and a few days of feeding amounts), a fresh stool sample if possible (a tablespoon-size in a sealed bag is plenty), a list of current medications and supplements with doses, and notes on anything you have observed at home that you want us to know about. If your pet has had a difficult experience at a previous vet, please tell us at booking.",
  },
  {
    question:
      "Is Red Rock a good fit for an easygoing pet that doesn't need Fear Free care?",
    answer:
      "Yes. Our calm, unhurried approach benefits every pet, not just anxious ones. Easygoing dogs and cats get the same advantages: more accurate vitals, more thorough physical exam, more time with the doctor, clear take-home instructions, and a team that knows your pet over years rather than rotating staff. Many of our routine wellness patients are not anxious at all, they just want a good, locally-owned vet who pays attention.",
  },
  {
    question: "Why do you recommend bloodwork for healthy-seeming pets?",
    answer:
      "Annual or semi-annual bloodwork in healthy adult and senior pets is one of the most reliable ways to catch problems before they cause symptoms. Kidney disease, liver disease, thyroid disease, and early diabetes often show up on bloodwork months or years before a pet shows clinical signs. We highly recommend senior labwork starting at age 7. Our standard wellness panel includes a complete blood count (CBC), a 27-value chemistry panel, a urinalysis with urine protein-to-creatinine ratio (UPC), thyroid testing (T4 and free T4), a cardiac proBNP, a pancreatic test (fPL for cats or cPL for dogs), a 4Dx test (heartworm and tick-borne disease), and a fecal. For senior pets especially, baseline values from healthy years make it much easier to detect a change later. We do not require the full panel on every visit; we recommend testing based on age, breed, and risk factors.",
  },
];

// Verbatim FAQPage JSON-LD from Document 5 (condensed answers authored for schema).
export const wellnessFaqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is included in a Red Rock annual wellness exam?","acceptedAnswer":{"@type":"Answer","text":"A Red Rock wellness exam includes a full nose-to-tail physical, behavioral and lifestyle review, weight and body condition scoring, vaccinations appropriate to your pet's age and lifestyle, parasite screening, and a personalized care plan. For pets age 7 and older we highly recommend senior bloodwork and urinalysis screening."}},
    {"@type":"Question","name":"How often should my dog or cat have a wellness exam?","acceptedAnswer":{"@type":"Answer","text":"For adult dogs and cats 1 to 6 years old, once a year. Puppies and kittens visit every 3 to 4 weeks until at least 16 weeks, with the final puppy vaccine often given between 16 and 20 weeks (AAHA 2022). Mature pets benefit from annual exams with senior bloodwork as they age. Senior pets (10+ for cats per AAFP, 7+ for most dogs) usually shift to twice-yearly visits."}},
    {"@type":"Question","name":"How much does an annual vet exam cost in Colorado Springs?","acceptedAnswer":{"@type":"Answer","text":"Red Rock's standard exam fee is $79, with a same-day urgent exam at $109, in line with other independent veterinary hospitals on the Westside. Add-ons are itemized separately so you see what each component costs. We give you the total before any service is performed."}},
    {"@type":"Question","name":"How much is a puppy's first vet visit at Red Rock?","acceptedAnswer":{"@type":"Answer","text":"A puppy's first comprehensive visit includes a physical exam (our standard $79 exam fee), the first round of core vaccines, optional lifestyle vaccines, a fecal test, intestinal deworming, and a behavioral evaluation if desired, plus a year-one vaccine and wellness schedule. Vaccines and tests are itemized. We recommend bringing a new puppy in within the first week of adoption."}},
    {"@type":"Question","name":"Do you offer wellness plans or packages?","acceptedAnswer":{"@type":"Answer","text":"We do not sell wellness packages or subscription plans, though we do offer wellness discounts on dental cleanings. Every pet is unique, so instead of one-size-fits-all packages we give you a clear, personalized annual care recommendation at every visit so you know what is recommended and what each component costs."}},
    {"@type":"Question","name":"What vaccines does my dog need in Colorado Springs?","acceptedAnswer":{"@type":"Answer","text":"Core vaccines are distemper, parvovirus, and adenovirus (the DAPP combo), leptospirosis (core here due to Colorado wildlife exposure), and rabies (legally required). Lifestyle vaccines like Bordetella, canine influenza, Lyme, and rattlesnake depend on your dog's activities."}},
    {"@type":"Question","name":"What vaccines does my cat need in Colorado Springs?","acceptedAnswer":{"@type":"Answer","text":"Core vaccines are rabies (legally required) and FVRCP combo. For outdoor cats or multi-cat households, FeLV is also recommended. We tailor protocols to lifestyle to avoid unnecessary vaccines."}},
    {"@type":"Question","name":"What do I need to bring to my pet's first wellness visit?","acceptedAnswer":{"@type":"Answer","text":"Bring prior medical records, your pet's current food information, a fresh stool sample if possible, a list of current medications, and notes on any behavior or health concerns. If your pet has had a difficult vet experience before, tell us at booking."}},
    {"@type":"Question","name":"Is Red Rock a good fit for an easygoing pet that doesn't need Fear Free care?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our calm, unhurried approach benefits every pet. Easygoing pets get more accurate vitals, a more thorough exam, more time with the doctor, and a team that knows them over years."}},
    {"@type":"Question","name":"Why do you recommend bloodwork for healthy-seeming pets?","acceptedAnswer":{"@type":"Answer","text":"Annual or semi-annual bloodwork catches kidney, liver, thyroid, and diabetes early, often months or years before clinical signs. We highly recommend senior labwork starting at age 7; our standard wellness panel includes a CBC, a 27-value chemistry, a urinalysis with UPC, thyroid testing (T4 and free T4), a cardiac proBNP, a pancreatic test (fPL or cPL), a 4Dx, and a fecal. Baseline values from healthy years make detecting a later change much easier."}}
  ]
}`;
