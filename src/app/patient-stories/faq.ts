// Patient Stories FAQ — Month 3 copy (composite case-illustration page).
// `patientStoriesFaqs` renders on the page; `patientStoriesFaqSchema` is the
// verbatim FAQPage JSON-LD. The six schema `name` values are byte-identical to
// the six on-page `question` strings, and every `acceptedAnswer.text` is a
// sentence-level subset of the visible answer it corresponds to, so the
// structured data never states anything a reader cannot see on the page.
// The FAQPage carries a `description` that repeats the composite disclaimer,
// because an AI engine may quote the schema without the page.
//
// The one deliberate schema/page difference: the "only hospital in Colorado
// Springs" exclusivity claim stays in body copy and is omitted from the schema
// answer, so a falsifiable competitive claim is not shipped as machine-readable
// structured data. Do not add it back without Dr. Unsell re-confirming it.
//
// IMPORTANT: every case on this page is a COMPOSITE illustration. There are no
// real patient names, no photographs, no client quotes, and no outcome
// statistics anywhere in this module. Do not add any without written client
// consent and Dr. Unsell's sign-off.

import type { ServiceFaq } from "../services/fear-free/faq";

export const patientStoriesFaqs: ServiceFaq[] = [
  {
    question: "Are these real patients?",
    answer:
      "No, and we would rather say that at the top than bury it. The three cases on this page are composites: illustrations assembled from the kinds of presentations we see regularly, written to show how a visit actually goes. They are not individual animals. The details are illustrative. We have not invented names, photographs, client quotes, or outcome statistics, and nothing on this page should be read as a promised result for your pet.",
  },
  {
    question: "Why not publish real case stories with names and photos instead?",
    answer:
      "Because a real patient story requires a real client's informed permission and a medical record accurate to the detail, and we do not have either yet. Publishing a specific named patient without that would mean using a family's pet without asking, or inventing one and presenting it as true. Neither is acceptable. Clearly labeled composites are the honest version of this page. If we publish consented patient stories later, they will say so, and these will still say what they are.",
  },
  {
    question: "Does separating cats and dogs actually change the medicine, or is it just a comfort feature?",
    answer:
      "It changes the medicine. Red Rock has fully separate cat and dog waiting, exam, and treatment areas. We are the only hospital in Colorado Springs that separates them this way. A cat who has spent twenty minutes a few feet from a barking dog reaches the exam table already worked up, and the heart rate, blood pressure, and laboratory values we record there can reflect the wait as much as the cat. Those are the same numbers we use to make decisions. Lower stress is not only kinder; it makes the findings more likely to describe your pet rather than your pet's panic.",
  },
  {
    question: "Why does stress matter so much for a diabetic cat's test results?",
    answer:
      "Because a single reading taken from a frightened cat in an exam room does not by itself separate a diabetic cat from a scared one, and it is a poor basis for changing a dose. So we pair calm handling with laboratory work that covers a longer window than the last ten minutes, chosen with you at the visit, and with what you are seeing at home. It also matters practically: a cat who finds the visit tolerable is a cat who keeps coming back, and a frequent way feline diabetes management falls apart, in our experience, is that the rechecks stop.",
  },
  {
    question: "My senior dog is slowing down. Is that just old age?",
    answer:
      "Slowing down is a sign, not a stage of life. AAHA teaches that old age is not a disease. Hesitating on stairs, no longer jumping into the car, struggling to rise after a nap, restlessness at night, and new irritability when touched are early signs of osteoarthritis, and in an older dog they often sit alongside kidney, thyroid, dental, or cardiac changes that alter how the pain can safely be treated. AAHA recommends senior dogs be examined at least twice a year, with bloodwork and urinalysis every 6 to 12 months. Bring a phone video of your dog moving around the house; AAHA specifically endorses owner video, and it shows things an exam room does not.",
  },
  {
    question: "If one of these cases became an emergency at night, could Red Rock help?",
    answer:
      "No. We are open Monday through Friday, 8 a.m. to 5 p.m., with no overnight staff and no after-hours on-call line, and we are a general practice rather than an emergency or specialty hospital. For nights, weekends, and holidays, go directly to Animal ER Care at 5520 N. Nevada Ave, Ste 150, (719) 260-7141, open 24/7; or Uintah Pet Emergency at 1635 W. Uintah St, Ste E, (719) 633-3214, open daily from noon to midnight, which is not overnight. Then call us the next business day at (719) 204-3647; we request the emergency records, reconcile the new medications with your pet's regular ones, and schedule the recheck.",
  },
];

// Verbatim FAQPage JSON-LD.
// `name` values are byte-identical to the on-page questions above; each answer
// text is a sentence-level subset of the corresponding visible answer.
// The FAQPage-level `description` repeats the composite disclaimer so that an
// engine quoting the structured data alone still carries it.
export const patientStoriesFaqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Patient Stories - Red Rock Veterinary Health",
  "description": "Composite case illustrations from Red Rock Veterinary Health, a Fear Free general practice in Colorado Springs, Colorado. These are composite examples that represent the kinds of cases the practice sees, not individual patients. Details are illustrative. No real patient names, photographs, client quotes, or outcome statistics are used.",
  "mainEntity": [
    {"@type":"Question","name":"Are these real patients?","acceptedAnswer":{"@type":"Answer","text":"No, and we would rather say that at the top than bury it. The three cases on this page are composites: illustrations assembled from the kinds of presentations we see regularly, written to show how a visit actually goes. They are not individual animals. The details are illustrative. We have not invented names, photographs, client quotes, or outcome statistics, and nothing on this page should be read as a promised result for your pet."}},
    {"@type":"Question","name":"Why not publish real case stories with names and photos instead?","acceptedAnswer":{"@type":"Answer","text":"Because a real patient story requires a real client's informed permission and a medical record accurate to the detail, and we do not have either yet. Publishing a specific named patient without that would mean using a family's pet without asking, or inventing one and presenting it as true. Neither is acceptable. Clearly labeled composites are the honest version of this page. If we publish consented patient stories later, they will say so, and these will still say what they are."}},
    {"@type":"Question","name":"Does separating cats and dogs actually change the medicine, or is it just a comfort feature?","acceptedAnswer":{"@type":"Answer","text":"It changes the medicine. Red Rock has fully separate cat and dog waiting, exam, and treatment areas. A cat who has spent twenty minutes a few feet from a barking dog reaches the exam table already worked up, and the heart rate, blood pressure, and laboratory values we record there can reflect the wait as much as the cat. Those are the same numbers we use to make decisions. Lower stress is not only kinder; it makes the findings more likely to describe your pet rather than your pet's panic."}},
    {"@type":"Question","name":"Why does stress matter so much for a diabetic cat's test results?","acceptedAnswer":{"@type":"Answer","text":"Because a single reading taken from a frightened cat in an exam room does not by itself separate a diabetic cat from a scared one, and it is a poor basis for changing a dose. So we pair calm handling with laboratory work that covers a longer window than the last ten minutes, chosen with you at the visit, and with what you are seeing at home. It also matters practically: a cat who finds the visit tolerable is a cat who keeps coming back, and a frequent way feline diabetes management falls apart, in our experience, is that the rechecks stop."}},
    {"@type":"Question","name":"My senior dog is slowing down. Is that just old age?","acceptedAnswer":{"@type":"Answer","text":"Slowing down is a sign, not a stage of life. AAHA teaches that old age is not a disease. Hesitating on stairs, no longer jumping into the car, struggling to rise after a nap, restlessness at night, and new irritability when touched are early signs of osteoarthritis, and in an older dog they often sit alongside kidney, thyroid, dental, or cardiac changes that alter how the pain can safely be treated. AAHA recommends senior dogs be examined at least twice a year, with bloodwork and urinalysis every 6 to 12 months."}},
    {"@type":"Question","name":"If one of these cases became an emergency at night, could Red Rock help?","acceptedAnswer":{"@type":"Answer","text":"No. We are open Monday through Friday, 8 a.m. to 5 p.m., with no overnight staff and no after-hours on-call line, and we are a general practice rather than an emergency or specialty hospital. For nights, weekends, and holidays, go directly to Animal ER Care at 5520 N. Nevada Ave, Ste 150, (719) 260-7141, open 24/7; or Uintah Pet Emergency at 1635 W. Uintah St, Ste E, (719) 633-3214, open daily from noon to midnight, which is not overnight. Then call us the next business day at (719) 204-3647; we request the emergency records, reconcile the new medications with your pet's regular ones, and schedule the recheck."}}
  ]
}`;
