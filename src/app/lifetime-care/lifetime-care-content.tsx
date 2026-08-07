"use client";

import {
  HeartPulse,
  Phone,
  Clock,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Brain,
  Bone,
  Droplets,
  Syringe,
  Cat,
  Sparkles,
  Stethoscope,
  ClipboardList,
  CalendarCheck,
  ShieldCheck,
  Home,
  Scale,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { lifetimeCareFaqs } from "./faq";

const doorways = [
  {
    icon: CalendarCheck,
    title: "Your pet just became a senior",
    body: "Life-stage ranges by species and size, why the exam schedule doubles, and exactly what senior bloodwork screens for.",
    href: "#senior-wellness",
    cta: "Senior wellness",
  },
  {
    icon: Stethoscope,
    title: "You are managing a chronic condition",
    body: "Arthritis, kidney disease, diabetes, feline thyroid disease, cognitive decline, dental disease, and heart disease.",
    href: "#chronic-conditions",
    cta: "Chronic conditions",
  },
  {
    icon: HeartPulse,
    title: "You are near the end",
    body: "Quality-of-life assessment done honestly, what palliative care and hospice actually mean, and how to think about timing.",
    href: "#end-of-life",
    cta: "End-of-life care",
  },
];

const lifeStages = [
  {
    label: "Small-breed dogs",
    detail:
      "Often not senior until around 12. Small dogs live longer, so the last quarter of life starts later.",
  },
  {
    label: "Medium-breed dogs",
    detail:
      "Between the small and large ranges. This is the group where an individual assessment matters most — ask us where your dog actually sits.",
  },
  {
    label: "Large-breed dogs",
    detail:
      "Senior as early as 7 to 8 years. A large dog is frequently senior while it still looks and behaves young.",
  },
  {
    label: "Giant-breed dogs",
    detail:
      "Earlier still than large breeds. Great Danes, mastiffs, and wolfhounds age on a compressed schedule.",
  },
  {
    label: "Cats",
    detail:
      "Senior is over 10 years old. Cats aged 7 to 10 are classed as mature adults — a real life stage worth screening, not a rounding error.",
  },
];

const screeningPanel = [
  {
    title: "Complete blood count",
    detail:
      "Red cells, white cells, and platelets. AAHA puts a comprehensive CBC in the senior minimum database alongside the chemistry panel and urinalysis, because changes here can be the first sign of disease that has not yet produced a symptom you would notice at home.",
  },
  {
    title: "Chemistry panel, every 6 to 12 months",
    detail:
      "Total protein, albumin, ALT, glucose, BUN, creatinine, sodium, potassium, calcium, and SDMA where available.",
  },
  {
    title: "Urinalysis — not optional, not redundant",
    detail:
      "Urine specific gravity can show the kidneys losing concentrating ability before creatinine moves, and protein in urine flags damage a chemistry panel alone misses. That is the honest answer to 'why do you need a urine sample too?'",
  },
  {
    title: "Thyroid (T4)",
    detail:
      "Recommended annually in dogs. Strongly recommended annually in cats, where hyperthyroidism is the most common hormonal disease of old age.",
  },
  {
    title: "Blood pressure",
    detail:
      "Recommended annually in dogs. Strongly recommended annually in cats, and every 6 to 12 months in healthy geriatric cats. Untreated hypertension takes eyesight.",
  },
  {
    title: "Added when findings call for it",
    detail:
      "Urine protein:creatinine ratio if protein shows up. NT-proBNP annually, and strongly considered before any anesthetic event. ECG annually in breeds at high cardiac risk such as Boxers and Dobermans. Fecal testing one to four times a year in dogs and one to two in cats, annual heartworm testing in dogs, and retroviral testing in cats based on individual risk.",
  },
];

const beforeTheVisit = [
  "Take a phone video of your pet moving at home — stairs, getting up off the floor, the first minute of a walk. AAHA specifically endorses owner video, because a stressed pet on a slick exam-room floor hides exactly what we need to see.",
  "Bring a complete list of everything your pet takes, including supplements, joint products, and CBD. This is not a formality: NSAIDs given alongside steroids cause gastrointestinal bleeding, some melatonin products are made with xylitol, and St. John's Wort, SAM-e, tryptophan, ginseng, and turmeric interact with drugs we use constantly in senior patients. We ask without judgment.",
  "Point out every new lump. We measure each one in three dimensions and aspirate it for cytology. We will not tell you a mass is probably just a fatty tumor — mast cell tumors can be clinically indistinguishable from lipomas, and a pet can have both at once.",
  "Write down the questions you actually have before you get here. Senior appointments cover a lot of ground, and the question people forget is usually the one that was worrying them.",
];

const dogArthritisSigns = [
  "Hesitating at stairs, or taking them one at a time",
  "Slowing on walks, or lagging on the way home",
  "Difficulty rising after a rest, then loosening up after a few minutes",
  "No longer jumping onto the couch or into the car",
  "Restlessness, pacing, or a changed sleep pattern",
  "New irritability when touched, lifted, or brushed",
];

const catArthritisSigns = [
  "Jumping less, or jumping to a lower surface than before",
  "Stiffness, or a gait that has lost its fluidity",
  "Less activity overall, especially at night",
  "New resistance to being picked up, petted, or stroked along the back and hind legs",
  "Hesitating at a high-sided litter box, or missing it entirely",
  "Hiding more and grooming less",
];

const homeChanges = [
  "Traction where your pet has to push off: runners on hardwood, toe grips, or non-slip boots",
  "Ramps, and a hand in and out of the car",
  "A padded, supportive bed that an arthritic dog can get out of without a struggle",
  "A support harness for a dog that needs help with stairs or standing",
  "Food, water, and the litter box moved onto one level, with a low-sided box for a stiff cat",
  "For a pet that can no longer move itself, being walked or turned every few hours",
];

const chronicConditions = [
  {
    icon: Droplets,
    title: "Chronic kidney disease",
    notice:
      "Drinking and urinating more, drinking from the tap or the toilet when they never used to, weight loss, a dull coat, reduced appetite, occasional vomiting. Colorado's dry air increases the water a pet loses just by breathing, which is worth accounting for in a cat already struggling to conserve it — multiple water stations, wet food, and a fountain are sensible here.",
    work:
      "CKD is staged 1 through 4 using the IRIS system, from fasting creatinine and/or SDMA measured on at least two occasions in a hydrated, stable patient — not from one blood draw on a dehydrated pet. In cats, Stage 1 is creatinine under 1.6 mg/dL, Stage 2 is 1.6 to 2.8, Stage 3 is 2.9 to 5.0, and Stage 4 is above 5.0; the canine thresholds start slightly lower. Each stage is then sub-staged twice more, by urine protein:creatinine ratio and by blood pressure, because proteinuria and hypertension change the plan. SDMA matters because it rises earlier than creatinine and is less affected by lost muscle mass, which is the exact trap in a thin old cat whose creatinine looks reassuring. In one study, 80.9% of cats aged 15 to 20 had kidney disease — and the great majority of affected cats were Stage 1 or 2. Most of what screening finds is early, which is the whole argument for screening.",
  },
  {
    icon: Syringe,
    title: "Diabetes mellitus",
    notice:
      "Drinking more, urinating more, eating more, and losing weight anyway. Owners often describe a pet that seems ravenous and is still getting thinner.",
    work:
      "Diagnosis, a treatment plan, and — for cats — a diet strategy: high protein, above 45% of dry matter, and low carbohydrate, under 15%, fed in small frequent meals to blunt the post-meal glucose spike. Continuous glucose monitoring sensors can track a diabetic pet for up to 14 days, which shows far more than a single stressful in-hospital glucose curve. Ask us whether that is the right approach for your pet. The thing to know before you need it: diabetic ketoacidosis is a life-threatening emergency. A diabetic pet that is vomiting, refusing food, weak, or has sweet-smelling breath needs an emergency hospital immediately, including on a Saturday.",
  },
  {
    icon: Cat,
    title: "Hyperthyroidism in cats",
    notice:
      "Weight loss despite a good or ravenous appetite, increased thirst and urination, vomiting, restlessness or night vocalizing, and a coat that has gone unkempt.",
    work:
      "Diagnosis is generally a total T4 above the laboratory reference interval, run at a reference lab rather than in-house and ideally at the same lab each time. Options are methimazole, radioiodine, a prescription iodine-restricted diet, or surgical thyroidectomy. Here is the nuance that matters most, and the one owners are most often not told: hyperthyroidism artificially raises kidney filtration and can hide concurrent kidney disease. Somewhere between 15 and 50% of hyperthyroid cats have masked CKD, and roughly 20 to 25% become azotemic after treatment regardless of which treatment is chosen. That is not a treatment failure and not a mistake — it is the mask coming off. It is why we check bloodwork, urine, and blood pressure before starting, and why reversible methimazole is often trialed before committing to permanent radioiodine. Radioiodine requires a specially licensed facility and is not something a general practice can provide; we refer.",
  },
  {
    icon: Brain,
    title: "Canine cognitive dysfunction",
    notice:
      "DISHAA is the framework: Disorientation, altered social Interactions, disrupted Sleep-wake cycles, loss of House training and other learned behaviors, changed Activity levels, and increased Anxiety. In dogs it usually looks like sleeping through the day and pacing at night, less interaction, getting stuck in familiar rooms, and new anxiety. Cats tend the other way — more vocalizing, more clinging.",
    work:
      "Roughly 14 to 22.5% of dogs over eight have age-related cognitive impairment. About 1.9% are diagnosed. That gap is not a diagnostic failure; it is that owners file the changes under old age and never mention them, which is why we ask directly at every senior visit. Cognitive dysfunction is also a diagnosis of exclusion, and the workup is the point rather than a formality: night pacing may be arthritis pain, house-soiling may be a urinary tract infection or kidney disease or diabetes, and disorientation may be high blood pressure or an intracranial tumor. Selegiline is the only FDA-approved drug for canine cognitive dysfunction, with improvement reported in up to 70% of dogs, and it is paired with enrichment, dietary support such as medium-chain triglycerides, and anxiety medication where anxiety is a genuine component. None of it reverses the condition. It slows and softens it.",
  },
  {
    icon: Sparkles,
    title: "Dental disease",
    notice:
      "Bad breath that everyone in the house has normalized. Chewing on one side, dropping food, pawing at the face, more drooling, or simply hiding more — cats in particular conceal oral pain well.",
    work:
      "By age three most dogs and cats already have periodontal disease, with reported prevalence in dogs over three of 80 to 89%. Seniors carry a specific risk worth naming: tiny and small senior dogs can have significant periodontal bone loss and a higher incidence of pathologic jaw fracture, which is why full-mouth dental radiographs are not optional — they show the extent of bone loss and confirm which extractions are appropriate. Anesthesia is required to do any of this properly, and there is no legitimate anesthesia-free alternative. Our standard dental is $999; extractions and oral surgery are separate and quoted before we do them.",
  },
  {
    icon: HeartPulse,
    title: "Heart disease",
    notice:
      "A new cough, tiring sooner on the same walk, or a resting breathing rate that has crept upward. In cats, heart disease is frequently silent until the day it is not.",
    work:
      "Canine mitral valve disease is staged A through D by ACVIM consensus, and the distinction that changes treatment is B1 versus B2: a murmur with normal-sized heart chambers, versus a murmur with left atrial and ventricular enlargement. Stage B1 dogs get no cardiac medication. Stage B2 dogs get pimobendan, which in the EPIC study delayed the onset of congestive heart failure by a median of about 15 months. Telling B1 from B2 requires echocardiography, or at minimum radiographs — and echocardiography is a referral service, not something we perform in-house. One of the most useful things you can monitor at home costs nothing: count your pet's breaths for 30 seconds while they sleep and double it. Dogs and cats generally sleep at 15 to 30 breaths per minute, and a sleeping rate consistently above about 30 is abnormal and can mean fluid accumulating in the lungs.",
  },
];

const qualityOfLifeDomains = [
  {
    letter: "H",
    label: "Hurt",
    detail: "Is pain controlled, and can your pet breathe comfortably? Breathing comes first.",
  },
  { letter: "H", label: "Hunger", detail: "Is your pet eating enough, and without a fight?" },
  { letter: "H", label: "Hydration", detail: "Is your pet drinking, or holding hydration with support?" },
  {
    letter: "H",
    label: "Hygiene",
    detail: "Can your pet stay clean and dry, or be kept that way comfortably?",
  },
  {
    letter: "H",
    label: "Happiness",
    detail: "Does your pet still engage — with you, with the household, with anything?",
  },
  {
    letter: "M",
    label: "Mobility",
    detail: "Can your pet get up, get outside, and get to food, water, and the litter box?",
  },
  {
    letter: "M",
    label: "More good days than bad",
    detail: "Over the last two weeks, which column has more marks in it?",
  },
];

const conversationTriggers = [
  "Not eating",
  "Symptoms progressing",
  "Severe or unrelenting chronic pain",
  "Deterioration during active treatment",
  "A persistent cough even at rest",
  "Cognitive dysfunction that keeps advancing",
  "Mobility that has failed",
];

const seniorRedFlags = [
  "Any difficulty breathing: open-mouth breathing in a cat (cats do not pant normally), increased effort, a stretched-out neck with elbows held away from the body, blue or gray gums, or a sleeping breathing rate persistently above about 30 in a pet with known heart disease",
  "Sudden hind-limb paralysis in a cat, especially with screaming, cold hind paws compared with warm front paws, and pale or bluish hind footpads — this is a saddle thrombus, it is excruciating, and many affected cats had no prior heart diagnosis",
  "Collapse, sudden profound weakness, pale or white gums, or a swollen abdomen in an older large-breed dog — a bleeding splenic or liver mass is a leading cause of sudden collapse in senior dogs and is a surgical emergency",
  "A diabetic pet that is vomiting, refusing food, weak or lethargic, or has sweet-smelling breath — diabetic ketoacidosis needs intravenous care and hospitalization",
  "A pet with known kidney disease that stops eating entirely, vomits repeatedly, is markedly dehydrated, or has mouth ulcers or an ammonia smell to the breath",
  "A male cat straining in the litter box and producing little or no urine, or any pet of either sex that has not urinated in 24 hours",
  "Seizures lasting more than about five minutes, or two or more in a row without a full recovery in between",
  "Sudden blindness — bumping into furniture, widely dilated pupils, or visible bleeding in the eye — which often signals severe hypertension and needs same-day evaluation to save sight",
  "Unproductive retching with a tight, distended belly in a deep-chested dog",
  "Complete inability to stand, or severe unrelenting pain that will not settle. Suffering does not wait for business hours.",
];

export default function LifetimeCareContent() {
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
              <HeartPulse className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Caring for a Senior Pet in Colorado Springs: Our Lifetime Care Guide
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
            >
              We look after pets from the first puppy or kitten visit through the last one. This page is about the part of
              that arc most practices treat as an afterthought &mdash; the years when a dog or cat is old, the medicine gets
              more complicated, and the conversations get harder. Senior pets are 44% of the pet population. They need
              more than an annual vaccine appointment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Red Rock is open Monday through Friday, 8 a.m. to 5 p.m. We have no overnight staff and no after-hours
              on-call line. Everything below is what we can do inside those hours, and we say plainly where we hand off.
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
          </div>
        </div>
      </section>

      {/* Three doorways */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Start Where You Actually Are</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              People arrive at this page from three very different places. Pick the one that matches yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doorways.map((door, index) => (
              <motion.div
                key={door.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-accent rounded-2xl p-8 flex flex-col"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <door.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{door.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{door.body}</p>
                <Link
                  href={door.href}
                  className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                >
                  {door.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When does a pet become senior */}
      <section id="when-senior" className="py-16 bg-accent scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              When Does a Dog or Cat Actually Become a Senior?
            </h2>
            <p className="text-lg text-muted-foreground">
              There is no birthday. AAHA defines senior by proportion of expected lifespan &mdash; the last 25% of it
              &mdash; which means a Great Dane and a Chihuahua do not become senior in the same year. The common shorthand
              that dogs are senior at seven is wrong often enough to matter: it makes large-breed owners late and
              small-breed owners anxious. Treat the ranges below as practical approximations, not thresholds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lifeStages.map((stage, index) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg"
              >
                <h3 className="font-semibold text-foreground mb-2">{stage.label}</h3>
                <p className="text-muted-foreground leading-relaxed">{stage.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-6"
          >
            The life stage is not a label. It sets the screening schedule, changes how we read normal-looking bloodwork,
            and changes how your pet should be handled in the exam room.
          </motion.p>
        </div>
      </section>

      {/* Senior wellness — the January landing section */}
      <section id="senior-wellness" className="py-16 bg-background scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <ClipboardList className="w-4 h-4" />
              Senior wellness
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Twice a Year, Not Once</h2>
            <p className="text-lg text-muted-foreground mb-4">
              AAHA recommends senior dogs be examined at least twice a year, with the full lab panel every 6 to 12 months.
              The reasoning is simple and worth stating honestly: a year is a large fraction of what a senior pet has left,
              and a chronic disease can appear and advance completely within a single annual interval.
            </p>
            <p className="text-lg text-muted-foreground">
              We want to be precise about what that claim is and is not. It is sound clinical reasoning endorsed by AAHA.
              It is not a proven survival benefit from a trial, and we are not going to tell you that two visits a year
              will keep your pet healthy. What earlier detection does is widen your options while options still exist.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {screeningPanel.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-accent p-5 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Four things that make the appointment better</h3>
            <ol className="space-y-4">
              {beforeTheVisit.map((step, index) => (
                <li key={step} className="flex items-start gap-4 bg-accent p-5 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">What it costs, and what happens if you decline</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Our standard exam is $79 and a same-day urgent exam is $109. Those are starting prices, and they are the exam
              only &mdash; a senior workup adds diagnostics, and we quote those to you before we run them. If cost is the
              constraint, say so out loud.
            </p>
            <p className="text-lg text-muted-foreground">
              AAHA&apos;s guidelines are recommendations, not requirements, and declining a panel does not end the
              conversation &mdash; it changes it to what we can do instead. Guilt is not a clinical tool and we do not use
              it. For the standard adult wellness schedule, see our{" "}
              <Link href="/services/wellness" className="text-primary hover:underline font-medium">
                wellness care page
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobility and arthritis */}
      <section id="mobility" className="py-16 bg-accent scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Bone className="w-7 h-7 text-primary" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Arthritis Is Routinely Missed in Senior Pets
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Roughly one in five dogs is diagnosed with osteoarthritis at some point. That is a diagnosis rate, not a true
              prevalence &mdash; the real number is higher, because most owners read the signs as age and never report
              them.
            </p>
            <p className="text-lg text-muted-foreground">
              In cats it is worse. More than 60% of cats have osteoarthritis in at least one joint, and cats almost never
              limp. Feline arthritis is usually bilateral, so both sides hurt equally and there is nothing to favor, and
              cats rarely have the crepitus in affected joints that gives dogs away on a physical exam. In one radiographic
              study, owners had recognized lameness in only two cats, and no obvious pain was detected on palpation in any
              cat with limb arthritis. A separate retrospective radiographic study found degenerative joint disease in the
              limbs of 74% of 101 cats screened. The cat is not fine. The cat is quiet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">What arthritis looks like in a dog</h3>
              <ul className="space-y-3">
                {dogArthritisSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">What arthritis looks like in a cat</h3>
              <ul className="space-y-3">
                {catArthritisSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The joints most often affected in cats are the hip, stifle, hock, elbow, and the thoracolumbar and
                lumbosacral spine.
              </p>
            </motion.div>
          </div>

          {/* Weight and home changes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">Weight is the highest-leverage change you control</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Calorie-restricted diets have been shown to increase longevity in dogs, with an ideal body condition score
                of 4.5 to 5 out of 9. In cats, a score up to 6 out of 9 is associated with increased longevity, and
                underweight cats fare worse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Note the asymmetry, because it catches people out: weight loss in an older cat is a red flag, not a
                success. Senior cats become less able to digest and use nutrients, so a thinning old cat needs a workup,
                not congratulations. Long-chain omega-3 fatty acids are noted for osteoarthritis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">Changes you can make at home this week</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {homeChanges.map((change) => (
                  <li key={change} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground leading-relaxed">{change}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                This lands differently on the Westside. The housing stock here runs to older homes with stairs, steep
                driveways, and hardwood floors, and Colorado&apos;s outdoor-dog culture means senior dogs are still being
                taken on trails they can no longer handle. Soreness the day after a hike is a reason to book a mobility
                assessment.
              </p>
            </motion.div>
          </div>

          {/* Anti-NGF drugs, stated accurately */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 bg-background rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Librela and Solensia: what we will not oversimplify
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Both are anti-NGF monoclonal antibodies given as a monthly injection in the clinic, and both are real
              options that have given a lot of old animals their comfort back.{" "}
              <span className="font-semibold text-foreground">Solensia (frunevetmab)</span> for cats was FDA-approved in
              January 2022 &mdash; the first monoclonal antibody approved for any animal species. In its clinical studies
              the most frequently reported adverse reactions were digestive signs such as vomiting and diarrhea, and skin
              signs such as dermatitis and hair loss. It is not for breeding, pregnant, or lactating cats.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <span className="font-semibold text-foreground">Librela (bedinvetmab)</span> for dogs was FDA-approved on
              May 5, 2023, and remains approved and on the market with no recall. It also carries a genuine, actively
              evolving safety signal, and describing it as simply &quot;FDA approved&quot; would be leaving out the part
              you need. In February 2025 the US label added a Post-Approval Experience section listing ataxia, seizures,
              other neurologic signs such as paresis and recumbency, urinary incontinence, increased thirst and urination,
              and death including euthanasia. The label now directs veterinarians to provide a client information sheet and
              to discuss the potential for adverse events with the owner before administration. In March 2026 the European
              Medicines Agency&apos;s veterinary committee recommended adding very rare musculoskeletal adverse events to
              the product information, including very rare suspected cases of abnormal osteoarthritis progression. Librela
              kept its European authorisation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The other half of the honesty matters just as much. Adverse event reports are voluntary, unverified, and do
              not establish that a drug caused what was reported &mdash; an elderly arthritic population develops serious
              disease for many reasons, and that is a large confounder. The word regulators used was &quot;very rare.&quot;
              So we will not tell you Librela is dangerous, and we will not tell you it is risk-free. We will tell you what
              is known, ask about your dog specifically, and decide with you.
            </p>
            <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
              <p className="text-sm font-bold uppercase tracking-wide text-amber-700 mb-2">Two firm rules</p>
              <p className="text-amber-900 leading-relaxed">
                If your dog is already on Librela, do not stop it because of something you read online, including this
                page &mdash; call us at{" "}
                <a href="tel:719-204-3647" className="font-semibold underline">
                  (719) 204-3647
                </a>{" "}
                and we will work through it. And never give a pet human anti-inflammatories &mdash; ibuprofen, naproxen,
                aspirin, or acetaminophen &mdash; or adjust a veterinary NSAID dose on your own. Acetaminophen is lethal to
                cats, and an NSAID given alongside a steroid causes gastrointestinal bleeding.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chronic conditions */}
      <section id="chronic-conditions" className="py-16 bg-background scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Conditions That Define the Second Half
            </h2>
            <p className="text-lg text-muted-foreground">
              These six account for most of what we manage in senior patients. Almost all of them are managed rather than
              cured, and we would rather use the word manage than pretend otherwise. Day-to-day monitoring, medication
              adjustment, and recheck scheduling live on our{" "}
              <Link href="/services/chronic-disease-management" className="text-primary hover:underline font-medium">
                chronic disease management page
              </Link>
              .
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {chronicConditions.map((condition, index) => (
              <motion.article
                key={condition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                viewport={{ once: true }}
                className="bg-accent rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <condition.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{condition.title}</h3>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-2">What you might notice</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">{condition.notice}</p>
                <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-2">What we do about it</h4>
                <p className="text-muted-foreground leading-relaxed">{condition.work}</p>
              </motion.article>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-8 max-w-3xl"
          >
            One caution that applies across all six: senior presentations overlap heavily. Increased drinking may be kidney
            disease, diabetes, or thyroid disease. Night pacing may be arthritis, dementia, or high blood pressure. Nothing
            on this page diagnoses your pet, and it is not meant to &mdash; it is meant to get the right things onto the
            table at the exam. Where anxiety is a genuine part of what you are seeing, our{" "}
            <Link href="/services/behavioral-management" className="text-primary hover:underline font-medium">
              behavioral management page
            </Link>{" "}
            covers how we assess it; a lifelong itch that has followed a dog into old age is covered on our{" "}
            <Link href="/services/allergy-testing-treatment" className="text-primary hover:underline font-medium">
              allergy testing and treatment page
            </Link>
            . For the dental side of senior care, see our{" "}
            <Link href="/services/dental" className="text-primary hover:underline font-medium">
              dental page
            </Link>
            ; for cats specifically, our{" "}
            <Link href="/services/cat-clinic" className="text-primary hover:underline font-medium">
              cat clinic
            </Link>{" "}
            explains how the feline side of the building works.
          </motion.p>
        </div>
      </section>

      {/* What we hand off */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              Knowing our edges
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do, and What We Hand Off</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Red Rock is a general practice. Three veterinarians &mdash; Dr. Robbie Unsell, Dr. Dan Muelhaupt, and Dr.
              Jaime Clevenger &mdash; plus in-house bloodwork, digital radiographs, ultrasound, a surgical suite, and
              dentistry. That covers most of senior medicine most of the time. Here is what it does not cover, stated
              plainly, because a senior-pet family deserves to know before the crisis rather than during it.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 bg-background p-5 rounded-lg">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">
                  We are open Monday through Friday, 8 a.m. to 5 p.m., and closed Saturday and Sunday. There is no
                  overnight staff and no on-call line.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-background p-5 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">
                  We cannot hospitalize a pet on intravenous fluids overnight. That is decisive in senior medicine
                  specifically: a uremic crisis, diabetic ketoacidosis, congestive heart failure, and a fragile
                  post-operative patient all need continuous overnight care. When your pet needs that, we stabilize, call
                  ahead, and transfer with records.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-background p-5 rounded-lg">
                <Stethoscope className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">
                  We do not have board-certified internal medicine, cardiology, oncology, or neurology in-house, and we do
                  not perform echocardiography, CT, MRI, or radioiodine therapy here. We refer, and we send records ahead
                  so the specialist is not starting from zero.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-background p-5 rounded-lg">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">
                  Colorado State University&apos;s veterinary teaching hospital in Fort Collins, about two hours north, is
                  the region&apos;s referral center for oncology, cardiology, internal medicine, and advanced imaging. Its
                  Flint Animal Cancer Center is a genuine regional asset, and we will say so when it is the right door.
                </span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground">
              None of this is a limitation we are embarrassed by. It is the difference between a practice that knows its
              edges and one that finds them the hard way at 9 p.m.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fear Free as clinical necessity */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              For a Senior Patient, Fear Free Is a Measurement Problem
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              For a young healthy dog, low-stress handling is kindness. For a senior patient it is clinical accuracy.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Stress raises blood pressure and blood glucose. Those are two of the numbers a senior visit exists to
              produce. A high blood pressure reading taken from a terrified cat that has just spent twenty minutes in a
              waiting room full of dogs tells us close to nothing about whether that cat needs treatment for hypertension,
              and stress hyperglycemia can look like diabetes. If the number is wrong, the medicine that follows it is
              wrong.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Arthritic patients also cannot be handled the way young patients are. A senior dog with hip and stifle
              arthritis should not be hoisted onto a steel table or asked to hold a position on a slick floor. We examine
              seniors on the floor, on non-slip surfaces, on padded mats, in whichever position hurts least &mdash; and if
              your pet&apos;s stress rises during a procedure, we stop and try a different approach rather than push
              through it.
            </p>
            <p className="text-lg text-muted-foreground">
              The building does some of the work. Cats and dogs have fully separate waiting, exam, and treatment areas
              &mdash; we are the only hospital in Colorado Springs that separates all three &mdash; and you can wait in
              your car and text us at{" "}
              <a href="sms:719-355-8343" className="text-primary hover:underline font-medium">
                (719) 355-8343
              </a>{" "}
              rather than sit in a lobby with a painful old cat in a carrier. More on how and why in our{" "}
              <Link href="/services/fear-free" className="text-primary hover:underline font-medium">
                Fear Free care page
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Anesthesia */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Age Is Not a Disease</h2>
            <p className="text-lg text-muted-foreground mb-4">
              &quot;Old age is not a disease&quot; is something veterinarians are taught and owners are rarely told. AAHA
              states it directly, and goes further: advanced age is not the only criterion for a medical decision and does
              not preclude surgery or other significant intervention. Senior pets can safely undergo multiple anesthetic
              events.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              What decides risk is not the birthday. It is organ function, cardiac and pulmonary reserve, concurrent
              disease, and the plan. For a senior patient that means pre-anesthetic bloodwork, NT-proBNP strongly
              considered before an anesthetic event, tailored induction, preoxygenation where there is cardiac or pulmonary
              disease, active warming, carefully padded positioning, minimized anesthesia time, and longer recovery
              monitoring.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              The sentence we hear most often is &quot;she&apos;s too old for a dental.&quot; Sometimes the honest answer
              is that the anesthetic risk is real and we should manage the mouth medically instead. Far more often the
              honest answer is that she has been in chronic oral pain for two years, and the risk of one anesthetic is
              smaller than the cost of another two years of it. Our{" "}
              <Link href="/services/dental" className="text-primary hover:underline font-medium">
                dental page
              </Link>{" "}
              covers the anesthesia and monitoring protocol in detail, and our{" "}
              <Link href="/services/surgery" className="text-primary hover:underline font-medium">
                surgery page
              </Link>{" "}
              covers how procedures are staffed.
            </p>
            <p className="text-lg text-muted-foreground">
              One real limit, planned for in advance rather than discovered at 4:45 p.m.: if a senior patient would need to
              stay on intravenous fluids overnight after a procedure, that is a scheduled transfer to a 24-hour hospital,
              not a night in our building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* End of life — the autumn/winter landing section */}
      <section id="end-of-life" className="py-16 bg-background scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HeartPulse className="w-4 h-4" />
              End-of-life care
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comfort Care, Hospice, and How to Think About Timing
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Two words get used at families at the worst possible moment, usually without anyone stopping to define them.
              Palliative care is not the last chapter. AAHA describes it as care that belongs on the table as soon as there
              is a chronic, progressive, or terminal diagnosis, and says the first conversation about it should happen
              early in the course of the disease. Raising it is not giving up. It is the opposite: it is deciding, while
              you still have room to decide, what a good remaining life looks like and how to protect it.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Hospice is the end stage of palliative care &mdash; the additional support a later-stage terminal patient
              needs, through to either humane euthanasia or a palliated natural death. Those are the definitions, and they
              are worth knowing before anyone uses the words at you.
            </p>
            <p className="text-lg text-muted-foreground">
              What that means here, plainly: inside our hours we manage symptoms and pain, adjust medication, and keep
              having the conversation as things change. We are not a hospice service and we do not visit homes. Where a
              family wants dedicated hospice support or care at home, that is a hospice or mobile end-of-life provider, and
              we will say so rather than stretch what we are.
            </p>
          </motion.div>

          {/* HHHHHMM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">The HHHHHMM quality-of-life scale</h3>
            <p className="text-lg text-muted-foreground mb-6">
              The most widely used framework is the HHHHHMM scale developed by Dr. Alice Villalobos. It scores seven
              domains from 0 to 10 for a total out of 70, with roughly 35 as the reference point: consistently above it
              generally means quality of life remains acceptable and supportive care can continue, and a total that stays
              below it is the signal to have a fuller conversation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualityOfLifeDomains.map((domain, index) => (
                <motion.div
                  key={domain.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-accent p-5 rounded-lg"
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {domain.letter}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{domain.label}</h4>
                    <p className="text-muted-foreground leading-relaxed">{domain.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-amber-700 mb-2">What this scale is not</p>
            <p className="text-amber-900 leading-relaxed">
              AAHA states plainly that very few quality-of-life scales for animals are validated, and that most of the ones
              found online are not. HHHHHMM has had a single partial validation, in a narrow sample. It is a structured
              framework, not a diagnostic instrument, and a score is not an instruction to do anything. What it is
              genuinely good for is structure: it makes you look at seven specific things instead of drowning in one
              enormous feeling. A second tool works nearly as well and costs nothing &mdash; mark a calendar, one mark for
              a good day and another for a bad one. Almost nobody can tell you the ratio from memory, and almost everybody
              is surprised by the calendar.
            </p>
          </motion.div>

          {/* Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">The moments that should trigger the conversation</h3>
            <p className="text-lg text-muted-foreground mb-5">
              AAHA names these specifically. If any of them describes where you are, book the appointment &mdash; not
              because a decision has to be made that day, but because these are the points at which having the
              conversation early is measurably kinder than having it late.
            </p>
            <div className="flex flex-wrap gap-3">
              {conversationTriggers.map((trigger) => (
                <span
                  key={trigger}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-foreground text-sm font-medium"
                >
                  <AlertTriangle className="w-4 h-4 text-primary" aria-hidden="true" />
                  {trigger}
                </span>
              ))}
            </div>
          </motion.div>

          {/* How the conversation runs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">How we run that conversation</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Slowly. We start with your understanding of what has happened and what your pet is currently taking. Then a
              full physical exam with a pain assessment. Then the diagnosis, the prognosis, and realistic outcomes. Then
              your goals &mdash; yours, not ours. Only then the options: continued treatment, symptom and pain management
              with us, referral to a hospice or mobile end-of-life provider, or humane euthanasia.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              We will ask about things that are not strictly medical, because they decide the outcome anyway: what you are
              afraid of, what you believe, whether you are physically able to lift and carry and medicate a large dog three
              times a day, and what this costs in money, time, and energy. If you are overwhelmed, we stop and schedule
              another time. We do not make this decision for you, and we will not pretend a number on a scale made it for
              you either. Tell us when you book that this is what the visit is about.
            </p>
            <p className="text-lg text-muted-foreground">
              We will also talk through the plan for the death itself in advance if you want to, including where it
              happens. Those decisions are far easier to make in a quiet appointment than in a crisis at eleven at night.
              What the appointment itself involves is described on our{" "}
              <Link href="/services/compassionate-euthanasia" className="text-primary hover:underline font-medium">
                compassionate euthanasia page
              </Link>
              .
            </p>
          </motion.div>

          {/* Honest hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Two honest things about our hours</h3>
            <p className="text-lg text-muted-foreground mb-4">
              We are open Monday through Friday, 8 a.m. to 5 p.m. If your pet reaches a crisis on a Saturday night, we are
              not the door that is open. An emergency hospital can provide humane euthanasia that night, and mobile
              end-of-life veterinarians serve Colorado Springs and can come to your home. Waiting until Monday because you
              would rather it be us is not the kind choice, and we would rather say that here than have you discover it
              then.
            </p>
            <p className="text-lg text-muted-foreground">
              Second: ask us about aftercare before you need it &mdash; we will walk you through the cremation options
              available locally and what comes back to you. It is a five-minute conversation in daylight and a terrible one
              to have in a parking lot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Senior emergencies */}
      <section className="py-16 bg-red-500/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              When a Senior Pet Cannot Wait for Our Hours
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These are the senior presentations that need a 24-hour emergency hospital, not an appointment with us
              &mdash; including during our open hours, because they need equipment and overnight capability a general
              practice should not improvise.
            </p>
          </motion.div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seniorRedFlags.map((flag, index) => (
              <motion.li
                key={flag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-background p-5 rounded-lg border border-red-500/20"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-foreground leading-relaxed">{flag}</span>
              </motion.li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Animal ER Care</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" aria-hidden="true" />
                  <a href="tel:719-260-7141" className="text-primary hover:underline">
                    (719) 260-7141
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" aria-hidden="true" />
                  <div className="text-muted-foreground">
                    5520 N. Nevada Ave, Ste 150
                    <br />
                    Colorado Springs, CO 80918
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" aria-hidden="true" />
                  <span className="text-muted-foreground">Open 24/7</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Uintah Pet Emergency</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" aria-hidden="true" />
                  <a href="tel:719-633-3214" className="text-primary hover:underline">
                    (719) 633-3214
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" aria-hidden="true" />
                  <div className="text-muted-foreground">
                    1635 W. Uintah St, Ste E
                    <br />
                    Colorado Springs, CO 80904
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" aria-hidden="true" />
                  <span className="text-muted-foreground">Open daily, noon to midnight (not overnight)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">North Springs VRC</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" aria-hidden="true" />
                  <a href="tel:719-920-4430" className="text-primary hover:underline">
                    (719) 920-4430
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" aria-hidden="true" />
                  <div className="text-muted-foreground">
                    10520 White Diamond Pt
                    <br />
                    Colorado Springs, CO 80908
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" aria-hidden="true" />
                  <span className="text-muted-foreground">Open 24/7, walk-ins welcome</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-6 text-center"
          >
            After midnight, Animal ER Care and North Springs VRC are the doors that are open.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-8 text-center"
          >
            For the full after-hours playbook, including what we can and cannot do the same day, see our{" "}
            <Link href="/services/urgent-emergency-care" className="text-primary hover:underline font-medium">
              urgent and emergency care page
            </Link>
            .
          </motion.p>
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
              The questions senior-pet owners in Colorado Springs actually ask us.
            </p>
          </motion.div>

          <div className="space-y-4">
            {lifetimeCareFaqs.map((faq) => (
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

      {/* Contact */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Book a Senior Visit</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call us at (719) 204-3647, Monday through Friday, 8 a.m. to 5 p.m. Tell us it is a senior visit when you
              book. If you are somewhere harder than that &mdash; a diagnosis you are still absorbing, or a decision you
              are dreading &mdash; say that on the phone. We would rather know before you walk in.
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
                    Monday-Friday: 8am-5pm
                    <br />
                    Closed Saturday &amp; Sunday
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Exam pricing</h3>
                  <p className="text-muted-foreground">
                    $79 standard exam, $109 same-day urgent exam. Starting prices; diagnostics quoted before we run them.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
