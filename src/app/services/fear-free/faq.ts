// Fear Free service-page FAQ — Month 1 finalized copy (owner-confirmed June 2026).
// `fearFreeFaqs` renders on the page; `fearFreeFaqSchema` is the verbatim
// FAQPage JSON-LD (condensed answers, authored separately from the on-page text).

export interface ServiceFaq {
  question: string;
  answer: string;
}

export const fearFreeFaqs: ServiceFaq[] = [
  {
    question:
      "What does it mean for a veterinary hospital to be Fear Free certified?",
    answer:
      "A Fear Free certified hospital is one where every clinical team member has completed the Fear Free certification program founded by veterinarian Dr. Marty Becker, and where the physical environment and visit workflow are designed to reduce fear, anxiety, and stress in pets. At Red Rock Veterinary Health, 100% of clinical staff hold individual Fear Free certifications. Colorado Springs has more than one Fear Free certified hospital, but Red Rock is the only one designed from the ground up, in both physical layout and visit workflow, around Fear Free principles, and the only Fear Free hospital on the Westside. For us, Fear Free is not a staff initiative layered onto a conventional clinic; it is the entire operating model.",
  },
  {
    question:
      "How is Fear Free different from a clinic that just says it has 'gentle handling'?",
    answer:
      "Fear Free is a formal certification program with required coursework, exams, and continuing education. A clinic with 'gentle handling' usually means one or two staff members take care to be kind during visits. A Fear Free certified hospital means every team member has been trained in evidence-based low-stress handling, FAS (fear, anxiety, stress) scoring, species-appropriate body language, pre-visit medication protocols, and intervention thresholds during procedures. The difference is auditable training, not staff personality.",
  },
  {
    question: "Does Red Rock have separate areas for cats and dogs?",
    answer:
      "Yes. We have one shared entrance for all species, but fully separate waiting rooms, exam rooms, and treatment areas for cats and dogs, so cats do not see, hear, or smell dogs during a typical visit. We are the only hospital in Colorado Springs that separates the waiting, exam, and treatment areas this way. Cat rooms are designed with quieter equipment, dim lighting, and Feliway pheromone diffusers; dog rooms have non-slip flooring and Adaptil diffusers.",
  },
  {
    question: "What is a 'happy visit' and can I bring my pet to one?",
    answer:
      "A happy visit is a short no-procedure appointment where your pet comes in just to get treats, meet the team, and leave. There is no exam, no needles, nothing your pet would associate with stress. We use happy visits to build positive associations for puppies, rescues, and anxious pets, and we use victory visits to rebuild a pet's confidence after a hard experience. Both are encouraged and always free. Yes, you can absolutely bring your pet in for one. Call us to schedule.",
  },
  {
    question:
      "Do you use pheromones, calming music, or other environmental tools?",
    answer:
      "Yes. Cat exam areas use Feliway pheromone diffusers, which mimic facial pheromones cats use to mark safe territory. Dog exam areas use Adaptil diffusers, which mimic canine appeasing pheromones from nursing mothers. We use calming music or white noise in procedure areas, dim lighting in cat spaces, and non-slip flooring throughout to reduce slipping anxiety. These are small details that add up to a measurably calmer visit.",
  },
  {
    question:
      "My pet shuts down completely at the vet. What can you do differently?",
    answer:
      "A shut-down pet is in a high-FAS state that traditional vet visits often make worse. At Red Rock we use a 'pause protocol': if your pet enters the yellow or red FAS zone during the exam, we stop the procedure, reassess, and try a different approach. That might mean examining your pet on the floor instead of the table, in your lap instead of on the floor, in their carrier instead of out of it, or rescheduling with pre-visit medication onboard (commonly gabapentin, trazodone, clonidine, acepromazine, or dexmedetomidine, often alongside calming nutraceuticals such as pheromones, CBD, or milk-protein supplements). For reactive, fearful, or rescue pets, we often plan multiple short visits rather than one long appointment.",
  },
  {
    question: "My dog is reactive to other dogs. How do you handle that?",
    answer:
      "For dog-reactive pets, we use car check-in (you text us when you arrive and wait in your car), bring you straight from your car into an exam room as soon as it is ready, and time your appointment to minimize overlap with other dog clients. We never ask a reactive dog to wait in a lobby or hallway with other animals. If your dog has a history of dog-directed aggression, please tell us at booking so we can structure the visit appropriately.",
  },
  {
    question: "My dog is terrified of muzzles. Can you work around that?",
    answer:
      "Yes. We rarely use muzzles, and we lean on positive reinforcement instead of restraint whenever it is safe to do so: treats, distraction, slow handling, and positional adjustments. If your dog's stress rises during a procedure, we stop and try a different approach rather than forcing it. For the rare pet that genuinely needs restraint for safety, we use the least restrictive option that works, and we always talk it through with you first.",
  },
  {
    question:
      "Will Fear Free care take longer than a regular vet appointment?",
    answer:
      "A first appointment for a new patient typically runs 45 to 60 minutes, which is longer than a traditional 15-to-20-minute vet exam. Returning patients with established history usually book a 30-minute appointment for routine care. The extra time on first visits is intentional: we are gathering behavioral history, building rapport, and avoiding the stress of a rushed exam. For follow-up visits we are more efficient because your pet already knows the building, the team, and the routine.",
  },
  {
    question:
      "Can you handle medical procedures, not just wellness exams, with Fear Free protocols?",
    answer:
      "Yes, and this is one of the most important things about Fear Free as a medical standard. We use Fear Free handling for vaccines, bloodwork, nail trims, ultrasound, X-rays, dental procedures, mass aspirates, sedation, and anesthesia induction. Anxious pets get more accurate diagnostics, smoother anesthesia (because lower baseline stress means lower required induction dose), and faster post-procedure recovery. Fear Free is not a substitute for advanced medicine, it makes the medicine work better.",
  },
  {
    question:
      "My pet is on a tight budget. Will Fear Free care fit my situation?",
    answer:
      "Our standard exam fee is $79, with a same-day (urgent) exam at $109, in the same range as other independent Colorado Springs Westside veterinary hospitals. We do not charge an extra Fear Free fee; the handling, the environment, and the protocols are how we practice medicine on every patient. For straightforward wellness care, the Red Rock approach is comparable in cost to other quality independent practices in town, and we will discuss treatment options at multiple price points whenever a workup or procedure is on the table.",
  },
];

// Verbatim FAQPage JSON-LD from Document 4 (condensed answers authored for schema).
export const fearFreeFaqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What does it mean for a veterinary hospital to be Fear Free certified?","acceptedAnswer":{"@type":"Answer","text":"A Fear Free certified hospital is one where every clinical team member has completed the Fear Free certification program and the physical environment and visit workflow are designed to reduce fear, anxiety, and stress in pets. At Red Rock Veterinary Health, 100% of clinical staff hold individual Fear Free certifications. Colorado Springs has more than one Fear Free certified hospital, but Red Rock is the only one designed from the ground up, in both layout and visit workflow, around Fear Free principles, and the only Fear Free hospital on the Westside."}},
    {"@type":"Question","name":"How is Fear Free different from a clinic that just says it has gentle handling?","acceptedAnswer":{"@type":"Answer","text":"Fear Free is a formal certification program with required coursework, exams, and continuing education. A clinic with gentle handling usually means one or two staff members are kind. A Fear Free certified hospital means every team member is trained in evidence-based low-stress handling, FAS scoring, pre-visit medication protocols, and intervention thresholds. The difference is auditable training."}},
    {"@type":"Question","name":"Does Red Rock have separate areas for cats and dogs?","acceptedAnswer":{"@type":"Answer","text":"Yes. We have one shared entrance for all species but fully separate waiting rooms, exam rooms, and treatment areas for cats and dogs, so cats do not see, hear, or smell dogs. Red Rock is the only hospital in Colorado Springs that separates the waiting, exam, and treatment areas this way. Cat rooms have quieter equipment, dim lighting, and Feliway diffusers; dog rooms have non-slip flooring and Adaptil diffusers."}},
    {"@type":"Question","name":"My pet shuts down completely at the vet. What can you do differently?","acceptedAnswer":{"@type":"Answer","text":"We use a pause protocol: if your pet enters the yellow or red FAS zone during the exam, we stop, reassess, and try a different approach. That might mean examining on the floor, in your lap, in the carrier, or rescheduling with pre-visit medication such as gabapentin, trazodone, clonidine, acepromazine, or dexmedetomidine. For reactive or fearful pets, we often plan multiple short visits."}},
    {"@type":"Question","name":"What is a happy visit and can I bring my pet to one?","acceptedAnswer":{"@type":"Answer","text":"A happy visit is a short no-procedure appointment where your pet comes in just for treats and to meet the team. We use happy visits to build positive associations and victory visits to rebuild confidence after a hard experience. Both are encouraged and always free."}},
    {"@type":"Question","name":"My dog is reactive to other dogs. How do you handle that?","acceptedAnswer":{"@type":"Answer","text":"We use car check-in, bring you straight from your car into an exam room, and time your appointment to minimize overlap with other dog clients. We never ask a reactive dog to wait in a lobby with other animals."}},
    {"@type":"Question","name":"My dog is terrified of muzzles. Can you work around that?","acceptedAnswer":{"@type":"Answer","text":"Yes. We rarely use muzzles, and we lean on positive reinforcement instead of restraint whenever it is safe: treats, distraction, slow handling, and positional adjustments. If your dog's stress rises during a procedure, we stop and try a different approach. For the rare pet that genuinely needs restraint for safety, we use the least restrictive option that works and always discuss it with you first."}},
    {"@type":"Question","name":"Do you use pheromones, calming music, or other environmental tools?","acceptedAnswer":{"@type":"Answer","text":"Yes. Cat areas use Feliway diffusers, dog areas use Adaptil diffusers. We use calming music or white noise in procedure areas, dim lighting in cat spaces, and non-slip flooring throughout."}},
    {"@type":"Question","name":"Will Fear Free care take longer than a regular vet appointment?","acceptedAnswer":{"@type":"Answer","text":"A first appointment for a new patient typically runs 45 to 60 minutes, longer than a traditional 15-to-20-minute exam. Returning patients book a 30-minute appointment for routine care."}},
    {"@type":"Question","name":"Can you handle medical procedures with Fear Free protocols, not just wellness exams?","acceptedAnswer":{"@type":"Answer","text":"Yes. We use Fear Free handling for vaccines, bloodwork, nail trims, ultrasound, X-rays, dental procedures, mass aspirates, sedation, and anesthesia induction. Anxious pets get more accurate diagnostics, smoother anesthesia (lower baseline stress means lower required induction dose), and faster post-procedure recovery."}},
    {"@type":"Question","name":"My pet is on a tight budget. Will Fear Free care fit my situation?","acceptedAnswer":{"@type":"Answer","text":"Red Rock's standard exam fee is $79, with a same-day urgent exam at $109, in the same range as other independent Colorado Springs Westside veterinary hospitals. We do not charge an extra Fear Free fee. For workups and procedures, we discuss treatment options at multiple price points."}}
  ]
}`;
