// Switching-veterinarians page FAQ — Month 3 copy (drafted August 2026).
// `switchingVetsFaqs` renders on the page; `switchingVetsFaqSchema` is the verbatim
// FAQPage JSON-LD (condensed, third-person answers authored separately for schema).
// NOTE FOR REVIEW: the records-ownership answers deliberately do NOT assert a specific
// Colorado statutory right, and deliberately do NOT assert a client legal entitlement in
// other states. They describe customary practice and route the reader to the Colorado State
// Board of Veterinary Medicine. Confirm this wording with the practice before publication if
// a Colorado-specific citation is later verified.
// NOTE FOR REVIEW: the records-request workflow is stated as a CAPABILITY ("we can request
// the records for you", "we review whatever has arrived"), not as a standing commitment or a
// turnaround guarantee. Do not upgrade this to a promise, and do not restore a turnaround
// figure, without written confirmation from Dr. Unsell and the front desk.

import type { ServiceFaq } from "../services/fear-free/faq";

export const switchingVetsFaqs: ServiceFaq[] = [
  {
    question:
      "Can I switch veterinarians, and is it rude to leave the practice I am with?",
    answer:
      "Yes, you can switch, and no, it is not rude. You are your pet's decision-maker, you are paying for the care, and you can move that care at any time, for any reason, without explaining yourself. From the inside, a records request is ordinary administrative work; we send records out and receive them in every week. If you want a script: “I am moving my pet’s care to another practice. Please send a copy of the complete medical record to Red Rock Veterinary Health.” That is the whole conversation. You do not need to justify it, and a practice that makes you feel bad for asking has told you something useful.",
  },
  {
    question:
      "How do I transfer my pet's medical records to a new veterinarian?",
    answer:
      "Call or email your current practice and ask them to send a copy of the complete medical record to the new veterinarian. Ask by name for the full visit history, vaccination records, laboratory and bloodwork results, imaging and radiographs (the actual image files, not just the report), current medications with exact doses, and surgical and anesthetic records. Put the request in writing, even if you also call, so there is a record of when you asked. Then confirm with the receiving practice that it actually arrived, because transfers do get missed. If you are coming to us, you do not have to do any of this yourself: call (719) 204-3647, text (719) 355-8343, or email Reception@RedRockVet.com, and we can request the records for you.",
  },
  {
    question:
      "Can a veterinarian refuse to release my pet's records, or hold them because I owe a balance?",
    answer:
      "Here is the honest version. In most states the physical or electronic chart is the property of the practice that created it, and clients are customarily given a copy of the pet's medical history rather than the original file. We are not going to quote you a Colorado statute we have not verified; if you want the authoritative answer for Colorado, the Colorado State Board of Veterinary Medicine is the right place to ask. Practically: most practices send records without any friction, practices differ in how they handle a request while a balance is outstanding, and settling the balance removes the question entirely. Rabies and vaccination certificates may also be on file with the authority your pet is licensed with. If you get stuck, tell us and we will make the request from our side.",
  },
  {
    question:
      "What should I ask a veterinarian before I move my pet's care there?",
    answer:
      "Ask who owns the practice and who makes the medical decisions. Ask whether the same veterinarian will see your pet each visit, or whoever is on the schedule. Ask what the exam fee is, and whether you get an estimate before anything is done. Ask what the hours are and exactly what happens after those hours. Ask how they handle an anxious dog or a cat who hates the carrier. Ask what diagnostics are done in-house and how quickly you get results. Ask when they refer to a specialist and who they refer to. Ask how fast they can send your records if you ever leave. That last one tells you a great deal about a practice, and you should ask it of us too.",
  },
  {
    question: "How can I tell whether my veterinary clinic is corporate owned?",
    answer:
      "Three checks, in order of effort. First, read the website footer and the About page: corporate groups usually disclose it somewhere, often as a parent-company name or a phrase like “part of the family of hospitals.” Second, look the business entity up in the Colorado Secretary of State business database, which is free and public. Third, ask the front desk. It is a completely reasonable question and the answer should be immediate. For reference, the large groups in American veterinary medicine include Mars Veterinary Health, which owns both VCA and Banfield Pet Hospital, along with Thrive Pet Healthcare and Petco, which runs Vetco clinics. Corporate ownership is a fact about a business, not a verdict on its medicine. Plenty of excellent veterinarians work inside those groups.",
  },
  {
    question: "Why are vets so expensive?",
    answer:
      "Because you see the whole bill. In human medicine, insurance absorbs most of the cost before you ever see a number; in veterinary medicine, most families pay out of pocket at the time of service, so the true price of a medical facility lands in one visit. And it is a full medical facility: anesthesia machines and multiparameter monitors, digital radiography, dental radiography, ultrasound, an in-house laboratory, surgical instruments and sterilization, controlled-drug handling, and a credentialed team. None of that is optional if you want real medicine, and none of it is cheap. What you can reasonably demand is transparency. Ours: the standard exam is $79, the same-day urgent exam is $109, and a standard dental is $999, with extractions quoted separately. Anything beyond the exam gets priced and discussed with you before we do it.",
  },
  {
    question:
      "How much does a first visit at Red Rock cost, and how do I become a client?",
    answer:
      "A standard exam is $79 and a same-day urgent exam is $109. A standard dental procedure is $999; extractions and oral surgery are billed separately and always discussed with you first. These are our current prices and they can change, so ask when you book. To become a client, call (719) 204-3647, text (719) 355-8343, or email Reception@RedRockVet.com with your name, your pet's name and species, and the name of your previous practice. We can request the records for you, and we review whatever has arrived before your appointment. We are at 3163 W. Colorado Ave on the Westside, open Monday through Friday, 8 a.m. to 5 p.m.",
  },
  {
    question: "Are you open on weekends or overnight?",
    answer:
      "No, and you should know that before you switch rather than after. We are open Monday through Friday, 8 a.m. to 5 p.m. We are closed on weekends and holidays, we have no overnight staff, and we do not run an after-hours on-call line. If your household needs weekend or overnight access to your primary veterinarian, we are honestly not the right practice for you. For emergencies outside our hours, go to Animal ER Care at 5520 N. Nevada Ave, Ste 150, (719) 260-7141, open 24/7; or Uintah Pet Emergency at 1635 W. Uintah St, Ste E, (719) 633-3214, open daily from noon to midnight, which is not overnight. We take the handoff the next business morning.",
  },
];

// Verbatim FAQPage JSON-LD (condensed, third-person answers authored for schema).
export const switchingVetsFaqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Can I switch veterinarians, and is it rude to leave my current vet?","acceptedAnswer":{"@type":"Answer","text":"Yes. Pet owners are free to change veterinary practices at any time, for any reason, and no explanation is owed to the practice being left. Transferring a patient between practices is routine administrative work that veterinary teams handle every week. A short neutral request is enough: ask the current practice to send a copy of the pet's complete medical record to the new practice, and give them the new practice's name, phone number, and email."}},
    {"@type":"Question","name":"How do I transfer my pet's medical records to a new veterinarian?","acceptedAnswer":{"@type":"Answer","text":"Call or email the current practice and ask them to send a copy of the complete medical record to the new veterinarian. Ask specifically for the full visit history, vaccination records, laboratory and bloodwork results, imaging and radiographs, current medications with exact doses, and surgical and anesthetic records. Put the request in writing so there is a record of it, then confirm with the receiving practice that everything arrived. Red Rock Veterinary Health can request records on a new client's behalf: call (719) 204-3647, text (719) 355-8343, or email Reception@RedRockVet.com."}},
    {"@type":"Question","name":"Can a veterinarian refuse to give me my pet's records or withhold them over an unpaid balance?","acceptedAnswer":{"@type":"Answer","text":"In most states the physical or electronic chart is the property of the practice that created it, while clients are customarily given a copy of the pet's medical history rather than the original file. Colorado's specific requirements should be confirmed with the Colorado State Board of Veterinary Medicine rather than assumed. In practice most records requests are honored without friction, practices differ in how they handle a request while a balance is outstanding, and settling the balance removes the question. Rabies and vaccination certificates may also be on file with the authority the pet is licensed with."}},
    {"@type":"Question","name":"What questions should I ask a new veterinarian?","acceptedAnswer":{"@type":"Answer","text":"Ask who owns the practice and who makes the medical decisions. Ask whether the same veterinarian sees your pet each visit. Ask what the exam fee is and whether an estimate is given before treatment. Ask what the hours are and exactly what happens after hours. Ask how the practice handles anxious dogs and cats and whether it is Fear Free certified. Ask which diagnostics are run in-house and how quickly results come back. Ask when the practice refers to a specialist and who it refers to. Ask how quickly the practice can send your records if you ever leave."}},
    {"@type":"Question","name":"How can I tell if my veterinary clinic is corporate owned?","acceptedAnswer":{"@type":"Answer","text":"Check the clinic website footer and About page, where corporate groups usually disclose a parent company. Look the business entity up in the free public Colorado Secretary of State business database. Or simply ask the front desk. Large groups in American veterinary medicine include Mars Veterinary Health, which owns both VCA and Banfield Pet Hospital, along with Thrive Pet Healthcare and Petco, which operates Vetco clinics. Corporate ownership is a fact about a business rather than a verdict on its medicine."}},
    {"@type":"Question","name":"Why are vets so expensive?","acceptedAnswer":{"@type":"Answer","text":"Veterinary care is largely paid out of pocket at the time of service, so families see the full price of care in a way they rarely do in human medicine, where insurance absorbs it first. The cost covers a complete medical facility: anesthesia machines and multiparameter monitors, digital and dental radiography, ultrasound, an in-house laboratory, surgical instrumentation and sterilization, medications, and a credentialed team. At Red Rock Veterinary Health the standard exam is $79, the same-day urgent exam is $109, and a standard dental procedure is $999 with extractions quoted separately. Diagnostics and treatment are priced and discussed before they are performed."}},
    {"@type":"Question","name":"How much does a first vet visit cost at Red Rock Veterinary Health in Colorado Springs?","acceptedAnswer":{"@type":"Answer","text":"A standard exam is $79 and a same-day urgent exam is $109. A standard dental procedure is $999, with extractions and oral surgery billed separately and discussed in advance. These are current prices and are subject to change. To become a client, call (719) 204-3647, text (719) 355-8343, or email Reception@RedRockVet.com; the team can request records from the previous practice and reviews whatever has arrived before the first appointment. The hospital is at 3163 W. Colorado Ave, Colorado Springs, CO 80904."}},
    {"@type":"Question","name":"Is Red Rock Veterinary Health open on weekends or overnight?","acceptedAnswer":{"@type":"Answer","text":"No. Red Rock Veterinary Health is open Monday through Friday, 8 a.m. to 5 p.m. It is closed on weekends and holidays, has no overnight staff, and does not operate an after-hours on-call line. Anyone who needs weekend or overnight access to their primary veterinarian should know that before switching. For emergencies outside those hours, Animal ER Care at 5520 N. Nevada Ave, Ste 150, (719) 260-7141, is open 24/7, and Uintah Pet Emergency at 1635 W. Uintah St, Ste E, (719) 633-3214, is open daily from noon to midnight, which is not overnight."}}
  ]
}`;
