"use client";

import type { ComponentType } from "react";
import {
  Info,
  Cat,
  Bone,
  Wind,
  Phone,
  Clock,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Stethoscope,
  ClipboardList,
  Layers,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { patientStoriesFaqs } from "./faq";

type StoryLink = {
  label: string;
  href: string;
  note: string;
};

type Story = {
  id: string;
  number: string;
  eyebrow: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  situation: string[];
  hard: string[];
  did: string[];
  changed: string[];
  redFlag: {
    title: string;
    body: string;
  };
  links: StoryLink[];
};

const stories: Story[] = [
  {
    id: "anxious-diabetic-cat",
    number: "Composite One",
    eyebrow: "Fear Free handling, and the cat side of the building",
    icon: Cat,
    title: "The anxious diabetic cat",
    situation: [
      "A ten-year-old indoor cat who has never taken a veterinary visit well. She growls in the carrier, flattens herself against the table, and by the twenty-minute mark nobody is learning anything useful about her. Her family called because the litter box needed changing twice as often as it used to and the water bowl kept going empty. She had also lost weight over several months, which nobody noticed until the scale said so.",
      "Increased thirst, increased urination, a good appetite, and weight loss is the classic presentation of diabetes mellitus in a cat. It is also the presentation of several other things, which is the entire reason the visit exists.",
    ],
    hard: [
      "Stress moves the numbers we most want to measure. A single reading taken from a frightened cat in an exam room does not by itself separate a diabetic cat from a scared one — and it is a bad basis for choosing a dose.",
      "The problem repeats. Diabetes is not diagnosed once and filed. It is monitored for the rest of the cat's life, which means this same cat has to come back, and come back again, and be handled well every time.",
      "A frequent way feline diabetes management falls apart, in our experience, is not the medicine or the money. It is that the visits stop, because the visits became unbearable for the cat and unbearable to watch for the family.",
      "A cat who waits a few feet from a barking dog arrives at the exam table already worked up, and what we measure there reflects the wait as well as the cat.",
    ],
    did: [
      "Kept her on the cat side of the building. Red Rock has separate cat and dog waiting, exam, and treatment areas — we are the only hospital in Colorado Springs that separates them this way. She did not see, hear, or smell a dog.",
      "Planned the visit before the visit: carrier work at home, a quiet arrival, and, where a doctor judged it appropriate at an earlier appointment, a pre-visit anti-anxiety medication. Our whole clinical team is Fear Free certified, and this is the part of Fear Free that actually costs us time.",
      "Handled her for the exam she could tolerate, not the exam that is fastest. Towel work, the bottom half of her own carrier as the exam surface, minimal restraint, and a pause when her stress climbed rather than pushing through it.",
      "Chose diagnostics that do not depend on one stressed moment: urinalysis, a full blood panel, and laboratory work that covers a longer window than the last ten minutes, chosen with you at the visit.",
      "Looked for what travels with feline diabetes and changes the plan — urinary tract infection, kidney values, thyroid, and body condition — rather than treating a single number in isolation.",
      "Taught the home side properly: how to handle and give insulin, what low blood sugar looks like, what to do about it in the first minute, and exactly which signs mean stop calling and go to an emergency hospital.",
    ],
    changed: [
      "Nothing here is a cure. Feline diabetes is managed, not fixed. Some cats respond better than others, and we will not tell you in advance which one yours is.",
      "What changed is that the rechecks kept happening. The cat came back because coming back was tolerable, so her glucose curve, her weight, and her kidney values were actually being watched over time instead of being guessed at from one bad afternoon a year ago. That is the whole mechanism. Continuity is not a feeling; it is a series of visits that did not get cancelled.",
    ],
    redFlag: {
      title: "When a diabetic cat is an emergency, not an appointment",
      body: "A diabetic cat who stops eating, starts vomiting, becomes weak or lethargic, or has sweet or acetone-smelling breath may be in diabetic ketoacidosis. That needs immediate hospitalization and intravenous care. That is care we cannot provide — we have no overnight staff and cannot keep a cat on intravenous fluids through the night. Do not wait for us to open and do not call us first. Go to a 24-hour emergency hospital now:",
    },
    links: [
      {
        label: "Fear Free veterinary care",
        href: "/services/fear-free",
        note: "how low-stress handling actually works, visit by visit",
      },
      {
        label: "The cat clinic",
        href: "/services/cat-clinic",
        note: "the separate feline waiting, exam, and treatment areas",
      },
      {
        label: "Chronic disease management",
        href: "/services/chronic-disease-management",
        note: "how we run long-term conditions like diabetes over years",
      },
    ],
  },
  {
    id: "senior-dog-slowing-down",
    number: "Composite Two",
    eyebrow: "Continuity: the same doctor, the same chart, over years",
    icon: Bone,
    title: "The senior Labrador who was “just slowing down”",
    situation: [
      "An eleven-year-old Labrador. At his annual visit his family mentions, almost in passing, that he takes the stairs one at a time now, will not jump into the truck, and paces at night before settling. Nobody made an appointment for any of that. It came up because we asked.",
      "The sentence attached to it is nearly always the same: he is just getting old.",
    ],
    hard: [
      "Old age is not a disease. That is AAHA's phrase, and it is the whole problem — reluctance on stairs is a clinical sign, not a birthday. Roughly one in five dogs is diagnosed with osteoarthritis in their lifetime, and the true figure is likely higher because the early signs are behavioral rather than a limp.",
      "It is rarely one thing. In a senior dog, arthritis pain, a kidney value that has drifted, a heart murmur that was not there two years ago, a thyroid change, and a painful mouth can all be present at once — and each one constrains how the others can be treated. An anti-inflammatory decision depends on kidney and liver numbers. An anesthetic plan for a dental depends on the heart.",
      "The same sign has several explanations. Night pacing may be arthritis pain, cognitive change, or blood pressure. You cannot tell from the story alone, and cognitive dysfunction in particular is a diagnosis of exclusion — the bloodwork is not a formality before a behavioral label, it is the point.",
      "The clock is different. A year is a large fraction of what a senior dog has left, and a chronic disease can appear and advance entirely inside one annual interval. AAHA recommends senior dogs be examined at least twice a year, with bloodwork and urinalysis every 6 to 12 months.",
    ],
    did: [
      "Asked for video. AAHA specifically endorses owner video of a pet moving at home; it costs nothing and it shows a gait and a set of hesitations that a slick exam room floor will never reproduce.",
      "Ran an actual senior workup rather than a spot check: full physical with an orthopedic and pain assessment, complete blood count, chemistry including SDMA where available, urinalysis, thyroid testing, and blood pressure. Urine is not redundant with blood — urine concentrating ability can fall before creatinine moves.",
      "Staged rather than guessed. Kidney disease is staged on creatinine and SDMA measured on at least two occasions in a hydrated, stable patient, plus urine protein-to-creatinine ratio and blood pressure. One elevated value in a dehydrated dog is not a diagnosis.",
      "Built the pain plan around everything else that was true about him, and revisited it at every recheck rather than writing it once. Where the newer monthly anti-nerve-growth-factor injection came up, we went through it honestly in both directions: it is FDA approved and often works well, and its US label carries a post-approval experience section, added February 2025, listing neurologic signs including ataxia and seizures, urinary incontinence, increased thirst and urination, and death including euthanasia; in March 2026 the EMA recommended adding very rare musculoskeletal adverse events to the European product information. That is a conversation to have with your veterinarian about your own dog, not a decision to make from a web page.",
      "Treated weight as medicine. Body condition is the highest-leverage, lowest-cost intervention available for a senior dog's mobility, and it is the one we can start the same day.",
      "Changed the house, not just the prescription: traction on hardwood floors, a ramp into the truck, moving his bed and his water off the stairs. Westside houses are old, and they have stairs and hard floors.",
      "Addressed the mouth. A senior dog with chronic dental pain is very often the dog a family describes as slowing down. Age alone is not a reason to decline anesthesia; we run pre-anesthetic bloodwork and tailor the anesthetic protocol to the patient.",
    ],
    changed: [
      "Over the following years it was the same doctor, the same chart, and rechecks that built on each other instead of starting over. Arthritis and kidney disease are managed, not reversed, and we do not promise added years. What continuity buys is smaller adjustments made earlier, and a family who already knows what the plan is when something changes.",
      "It also included the part practices tend to leave out. When he needed intravenous support overnight during one flare, he went to a 24-hour emergency hospital, because we have no overnight staff — we sent the records ahead and took the handoff the next morning. And when the conversation eventually turned to quality of life, it was a conversation we had already started, because palliative care belongs at the point of diagnosis, not at the very end.",
    ],
    redFlag: {
      title: "Signs in an older dog that should not wait for an appointment",
      body: "Collapse, sudden profound weakness, pale or white gums, a swollen or drum-tight abdomen, unproductive retching, difficulty breathing, seizures lasting more than about five minutes, or an inability to stand are emergencies in a senior dog. Go now, and go to a hospital that is open:",
    },
    links: [
      {
        label: "Chronic disease management",
        href: "/services/chronic-disease-management",
        note: "arthritis, kidney disease, thyroid, and heart disease over years",
      },
      {
        label: "Wellness and preventive care",
        href: "/services/wellness",
        note: "what a senior exam and senior bloodwork actually cover",
      },
      {
        label: "Dental care",
        href: "/services/dental",
        note: "why a painful mouth reads as old age, and how anesthesia is planned",
      },
      {
        label: "Compassionate euthanasia",
        href: "/services/compassionate-euthanasia",
        note: "the conversation we start early rather than late",
      },
    ],
  },
  {
    id: "bulldog-just-snoring",
    number: "Composite Three",
    eyebrow: "Assessment: hearing a symptom that everyone had decided was a personality",
    icon: Wind,
    title: "The bulldog who was “just snoring”",
    situation: [
      "A four-year-old English Bulldog in for something else entirely — a skin check. In the history his family mentions that he snores loudly enough to hear from the next room, snorts on walks, sounds gurgly after he drinks, and has to stop halfway up the hill behind the house.",
      "None of that was the reason for the visit. Nobody was worried about it. It is just what bulldogs do.",
    ],
    hard: [
      "The belief is the obstacle. In UK research, 58% of owners whose dogs were affected by brachycephalic obstructive airway syndrome reported that their dog did not have a breathing problem, and around three-quarters of survey respondents considered snoring and loud breathing normal for these breeds. The noise is not a quirk. It is the sound of air being forced through an airway that is too narrow for it.",
      "Most of the airway cannot be seen awake. The American College of Veterinary Surgeons is explicit that definitive assessment of the soft palate and the laryngeal saccules requires anesthesia, because the thick tongue of these breeds prevents a proper look in a conscious dog. Stenotic nares are the one component that can be judged on a conscious exam.",
      "The visit itself distorts the picture. A stressed, panting dog is moving more air through a narrower opening than he does at home, and panting is an active, heat-generating process — so a frightening waiting room does not just upset this patient, it changes what there is to observe and makes him less safe while he is here.",
      "Colorado adds a margin problem, not a cause. Altitude does not create this anatomy; it is congenital and conformational. What thinner air does is leave less reserve for a dog who already has none to spare. We will not attach a number to that, because no published veterinary study measures it at Front Range elevation.",
    ],
    did: [
      "Took an airway history instead of nodding at a passing comment: noise at rest versus on exertion, whether he sleeps through the night or wakes repeatedly, whether he gags, retches, or brings food back up, and how he handles heat and a normal walk.",
      "Asked about the stomach on purpose. In one study of brachycephalic dogs presented for respiratory signs, gastrointestinal lesions were found at very high prevalence, including in dogs with no digestive signs at all. Regurgitation and hypersalivation are part of this syndrome, not a separate coincidence.",
      "Examined his nostrils while he was awake and showed the family what stenotic nares look like on their own dog rather than on a diagram.",
      "Scored his body condition honestly. In a prospective comparison of brachycephalic and non-brachycephalic dogs, body condition was a greater determinant of body temperature than breed type was. Weight is the lever that is actually in reach; skull shape is not.",
      "Used Fear Free handling for a clinical reason rather than a comfortable one. Stress-panting makes an obstructed airway worse, so low-stress handling of this patient is a safety measure.",
      "Said plainly what we do not do. A definitive answer about the soft palate and larynx needs sedation or anesthesia and imaging, and corrective airway surgery belongs at a surgical facility with overnight capability. Red Rock closes at 5 p.m. and has no overnight staff, so we do not perform brachycephalic airway surgery here. What we can do is assess, grade, manage, and refer honestly.",
      "Changed things that could change that week: a harness instead of a neck collar, walks moved to the cool ends of the day, a written heat plan for summer, and a weight target with a date attached to it.",
    ],
    changed: [
      "His anatomy did not change in a week, and we did not tell his family it would. What changed is that the noise stopped being filed under personality. He now has a recorded baseline — the sounds, the exercise tolerance, the weight — so the next visit can tell whether he is stable or getting worse, which is a question nobody could have answered before.",
      "The family also left knowing which door to walk through in which situation, and that is the part that matters at 9 p.m. on a hot July evening.",
    ],
    redFlag: {
      title: "A flat-faced dog in respiratory distress is an ER case, not a phone call to us",
      body: "Blue, grey, or purple gums or tongue, collapse, a dog who cannot settle and is visibly fighting for air, or a hot dog who is panting frantically and will not cool down is an emergency. Do not call us first and do not wait for morning. Go to a 24-hour emergency hospital now:",
    },
    links: [
      {
        label: "Flat-faced dogs at 6,035 feet",
        href: "/blog/flat-faced-dogs-breathing-colorado-springs-altitude",
        note: "what breathing trouble looks like in these breeds, and why altitude narrows the margin",
      },
      {
        label: "Fear Free veterinary care",
        href: "/services/fear-free",
        note: "why low-stress handling is a safety measure for this patient",
      },
      {
        label: "Same-day urgent care",
        href: "/services/urgent-emergency-care",
        note: "what we can and cannot handle during business hours",
      },
    ],
  },
];

const commonThreads = [
  "In all three, the presenting problem was not the reason for the visit. It surfaced because somebody asked a specific question and had the time to hear the answer.",
  "In all three, fear changed the data. A frightened cat's glucose, an arthritic dog sliding on a hard floor, a panting bulldog in a loud room — stress does not just make a visit unpleasant, it alters the findings you then make decisions from.",
  "In all three, the useful unit of care is the relationship, not the appointment. Diabetes, arthritis, kidney disease, and airway disease are all monitored over years by someone who has the earlier numbers in front of them.",
  "In all three, part of the job was saying what we do not do. Overnight intravenous care, airway surgery, and after-hours emergencies go somewhere else, and naming that clearly is what makes the rest of the advice trustworthy.",
];

const notOurJob = [
  "We are open Monday through Friday, 8 a.m. to 5 p.m. We are closed Saturday and Sunday, we have no overnight staff, and there is no after-hours on-call line.",
  "We are a general practice, not an emergency hospital and not a specialty hospital. Three veterinarians are on our roster: Dr. Robbie Unsell, Dr. Dan Muelhaupt, and Dr. Jaime Clevenger.",
  "We cannot hospitalize, monitor, or give intravenous care overnight. A pet who needs to stay on fluids through the night is transferred, with records and a phone call ahead.",
  "When the honest answer is go to the emergency room rather than come to us, that is the answer we give — on the phone, and on this page.",
];

export default function PatientStoriesContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-8"
            >
              <ClipboardList className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Patient Stories: Composite Cases, Not Real Patients
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Most veterinary websites answer &ldquo;is this practice actually different?&rdquo; with adjectives. We would
              rather answer it with cases. The three below are composite examples that represent the kinds of cases we see
              &mdash; not individual patients. The details are illustrative. We have not invented names, photographs,
              client quotes, or outcome statistics, and we did not fabricate a single result.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="tel:719-204-3647">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: (719) 204-3647
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="sms:719-355-8343">Text us: (719) 355-8343</Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-muted-foreground mt-6"
            >
              Monday through Friday, 8 a.m. to 5 p.m. Closed Saturday and Sunday. No after-hours on-call line.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How to read this page — the disclaimer, stated up front */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-amber-700 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-wide text-amber-700">How to read this page</p>
            </div>
            <p className="text-amber-900 leading-relaxed mb-4">
              These are <strong>composite examples</strong> that represent the kinds of cases we see, not individual
              patients. Details are illustrative. Every case below is assembled from patterns that are common in general
              practice and from published veterinary guidance &mdash; it is not a record of one animal, and no real
              patient&apos;s history, name, photograph, or family is used here.
            </p>
            <p className="text-amber-900 leading-relaxed mb-4">
              We wrote them this way on purpose. Publishing a specific named patient requires a real client&apos;s
              permission and a medical record accurate to the detail. We do not have that yet, and inventing one and
              presenting it as true would be a fabricated testimonial. So: no client quotes, no before-and-after
              photographs, no success rates, and no promised outcomes anywhere on this page.
            </p>
            <p className="text-amber-900 leading-relaxed">
              Nothing here is medical advice for your pet. If something on this page sounds like your animal, the next
              step is an exam &mdash; call{" "}
              <a href="tel:719-204-3647" className="font-semibold underline">
                (719) 204-3647
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* The three composites */}
      {stories.map((story, storyIndex) => {
        const StoryIcon = story.icon;
        return (
          <section
            key={story.id}
            id={story.id}
            className={storyIndex % 2 === 0 ? "py-16 bg-accent" : "py-16 bg-background"}
          >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <StoryIcon className="w-4 h-4" />
                  {story.number} &mdash; {story.eyebrow}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{story.title}</h2>
                <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold">
                  Composite illustration &mdash; not a real patient
                </p>
              </motion.div>

              {/* The situation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-6 md:p-8 border border-border mb-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">The situation</h3>
                {story.situation.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* What made it hard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">What made it hard</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {story.hard.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 bg-background p-5 rounded-lg border border-border"
                    >
                      <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What we did */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">What we actually did</h3>
                <ol className="space-y-3">
                  {story.did.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 bg-background p-5 rounded-lg border border-border"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>

              {/* What changed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">What changed</h3>
                </div>
                {story.changed.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Red flag / ER routing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mb-6"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-amber-700 mb-2">
                  &#9888; {story.redFlag.title}
                </p>
                <p className="text-amber-900 leading-relaxed mb-3">{story.redFlag.body}</p>
                <ul className="space-y-2 text-amber-900">
                  <li>
                    <a href="tel:719-260-7141" className="font-semibold underline">
                      Animal ER Care &mdash; (719) 260-7141
                    </a>{" "}
                    &mdash; 5520 N. Nevada Ave, Ste 150. Open 24/7.
                  </li>
                  <li>
                    <a href="tel:719-633-3214" className="font-semibold underline">
                      Uintah Pet Emergency &mdash; (719) 633-3214
                    </a>{" "}
                    &mdash; 1635 W. Uintah St, Ste E. Open daily, noon to midnight &mdash; not overnight.
                  </li>
                </ul>
              </motion.div>

              {/* Related reading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">Where to read more</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {story.links.map((link) => (
                    <li key={link.href} className="bg-background p-4 rounded-lg border border-border">
                      <Link href={link.href} className="text-primary hover:underline font-medium">
                        {link.label}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">{link.note}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* What the three have in common */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              The through-line
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What the three have in common</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A cat, an old Labrador, and a bulldog have almost nothing in common clinically. What repeats is the shape
              of the work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonThreads.map((thread, index) => (
              <motion.div
                key={thread}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-background p-5 rounded-lg border border-border"
              >
                <Stethoscope className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <span className="text-foreground leading-relaxed">{thread}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are not */}
      <section className="py-16 bg-red-500/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What we are not, stated before you need to know it
            </h2>
            <p className="text-lg text-muted-foreground">
              Every case above depends on this being clear, because the wrong assumption about our hours is the one that
              can cost a pet.
            </p>
          </motion.div>

          <div className="space-y-4">
            {notOurJob.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-background p-5 rounded-lg border border-red-500/20"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" aria-hidden="true" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-background rounded-2xl p-6 border border-red-500/20 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Animal ER Care</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:719-260-7141" className="text-primary hover:underline">
                    (719) 260-7141
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div className="text-muted-foreground">
                    5520 N. Nevada Ave, Ste 150
                    <br />
                    Colorado Springs, CO 80918
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground">Open 24/7</span>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-red-500/20 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Uintah Pet Emergency</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:719-633-3214" className="text-primary hover:underline">
                    (719) 633-3214
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div className="text-muted-foreground">
                    1635 W. Uintah St, Ste E
                    <br />
                    Colorado Springs, CO 80904
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground">Open daily, noon to midnight (not overnight)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              About these composites, and about the care they describe.
            </p>
          </motion.div>

          <div className="space-y-4">
            {patientStoriesFaqs.map((faq) => (
              <details key={faq.question} className="group bg-background rounded-lg">
                <summary className="flex justify-between items-center gap-4 cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                  {faq.question}
                  <span className="text-2xl group-open:rotate-45 transition-transform shrink-0" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
              <Heart className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">If one of these sounds like your animal</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The next step is an exam, not a web page. Call us and describe what you are seeing. Our standard exam is
              $79 and our same-day urgent exam is $109; anything beyond the exam is discussed and priced with you before
              we do it. These are starting exam prices, subject to change, and they do not include diagnostics &mdash;
              sedated airway assessment, a senior workup, or imaging are priced separately and discussed with you first.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:719-204-3647" className="text-primary hover:underline text-lg">
                    (719) 204-3647
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Text</h3>
                  <a href="sms:719-355-8343" className="text-primary hover:underline text-lg">
                    (719) 355-8343
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:Reception@RedRockVet.com" className="text-primary hover:underline">
                    Reception@RedRockVet.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    3163 W. Colorado Ave
                    <br />
                    Colorado Springs, CO 80904
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday&ndash;Friday: 8am&ndash;5pm
                    <br />
                    Closed Saturday &amp; Sunday
                    <br />
                    No after-hours on-call line
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Call (719) 204-3647
              </Link>
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              Reminder: the three cases above are composite examples that represent the kinds of cases we see, not
              individual patients. Details are illustrative.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
