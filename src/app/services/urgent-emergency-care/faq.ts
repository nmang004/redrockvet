// Daytime urgent-care FAQ — Month 2 finalized copy (Doc 2, owner-confirmed July 2026).
// `urgentCareFaqs` renders on the page; `urgentCareFaqSchema` is the verbatim
// FAQPage JSON-LD (condensed answers authored separately for schema). This was the
// only FAQ-bearing service page still missing FAQPage markup before Month 2.

export interface ServiceFaq {
  question: string;
  answer: string;
}

export const urgentCareFaqs: ServiceFaq[] = [
  {
    question: "Do you offer same-day urgent care appointments?",
    answer:
      "Yes. We hold space for same-day urgent appointments Monday through Friday, 8 a.m. to 5 p.m. The same-day urgent exam is $109. Availability depends on scheduling and staffing that day, so call as early as you can at (719) 204-3647; established clients receive priority for urgent slots.",
  },
  {
    question: "Are you a 24-hour emergency vet?",
    answer:
      "No, and we say that plainly because it matters for your pet's safety. Red Rock is open Monday through Friday, 8 a.m. to 5 p.m., with no after-hours on-call line. For nights, weekends, and holidays we refer to our trusted after-hours partners: Animal ER Care, open 24/7, at (719) 260-7141, and Uintah Pet Emergency, open daily until midnight, at (719) 633-3214.",
  },
  {
    question: "What conditions can you treat the same day?",
    answer:
      "Vomiting, diarrhea, limping, cuts and bite wounds, torn nails, ear infections, skin flare-ups, eye redness or squinting, allergic reactions, urinary issues, toxin ingestion during business hours, and the 'something is off' cases where your pet is not eating or not acting right. If you are unsure, call and describe it; we triage honestly on the phone.",
  },
  {
    question: "When should I go straight to an emergency hospital instead?",
    answer:
      "Go directly to a 24-hour ER for difficulty breathing, collapse, seizures, unproductive retching with a swollen belly, a male cat who cannot pass urine, major trauma such as being hit by a car, uncontrolled bleeding or pale gums, rattlesnake bite, or suspected heatstroke. These need equipment and overnight monitoring that a general practice should not improvise, even during our open hours.",
  },
  {
    question: "How much does an urgent visit cost?",
    answer:
      "The same-day urgent exam is $109 (our standard exam is $79). After the exam, we discuss and price any diagnostics or treatment with you before performing them. Urgent care with us generally costs meaningfully less than an emergency-room visit for the same problem, because you are paying general-practice prices rather than 24/7 facility overhead.",
  },
  {
    question: "Do I need to be an established client to get a same-day appointment?",
    answer:
      "Established clients get priority because we already have the medical history to act fast. We accept urgent visits from new clients when capacity allows. The practical advice: establish care before you need urgent care, so your pet's baseline is on file and you are at the front of the line.",
  },
  {
    question: "What should I have ready when I call?",
    answer:
      "What you are seeing, when it started, and whether it is getting worse. If your pet ate something, have the packaging, the amount, and your pet's approximate weight. You can also text photos of a wound, packaging, or anything else useful to (719) 355-8343; it genuinely speeds up triage.",
  },
  {
    question: "How does Fear Free handling work during an urgent visit?",
    answer:
      "The same way it works on every visit, because that is when it matters most. You can wait in your car and text us, most urgent patients go straight to an exam room, dogs and cats stay in fully separate areas, and our Fear Free certified team uses low-stress handling so exam findings reflect your pet's condition rather than your pet's panic. If your pet's stress spikes, we pause and adjust.",
  },
  {
    question: "What happens if my pet needs surgery or overnight care?",
    answer:
      "Urgent surgery happens on-site when our schedule allows: we have a modern surgical suite with full anesthesia monitoring, and every surgery patient has two dedicated credentialed veterinary technicians. If your pet needs overnight hospitalization or a specialist, we stabilize first, call ahead to the emergency hospital, and send your pet's records so nothing is lost in the handoff.",
  },
  {
    question: "My pet was at the ER last night. What now?",
    answer:
      "Call us the next morning at (719) 204-3647. We take the handoff from Uintah Pet Emergency and Animal ER Care routinely: we request the ER records, reconcile new medications with your pet's regular ones, and schedule the recheck, typically within 24 to 72 hours of discharge. Follow-up happens at general-practice pricing with the doctor who knows your pet.",
  },
];

// Verbatim FAQPage JSON-LD from Document 2 (condensed answers authored for schema).
export const urgentCareFaqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Do you offer same-day urgent care appointments?","acceptedAnswer":{"@type":"Answer","text":"Yes. Red Rock Veterinary Health holds space for same-day urgent appointments Monday through Friday, 8 a.m. to 5 p.m. The same-day urgent exam is $109. Availability depends on scheduling and staffing, so call as early as possible at (719) 204-3647; established clients receive priority for urgent slots."}},
    {"@type":"Question","name":"Is Red Rock Veterinary Health a 24-hour emergency vet?","acceptedAnswer":{"@type":"Answer","text":"No. Red Rock is open Monday through Friday, 8 a.m. to 5 p.m., with no after-hours on-call line. For nights, weekends, and holidays, Red Rock refers to trusted after-hours partners in Colorado Springs: Animal ER Care, open 24/7, at (719) 260-7141, and Uintah Pet Emergency, open daily until midnight, at (719) 633-3214."}},
    {"@type":"Question","name":"What conditions can Red Rock treat the same day?","acceptedAnswer":{"@type":"Answer","text":"Vomiting, diarrhea, limping, cuts and bite wounds, torn nails, ear infections, skin flare-ups, eye redness or squinting, allergic reactions, urinary issues, toxin ingestion during business hours, and cases where a pet is not eating or not acting right. Callers are triaged honestly on the phone; ER-level cases are routed to an emergency hospital immediately."}},
    {"@type":"Question","name":"When should a pet go straight to an emergency hospital instead of urgent care?","acceptedAnswer":{"@type":"Answer","text":"Go directly to a 24-hour ER for difficulty breathing, collapse, seizures, unproductive retching with a swollen belly, a male cat who cannot pass urine, major trauma, uncontrolled bleeding or pale gums, rattlesnake bite, or suspected heatstroke, even during general-practice business hours."}},
    {"@type":"Question","name":"How much does an urgent vet visit cost in Colorado Springs?","acceptedAnswer":{"@type":"Answer","text":"At Red Rock Veterinary Health the same-day urgent exam is $109, compared with a $79 standard exam. Diagnostics and treatment are discussed and priced before they are performed. Urgent care at a general practice generally costs meaningfully less than an emergency-room visit for the same problem."}},
    {"@type":"Question","name":"Do I need to be an established client for a same-day appointment?","acceptedAnswer":{"@type":"Answer","text":"Established clients get priority because their medical history is on file. Red Rock accepts urgent visits from new clients when capacity allows. Establishing care before an urgent need means faster, better-informed same-day medicine."}},
    {"@type":"Question","name":"What happens if a pet needs surgery or overnight care?","acceptedAnswer":{"@type":"Answer","text":"Urgent surgery happens on-site when scheduling allows, in a modern surgical suite with full anesthesia monitoring and two dedicated credentialed veterinary technicians per surgery patient. Pets needing overnight hospitalization or specialty care are stabilized first, then transferred to a partner emergency hospital with records sent ahead."}},
    {"@type":"Question","name":"What should I do after an after-hours ER visit?","acceptedAnswer":{"@type":"Answer","text":"Call Red Rock the next morning at (719) 204-3647. The team requests the ER records, reconciles new medications with the pet's regular ones, and schedules a recheck, typically within 24 to 72 hours of discharge, at general-practice pricing."}}
  ]
}`;
