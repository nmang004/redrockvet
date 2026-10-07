"use client";

import {
  ArrowLeftRight,
  Phone,
  Clock,
  AlertTriangle,
  Heart,
  Stethoscope,
  CheckCircle,
  MapPin,
  DollarSign,
  FileText,
  Search,
  Building2,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { switchingVetsFaqs } from "./faq";

const recordsToRequest = [
  "The complete visit history — every exam, every note, from the first visit forward",
  "Vaccination records, including rabies certificate numbers and expiration dates",
  "All laboratory results: bloodwork, urinalysis, fecal, cytology, and any biopsy reports",
  "Imaging and radiographs — ask for the actual image files, not only the radiologist's written report",
  "Current medications with exact doses, frequencies, and the date each was last refilled",
  "Surgical and anesthetic records, including the anesthetic protocol and any complications",
  "Dental charts and full-mouth dental radiographs if your pet has had a dental procedure",
  "Any wellness or prevention plan documents, so a new practice knows what you have already paid for",
];

const requestSteps = [
  "Ask in writing. Email is best because it timestamps itself. A phone call works too, but follow it with an email so there is a record of what you asked for and when.",
  "Name the receiving practice. Give your current clinic the new practice's full name, phone number, and email address. For us that is Red Rock Veterinary Health, (719) 204-3647, Reception@RedRockVet.com.",
  "Ask for everything, by category. Use the list above. 'Send my records' often produces a one-page vaccination summary; naming the categories produces the actual chart.",
  "Confirm it landed. Records transfers get missed more often than anyone likes to admit. Call the receiving practice a few days later and ask whether the file arrived and whether it looks complete.",
];

const questionsToAsk = [
  "Who owns this practice? Is it independently owned, or part of a larger group?",
  "Who makes the medical decisions here, and who signs off on a treatment plan?",
  "Will the same veterinarian see my pet every visit, or whoever is on the schedule that day?",
  "What is your exam fee, and do I get a written estimate before anything is done?",
  "What are your hours, and what exactly happens if my pet gets sick outside them?",
  "How do you handle a dog who is frightened, or a cat who screams in the carrier? Are you Fear Free certified?",
  "Which diagnostics do you run in-house, and how fast do I get results?",
  "When do you refer to a specialist, and who do you refer to?",
  "How do you handle a second opinion — mine, or one I want from someone else?",
  "If I ever decide to leave, how quickly can you send my records to another practice?",
];

const ownershipChecks = [
  "Read the website footer and the About page. Corporate groups almost always disclose it somewhere — a parent-company name, a shared privacy policy, or a line about being part of a family of hospitals.",
  "Look the business up in the Colorado Secretary of State business database. It is free, public, and takes about two minutes.",
  "Ask the front desk. It is a fair question and the answer should come back immediately. Hesitation is itself an answer.",
];

const costDrivers = [
  "Most families here pay out of pocket at the counter, so they see the full cost of care — the same care in human medicine is billed to an insurer before you ever see a number.",
  "A real veterinary hospital is a hospital: anesthesia machines, multiparameter monitors, digital radiography, dental radiography, ultrasound, an in-house laboratory, surgical instrumentation and sterilization, and controlled-drug handling and logging.",
  "The people cost the most, and should. Credentialed veterinary technicians are the reason anesthesia is safe and catheters go in cleanly on the first try.",
  "Veterinary practices buy drugs and supplies at a fraction of the volume a human hospital system does, so we do not get the same unit pricing on them.",
  "Veterinary school debt shapes what a practice has to pay to hire and keep good doctors.",
];

const joinSteps = [
  "Call (719) 204-3647, or text (719) 355-8343. You can also email Reception@RedRockVet.com if you would rather not talk to anyone yet. All three reach the same front desk.",
  "Tell us your name, your pet's name and species, and the name of your previous practice. That is genuinely all we need to start.",
  "Ask us and we can request the records for you, so you do not have to have the awkward conversation with your old clinic unless you want to. We ask for the full chart, not the summary.",
  "When the records arrive ahead of your visit, the doctor reads them before you come in, so you are not re-telling your pet's medical history from memory in an exam room.",
  "You come in Monday through Friday, between 8 a.m. and 5 p.m. A standard exam is $79. If your pet is sick and it cannot wait, ask for a same-day urgent slot at $109.",
];

export default function SwitchingContent() {
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
              <ArrowLeftRight className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Switching Vets in Colorado Springs: How to Transfer Your Pet&apos;s Records (and What to Ask a New Vet)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
            >
              You are allowed to switch veterinarians. You do not owe anyone an explanation, an apology, or a reason.
              This page is the part nobody tells you: how records actually move, what to ask before you commit, what
              independent ownership does and does not mean, and why the bill is what it is.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm font-medium text-foreground/70 mb-8"
            >
              Written by Dr. Robbie Unsell, DVM &mdash; owner, Red Rock Veterinary Health
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
                  Call Us: (719) 204-3647
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="sms:719-355-8343">Text us: (719) 355-8343</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Permission */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                You Are Allowed to Switch
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4">
              I am Dr. Robbie Unsell. I own Red Rock Veterinary Health, and I am going to start with the thing that
              actually keeps people stuck, because it is not paperwork. It is guilt. Search for how to change
              veterinarians and one of the first things you hit is a Reddit thread about &ldquo;etiquette&rdquo;
              &mdash; people worrying they will be judged, or that they owe their old clinic something. So let me say
              it as plainly as I can from the other side of the counter.
            </p>

            <p className="text-lg text-muted-foreground mb-4">
              You are your pet&apos;s decision-maker. You are paying for the care. You can move that care whenever you
              want, for any reason or no stated reason at all &mdash; you moved across town, the wait got long, the
              prices changed, you never see the same doctor twice, or something just did not sit right. None of those
              require a defense. A veterinarian who has been doing this a while has had clients leave and come back and
              leave again, and it is not personal. Records requests are ordinary administrative work; we send charts out
              and take charts in every single week.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              If it helps to have the words ready, here they are. You do not need more than this.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-primary mb-3">
                The entire script
              </p>
              <p className="text-xl text-foreground leading-relaxed italic">
                &ldquo;I am moving my pet&apos;s care to another practice. Please send a copy of the complete medical
                record to Red Rock Veterinary Health at Reception@RedRockVet.com. Thank you.&rdquo;
              </p>
              <p className="text-muted-foreground mt-4">
                That is it. No explanation, no criticism, no reason. If someone pushes back or makes you feel bad for
                asking, that is information about them, not about you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Records are yours */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Your Pet&apos;s Medical History
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ask for the Chart, Not the Summary
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The most common failure in a vet switch is a records request that produces one page of vaccination
              dates. That is not your pet&apos;s medical history. Ask for these things by name:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recordsToRequest.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-background p-5 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 bg-background border border-primary/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              The honest answer about who owns the record
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is where a lot of websites overstate things, so here is the careful version. In most states, the
              physical or electronic chart is the property of the practice that created it, and clients are
              customarily given a <span className="font-semibold text-foreground">copy</span> of the pet&apos;s medical
              history rather than the original file. That distinction sounds like hair-splitting until someone tells
              you no, and then it matters.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am not going to quote you a Colorado statute I have not personally verified. If you want the
              authoritative answer for this state, the Colorado State Board of Veterinary Medicine is the right place to
              ask. What I can tell you from running a practice here: the overwhelming majority of records requests are
              honored without any friction at all, practices differ in how they handle a request while a balance is
              outstanding, and paying off a balance removes that question entirely. Your rabies and vaccination
              certificates may also be on file with whichever authority licenses your pet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              And if you do get stuck, tell us. A request that comes from one veterinary practice to another tends to
              move faster than one that comes from a client, and we can make that request from our side.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to request */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Request Your Records, in Four Steps
            </h2>
          </motion.div>

          <ol className="space-y-4">
            {requestSteps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-accent p-5 rounded-lg"
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

      {/* Questions to ask */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <ClipboardCheck className="w-4 h-4" />
              Use This on Us Too
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ten Questions to Ask Any Veterinarian Before You Switch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This list is written to be useful even if you choose a different practice than ours. Copy it, print it,
              read it off your phone at the front desk. Any veterinary team worth joining will answer all ten without
              getting defensive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questionsToAsk.map((question, index) => (
              <motion.div
                key={question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-background p-5 rounded-lg"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-foreground">{question}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-8 text-center max-w-3xl mx-auto"
          >
            Question ten is the one people forget, and it is revealing. A practice that is straightforward about how it
            releases your records if you leave is a practice that is not holding you hostage. Ask us that one. We send
            the complete chart, not a summary.
          </motion.p>
        </div>
      </section>

      {/* Independent vs corporate */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Independent vs. Corporate Ownership, Stated Fairly
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4">
              A large share of American veterinary hospitals now belong to consolidated groups. The biggest names are
              easy to verify: Mars Veterinary Health owns both VCA and Banfield Pet Hospital. Thrive Pet Healthcare is
              another national group. Petco operates Vetco clinics inside its stores. Several of these brands operate
              here.
            </p>

            <p className="text-lg text-muted-foreground mb-4">
              Now the part where a lot of independent practices get carried away, and I am not going to. Corporate
              ownership is a fact about a business. It is not a verdict on the medicine. There are veterinarians and
              technicians I respect working inside every one of those groups, some of them friends of mine, and a
              corporate hospital with a strong medical director can deliver better care than a badly-run independent
              one. I have no interest in telling you otherwise, and I am not going to make claims about anyone
              else&apos;s prices or quality. Judge a practice on the practice.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              What is fair to say is that ownership determines who is accountable to whom, and you are entitled to know
              which structure you are in. Here is how to find out about any clinic, including this one.
            </p>

            <div className="space-y-4 mb-8">
              {ownershipChecks.map((check, index) => (
                <motion.div
                  key={check}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-accent p-5 rounded-lg"
                >
                  <Search className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{check}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What independent ownership means here, concretely
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Red Rock Veterinary Health is owned by me, a practicing veterinarian, and I work here. There is no
                parent company, no regional office, and no outside owner to answer to. That has three consequences you
                can actually check:
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <span className="font-semibold text-foreground">Medical decisions are made in the exam room.</span>{" "}
                    The doctor seeing your pet &mdash; me, Dr. Dan Muelhaupt, or Dr. Jaime Clevenger &mdash; decides
                    what your pet needs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <span className="font-semibold text-foreground">We set our own schedule.</span> Appointment lengths,
                    how much time a Fear Free visit gets, how many same-day urgent slots we hold &mdash; those are
                    decided in this building, by the people who have to live with them.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <span className="font-semibold text-foreground">The person responsible has a name and a face.</span>{" "}
                    If something goes wrong, you are talking to the owner, and the owner is a veterinarian.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Are Vets So Expensive?</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4">
              This is the question people ask most often here, and most veterinary websites answer it
              defensively. I would rather just answer it.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              The short version: you see the whole bill. In human medicine, an insurer absorbs most of the cost before a
              number ever reaches you. In veterinary medicine, most families pay out of pocket at the counter, so the
              real price of running a medical facility arrives all at once, attached to one visit. That is a genuine
              structural difference, not a markup. Here is what is actually inside it:
            </p>

            <div className="space-y-4 mb-8">
              {costDrivers.map((driver, index) => (
                <motion.div
                  key={driver}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-background p-5 rounded-lg"
                >
                  <Stethoscope className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{driver}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">What you can reasonably demand is a number</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                None of the above justifies a surprise. If a practice will not tell you what an exam costs before you
                walk in, that is a choice they are making. Ours are published:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-background rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">$79</p>
                  <p className="text-sm text-muted-foreground">Standard exam, starting</p>
                </div>
                <div className="bg-background rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">$109</p>
                  <p className="text-sm text-muted-foreground">Same-day urgent exam, starting</p>
                </div>
                <div className="bg-background rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">$999</p>
                  <p className="text-sm text-muted-foreground">Standard dental, starting</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Those are current prices and they can change, so confirm when you book. The $999{" "}
                <Link href="/services/dental" className="text-primary hover:underline font-medium">
                  dental
                </Link>{" "}
                covers the standard procedure; extractions and oral surgery are billed separately and we call you with
                an updated estimate before we do any of it. Everything past the exam &mdash; bloodwork, radiographs,
                medications &mdash; gets priced and discussed with you before it happens. If cost is the reason you are
                leaving your current practice, look at our{" "}
                <Link href="/payment-plans" className="text-primary hover:underline font-medium">
                  payment plan options
                </Link>{" "}
                before you decide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Honest fit */}
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
              Before You Switch: When We Are the Wrong Choice
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You should know this before you move your pet&apos;s care, not after. It is the most important thing on
              this page.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background border border-red-500/20 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-foreground">
                We are open Monday through Friday, 8 a.m. to 5 p.m. That is all.
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are closed on weekends and holidays. We have no overnight staff. We do not run an after-hours on-call
              line, and nobody answers this phone at 11 p.m. We are a general practice &mdash; not an emergency
              hospital, not a specialty referral center.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your household needs weekend access to your primary veterinarian, or if your pet has a condition where
              you expect to need overnight monitoring, we are honestly not the right practice for you and I would
              rather you know that now than find out on a Saturday. If that trade is workable, what you get in exchange
              is a small hospital where three doctors know your pet by name and hold space for{" "}
              <Link href="/services/urgent-emergency-care" className="text-primary hover:underline font-medium">
                same-day urgent appointments
              </Link>{" "}
              Monday through Friday. Availability depends on scheduling and staffing that day, so call early.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-8 text-center max-w-3xl mx-auto"
          >
            When your pet comes home from an emergency hospital, call us the next business morning. We request the ER
            records, reconcile the new medications with the regular ones, and schedule the recheck &mdash; the full
            after-hours playbook is in{" "}
            <Link href="/blog/pet-emergency-after-hours-colorado-springs" className="text-primary hover:underline font-medium">
              what to do if your pet has an emergency after our hours
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* How to switch to Red Rock */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Transfer to Red Rock
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five steps, and we do most of them. Colorado Springs sees a large summer relocation wave every year, so if
              you have just arrived because of a move to Fort Carson, Peterson, Schriever, or the Academy, this is a
              well-worn path for us.
            </p>
          </motion.div>

          <ol className="space-y-4">
            {joinSteps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-accent p-5 rounded-lg"
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

      {/* What you are switching to */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              What You Would Be Switching To
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Small Fear Free Hospital on the Westside
            </h2>

            <p className="text-lg text-muted-foreground mb-4">
              Three veterinarians: me, Dr. Dan Muelhaupt, and Dr. Jaime Clevenger. One building at 3163 W. Colorado Ave,
              on the Westside. Our entire clinical team is{" "}
              <Link href="/services/fear-free" className="text-primary hover:underline font-medium">
                Fear Free certified
              </Link>
              , and Red Rock is the only hospital in Colorado Springs that keeps dogs and cats in separate waiting,
              exam, and treatment areas &mdash; which is why a nervous cat coming from a lobby full of barking dogs
              often behaves like a different animal here. If your switch is driven by a{" "}
              <Link href="/services/cat-clinic" className="text-primary hover:underline font-medium">
                cat who cannot handle the vet
              </Link>{" "}
              or a{" "}
              <Link href="/services/behavioral-management" className="text-primary hover:underline font-medium">
                dog with real fear
              </Link>
              , that layout is the reason to look at us.
            </p>

            <p className="text-lg text-muted-foreground">
              Beyond that, the ordinary work of a general practice, done properly:{" "}
              <Link href="/services/wellness" className="text-primary hover:underline font-medium">
                wellness and preventive care
              </Link>
              ,{" "}
              <Link href="/services/chronic-disease-management" className="text-primary hover:underline font-medium">
                chronic disease management
              </Link>{" "}
              for the pets who need it most,{" "}
              <Link href="/services/dental" className="text-primary hover:underline font-medium">
                dentistry with full-mouth radiographs
              </Link>
              ,{" "}
              <Link href="/services/surgery" className="text-primary hover:underline font-medium">
                surgery
              </Link>
              ,{" "}
              <Link href="/services/allergy-testing-treatment" className="text-primary hover:underline font-medium">
                allergy testing and treatment
              </Link>
              , and, when the time eventually comes,{" "}
              <Link href="/services/compassionate-euthanasia" className="text-primary hover:underline font-medium">
                compassionate euthanasia
              </Link>{" "}
              with people who knew your pet.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about changing veterinarians in Colorado Springs.
            </p>
          </motion.div>

          <div className="space-y-4">
            {switchingVetsFaqs.map((faq) => (
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
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start the Switch
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call, text, or email. Tell us your pet&apos;s name and where the records live, and we will take it from
              there. We are open Monday through Friday, 8 a.m. to 5 p.m., and closed on weekends.
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
                    3163 W. Colorado Ave<br />
                    Colorado Springs, CO 80904
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday-Friday: 8am-5pm<br />
                    Closed Saturday &amp; Sunday<br />
                    No overnight or on-call service
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
