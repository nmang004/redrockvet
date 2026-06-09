// Dental service-page FAQ — Month 1 finalized copy (owner-confirmed June 2026).
// `dentalFaqs` renders on the page; `dentalFaqSchema` is the verbatim FAQPage JSON-LD.

import type { ServiceFaq } from "../fear-free/faq";

export const dentalFaqs: ServiceFaq[] = [
  {
    question: "How much does a dog or cat dental cleaning cost at Red Rock?",
    answer:
      "A standard dental procedure at Red Rock is $999. That includes pre-anesthetic bloodwork, IV catheter and fluids, full general anesthesia with continuous monitoring, full-mouth digital dental radiographs, ultrasonic scaling above and below the gumline, polishing, fluoride treatment, and a discharge consult with one of our doctors. Extractions and any seal-and-bonding work are not included in that price; they are billed separately and we always discuss them with you before performing any additional work. Because the largest cost variable is extractions and oral surgery, and we cannot fully estimate that until dental X-rays show what is below the gumline, we call you with an updated estimate before proceeding.",
  },
  {
    question:
      "What does a 'complete oral health assessment and treatment' (COHAT) include?",
    answer:
      "A COHAT is the proper name for what most people call a 'dental cleaning.' At Red Rock it includes pre-anesthetic evaluation, IV catheter placement and fluid support, induction of general anesthesia, intubation to protect the airway, continuous monitoring (ECG, blood pressure, pulse oximetry, capnography, temperature), full-mouth digital dental X-rays, ultrasonic scaling, hand scaling, polishing, fluoride application, periodontal probing and charting, and a full doctor exam of each tooth. If we find pathology during the procedure (which is common, dental disease is the most under-diagnosed condition in pets), we call you to discuss treatment options before extracting.",
  },
  {
    question: "Is anesthesia safe for my pet's dental cleaning?",
    answer:
      "Modern veterinary anesthesia, used properly, is extraordinarily safe. The most-cited veterinary anesthesia mortality study (Brodbelt et al., 2008, the CEPSAF study) reported mortality risk of roughly 0.05% in healthy dogs (about 1 in 2,000) and 0.11% in healthy cats undergoing routine procedures. At Red Rock we follow AAHA anesthesia guidelines on every patient: pre-anesthetic bloodwork to flag hidden risks, IV catheter and fluid support throughout the procedure, intubation, and a dedicated technician continuously monitoring ECG, blood pressure, pulse oximetry, capnography, and temperature, plus active warming to prevent hypothermia. For older or medically complex pets, we tailor the anesthetic protocol to the patient using the ASA physical status classification system.",
  },
  {
    question: "My pet is older. Is anesthesia still safe?",
    answer:
      "Age alone is not a disease, and older pets are not categorically high-risk for anesthesia. What matters is overall health, organ function, and any concurrent conditions. We run pre-anesthetic bloodwork on every senior patient and assign an ASA physical status classification to guide protocol decisions. For geriatric patients with heart murmurs or other concerning findings, we may recommend additional pre-anesthetic workup such as chest radiographs or an echocardiogram before scheduling. For senior pets we use lower drug doses, slower induction, more aggressive temperature control, longer recovery monitoring, and sometimes adjuvant medications to reduce anesthetic depth. We routinely perform dental procedures on pets managing cardiac and renal disease, and in select cases we coordinate with veterinary anesthesiologist specialists for an added layer of planning and oversight. Many of our most rewarding dental cases are seniors who get years more of comfortable life after we address chronic oral pain.",
  },
  {
    question: "What about anesthesia-free dental cleanings?",
    answer:
      "Anesthesia-free dental 'cleanings' are not endorsed by the American Veterinary Dental College, the American Veterinary Medical Association, or any major veterinary professional body. The reason: most dental disease in pets occurs below the gumline, where it cannot be seen, cleaned, or radiographed without anesthesia. A scaling that only addresses visible tartar makes the teeth look better cosmetically while leaving advanced periodontal disease unaddressed, which can lead to pain, abscess, and tooth loss. Anesthesia-free cleanings can also be physically and emotionally traumatic for pets, since they require prolonged manual restraint. We do not offer them.",
  },
  {
    question: "Why do you take dental X-rays on every patient?",
    answer:
      "Most dental disease in dogs and cats occurs below the gumline, where it cannot be seen on a visual exam. Peer-reviewed studies (Verstraete et al., AJVR) showed that full-mouth radiography revealed significant clinical findings in roughly 30 to 50% of dogs and cats that looked clinically normal on visual exam alone, and in more than half of pets with visible disease. We use full-mouth digital dental radiography on every patient because cleaning teeth without X-rays misses the part of the mouth where most disease lives. Common findings only visible on X-ray include tooth root abscess, resorptive lesions in cats (extremely painful, and very common), retained deciduous (baby) teeth in dogs, and bone loss from periodontal disease.",
  },
  {
    question: "How do I know if my dog or cat needs a dental cleaning?",
    answer:
      "Reliable signs include bad breath (the most common, and most owners normalize it), visible tartar or yellow-brown buildup on the teeth, red or bleeding gums, reluctance to chew hard food or toys, pawing at the mouth or face, drooling more than usual, a head tilt or favoring one side when eating, weight loss in older pets, and increased hiding (especially in cats, who are particularly good at hiding oral pain). Any cat over age 3 with visible dental disease almost certainly needs intervention. A dental exam during a wellness visit will give you a clear recommendation.",
  },
  {
    question: "How often does my pet need a professional dental cleaning?",
    answer:
      "It depends on breed, mouth conformation, home care, and individual risk. Small-breed dogs (Yorkies, Chihuahuas, Dachshunds, Pomeranians) often need annual cleanings starting around age 2 because their crowded mouths develop periodontal disease quickly. Large-breed dogs may go 2 to 3 years between cleanings. Cats are highly variable: some need yearly cleanings starting age 5, others go their whole life with minimal disease. We make a personalized recommendation based on what we see during your wellness exam.",
  },
  {
    question:
      "What can I do at home between professional dental cleanings?",
    answer:
      "Daily toothbrushing with a pet-safe enzymatic toothpaste is the single most effective home dental measure, and most dogs (and many cats) will tolerate it well if you build the habit gradually. Beyond brushing, look for products carrying the VOHC (Veterinary Oral Health Council) Seal of Acceptance, which means the product has been independently shown to reduce plaque or tartar. VOHC-accepted dental chews, water additives, and prescription dental diets such as Hill's t/d, Royal Canin Dental, and Purina Pro Plan Veterinary DH can meaningfully extend the interval between professional cleanings. One important caution: avoid hard chews like real bones, antlers, ice cubes, and hard nylon toys. These are the most common cause of slab fractures of the upper carnassial teeth in our patient population. If you can't dent the chew with your fingernail, it's too hard for your dog's teeth.",
  },
  {
    question: "Is dental disease really that big a deal in dogs and cats?",
    answer:
      "Yes. Periodontal disease is the most commonly diagnosed disease in dogs and cats over age 3, with more than 80% of dogs and roughly 70% of cats showing some degree of periodontal disease by middle age (AVMA and AVDC educational references). It is genuinely painful, pets hide oral pain extremely well, and it is a chronic bacterial infection that affects the heart, kidneys, and liver through bacteremia. It is also preventable with regular professional cleanings and home care. We see the difference in our patients: pets get more playful, eat better, and seem visibly more comfortable after a good dental procedure. The phrase 'they aren't slowing down because they're old, they're slowing down because their mouth hurts' applies far more often than owners expect.",
  },
  {
    question:
      "Can my pet be treated with Fear Free protocols during dental procedures?",
    answer:
      "Yes. Fear Free handling applies just as much to dental procedures as to wellness exams. Pets receive pre-visit anti-anxiety medication if indicated, calm intake with no lobby waiting, gentle induction in a quiet room, and a Fear Free trained recovery technician staying with them as they wake up. Anxious pets handle anesthesia better when they are not stressed going into induction, which means a lower required induction dose, smoother anesthetic course, and faster post-procedure recovery.",
  },
];

// Verbatim FAQPage JSON-LD from Document 6 (condensed answers authored for schema).
export const dentalFaqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How much does a dog or cat dental cleaning cost at Red Rock?","acceptedAnswer":{"@type":"Answer","text":"A standard dental procedure at Red Rock is $999, which includes pre-anesthetic bloodwork, IV catheter and fluids, full general anesthesia with continuous monitoring, full-mouth digital dental radiographs, ultrasonic scaling above and below the gumline, polishing, fluoride treatment, and a doctor discharge consult. Extractions and any seal-and-bonding work are billed separately and discussed with you before they are performed. We call you with an updated estimate before doing any additional work."}},
    {"@type":"Question","name":"What does a complete oral health assessment and treatment (COHAT) include?","acceptedAnswer":{"@type":"Answer","text":"A COHAT includes pre-anesthetic evaluation, IV catheter and fluid support, general anesthesia, intubation, continuous monitoring (ECG, blood pressure, pulse oximetry, capnography, temperature), full-mouth digital dental X-rays, ultrasonic and hand scaling, polishing, fluoride, periodontal probing and charting, and a full doctor exam of each tooth."}},
    {"@type":"Question","name":"Is anesthesia safe for my pet's dental cleaning?","acceptedAnswer":{"@type":"Answer","text":"Modern veterinary anesthesia is extraordinarily safe. Brodbelt et al. (2008) reported mortality risk of roughly 0.05% in healthy dogs and 0.11% in healthy cats undergoing routine procedures. At Red Rock we follow AAHA anesthesia guidelines on every patient, with pre-anesthetic bloodwork, IV fluids, intubation, continuous monitoring of ECG, blood pressure, pulse oximetry, capnography, and temperature, active warming, and ASA classification-driven protocol decisions."}},
    {"@type":"Question","name":"My pet is older. Is anesthesia still safe?","acceptedAnswer":{"@type":"Answer","text":"Age is not a disease. What matters is overall health, organ function, and concurrent conditions. We run pre-anesthetic bloodwork on every senior patient and assign ASA physical status. For geriatric patients with murmurs or other findings we may recommend additional workup such as chest radiographs or echocardiogram. We routinely perform dental procedures on pets with cardiac and renal disease, and in select cases coordinate with veterinary anesthesiologist specialists. Many of our most rewarding dental cases are seniors who get years more of comfortable life after we address chronic oral pain."}},
    {"@type":"Question","name":"What about anesthesia-free dental cleanings?","acceptedAnswer":{"@type":"Answer","text":"Anesthesia-free dental cleanings are not endorsed by the American Veterinary Dental College or the American Veterinary Medical Association. Most dental disease in pets occurs below the gumline, where it cannot be cleaned or radiographed without anesthesia. We do not offer them."}},
    {"@type":"Question","name":"Why do you take dental X-rays on every patient?","acceptedAnswer":{"@type":"Answer","text":"Most dental disease in pets occurs below the gumline. Peer-reviewed studies (Verstraete et al., AJVR) showed full-mouth radiography revealed significant findings in roughly 30 to 50% of dogs and cats that look clinically normal, and in more than half of pets with visible disease. We use full-mouth digital dental radiography on every patient to identify tooth root abscess, feline resorptive lesions, retained deciduous teeth, and bone loss."}},
    {"@type":"Question","name":"How do I know if my dog or cat needs a dental cleaning?","acceptedAnswer":{"@type":"Answer","text":"Signs include bad breath, visible tartar, red or bleeding gums, reluctance to chew, pawing at the face, drooling more than usual, favoring one side when eating, weight loss in older pets, and increased hiding (especially in cats). Any cat over 3 with visible dental disease likely needs intervention."}},
    {"@type":"Question","name":"How often does my pet need a professional dental cleaning?","acceptedAnswer":{"@type":"Answer","text":"It depends on breed and home care. Small-breed dogs often need annual cleanings starting around age 2. Large-breed dogs may go 2 to 3 years between cleanings. Cats are variable. We make a personalized recommendation based on what we see during your wellness exam."}},
    {"@type":"Question","name":"What can I do at home between professional dental cleanings?","acceptedAnswer":{"@type":"Answer","text":"Daily toothbrushing with a pet-safe enzymatic toothpaste is the most effective home measure. Look for VOHC (Veterinary Oral Health Council) Seal of Acceptance on dental chews, water additives, and prescription dental diets like Hill's t/d, Royal Canin Dental, or Purina Pro Plan Veterinary DH. Avoid hard chews like real bones, antlers, ice cubes, and hard nylon toys, which commonly cause slab fractures of the upper carnassial teeth."}},
    {"@type":"Question","name":"Is dental disease really that big a deal in dogs and cats?","acceptedAnswer":{"@type":"Answer","text":"Yes. Periodontal disease is the most commonly diagnosed disease in pets over age 3, with more than 80% of dogs and roughly 70% of cats showing some degree of periodontal disease by middle age. It is painful, it is a chronic bacterial infection that affects the heart, kidneys, and liver through bacteremia, and it is preventable with regular cleanings and home care."}},
    {"@type":"Question","name":"Can my pet be treated with Fear Free protocols during dental procedures?","acceptedAnswer":{"@type":"Answer","text":"Yes. Fear Free handling applies to dental procedures: pre-visit anti-anxiety medication if indicated, calm intake with no lobby waiting, gentle induction in a quiet room, and a Fear Free trained recovery technician staying with the pet as they wake up. Anxious pets handle anesthesia better when stress is lower at induction."}}
  ]
}`;
