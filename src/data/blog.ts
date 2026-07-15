export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  imageAlt: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  categories: string[];
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    focusKeywords: string[];
  };
  // Optional FAQ block rendered at the end of the post. `faqs` is the on-page
  // copy; `faqJsonLd` is the verbatim FAQPage JSON-LD string emitted into the page.
  faqs?: { question: string; answer: string }[];
  faqJsonLd?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "pet-emergency-after-hours-colorado-springs",
    title: "What to Do If Your Pet Has an Emergency After Our Hours: A Colorado Springs Guide",
    slug: "pet-emergency-after-hours-colorado-springs",
    excerpt: "Dr. Unsell's guide to after-hours pet emergencies in Colorado Springs: who to call, where to go tonight, and what can safely wait until 8 a.m.",
    content: `[[QUICKTAKE]] Quick take
- Save two numbers in your phone right now: Animal ER Care [(719) 260-7141](tel:719-260-7141) (open 24/7) and Uintah Pet Emergency [(719) 633-3214](tel:719-633-3214) (open daily until midnight).
- Breathing trouble, collapse, seizures, bloat, a blocked cat, or major trauma: go now. Do not wait for morning.
- Unsure? Call the emergency hospital and describe what you see. Triage calls are free, and they will tell you honestly.
- Whatever happens overnight, call us at [(719) 204-3647](tel:719-204-3647) when we open at 8. We take the handoff from there.

Red Rock is open Monday through Friday, 8 a.m. to 5 p.m. We do not have an overnight staff or an after-hours on-call line, and unlike a lot of veterinary websites, we are not going to bury that fact. Pets do not read the clock, and some of the scariest moments of pet ownership happen at 10 p.m. on a Saturday. So this is the guide I want every one of our clients — and honestly, every pet owner in Colorado Springs — to have saved before they need it.

I am Dr. Robbie Unsell, the owner of Red Rock Veterinary Health on the Westside. Here is exactly what to do when something goes wrong outside our hours: how to tell a go-right-now emergency from something that can safely wait until morning, where to go tonight, and what we do for you the next day.

## Step 1: Check for the go-right-now signs

If your pet has any of the following, do not wait, do not search forums, do not watch and see. Go to an emergency hospital now:

- **Difficulty breathing:** heaving sides, a stretched-out neck, blue or gray gums, or open-mouth breathing in a cat
- **Collapse,** inability to stand, or sudden extreme weakness
- **Seizures:** a first-ever seizure, more than one in a night, or any seizure lasting more than two minutes
- **Unproductive retching with a swollen, tight belly,** especially in large or deep-chested dogs. This can be bloat (GDV), and it is fatal within hours without surgery
- **A male cat straining in the litter box and producing nothing.** A blocked cat is a true emergency; the bladder can rupture and the potassium shift can stop the heart
- **Major trauma:** hit by a car, a fall, a crushing injury, or a dog fight with puncture wounds
- **Bleeding that does not stop** with five minutes of firm pressure, or gums that look white or pale pink
- **Rattlesnake bite:** a real risk on our Westside trails from spring through fall
- **Suspected heatstroke:** collapse or disorientation after exertion in our sun and altitude
- **Straining in labor** for more than 30 minutes with no puppy or kitten produced
- **Known or suspected poisoning:** antifreeze, rodenticide, xylitol gum, human medications, or a large amount of chocolate

[[SAFETY]] If it is on this list, call the emergency hospital while someone else drives, or call from the road. Do not wait until 8 a.m., and do not wait for us to confirm. Minutes matter for every condition above.

## Step 2: Know where you're going tonight

These are the after-hours emergency hospitals we refer our own patients to and coordinate with. Save both numbers now — the middle of the emergency is the worst time to be searching:

- **Animal ER Care** — [(719) 260-7141](tel:719-260-7141) — 5520 N. Nevada Ave, Ste 150. Open 24/7, every day of the year. If it is the middle of the night, this is your door.
- **Uintah Pet Emergency** — [(719) 633-3214](tel:719-633-3214) — 1635 W. Uintah St, Ste E, five minutes from us here on the Westside. Open daily, noon to midnight, including weekends and holidays.

Note the difference: Uintah covers evenings and weekends close to home, but it is not an overnight hospital. After midnight, go to Animal ER Care. Call while you are on the way if you can — telling them "three-year-old male cat, straining, no urine, twenty minutes out" means the team is ready when you walk in. Bring any medications your pet takes, the packaging of anything they ate, and your regular vet's name so records can follow.

### If it might be poisoning, add one more call

For anything your pet ate or licked — chocolate, gum, medications, plants, cleaning products — the two national poison-control lines have veterinary toxicologists on call around the clock: ASPCA Animal Poison Control at [(888) 426-4435](tel:888-426-4435) and Pet Poison Helpline at [(855) 764-7661](tel:855-764-7661). A consultation fee applies, and it is worth every penny: they calculate the actual toxic dose for your pet's weight and give the ER a case number and treatment plan, which often saves you time and money once you arrive. For chocolate specifically, our [chocolate emergency guide](/blog/dog-ate-chocolate-what-to-do-colorado-springs) walks through doses and symptoms.

## Step 3: The "can this wait until morning?" list

Plenty of scary-at-midnight problems are safe to see us for at 8 a.m. — and morning care with your regular vet is calmer, cheaper, and better informed by your pet's history. These can usually wait, provided your pet is otherwise alert, breathing normally, and able to rest:

- A single episode of vomiting or diarrhea in an adult pet who is otherwise behaving normally
- Limping, if your pet can still bear some weight and is not in severe pain
- A torn nail with bleeding that has stopped
- Mild ear scratching, head shaking, or a hot spot
- Itching, mild hives that are fading, or a rash without facial swelling
- Not finishing dinner once, in an adult pet who is otherwise bright
- A small cut that has stopped bleeding and does not gape open

Two honest caveats. First, puppies, kittens, seniors, and pets with chronic conditions have less reserve — the same symptom is more urgent in a twelve-week-old puppy or a fourteen-year-old cat, so call the ER and ask. Second, "wait until morning" means morning: call us at [(719) 204-3647](tel:719-204-3647) right at 8 a.m. and say what happened overnight. We hold same-day urgent slots for exactly this, at $109 for the [urgent exam](/services/urgent-emergency-care).

### While you wait for morning

Let your pet rest somewhere quiet, and check on them every couple of hours. You are watching for change: worsening effort to breathe, new vomiting, gums going pale, or your pet becoming unresponsive to your voice.

- If there has been vomiting, withhold food for the rest of the night but keep fresh water available.
- Do not give human medications. Ibuprofen, acetaminophen, and naproxen are toxic to dogs and cats — "a little Advil for the limp" creates a second, worse emergency.
- Write down times: when symptoms started, how many episodes, and what your pet ate and when. That timeline is genuinely useful to us at 8 a.m.
- If anything moves onto the go-now list overnight, go. The plan can change; the thresholds don't.

### What happens at 8 a.m.

This is the part of the system most people don't see. Red Rock is built to be the daytime anchor in a network that covers your pet around the clock: we handle [same-day urgent medicine](/services/urgent-emergency-care) Monday through Friday, and the emergency hospitals cover the nights and weekends. When your pet is seen overnight, call us the next morning. We request the ER's records, reconcile any new medications with what your pet already takes, and get the recheck scheduled — usually within one to three days. The ER saves your pet's night; we manage your pet's life. How that handoff works is its own post: [what happens after an ER visit](/blog/after-er-visit-follow-up-care-colorado-springs).

[[KEYTAKEAWAY]] The plan fits on a sticky note: go-now signs mean go now. Unsure means call the ER and ask — triage calls are free. Everything else keeps until 8 a.m., when we take it from there: [(719) 204-3647](tel:719-204-3647).`,
    featuredImage: "/blogs/drunsellenjoyingpuppytime.jpg",
    imageAlt: "Dr. Robbie Unsell with a puppy at Red Rock Veterinary Health in Colorado Springs",
    author: "Dr. Robbie Unsell",
    publishedAt: "2026-07-11",
    readingTime: 6,
    categories: ["Emergency Care"],
    tags: ["after hours vet", "emergency vet Colorado Springs", "24 hour vet", "pet emergency", "Colorado Springs"],
    seo: {
      metaTitle: "What to Do If Your Pet Has an Emergency After Our Hours: A Colorado Springs Guide",
      metaDescription: "Red Rock closes at 5 — emergencies don't. A Colorado Springs vet's guide to after-hours pet emergencies: who to call, where to go, and what can wait.",
      focusKeywords: ["after hours emergency vet Colorado Springs", "24 hour vet Colorado Springs", "animal ER Colorado Springs", "my vet is closed", "pet emergency at night", "weekend vet Colorado Springs"]
    },
    faqs: [
      {
        question: "Who do I call if my vet is closed and my pet is sick in Colorado Springs?",
        answer: "Call one of the city's after-hours emergency hospitals: Animal ER Care at (719) 260-7141 (open 24/7) or Uintah Pet Emergency at (719) 633-3214 (open daily until midnight). Describe what you are seeing and they will tell you whether to come in. For suspected poisoning, also call ASPCA Animal Poison Control at (888) 426-4435 or Pet Poison Helpline at (855) 764-7661."
      },
      {
        question: "Does Red Rock Veterinary Health have after-hours emergency care?",
        answer: "No. We are open Monday through Friday, 8 a.m. to 5 p.m., with no overnight staff or on-call line, and we believe in saying that plainly. For after-hours emergencies we refer to Uintah Pet Emergency and Animal ER Care, and we coordinate follow-up care the next business day: records, medication reconciliation, and the recheck."
      },
      {
        question: "What counts as a true pet emergency that cannot wait until morning?",
        answer: "Difficulty breathing, collapse, seizures, unproductive retching with a swollen belly, a male cat who cannot urinate, major trauma, bleeding that will not stop, pale or white gums, rattlesnake bite, suspected heatstroke, stalled labor, and known or suspected poisoning. Any of these means go to an emergency hospital now."
      },
      {
        question: "How do I know if it can wait until morning?",
        answer: "If your pet is alert, breathing normally, and able to rest, then a single vomit, a partial-weight limp, a stopped-bleeding torn nail, mild ear or skin irritation, or one skipped meal can usually wait for a morning urgent appointment. Puppies, kittens, seniors, and chronically ill pets have less reserve — when in doubt, call the emergency hospital and ask; triage calls are free."
      },
      {
        question: "My dog ate something toxic at night. What do I do?",
        answer: "Call a poison control line immediately — ASPCA Animal Poison Control (888) 426-4435 or Pet Poison Helpline (855) 764-7661 — with your dog's weight and the packaging in hand. They will calculate whether the dose is dangerous and coordinate a treatment plan with the emergency hospital. Do not induce vomiting unless a veterinary professional tells you to."
      },
      {
        question: "Will the emergency vet cost more than a regular visit?",
        answer: "Generally yes — emergency hospitals staff doctors, technicians, and equipment around the clock, and their exam fees and treatment costs reflect that. That is exactly why it helps to know which problems genuinely need the ER tonight and which can wait for a $109 same-day urgent exam with us in the morning."
      },
      {
        question: "Should I call Red Rock after an ER visit?",
        answer: "Yes — call us at (719) 204-3647 the next morning. We request the records from the emergency hospital, reconcile any new medications with your pet's regular ones, and schedule the recheck, typically within 24 to 72 hours of discharge. That handoff is a standard part of how we practice."
      },
      {
        question: "Why doesn't Red Rock offer 24/7 emergency care?",
        answer: "Because doing overnight medicine well requires a dedicated overnight hospital, and pretending otherwise would be worse for pets. We chose to be the daytime anchor: same-day urgent care Monday through Friday at general-practice pricing, tight relationships with the city's dedicated emergency hospitals, and coordinated follow-up when your pet comes home. Every pet gets the right door at the right hour."
      }
    ],
    faqJsonLd: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Who do I call if my vet is closed and my pet is sick in Colorado Springs?","acceptedAnswer":{"@type":"Answer","text":"Call one of Colorado Springs' after-hours emergency hospitals: Animal ER Care at (719) 260-7141, open 24/7, or Uintah Pet Emergency at (719) 633-3214, open daily until midnight. For suspected poisoning, also call ASPCA Animal Poison Control at (888) 426-4435 or Pet Poison Helpline at (855) 764-7661."}},
    {"@type":"Question","name":"Does Red Rock Veterinary Health have after-hours emergency care?","acceptedAnswer":{"@type":"Answer","text":"No. Red Rock Veterinary Health is open Monday through Friday, 8 a.m. to 5 p.m., with no overnight staff or on-call line. For after-hours emergencies Red Rock refers to Uintah Pet Emergency and Animal ER Care, then coordinates follow-up care the next business day: records, medication reconciliation, and the recheck."}},
    {"@type":"Question","name":"What counts as a true pet emergency that cannot wait until morning?","acceptedAnswer":{"@type":"Answer","text":"Difficulty breathing, collapse, seizures, unproductive retching with a swollen belly, a male cat who cannot urinate, major trauma, bleeding that will not stop, pale or white gums, rattlesnake bite, suspected heatstroke, stalled labor, and known or suspected poisoning. Any of these means go to an emergency hospital immediately."}},
    {"@type":"Question","name":"How do I know if a pet problem can wait until morning?","acceptedAnswer":{"@type":"Answer","text":"If the pet is alert, breathing normally, and able to rest, a single vomit, a partial-weight limp, a torn nail that has stopped bleeding, mild ear or skin irritation, or one skipped meal can usually wait for a morning urgent appointment. Puppies, kittens, seniors, and chronically ill pets have less reserve; when in doubt, call the emergency hospital and ask."}},
    {"@type":"Question","name":"My dog ate something toxic at night. What do I do?","acceptedAnswer":{"@type":"Answer","text":"Call a veterinary poison control line immediately with the dog's weight and the packaging in hand: ASPCA Animal Poison Control (888) 426-4435 or Pet Poison Helpline (855) 764-7661. Do not induce vomiting unless a veterinary professional says to."}},
    {"@type":"Question","name":"Should I call my regular vet after an emergency room visit?","acceptedAnswer":{"@type":"Answer","text":"Yes. Call the next morning. Red Rock Veterinary Health requests records from the emergency hospital, reconciles new medications with the pet's regular ones, and schedules a recheck, typically within 24 to 72 hours of discharge: (719) 204-3647."}},
    {"@type":"Question","name":"Why doesn't Red Rock Veterinary Health offer 24/7 emergency care?","acceptedAnswer":{"@type":"Answer","text":"Overnight medicine done well requires a dedicated overnight hospital. Red Rock is the daytime anchor: same-day urgent care Monday through Friday at general-practice pricing, referral relationships with Colorado Springs' dedicated emergency hospitals, and coordinated follow-up when the pet comes home."}}
  ]
}`
  },
  {
    id: "after-er-visit-follow-up-care-colorado-springs",
    title: "After the Animal ER: How We Coordinate Your Pet's Follow-Up Care in Colorado Springs",
    slug: "after-er-visit-follow-up-care-colorado-springs",
    excerpt: "Home from the animal ER? Dr. Muelhaupt explains discharge papers, the recheck window, medication reconciliation, and how Red Rock takes the handoff.",
    content: `[[QUICKTAKE]] Quick take
- Call us at [(719) 204-3647](tel:719-204-3647) the morning after any ER visit — even if your pet seems fine. We request the records; you don't have to carry paper.
- Most ER discharges need a recheck with the regular vet within 24 to 72 hours. Your discharge papers say which; we help you read them.
- Bring every new medication to the recheck. Reconciling ER meds with your pet's regular ones is where problems get caught.
- Some symptoms mean going back to the ER, not waiting for us — the red-flag list is below.

The emergency hospital did its job: your pet made it through the night. Now you are home with discharge papers you read at 3 a.m., a pet who smells like a hospital, and a plastic bag of new medications. This post is about what happens next — because the days after an ER visit are when good outcomes are protected or quietly lost, and because "follow up with your regular veterinarian" is the single most common line on a discharge sheet and the least explained.

At Red Rock, taking the handoff from Colorado Springs' emergency hospitals is a routine part of our week. Here is how it works, step by step, and how to be good at your part of it.

## The first morning: one phone call starts everything

Call us at [(719) 204-3647](tel:719-204-3647) the morning after the visit — even if your pet seems back to normal. Tell us three things: where your pet was seen, what the ER said was wrong, and what the discharge papers say about follow-up. From there, the machinery is ours to run: we contact Uintah Pet Emergency or Animal ER Care directly, request the full visit record — doctor's notes, lab results, imaging, medications given — and have it in your pet's chart before the recheck. You do not need to hand-carry paperwork or forward PDFs. The two hospitals send records routinely; this is a practiced handoff, not a favor.

## Reading the discharge papers (the honest version)

ER discharge instructions compress a lot into a page. Four lines deserve your attention:

- **The diagnosis line** — sometimes definitive ("gastric foreign body, removed"), often provisional ("vomiting, suspect dietary indiscretion"). Provisional means the recheck matters more, not less: we are watching to see if the story holds.
- **The medication list** — what was given at the hospital versus what you give at home. The distinction matters for timing tonight's doses.
- **The recheck window** — "recheck in 24-48 hours" or "suture removal in 10-14 days." This is written for your regular vet to execute; it is the line we schedule against.
- **The "return if" list** — the ER's own red flags for your specific case. Tape it to the fridge for the first week.

## The recheck: what we actually do

Most post-ER rechecks happen with us within one to three days of discharge, and they are calmer than you might expect: a full exam with the ER's findings in hand, a look at incisions, bandages, or e-collars, a conversation about how eating, drinking, and energy have looked at home, and a plan for what happens over the next two weeks. Two things we deliberately do not do: we do not re-run diagnostics the ER already ran — we review their results and repeat a test only when the point is to see change, like rechecking kidney values after fluids — and we do not second-guess the ER's overnight decisions to your face. They practice good medicine at 3 a.m.; our job is the follow-through, not the critique.

The recheck also happens at general-practice pricing — a standard exam with us is $79 — and in the same Fear Free rooms your pet already knows. After the adrenaline and expense of an emergency night, both of those matter.

## Medication reconciliation: the unglamorous step that catches problems

Bring every medication to the recheck — the new ER prescriptions and everything your pet was already taking, supplements included. We check the new list against the old one: duplicated drug classes, interactions, doses that assume a weight your pet no longer is, and pain medications that should taper rather than stop. If your pet takes a daily medication for a chronic condition, we confirm whether the ER paused it and when it restarts. This ten-minute review is the single most preventable source of post-ER complications we see.

## When to go back to the ER instead of waiting for us

Follow-up care means knowing which door to use. Go back to the emergency hospital — tonight, not tomorrow — if you see:

- The original symptoms returning with force: repeated vomiting, collapse, or new seizures
- Labored breathing, or gums going pale, gray, or blue
- An incision that opens, bleeds through a bandage, or shows spreading redness and swelling
- A pet who was improving and abruptly is not: refusing water, unresponsive, hiding and unreachable
- Straining to urinate with nothing produced, especially in male cats

Everything milder than that — appetite slow to return, a pet still subdued from medications, questions about doses — is a phone call to us during the day: [(719) 204-3647](tel:719-204-3647), or text [(719) 355-8343](sms:719-355-8343).

## When the ER visit changes your pet's life

Some emergency visits end with more than a recovered pet: they end with a diagnosis. Diabetes discovered because of a crisis. A heart condition found on the X-ray taken for something else. Kidney disease that announced itself all at once. The ER stabilizes the crisis; the long-term management — insulin adjustment, recheck labs, diet changes, the slow tuning of medications over months — is general-practice medicine, and it is where having one team that knows your pet pays off for years. That is exactly what our [chronic disease management](/services/chronic-disease-management) service exists for, and the post-ER recheck is where that longer plan starts.

## The system, plainly stated

Colorado Springs pet owners are well served by a division of labor: dedicated emergency hospitals for nights, weekends, and the truly critical, and daytime practices like ours for everything that benefits from history, continuity, and calm. We are open about being the second kind — and about being built for this handoff: same-day urgent slots Monday through Friday, records requested before you ask, medications reconciled, rechecks at general-practice prices. If the after-hours night ever comes, our [guide to after-hours emergencies](/blog/pet-emergency-after-hours-colorado-springs) tells you exactly what to do. This post is the other half: what we do for you the morning after.

[[KEYTAKEAWAY]] One call the next morning — [(719) 204-3647](tel:719-204-3647) — and the handoff runs itself: records requested, medications reconciled, recheck scheduled within 24 to 72 hours. The ER saves the night; we manage the life.`,
    featuredImage: "/blogs/expertcare.jpg",
    imageAlt: "A Red Rock Veterinary Health team member providing calm follow-up care after an ER visit",
    author: "Dr. Robbie Unsell",
    publishedAt: "2026-07-11",
    readingTime: 6,
    categories: ["Emergency Care"],
    tags: ["ER follow-up", "veterinary recheck", "continuity of care", "Colorado Springs"],
    seo: {
      metaTitle: "After the Animal ER: How We Coordinate Your Pet's Follow-Up Care in Colorado Springs",
      metaDescription: "Home from the animal ER — now what? A Colorado Springs vet on discharge papers, rechecks, medication reconciliation, and how the handoff works.",
      focusKeywords: ["vet follow up after emergency visit", "after ER vet visit what next", "pet discharge instructions", "veterinary recheck Colorado Springs", "ER records transfer vet"]
    },
    faqs: [
      {
        question: "What should I do first after my pet's emergency room visit?",
        answer: "Call your regular veterinarian the next morning — at Red Rock that is (719) 204-3647 — even if your pet seems fine. Tell them where your pet was seen and what the discharge papers say. We request the full ER record directly from the hospital and schedule the recheck the discharge instructions call for, typically within 24 to 72 hours."
      },
      {
        question: "How do you get my pet's records from the emergency hospital?",
        answer: "We request them directly from Uintah Pet Emergency or Animal ER Care — doctor's notes, lab results, imaging, and the medication list — and they arrive before your recheck. You do not need to hand-carry paperwork. This transfer is a routine, practiced part of how the Colorado Springs emergency network works."
      },
      {
        question: "How soon after an ER visit should the recheck happen?",
        answer: "Follow your discharge papers: most say 24 to 72 hours, with suture or bandage checks on their own schedule. If the papers are unclear, call us and read us the line — we will translate it into an actual appointment. Sooner is better than later when the ER diagnosis was provisional."
      },
      {
        question: "Do I have to repeat the tests the ER already ran?",
        answer: "No. We review the ER's results rather than re-running them, and we repeat a test only when the medical point is to see change over time — for example, rechecking kidney values after fluid therapy. Bringing costs down after an expensive emergency night is part of the job."
      },
      {
        question: "The ER prescribed new medications. What if they conflict with my pet's regular ones?",
        answer: "Bring everything — new prescriptions, regular medications, and supplements — to the recheck. We reconcile the lists: interactions, duplicated drug classes, taper schedules, and whether a paused chronic medication should restart. This review is the most preventable source of post-ER complications."
      },
      {
        question: "When should I go back to the ER instead of waiting for my regular vet?",
        answer: "Go back immediately for returning or worsening symptoms: repeated vomiting, collapse, seizures, labored breathing, pale or blue gums, an incision that opens or bleeds through, a pet who becomes unresponsive, or straining to urinate with nothing produced. Milder concerns — slow appetite, medication questions — are a daytime call to us."
      },
      {
        question: "Will the follow-up visit cost as much as the ER visit?",
        answer: "No. Rechecks happen at general-practice pricing — our standard exam is $79 — and any further diagnostics or treatment are discussed and priced with you before we do them. The emergency hospital's fees reflect 24/7 staffing; follow-up care does not need to."
      },
      {
        question: "My pet was diagnosed with a chronic condition at the ER. Can you manage it long-term?",
        answer: "Yes — that transition is exactly what a daytime practice is for. Diabetes, heart disease, kidney disease, and seizure disorders discovered during a crisis all need months of adjustment, recheck labs, and tuning. We take the ER's baseline, build the long-term plan, and manage it with one team that knows your pet."
      }
    ],
    faqJsonLd: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What should I do first after my pet's emergency room visit?","acceptedAnswer":{"@type":"Answer","text":"Call your regular veterinarian the next morning even if the pet seems fine. Red Rock Veterinary Health, (719) 204-3647, requests the full ER record directly from the emergency hospital and schedules the recheck the discharge instructions call for, typically within 24 to 72 hours."}},
    {"@type":"Question","name":"How does my regular vet get records from the emergency hospital?","acceptedAnswer":{"@type":"Answer","text":"Red Rock requests records directly from Uintah Pet Emergency or Animal ER Care, including doctor's notes, lab results, imaging, and medications, and has them before the recheck. Owners do not need to hand-carry paperwork; the transfer is a routine part of the Colorado Springs emergency network."}},
    {"@type":"Question","name":"How soon after an ER visit should a pet have a recheck?","acceptedAnswer":{"@type":"Answer","text":"Most ER discharge instructions call for a recheck with the regular veterinarian within 24 to 72 hours, with suture or bandage checks on their own schedule. When the ER diagnosis is provisional, the recheck matters more, not less."}},
    {"@type":"Question","name":"Do the emergency hospital's tests have to be repeated at the follow-up visit?","acceptedAnswer":{"@type":"Answer","text":"No. The regular veterinarian reviews the ER's results rather than re-running them, repeating a test only when the point is to measure change over time, such as rechecking kidney values after fluid therapy."}},
    {"@type":"Question","name":"What if the ER's new medications conflict with a pet's regular medications?","acceptedAnswer":{"@type":"Answer","text":"Bring all medications and supplements to the recheck for reconciliation: interactions, duplicated drug classes, taper schedules, and whether paused chronic medications should restart. This review is the most preventable source of post-ER complications."}},
    {"@type":"Question","name":"When should a pet go back to the ER instead of waiting for the regular vet?","acceptedAnswer":{"@type":"Answer","text":"Immediately, for returning or worsening symptoms: repeated vomiting, collapse, seizures, labored breathing, pale or blue gums, an incision that opens or bleeds through, unresponsiveness, or straining to urinate with nothing produced."}},
    {"@type":"Question","name":"Does the follow-up visit cost as much as the emergency visit?","acceptedAnswer":{"@type":"Answer","text":"No. Post-ER rechecks at Red Rock Veterinary Health happen at general-practice pricing, with a standard exam at $79, and further diagnostics or treatment are priced and discussed before they are performed."}},
    {"@type":"Question","name":"Can a chronic condition diagnosed at the ER be managed by a regular vet long-term?","acceptedAnswer":{"@type":"Answer","text":"Yes. Conditions like diabetes, heart disease, kidney disease, and seizure disorders discovered during an emergency need months of adjustment and recheck labs. Red Rock takes the ER's baseline and manages the long-term plan through its chronic disease management service."}}
  ]
}`
  },
  {
    id: "fear-free-veterinary-care-colorado-springs",
    title: "Fear Free Veterinary Care in Colorado Springs: What It Actually Means, and Why It Matters for Every Pet",
    slug: "fear-free-veterinary-care-colorado-springs",
    excerpt: "Dr. Unsell explains what Fear Free veterinary care really is, how Red Rock built a whole hospital around it, and why a calm visit is also better medicine.",
    content: `[[QUICKTAKE]] Quick take
- Fear Free is a real veterinary certification, not a marketing label. Every Red Rock team member holds an individual Fear Free certification.
- A calm pet gets better medicine. Stress distorts heart rate, blood pressure, bloodwork values, and orthopedic findings.
- Fear Free is not just for anxious pets. It also keeps easygoing pets easygoing and is especially important for seniors.
- If your pet has had a difficult vet experience before, please tell us at booking. We will plan around it.

[Fear Free veterinary care](/services/fear-free) is a clinical method, not a marketing slogan. It is a certification program founded by veterinarian Dr. Marty Becker that trains practices to recognize, prevent, and treat fear, anxiety, and stress (FAS) in pets during medical visits. At [Red Rock Veterinary Health](/about) in Colorado Springs, every member of our team is Fear Free certified, our facility was designed from the ground up around Fear Free principles, and our entire visit workflow, from the parking lot to checkout, is built to keep your pet's stress level low. That last part matters more than most pet owners realize, because a calm pet gets more accurate medicine.

I am Dr. Unsell. Along with Dr. Muelhaupt and Dr. Clevenger, I see patients on the Westside of Colorado Springs, in a hospital that Dr. Kuca designed and manages around Fear Free principles. In this guide I want to explain what Fear Free actually involves, why our hospital looks and feels different from a traditional vet clinic, and why this approach benefits every pet, not just the anxious ones.

## What Fear Free really means

**A Fear Free clinic does three things differently from a conventional veterinary practice.**

### 1. Every team member is trained to read pet body language

The Fear Free certification program covers feline and canine behavior, low-stress restraint, pheromone use, pre-visit anti-anxiety medication protocols, and species-appropriate handling for everything from a Yorkie's nail trim to a senior cat's bloodwork. Every veterinarian, technician, and front desk team member at Red Rock holds an individual Fear Free certification, and we re-certify annually.

### 2. The physical environment is designed to reduce sensory overload

That includes fully separate waiting rooms, exam rooms, and treatment areas for cats and dogs so cats do not see, hear, or smell dogs, soft surfaces, quieter equipment, pheromone diffusers (Feliway for cats, Adaptil for dogs), non-slip exam room flooring, dim lighting in cat areas, and the option to skip the exam table entirely if your pet is more comfortable on the floor or in your lap.

### 3. The visit protocol prioritizes emotional safety alongside medical findings

We assess and note FAS (fear, anxiety, stress) on every visit using the Fear Free framework, which maps observed behaviors to green, yellow, and red zones on a 0-to-5 scale. If a pet moves into the yellow or red zone during a procedure, we pause, give the pet a break, reassess, and sometimes reschedule with pre-visit anti-anxiety medication onboard. Every exam room is stocked with high-value rewards (treats, peanut butter, churu) so we always have something to redirect attention with.

[[KEYTAKEAWAY]] Fear Free is auditable training, environmental design, and a visit protocol, not staff personality. It is something a clinic does, not something it is.

## Why a calm pet gets better medicine

Stress is not just an emotional problem. It is a clinical problem. Here is what fear and anxiety do to the exam itself:

- Heart rate and blood pressure are inflated by stress, so vital signs taken from a panicked dog do not reflect true baseline cardiac health. We can miss early cardiovascular disease, or chase a phantom problem that disappears at home.
- Bloodwork values shift. Stress hyperglycemia is well documented in cats; a cat that arrived terrified can show artificially high blood glucose, which can be misread as early diabetes.
- Subtle lameness disappears when a dog is too frightened to walk normally. Orthopedic exams are unreliable in a shut-down patient.
- Stress hormones can interfere with post-procedure recovery, including wound healing, which means a calm patient often recovers more smoothly from surgery, [dental work](/services/dental), or biopsies.
- Owners get worse information. A pet that hides every symptom at the clinic gives us very little to work with diagnostically. That can lead to extra tests, missed conditions, or repeat visits.

This is why Fear Free is a medical standard, not a comfort upgrade. There is also a direct anesthesia connection: a pet with a lower baseline catecholamine load at induction typically requires a lower induction dose and has a smoother anesthetic course. Lower stress means more accurate exams, safer anesthesia, and better long-term outcomes.

## Colorado Springs-specific stressors worth knowing about

Two factors uniquely affect pets seen on the Front Range. Both are worth keeping in mind before any vet visit.

- Non-acclimated visiting pets. A dog or cat brought up from sea level to Colorado Springs (around 6,035 feet at the Westside) will breathe harder for the first one to three days while their body adapts to the lower partial pressure of oxygen. That increased respiratory effort can be misread as distress, especially layered on top of vet-visit anxiety. If your visiting family member's pet is coming in soon after arrival, tell us at booking.
- Intense UV and rapid car-cabin heat at altitude. A car that feels mild outside can climb into dangerous temperatures within minutes in our sun. Never leave a pet in the car pre-visit, even briefly. If you arrive early, text us and we will bring you straight back to a room.

## What walking into Red Rock actually looks like

We get asked all the time whether Red Rock's Fear Free environment is really different, or whether it's a label that more clinics could claim. Here is what is concrete:

- No lobby waiting. When you arrive, you can text us from your car and go directly to your exam room when it's ready. Most anxious pets never see the waiting area.
- Separate spaces for cats and dogs. We have one shared entrance, but fully separate waiting rooms, exam rooms, and treatment areas for dogs and cats, so cats do not see, hear, or smell dogs during a typical visit. We are the only hospital in Colorado Springs that separates the waiting, exam, and treatment areas this way.
- In-room procedures whenever possible. Bloodwork, [vaccines](/services/wellness), nail trims, and most minor diagnostics happen in the exam room you and your pet are already in. We do not whisk pets away to a back room unless it is medically necessary.
- Treats, distractions, and floor exams. Every exam room is stocked with high-value rewards. If your dog will not tolerate a table, we examine on the floor. If your cat does best in the carrier, we examine in the carrier.
- Pre-visit calming medications when appropriate. For pets with known FAS, we send home pre-visit medication a few hours before the appointment, chosen for your pet from options like gabapentin, trazodone, clonidine, acepromazine, and dexmedetomidine. We also recommend nutraceuticals and calming aids such as pheromones, CBD, and milk-protein supplements. Most take the edge off so your pet can think clearly and tolerate the exam, rather than heavily sedating them.
- Happy visits and victory visits. We encourage short, no-procedure trips where your pet comes in just for treats and to meet the team, then leaves. Happy visits build positive associations from the start; victory visits rebuild them after a hard experience. Both are always free, and over time they change how your pet feels about the building.
- A pause protocol. If a pet enters the yellow or red FAS zone during a procedure, we stop. We do not push through.

[[KEYTAKEAWAY]] These are not amenities. They are clinical workflow decisions designed to make medicine work better for fearful patients. Every member of the Red Rock team is trained and certified to do them, every visit.

## Fear Free is not just for anxious pets

The most common misconception we hear is, 'My pet is easygoing, so we don't need Fear Free.' But the calm pet who tolerates a rough handling session today is the same pet who gets a little more reluctant next time, then resistant the time after that. Most behavioral problems at the vet are made, not born. By using low-stress handling on every patient from day one, we keep easygoing pets easygoing, and we prevent the steady erosion of trust that turns puppies into hard-to-handle adults.

For senior pets, Fear Free becomes especially important. Older animals have more sensory deficits, more pain, and less tolerance for restraint. A standard vet visit can be physically painful for an arthritic dog or a cat with hypertension. Our slower, gentler workflow is not a luxury for these patients, it is medically necessary.

## If your pet has had a bad experience before, tell us at booking

When you book a first visit, we ask about your pet's history, including any prior bad veterinary experiences, known triggers, and behavior at home. Based on that intake, we decide together whether your pet would benefit from pre-visit anti-anxiety medication, a happy visit before the real exam, or a modified exam plan. None of this costs extra, it is part of how we practice medicine.

If you are switching from another vet because your pet had a bad experience, please tell us. About 1 in 4 of our new clients come to us after a difficult experience at a previous vet, and we structure their first few visits specifically to repair that association. The first appointment may run a little longer than a routine exam because we are not just doing medicine, we are rebuilding trust.`,
    featuredImage: "/blogs/drunsellenjoyingpuppytime.jpg",
    imageAlt: "Dr. Unsell enjoying puppy time at Red Rock Veterinary Health in Colorado Springs",
    author: "Dr. Robbie Unsell",
    publishedAt: "2026-06-09",
    readingTime: 7,
    categories: ["Behavior & Handling", "Fear Free"],
    tags: ["fear free vet Colorado Springs", "fear free certified", "low stress vet near me Colorado Springs", "anxious dog vet", "fearful rescue dog vet", "what is fear free veterinary care"],
    seo: {
      metaTitle: "Fear Free Veterinary Care in Colorado Springs | Red Rock",
      metaDescription: "Dr. Unsell explains what Fear Free veterinary care really is, how Red Rock built a whole hospital around it, and why a calm visit is also better medicine.",
      focusKeywords: ["fear free vet Colorado Springs", "fear free certified", "fear free veterinary care", "anxious dog vet Colorado Springs", "low stress vet near me"]
    },
    faqs: [
      {
        question: "What is Fear Free veterinary care?",
        answer: "Fear Free is a certification program for veterinary practices that trains every team member to recognize and reduce fear, anxiety, and stress in pets during medical visits. It combines behavioral training, environmental design, and modified clinical workflows. At Red Rock Veterinary Health in Colorado Springs, every veterinarian, technician, and front desk team member is individually Fear Free certified."
      },
      {
        question: "Is Red Rock the only Fear Free certified vet in Colorado Springs?",
        answer: "No, and we want to be accurate about that: Colorado Springs has more than one Fear Free certified hospital. What sets Red Rock apart is that we are the only veterinary hospital in Colorado Springs that was designed from the ground up, in both physical layout and visit workflow, around Fear Free principles, and the only Fear Free hospital on the Westside. Every member of our clinical team also holds an individual Fear Free certification."
      },
      {
        question: "Does Fear Free care cost more?",
        answer: "Our standard exam fee is $79, with a same-day (urgent) exam at $109, in line with other independent veterinary hospitals on the Colorado Springs Westside. What you are paying for is a longer visit, a calmer pet, more accurate diagnostics, and fewer repeat visits. We do not charge extra for Fear Free protocols, it is how every appointment is run."
      },
      {
        question: "Will my pet need sedation for every visit?",
        answer: "No. Most pets do not need any medication. For pets with documented fear, anxiety, or stress, we send home pre-visit medication a few hours before the appointment, chosen for your pet from options like gabapentin, trazodone, clonidine, acepromazine, and dexmedetomidine. We also recommend calming nutraceuticals such as pheromones, CBD, and milk-protein supplements. Most of these take the edge off so your pet can think clearly and tolerate the exam, rather than heavily sedating them."
      },
      {
        question: "My dog hates muzzles. Can you still examine him?",
        answer: "Yes. We rarely use muzzles. We use treats, distraction, slow handling, and positional adjustments instead. If a pet's stress level rises during a procedure, we stop and try a different approach. For pets that genuinely need restraint for safety, we use the least restrictive option that works, and we always discuss it with you first."
      },
      {
        question: "My cat is terrified of the carrier. Is there anything I can do before the visit?",
        answer: "Yes, and we can coach you through it. Leave the carrier out at home with a familiar blanket inside, spray it with Feliway 15 minutes before transport, and treat the drive itself as a separate desensitization project. We can also schedule a happy visit, a short no-procedure trip just for treats, so your cat associates Red Rock with something positive before any medical work happens."
      },
      {
        question: "Do you offer separate waiting areas for cats and dogs?",
        answer: "Yes. We have one shared entrance, but fully separate waiting rooms, exam rooms, and treatment areas for cats and dogs, so cats do not see, hear, or smell dogs during a typical visit. We are the only hospital in Colorado Springs that separates the waiting, exam, and treatment areas this way. We also encourage car waiting, you can text us when you arrive and go directly to your exam room."
      },
      {
        question: "I had a bad experience at another Colorado Springs vet. Will it be different here?",
        answer: "It should be. About 1 in 4 of our new patients are switching from another clinic because of a difficult experience. Our intake process explicitly asks about prior bad-vet history, and we structure the first few visits to repair that association. The first appointment may run a little longer than a routine exam because we are not just doing medicine, we are rebuilding trust."
      }
    ],
    faqJsonLd: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is Fear Free veterinary care?","acceptedAnswer":{"@type":"Answer","text":"Fear Free is a certification program for veterinary practices that trains every team member to recognize and reduce fear, anxiety, and stress in pets during medical visits. It combines behavioral training, environmental design, and modified clinical workflows. At Red Rock Veterinary Health in Colorado Springs, every veterinarian, technician, and front desk team member is individually Fear Free certified."}},
    {"@type":"Question","name":"Is Red Rock the only Fear Free certified vet in Colorado Springs?","acceptedAnswer":{"@type":"Answer","text":"Colorado Springs has more than one Fear Free certified hospital. What sets Red Rock apart is that it is the only veterinary hospital in Colorado Springs designed from the ground up, in both layout and visit workflow, around Fear Free principles, and the only Fear Free hospital on the Westside. Every member of the clinical team also holds an individual Fear Free certification."}},
    {"@type":"Question","name":"Does Fear Free care cost more?","acceptedAnswer":{"@type":"Answer","text":"Red Rock's standard exam fee is $79, with a same-day urgent exam at $109, in line with other independent veterinary hospitals on the Colorado Springs Westside. What you are paying for is a longer visit, a calmer pet, more accurate diagnostics, and fewer repeat visits. Fear Free protocols are not an upcharge, they are how every appointment is run."}},
    {"@type":"Question","name":"Will my pet need sedation for every visit?","acceptedAnswer":{"@type":"Answer","text":"No. Most pets do not need any medication. For pets with documented fear, anxiety, or stress, we send home pre-visit medication chosen for the pet from options like gabapentin, trazodone, clonidine, acepromazine, and dexmedetomidine, along with calming nutraceuticals such as pheromones, CBD, and milk-protein supplements, given at home before the appointment."}},
    {"@type":"Question","name":"My dog hates muzzles. Can you still examine him?","acceptedAnswer":{"@type":"Answer","text":"Yes. We rarely use muzzles. We use treats, distraction, slow handling, and positional adjustments instead. If a pet's stress level rises during a procedure, we stop and try a different approach. For pets that genuinely need restraint for safety, we use the least restrictive option that works, and we always discuss it with you first."}},
    {"@type":"Question","name":"Do you offer separate waiting areas for cats and dogs?","acceptedAnswer":{"@type":"Answer","text":"Yes. We have one shared entrance but fully separate waiting rooms, exam rooms, and treatment areas for cats and dogs, so cats do not see, hear, or smell dogs during a typical visit. Red Rock is the only hospital in Colorado Springs that separates the waiting, exam, and treatment areas this way. We also encourage car waiting, you can text us when you arrive and go directly to your exam room."}},
    {"@type":"Question","name":"I had a bad experience at another Colorado Springs vet. Will it be different here?","acceptedAnswer":{"@type":"Answer","text":"Our intake process explicitly asks about prior bad-vet history, and we structure the first few visits to repair that association. The first appointment may run a little longer because we are not just doing medicine, we are rebuilding trust."}}
  ]
}`
  },
  {
    id: "dog-ate-chocolate-what-to-do-colorado-springs",
    title: "My Dog Ate Chocolate. What Do I Do? A Colorado Springs Emergency Guide from a Local Vet",
    slug: "dog-ate-chocolate-what-to-do-colorado-springs",
    excerpt: "Dr. Kuca walks you through exactly what to do in the first 30 minutes if your dog ate chocolate, when to call Red Rock, and when to head straight to the ER.",
    content: `[[QUICKTAKE]] Quick triage • what to do right now
- Identify the type of chocolate (milk, dark, baking, cocoa powder), the amount, and your dog's weight.
- Call a veterinarian. During Red Rock business hours (Monday-Friday, 8 a.m. to 5 p.m.), call us at [719-204-3647](tel:719-204-3647). After hours, call Pet Poison Helpline at [855-764-7661](tel:855-764-7661) or your nearest 24-hour ER.
- Do not induce vomiting at home unless a veterinarian tells you to.
- Theobromine has a long half-life. Your dog can seem fine for hours and then deteriorate. Call even if they look okay.

Chocolate toxicity in dogs is real, but how dangerous it is depends almost entirely on three numbers: the type of chocolate, the amount, and your dog's weight. A 60-pound Lab who licked a chocolate chip cookie crumb is in very different shape than a 12-pound terrier who got into a bar of baking chocolate.

I am Dr. Kuca. At Red Rock Veterinary Health, our doctors treat chocolate toxicity cases most weeks, especially around Halloween, Valentine's Day, Easter, and Christmas. Here is what every Colorado Springs dog owner should know.

## Why chocolate is toxic to dogs

Chocolate contains two compounds dogs cannot metabolize well: theobromine and caffeine. Both are methylxanthines, both are stimulants, and both can cause dogs to develop a racing heart, tremors, seizures, and in severe cases cardiac arrest. The darker the chocolate, the more theobromine per ounce.

**Approximate theobromine content per ounce, by chocolate type (ASPCA Animal Poison Control Center reference values):**

- White chocolate: essentially no theobromine. Very low toxicity risk, though the fat and sugar load can still cause pancreatitis or vomiting.
- Milk chocolate: about 44 to 60 mg theobromine per ounce.
- Dark chocolate: about 130 to 450 mg per ounce.
- Semi-sweet and bittersweet chocolate: about 150 to 250 mg per ounce.
- Baking chocolate (unsweetened): about 390 to 450 mg per ounce. This is the most dangerous form.
- Cocoa powder: roughly 800 mg per ounce. Also very dangerous.

A widely used clinical guideline: theobromine doses around 20 mg per kg of body weight cause mild symptoms, around 40 mg/kg cause more severe cardiac signs, and 60 mg/kg or higher can cause seizures and death. For a 30-pound (13.6 kg) dog, that means even half an ounce of baking chocolate is potentially serious.

## Theobromine has a long half-life. This is why timing matters.

Theobromine has a long elimination half-life in dogs, roughly 17 hours, which is far longer than caffeine or most other stimulants. The practical implication: a dog can absorb chocolate, seem fine for several hours, and then begin showing signs that build for the next day or longer. Owners who watch their dog at the 2-to-4-hour mark and see no symptoms sometimes assume the danger has passed. It has not.

[[KEYTAKEAWAY]] If your dog ate chocolate, the right time to call is now, not in four hours when you have decided whether it 'looks bad.' We can triage over the phone in a few minutes.

PetMD maintains a free [chocolate toxicity tool](https://www.petmd.com/dog/chocolate-toxicity) that lets you plug in your dog's weight, the type of chocolate, and the amount eaten to get an instant risk readout. Bookmark it on your phone now.

## What to do in the first 30 minutes

1. Move the chocolate away from your dog. Pick up the wrapper, the packaging, anything else that could be eaten in the next minute.
2. Identify the chocolate type and amount. Read the label. Note ounces, type (milk, dark, baking, cocoa powder), and any other ingredients (raisins, macadamia nuts, and xylitol are all separately toxic).
3. Weigh your dog or use the most recent vet weight. Estimate honestly.
4. Call a veterinarian. During Red Rock business hours, call us at [719-204-3647](tel:719-204-3647). We will triage over the phone and decide whether you need to come in, induce vomiting at the clinic, or watch at home.
5. Do not induce vomiting at home unless a veterinarian instructs you to. The 'why' is in the next section.
6. Watch for symptoms. Vomiting, diarrhea, restlessness, panting, excessive thirst, hyperactivity, ataxia (wobbly gait), muscle tremors, racing heart, or seizures. Onset is usually 2 to 12 hours after ingestion, with effects that can persist 24+ hours.

[[SAFETY]] Do not give hydrogen peroxide at home if any of these are true: your dog is brachycephalic (Frenchies, Bulldogs, Pugs); your dog is already showing neurological signs (wobbly, sedated, having tremors); more than 2 hours have passed since ingestion; your dog has already vomited; the ingested substance is caustic (drain cleaner, batteries) or sharp (bone shards, glass). In these situations hydrogen peroxide can cause severe stomach ulceration, esophageal injury, or aspiration pneumonia. Always call your vet first.

## When to call Red Rock vs. when to head to a 24-hour ER

This is the question we get most often, and the answer depends on two factors: timing and dose.

### Call Red Rock first if:

- It is during our business hours (Monday through Friday, 8 a.m. to 5 p.m.).
- Your dog is currently asymptomatic.
- The dose is in the mild-to-moderate range based on the toxicity calculator.
- Ingestion was within the last 2 hours, in which case we can often induce vomiting and decontaminate effectively in the clinic.

Red Rock holds [same-day urgent appointments](/services/urgent-emergency-care) specifically for situations like this. We can often see chocolate ingestion cases the same day during business hours, in a calm Fear Free environment, at general practice pricing rather than emergency hospital pricing.

### Head directly to a 24-hour emergency hospital if:

- It is after Red Rock's business hours.
- Your dog is already showing severe symptoms (seizures, collapse, persistent tremors).
- Your dog is showing early methylxanthine signs (severe restlessness, ataxia, persistent panting that does not resolve) at any time.
- The dose is high (baking chocolate, large quantity of dark chocolate, or a small dog with a large ingestion).
- Symptoms are appearing more than 4 hours after ingestion (in this case the toxicity is established and time matters).

Local after-hours options Red Rock coordinates with include North Springs Veterinary Referral Center and Animal ER Care for 24-hour emergencies, plus urgent-care providers such as Uintah and LiveWell. If we send you to an ER, we share medical records ahead of time so the ER team is not starting from scratch.

## A note on Colorado Springs specifically

Two altitude-related factors affect chocolate cases. First, dehydration risk climbs faster at our altitude (around 6,035 feet at the Westside), and chocolate ingestion often causes vomiting and diarrhea that can dehydrate a dog quickly. If your dog is vomiting repeatedly, do not wait, get them to a clinic. Second, dogs metabolize methylxanthines through liver enzymes, and any pre-existing liver condition can prolong the already-long half-life.

Holiday-specific risks: Easter chocolate is often dark, comes in foil wrappers that can cause GI obstruction, and tends to contain xylitol in sugar-free varieties (xylitol is significantly more toxic to dogs than chocolate). Halloween candy and Christmas baking chocolate are our two highest-volume chocolate weeks of the year. If you have a counter-surfer, plan ahead.

## What treatment looks like

If your dog needs in-clinic treatment, here is roughly what happens:

- Within 2 hours of ingestion: a prescription emetic administered by the veterinary team (much safer than home hydrogen peroxide), activated charcoal to bind remaining theobromine in the gut, and IV fluids if needed. Activated charcoal is sometimes given as a repeated dose because theobromine recirculates through the bile.
- Beyond 2 hours, or symptomatic: IV fluids, anti-nausea medication, cardiac monitoring (we use continuous ECG for moderate-to-severe cases), seizure control if needed, and additional supportive measures in severe cases.

Most uncomplicated chocolate cases go home the same day. Severe cases (seizures, cardiac arrhythmias) may need 24 to 48 hours of monitoring at a 24-hour facility because of the long half-life.`,
    featuredImage: "/blogs/layingpup.jpeg",
    imageAlt: "A relaxed dog resting at home in Colorado Springs",
    author: "Dr. Sharon Kuca",
    publishedAt: "2026-05-20",
    readingTime: 5,
    categories: ["Emergency & Urgent Care", "Pet Safety"],
    tags: ["what to do if your dog ate chocolate", "dog ate chocolate Colorado Springs", "chocolate toxicity calculator dogs", "is chocolate toxic to dogs", "emergency vet Colorado Springs", "same-day vet Colorado Springs"],
    seo: {
      metaTitle: "Dog Ate Chocolate? What To Do | Colorado Springs Vet",
      metaDescription: "Dr. Kuca walks you through exactly what to do in the first 30 minutes if your dog ate chocolate, when to call Red Rock, and when to head straight to the ER.",
      focusKeywords: ["what to do if your dog ate chocolate", "dog ate chocolate Colorado Springs", "is chocolate toxic to dogs", "emergency vet Colorado Springs", "chocolate toxicity calculator dogs"]
    },
    faqs: [
      {
        question: "How much chocolate is toxic to a dog?",
        answer: "It depends on the type of chocolate, the amount, and your dog's weight. A useful rule of thumb: about 20 mg of theobromine per kg of body weight causes mild symptoms, 40 mg/kg causes moderate cardiac signs, and 60 mg/kg or higher can be life-threatening. Baking chocolate has roughly 10 times more theobromine per ounce than milk chocolate, so even a small amount of baking chocolate can be dangerous for a small dog. Use the PetMD chocolate toxicity tool for a fast estimate."
      },
      {
        question: "My dog ate chocolate but seems fine. Should I still call a vet?",
        answer: "Yes. Theobromine has a long half-life in dogs (roughly 17 hours), so symptoms often do not appear for 2 to 12 hours and can build over a full day. A dog that seems fine right after ingestion can develop tremors or arrhythmias later that evening. Call your veterinarian, share the dose and your dog's weight, and let a professional decide whether monitoring at home is safe."
      },
      {
        question: "How long after eating chocolate will my dog get sick?",
        answer: "Mild symptoms (vomiting, restlessness, increased thirst) usually appear within 2 to 6 hours. Moderate symptoms (rapid heart rate, ataxia, tremors, agitation) typically peak between 6 and 12 hours after ingestion. Severe signs (seizures, cardiac arrhythmias) can develop up to 24 hours later. Because of theobromine's long half-life, monitoring continues for the full 24-hour window in many cases."
      },
      {
        question: "Should I make my dog throw up at home?",
        answer: "Only if a veterinarian tells you to. Hydrogen peroxide is the classic home emetic, but the wrong dose can cause severe stomach ulceration, and it should not be used in brachycephalic dogs (Bulldogs, Frenchies, Pugs), in dogs already showing neurological signs, in dogs that are already vomiting or unconscious, when the ingested substance is caustic or sharp, or more than 2 hours after ingestion. Call your vet first."
      },
      {
        question: "Where can I take my dog for same-day urgent care in Colorado Springs that is not a 24-hour ER?",
        answer: "Red Rock Veterinary Health holds same-day urgent appointments during business hours specifically for situations like chocolate ingestion, suspected toxicity, sudden vomiting, and other non-life-threatening urgencies. We typically see urgent cases the same day, in a calm Fear Free environment, and at general practice pricing rather than emergency hospital pricing."
      },
      {
        question: "When does chocolate require an emergency hospital visit?",
        answer: "Go straight to a 24-hour emergency hospital if your dog is having seizures, has collapsed, is showing severe ataxia or persistent muscle tremors, ate a large amount of dark or baking chocolate, or if symptoms are appearing more than 4 hours after ingestion. Time matters, do not drive past a closer ER to reach a specific clinic if your dog is actively decompensating."
      },
      {
        question: "What about white chocolate?",
        answer: "White chocolate contains almost no theobromine, so it is not significantly toxic in the chocolate-toxicity sense. However, white chocolate is very high in fat and sugar, and can trigger pancreatitis, especially in breeds prone to it (Miniature Schnauzers, Yorkies, some terriers). Vomiting after white chocolate ingestion still warrants a phone call."
      },
      {
        question: "My dog ate chocolate that had raisins or xylitol in it. Is that different?",
        answer: "Yes, and worse. Raisins can cause acute kidney failure in dogs, even in very small amounts. Macadamia nuts cause neurological symptoms. Xylitol (found in some sugar-free chocolates and baked goods) causes severe hypoglycemia and liver failure and is one of the most dangerous substances a dog can ingest. The toxic dose of xylitol is very low; even a single piece of sugar-free gum can be life-threatening for a small dog. If any of these are in the chocolate your dog ate, treat it as a higher-priority emergency and call immediately."
      }
    ],
    faqJsonLd: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How much chocolate is toxic to a dog?","acceptedAnswer":{"@type":"Answer","text":"It depends on the type of chocolate, the amount, and your dog's weight. About 20 mg of theobromine per kg of body weight causes mild symptoms, 40 mg/kg causes moderate cardiac signs, and 60 mg/kg or higher can be life-threatening. Baking chocolate has roughly 10 times more theobromine per ounce than milk chocolate. Use the PetMD chocolate toxicity tool for a fast estimate."}},
    {"@type":"Question","name":"My dog ate chocolate but seems fine. Should I still call a vet?","acceptedAnswer":{"@type":"Answer","text":"Yes. Theobromine has a long half-life in dogs (roughly 17 hours), so symptoms often do not appear for 2 to 12 hours and can build over a full day. A dog that seems fine right after ingestion can develop tremors or arrhythmias later that evening. Call a veterinarian and share the dose and your dog's weight."}},
    {"@type":"Question","name":"How long after eating chocolate will my dog get sick?","acceptedAnswer":{"@type":"Answer","text":"Mild symptoms like vomiting and restlessness usually appear within 2 to 6 hours. Moderate symptoms like ataxia, rapid heart rate, and tremors peak between 6 and 12 hours. Severe signs like seizures or cardiac arrhythmias can develop up to 24 hours after ingestion."}},
    {"@type":"Question","name":"Should I make my dog throw up at home?","acceptedAnswer":{"@type":"Answer","text":"Only if a veterinarian tells you to. Hydrogen peroxide is the classic home emetic but the wrong dose can cause severe stomach ulceration. Do not use it in brachycephalic dogs, in dogs showing neurological signs, in dogs already vomiting or unconscious, when the substance is caustic or sharp, or more than 2 hours after ingestion. Call your vet first."}},
    {"@type":"Question","name":"Where can I take my dog for same-day urgent care in Colorado Springs that is not a 24-hour ER?","acceptedAnswer":{"@type":"Answer","text":"Red Rock Veterinary Health holds same-day urgent appointments during business hours for chocolate ingestion, suspected toxicity, sudden vomiting, and other non-life-threatening urgencies. We typically see urgent cases the same day, in a calm Fear Free environment, at general practice pricing rather than emergency hospital pricing."}},
    {"@type":"Question","name":"When does chocolate require an emergency hospital visit?","acceptedAnswer":{"@type":"Answer","text":"Go straight to a 24-hour emergency hospital if your dog is having seizures, has collapsed, is showing severe ataxia or persistent muscle tremors, ate a large amount of dark or baking chocolate, or if symptoms are appearing more than 4 hours after ingestion."}},
    {"@type":"Question","name":"What about white chocolate?","acceptedAnswer":{"@type":"Answer","text":"White chocolate contains almost no theobromine, so it is not significantly toxic in the chocolate-toxicity sense. However, white chocolate is high in fat and sugar and can trigger pancreatitis, especially in breeds prone to it. Vomiting after white chocolate ingestion still warrants a phone call."}},
    {"@type":"Question","name":"My dog ate chocolate that had raisins or xylitol in it. Is that different?","acceptedAnswer":{"@type":"Answer","text":"Yes, and worse. Raisins can cause acute kidney failure in dogs even in small amounts. Macadamia nuts cause neurological symptoms. Xylitol causes severe hypoglycemia and liver failure and is one of the most dangerous substances a dog can ingest; even a single piece of sugar-free gum can be life-threatening for a small dog."}}
  ]
}`
  },
  {
    id: "emergency-veterinary-care-colorado-springs",
    title: "Emergency Veterinary Care in Colorado Springs: Why Early Action and Familiar Care Matter",
    slug: "emergency-veterinary-care-in-colorado-springs",
    excerpt: "When the unexpected happens with your pet, emergency veterinary care becomes urgent. Learn why establishing care at Red Rock Veterinary Health makes all the difference when minutes matter.",
    content: `When the unexpected happens—your dog starts limping, your cat stops eating, or your pet suddenly isn't acting like themselves—emergency veterinary care becomes urgent. At Red Rock Veterinary Health, we offer same-day evaluations to ensure your pet gets immediate, compassionate attention right here in Colorado Springs, with care tailored to their needs.

Whether you live in Manitou Springs, Monument, Palmer Lake, Woodland Park, Pueblo, or the surrounding areas, having an established relationship with a trusted veterinary hospital can make all the difference when minutes matter.

![IMAGE](/blogs/drunsellenjoyingpuppytime.jpg|Dr. Unsell enjoying puppy time with Clark.)

## The Advantage of Being an Established Client

At Red Rock Veterinary Health, established clients benefit from same-day care at our vet clinic, which can be critical when your pet is experiencing an emergency. By maintaining regular preventive veterinary care with our team, you ensure that your pet has a medical history on file, allowing us to act faster and more precisely in urgent situations.

Being an established patient also gives your pet the benefit of familiarity—a calm, Fear Free® environment that helps reduce stress during high-anxiety moments. Patients of the hospital also get priority for urgent care scheduling. We are a small hospital and we have limited staff and appointment slots, but we are dedicated to taking care of our clients when they need us most.

## Why Early Intervention Saves Lives

Veterinary emergencies often begin with subtle signs: labored breathing, sudden lethargy, disorientation, or unexplained swelling. These symptoms can be easy to overlook, but early diagnosis and treatment drastically improve outcomes especially in the case of eating something they shouldn't have.

Our experienced veterinary team is trained to identify and respond to critical conditions quickly. During our business hours, with in-house diagnostics, fluid therapy, oxygen therapy, and skilled monitoring, our animal hospital is equipped to stabilize and treat many urgent problems the same day. When a case needs overnight monitoring or a specialist, we stabilize first and refer to a 24-hour emergency hospital, sending records along so nothing is lost in the handoff. Urgent surgery happens on-site when our schedule allows, in our brand-new state-of-the-art surgical suite; every surgery patient has 2 dedicated credentialed and experienced veterinary technicians to ensure their safety.

Red Rock is open Monday through Friday, 8 a.m. to 5 p.m., and we do not have an after-hours on-call line. If your pet has an emergency outside our hours, read our guide on [what to do if your pet has an emergency after our hours](/blog/pet-emergency-after-hours-colorado-springs) for who to call and where to go.

![IMAGE](/blogs/expertcare.jpg|Expert Care, Delivered with Heart)

## Expert Care, Delivered with Heart

Our medical team—led by Dr. Robbie Unsell—has extensive experience in both general practice and urgent veterinary care. From triaging emergencies to crafting tailored treatment plans, we approach every case with precision, empathy, and a deep commitment to your pet's wellbeing.

We maintain strong collaborative relationships with 24/7 emergency vet hospitals and veterinary specialists across Colorado Springs, Manitou Springs, and Pueblo. When needed, we ensure a seamless referral for advanced diagnostics or overnight hospitalization, ensuring continuity of the highest quality care.

## Your Pet Deserves the Best in Colorado Springs

Not every emergency can be prevented—but by establishing care at Red Rock Veterinary Health, you're choosing a vet practice known for its responsiveness, expertise, and compassion. We're proud to be one of the best veterinary hospitals in Colorado Springs, serving dogs, cats, and the humans who love them across southern Colorado. We also do so with Fear Free veterinary care ensuring you are involved with their care and making the experience as stress free as possible for our patients, clients, & staff.

Don't wait for a crisis—establish care today so that when the unexpected happens, we're ready to act.

![IMAGE](/blogs/drunsellperformingemergencysurgery.jpg|Dr. Unsell performing emergency surgery at Red Rock Veterinary Health.)

Call Red Rock Veterinary Health in Colorado Springs to schedule a visit or to become an established patient. Same-day appointments available for urgent needs when your pet is in an emergency. Please visit our client information to learn more and to start the process of joining the Red Rock Vet family where we are more than just a hospital.`,
    featuredImage: "/blogs/redrockvetinredrockcanyon.jpg",
    imageAlt: "Red Rock Vet in Red Rock Canyon backdropped by Pikes Peak",
    author: "Dr. Robbie Unsell",
    publishedAt: "2025-05-17",
    readingTime: 6,
    categories: ["Emergency Care", "Pet Care Tips", "Practice News"],
    tags: ["emergency veterinary care", "Colorado Springs", "same-day care", "established clients", "Fear Free", "veterinary hospital"],
    seo: {
      metaTitle: "Emergency Veterinary Care in Colorado Springs | Red Rock Vet",
      metaDescription: "Same-day emergency veterinary care in Colorado Springs. Established clients get priority scheduling. Fear Free environment with experienced team.",
      focusKeywords: ["emergency veterinary care", "Colorado Springs veterinarian", "same-day pet care", "veterinary hospital", "Fear Free veterinary care"]
    }
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.slice(0, 3);
}