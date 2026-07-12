"use client";

import { Zap, Phone, Clock, AlertTriangle, Heart, Stethoscope, CheckCircle, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { urgentCareFaqs } from "./faq";

const sameDaySigns = [
  "Vomiting or diarrhea that started in the last day or two",
  "Limping, lameness, or a suspected soft-tissue injury",
  "Cuts, bite wounds, and torn nails that are not bleeding heavily",
  "Ear infections, hot spots, and skin flare-ups",
  "Eye redness, squinting, or discharge (call right away — some eye problems escalate quickly)",
  "Straining to urinate, urinary accidents, or blood in urine (a male cat who cannot pass urine is an ER emergency — see below)",
  "Allergic reactions such as facial swelling or hives after a sting",
  "Not eating, hiding, or 'just not right' behavior changes",
];

const erSigns = [
  "Difficulty breathing, blue or gray gums, or nonstop coughing with distress",
  "Collapse, inability to stand, or extreme weakness",
  "Seizures — especially a first seizure, repeated seizures, or one lasting more than two minutes",
  "Unproductive retching with a swollen, tight belly (possible bloat/GDV — minutes matter)",
  "A male cat straining in the litter box and producing no urine",
  "Major trauma: hit by car, a fall from height, or a dog fight with deep punctures",
  "Uncontrolled bleeding, or pale white gums",
  "Rattlesnake bite — a real risk on Westside trails like Red Rock Canyon and Garden of the Gods",
  "Suspected heatstroke",
  "Labor that stalls: active straining for more than 30 minutes with no puppy or kitten",
];

const visitSteps = [
  "Call (719) 204-3647 as early as you can, or text (719) 355-8343. Tell us what is happening, when it started, and anything your pet may have eaten.",
  "We triage on the phone. If it is ER-level, we say so immediately and point you to the right facility instead of booking you.",
  "We fit you into a same-day slot. Availability depends on scheduling and staffing that day; established clients get priority — one more reason to establish care before you need it.",
  "You can wait in your car and text us; most urgent patients go straight to an exam room, never the lobby.",
  "Diagnostics happen in-house: bloodwork, digital radiographs, and ultrasound, with results the same visit whenever possible.",
  "If your pet needs surgery, our surgical suite and monitoring are on-site, and every surgery patient has two dedicated credentialed veterinary technicians. If your pet needs overnight hospitalization or specialty care, we stabilize, call ahead to the emergency hospital, and send records with you.",
];

export default function EmergencyContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-8"
            >
              <Zap className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Same-Day Urgent Vet Care in Colorado Springs, Without the ER Wait or ER Prices
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              When your pet is sick or hurt and it can&apos;t wait — but it isn&apos;t a life-threatening emergency — we hold
              same-day urgent appointments Monday through Friday, 8 a.m. to 5 p.m. You see a doctor who knows your pet&apos;s
              history, in a calm Fear Free hospital, at general-practice pricing. Same-day availability depends on scheduling
              and staffing, so call as early in the day as you can.
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
                  Call Now: (719) 204-3647
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="sms:719-355-8343">Text us: (719) 355-8343</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we treat same-day */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Treat the Same Day
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These situations are right for urgent care, and we typically see them the same day you call:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sameDaySigns.map((sign, index) => (
              <motion.div
                key={sign}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-accent p-5 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{sign}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-6 text-center"
          >
            Chocolate or another toxin during business hours? Read our{" "}
            <Link href="/blog/dog-ate-chocolate-what-to-do-colorado-springs" className="text-primary hover:underline font-medium">
              chocolate guide
            </Link>{" "}
            and call us immediately.
          </motion.p>
        </div>
      </section>

      {/* What goes straight to the ER */}
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
              What Goes Straight to the ER — Even While We&apos;re Open
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Some emergencies need equipment and overnight capability a general practice should not pretend to have. If your
              pet has any of the following, go directly to a 24-hour emergency hospital — do not wait for an appointment with us:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {erSigns.map((sign, index) => (
              <motion.div
                key={sign}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-background p-5 rounded-lg border border-red-500/20"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{sign}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-amber-700 mb-2">⚠ When in doubt, call</p>
            <p className="text-amber-900 leading-relaxed">
              If we are open, call{" "}
              <a href="tel:719-204-3647" className="font-semibold underline">(719) 204-3647</a>{" "}
              and describe what you are seeing; we will tell you honestly whether it is an urgent appointment with us or an
              immediate ER trip. After hours, call{" "}
              <a href="tel:719-260-7141" className="font-semibold underline">Animal ER Care (open 24/7) at (719) 260-7141</a>,
              or{" "}
              <a href="tel:719-633-3214" className="font-semibold underline">Uintah Pet Emergency (open daily until midnight) at (719) 633-3214</a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">What an Urgent Visit Costs</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Our same-day urgent exam is <span className="font-semibold text-foreground">$109</span> (our standard exam is
              $79). That is the whole entry price: you pay for the exam, and then we discuss and price any diagnostics or
              treatment with you before we perform them. No surprise line items, no mandatory workups. Emergency-room exam
              fees in town typically run well above this before any treatment begins — which is exactly why a true daytime
              urgent-care option matters: same-day medicine at general-practice pricing, with the ER reserved for the cases
              that genuinely need it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How a same-day visit works */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How a Same-Day Visit Works</h2>
          </motion.div>

          <ol className="space-y-4">
            {visitSteps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-background p-5 rounded-lg"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-foreground leading-relaxed">{step}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Urgent care, still Fear Free */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Urgent Care, Still Fear Free</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              An urgent visit is the moment your pet is most stressed, and stress makes urgent medicine harder: it inflates
              heart rate and blood pressure, masks pain, and distorts bloodwork. Our whole team is{" "}
              <Link href="/services/fear-free" className="text-primary hover:underline font-medium">Fear Free certified</Link>{" "}
              and our facility keeps dogs and cats in fully separate areas even on urgent visits, so the exam findings reflect
              your pet — not your pet&apos;s panic. Calm handling is not a luxury we drop when things are urgent; it is most
              valuable exactly then.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The daytime anchor */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4" />
              The Coordinated-Care Model
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Daytime Anchor in Colorado Springs&apos; Emergency Network
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Red Rock is deliberately not a 24/7 emergency hospital. We are the daytime anchor: the practice that handles
              same-day urgent medicine Monday through Friday, knows your pet&apos;s history, and coordinates with Colorado
              Springs&apos; dedicated emergency hospitals for everything after hours. When an overnight case needs
              hospitalization, we transfer with records and a phone call ahead. When your pet comes home from the ER, we take
              the handoff: records, medication reconciliation, and the recheck — usually within 24 to 72 hours. One organized
              system, with your pet&apos;s regular doctor at the center of it.
            </p>
            <p className="text-lg text-muted-foreground">
              For the full after-hours playbook, read{" "}
              <Link href="/blog/pet-emergency-after-hours-colorado-springs" className="text-primary hover:underline font-medium">
                what to do if your pet has an emergency after our hours
              </Link>
              . For how the handoff back to us works, read{" "}
              <Link href="/blog/after-er-visit-follow-up-care-colorado-springs" className="text-primary hover:underline font-medium">
                after the animal ER
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* After-Hours Emergency Referrals */}
      <section className="py-16 bg-red-500/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              After-Hours Emergency Care
            </h2>
            <p className="text-lg text-muted-foreground">
              For all after-hours and weekend emergencies, we do not have an on-call line.
              Please contact one of these trusted after-hours emergency facilities:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Animal ER Care</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <a href="tel:719-260-7141" className="text-primary hover:underline">
                    (719) 260-7141
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div className="text-muted-foreground">
                    5520 N. Nevada Ave, Ste 150<br />
                    Colorado Springs, CO 80918
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Open 24/7</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Uintah Pet Emergency</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <a href="tel:719-633-3214" className="text-primary hover:underline">
                    (719) 633-3214
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div className="text-muted-foreground">
                    1635 W. Uintah St, Ste E<br />
                    Colorado Springs, CO 80904
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Open daily, noon to midnight (not overnight)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">North Springs VRC</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <a href="tel:719-920-4430" className="text-primary hover:underline">
                    (719) 920-4430
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div className="text-muted-foreground">
                    10520 White Diamond Pt<br />
                    Colorado Springs, CO 80908
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-muted-foreground">Open 24/7, walk-ins welcome</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-red-500/10 border border-red-500/20 rounded-xl text-center"
          >
            <p className="text-foreground font-medium mb-2">Important Notice</p>
            <p className="text-muted-foreground">
              Red Rock Veterinary Health does not have an on-call emergency line for after-hours care.
              For urgent situations outside our business hours (Monday-Friday, 8am-5pm),
              please go directly to one of these emergency facilities. For overnight
              emergencies after midnight, Animal ER Care and North Springs VRC are open 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about same-day urgent care at Red Rock Veterinary Health.
            </p>
          </motion.div>

          <div className="space-y-4">
            {urgentCareFaqs.map((faq) => (
              <details key={faq.question} className="group bg-background rounded-lg">
                <summary className="flex justify-between items-center gap-4 cursor-pointer p-6 font-semibold text-foreground hover:bg-background/80 rounded-lg">
                  {faq.question}
                  <span className="text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Contact Us for Urgent Care
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Call us to assess your pet&apos;s urgent care needs and schedule an appointment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                    3163 W. Colorado Ave<br />
                    Colorado Springs, CO 80904
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday-Friday: 8am-5pm<br />
                    Closed Saturday & Sunday
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="tel:719-204-3647">
                <Phone className="w-4 h-4 mr-2" />
                Call Now for Urgent Care
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
