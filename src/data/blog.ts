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
    id: "dog-bitten-by-rattlesnake-colorado-springs",
    title: "My Dog Was Bitten by a Rattlesnake on a Colorado Springs Trail: What to Do in the First 30 Minutes",
    slug: "dog-bitten-by-rattlesnake-colorado-springs",
    excerpt: "Dr. Robbie Unsell explains exactly what to do in the first 30 minutes after a rattlesnake bite on a Colorado Springs trail, and why Red Rock is not the right building for it.",
    content: `[[QUICKTAKE]] Quick take
- Drive to a 24-hour emergency hospital now: Animal ER Care, [(719) 260-7141](tel:719-260-7141), 5520 N. Nevada Ave, Ste 150, open 24/7.
- Red Rock cannot treat this. Envenomation needs antivenom and at least 24 hours of monitoring. We close at 5 p.m.
- Keep your dog still and carry it if you can. Movement moves venom.
- No tourniquet, no ice, no cutting, no suction kit, no Benadryl, and do not go near the snake.
- Go even if your dog looks fine, and even if it is vaccinated.

I am Dr. Robbie Unsell, owner of Red Rock Veterinary Health at 3163 W. Colorado Ave. The uncomfortable part first: if a rattlesnake bit your dog, we are not the right building. Antivenom lives at 24-hour hospitals, and an envenomated dog needs monitoring through the night. We are a general practice, open Monday through Friday, 8 a.m. to 5 p.m. Sending you to Animal ER Care at [(719) 260-7141](tel:719-260-7141) is the correct medical decision, not us passing the buck.

## What just happened to your dog

The rattlesnake on the Colorado Springs Front Range is the prairie rattlesnake, Crotalus viridis. It is camouflaged and does not chase people, which is why dogs get bitten and their owners do not: you walk past the rock crevice, your dog puts its nose in it. Most bites land on the muzzle, face, or a front leg. The venom breaks down tissue locally and destroys the blood's ability to clot everywhere else. When venom is injected, expect discoloration within minutes and dark bloody fluid oozing from one puncture or several, rather than a neat pair. Their absence proves nothing.

## Why a bite that looks like nothing still counts

Estimates drawn from human pit viper data put roughly one in five bites as "dry," meaning little or no venom was injected. You cannot use that estimate. You cannot tell a dry bite from a serious envenomation at the trailhead, and the difference becomes obvious only after the best treatment window has closed. The Merck Veterinary Manual lists delay in presentation — waiting until problems develop — right alongside tourniquets and ice as a harmful response.

A snake delivers roughly the same dose regardless of the dog's size, which is why the same bite puts a 9-pound terrier in far more danger than a 90-pound shepherd. Swelling of the muzzle or neck is its own emergency: a dog can take a survivable dose and still lose its airway.

## The first 30 minutes, in order

1. Get your dog away from the snake, and yourself too.
2. Keep your dog still. Carry small and medium dogs; walk a large dog slowly to the car.
3. Note the time of the bite. The hospital will ask for it first.
4. Call ahead while someone else drives: rattlesnake bite, breed and weight, where the bite is, your ETA.
5. Give nothing by mouth. No medication, no food, no home remedy.
6. Drive, even if the swelling has not started and you are not sure it was a snake.

[[SAFETY]] Any known or suspected rattlesnake bite goes straight to a 24-hour emergency hospital — Animal ER Care, [(719) 260-7141](tel:719-260-7141), 5520 N. Nevada Ave, Ste 150, open 24/7. Do not call Red Rock first and do not detour to us; we close at 5 p.m., we have no on-call line, and we cannot provide the antivenom and overnight monitoring this needs.

### What not to do, because all of it makes things worse

- **No tourniquet or tight wrap.** It concentrates tissue-destroying venom in one limb and can cost your dog the leg.
- **No ice, cold packs, cooling sprays, or hot packs.** All are ineffective and potentially harmful.
- **No cutting, no suction device, no snakebite kit.** Suction removes almost no venom while injuring tissue, and cutting adds an open wound to a dog that may not be able to clot.
- **No Benadryl.** In a study of 272 envenomated dogs, there was no evidence that diphenhydramine, glucocorticoids, or preventive antibiotics reduced illness or death.
- **No aspirin or leftover pain medication.** NSAIDs are contraindicated here.
- **Do not kill, capture, or bring in the snake.** A severed head keeps a working bite reflex for an hour or more, and we already know what bit your dog.

## Where to go tonight, and when we pick it up

Antivenom is the only treatment that neutralizes venom, and it works best in the first six hours. If hours have already passed, go anyway — Merck notes dogs can still improve when antivenom is given 24 hours or more after the bite, so there is no hour at which it stops being worth the drive. Antivenom is generally stocked by 24-hour emergency and referral hospitals rather than by general practices like ours. We do not stock it. Call from the road and confirm the hospital has it tonight.

- **Animal ER Care** — [(719) 260-7141](tel:719-260-7141) — 5520 N. Nevada Ave, Ste 150, open 24/7. For a suspected rattlesnake bite, this is your door at any hour.
- **Uintah Pet Emergency** — [(719) 633-3214](tel:719-633-3214) — 1635 W. Uintah St, Ste E, open noon to midnight daily, not overnight. It is closer to the Westside trails, and for most emergencies that matters. For a rattlesnake bite it does not: an envenomated dog needs at least 24 hours of continuous monitoring, so a hospital that closes at midnight is the wrong destination. Drive past it to Animal ER Care.

Call us at [(719) 204-3647](tel:719-204-3647) after the emergency hospital, never before it, and only during our open hours — Monday through Friday, 8 a.m. to 5 p.m. Once your dog is discharged, the handoff is ours during business hours: we request the ER's records, recheck the wound and the swelling, and repeat whatever bloodwork the discharge instructions call for. Our exam is $79, a same-day [urgent appointment](/services/urgent-emergency-care) is $109, and our guide to [follow-up care after an ER visit](/blog/after-er-visit-follow-up-care-colorado-springs) walks through the sequence.

## The trails where this happens, minutes from our door

Red Rock Canyon Open Space, Garden of the Gods, Ute Valley Park, and Section 16 with the Palmer-Red Rock Loop are all prairie rattlesnake habitat. Prairie rattlesnakes range up to 7,500 to 9,500 feet. Colorado Springs sits at roughly 6,035 feet, Red Rock Canyon near 6,200, Garden of the Gods 6,400, and Section 16 with the Palmer-Red Rock Loop from roughly 6,300 to 7,200. "We are too high up for rattlesnakes" is not true anywhere you would walk a dog from the Westside. They emerge from dens in late March or early April and start denning again in late September or early October, and neither edge is a hard line. Keep your dog leashed: bites happen when a dog ranges into brush nose-first.

### The 5 p.m. problem

Prairie rattlesnakes hunt in the late afternoon and evening, once the day has warmed them. That is when most of us walk our dogs. The hours these snakes hunt hardest are hours Red Rock is not open, and I would rather say so plainly than let you find out at 6:40 on a Tuesday.

## The rattlesnake vaccine, answered straight

Here is the part that usually gets left out. The rattlesnake vaccine is a toxoid licensed as an aid against the venom of Crotalus atrox, the western diamondback — a snake that does not live in Colorado. Our snake is Crotalus viridis. The manufacturer says the antibodies may also recognize proteins in other rattlesnake venoms; the 2022 AAHA Canine Vaccination Guidelines task force questioned that cross-protection claim.

AAHA classifies the vaccine as noncore and states there are no published data documenting its efficacy in dogs. Two retrospective studies, one of 82 dogs with moderate-to-severe envenomation and one of 272 dogs, found no difference in illness or death between vaccinated and unvaccinated dogs. AAHA also notes reported adverse reactions, including anaphylaxis, in previously vaccinated dogs that were later bitten.

That is not the same as saying the vaccine does not work. It is saying there is no published evidence that it does, in dogs, against our snake.

We stock the vaccine and we will give it if you want it. Plenty of our clients hike the Westside every week and would rather do the one thing available to them, and that is a reasonable position to take with an honest read of the evidence in front of you. What we will not do is sell it to you as protection. Ask us and we will talk it through for your dog, your trails, and how often you are out there. But the vaccine never changes the plan. A vaccinated dog that is bitten still goes to the 24-hour hospital immediately.

## What treatment costs, and what the odds are

At the hospital your dog gets IV fluids, opioid pain control rather than NSAIDs, bloodwork including clotting times, antivenom if warranted, and monitoring, because the effect on clotting is invisible from the outside. Merck advises a minimum of 24 hours, and swelling can keep progressing for days — one published case had edema still developing on day seven. You deserve a range, not a comforting number: antivenom is commonly quoted in veterinary emergency literature at roughly $600 to $1,000 or more per vial. Severity drives the count — one trial averaged about 1.25 vials per dog, a published severe case needed 20, and totals above $2,500 are frequently quoted. Those are reported ranges, not a Red Rock price, and cost varies by hospital and by how many vials your dog needs.

In that 272-dog series, 264 dogs survived — 97.1% — with hypersensitivity reactions to antivenom in 0.7% of cases, none life-threatening. Dogs older than 10 years that arrived late were more likely to die. No veterinarian can guarantee an outcome for an individual dog, and delay is the one variable you control.

## The other things these trails do to dogs

Snakes get the attention. These are the ones we actually see most, and unlike envenomation, all three are firmly in what we can handle during business hours.

**Foxtails and cheatgrass awns.** Late summer is their season, and they are built to travel in one direction only — into the dog. They lodge between toes, inside ears, up noses, and under eyelids, and they migrate. A sudden violent head shake, an ear the dog will not leave alone, relentless licking of one paw, or explosive sneezing that starts on a walk and does not stop is an awn until proven otherwise. Waiting does not help; an awn that has moved is a harder, more expensive problem than an awn that has not. We remove them here, sedated when we have to, and we would rather see the paw on a Tuesday than the abscess a week later.

**Heat stroke.** Our sun is stronger at 6,035 feet than the temperature suggests, and dogs overheat on a 78-degree afternoon on exposed rock. Distressed panting plus stumbling, disorientation, vomiting, or brick-red gums is an emergency — cool the dog with water, get air moving over the wet coat, and drive to the ER. Do not wait for us.

**Burned paw pads.** Red Rock Canyon and Garden of the Gods hold heat in the stone long after the air has cooled. Press the back of your hand to the rock for seven seconds; if you cannot hold it there, neither can your dog. Limping after a hot walk, or pads that look dark, peeled, or blistered, needs to be seen — burned pads get infected and they hurt for weeks.

[[KEYTAKEAWAY]] If a rattlesnake bit your dog, drive to Animal ER Care at [(719) 260-7141](tel:719-260-7141) right now — vaccinated or not, symptomatic or not, without stopping here first. Then call us at [(719) 204-3647](tel:719-204-3647) on our next open weekday, Monday through Friday between 8 a.m. and 5 p.m., and we will take the follow-up from there. If your dog is discharged on a weekend, Animal ER Care covers you until we open. For foxtails, sore paws, or anything else the trail did that is not an emergency, that same number gets you a same-day urgent slot at $109.`,
    featuredImage: "/blogs/dog-on-red-rock-trail.jpg",
    imageAlt: "A dog sitting on the red rock formations of a Colorado Springs Westside trail, with Pikes Peak in the background",
    author: "Dr. Robbie Unsell",
    publishedAt: "2026-08-07",
    readingTime: 10,
    categories: ["Emergency Care", "Pet Safety"],
    tags: ["rattlesnake bite dog", "dog bitten by rattlesnake Colorado Springs", "prairie rattlesnake Colorado Springs", "rattlesnake vaccine for dogs", "Red Rock Canyon Open Space dog safety", "dog trail safety Colorado Springs", "Section 16 trail Colorado Springs", "foxtails in dogs", "grass awn removal Colorado Springs", "burned paw pads dog"],
    seo: {
      metaTitle: "Dog Bitten by a Rattlesnake in Colorado Springs | Red Rock",
      metaDescription: "Dr. Robbie Unsell on what to do in the first 30 minutes after a rattlesnake bite on a Colorado Springs trail, and where to drive instead of Red Rock.",
      focusKeywords: ["rattlesnake bite dog", "dog bitten by rattlesnake Colorado Springs", "can a dog survive a rattlesnake bite", "rattlesnake vaccine for dogs", "prairie rattlesnake Colorado Springs", "rattlesnake bite dog survival rate"],
    },
    faqs: [
      {
        question: "My dog was just bitten by a rattlesnake — what do I do right now?",
        answer:
          "Drive to a 24-hour emergency hospital immediately. In Colorado Springs that is Animal ER Care at (719) 260-7141, 5520 N. Nevada Ave, Ste 150, open 24/7. Keep your dog as still as possible and carry it to the car if you can lift it, because muscle activity moves venom faster. Do not apply a tourniquet or ice, do not cut or suction the wound, do not give Benadryl, and do not go near the snake.",
      },
      {
        question: "Can a dog survive a rattlesnake bite without treatment?",
        answer:
          "No — a known or suspected rattlesnake bite needs a 24-hour emergency hospital immediately, even if your dog looks completely normal. Estimates drawn from human pit viper data put roughly one in five bites as dry, injecting little or no venom, but there is no way to tell which kind of bite your dog got without veterinary evaluation. The Merck Veterinary Manual specifically names delay in presentation as a harmful response, and antivenom works best in the first six hours. If hours have already passed, go anyway.",
      },
      {
        question: "What is the survival rate for a dog bitten by a rattlesnake?",
        answer:
          "In a published series of 272 dogs treated for rattlesnake envenomation, 264 survived, or about 97.1 percent. Dogs older than 10 years who arrived late were more likely to die. Most dogs survive when they are treated quickly, but no veterinarian can guarantee an outcome for an individual dog, and delay is the factor owners actually control.",
      },
      {
        question: "What does a rattlesnake bite look like on a dog?",
        answer:
          "Look for one or several puncture wounds, since a neat matching pair is the exception rather than the rule, with swelling and marked discoloration that can begin within minutes. Dark, bloody fluid often oozes from the punctures and does not clot. Most bites are on the muzzle, face, or a front leg, because dogs investigate nose-first. Fur hides all of it easily, and seeing none of it does not rule out a bite, so a sudden yelp on the trail is reason enough to drive.",
      },
      {
        question: "Should I give my dog Benadryl for a snake bite?",
        answer:
          "No. Diphenhydramine does nothing to snake venom, and in a study of 272 envenomated dogs there was no evidence that diphenhydramine, glucocorticoids, or preventive antibiotics reduced illness or death. There is no effective home treatment for a rattlesnake bite, and stopping to try one costs the time antivenom needs. Do not give aspirin or any other NSAID either, because your dog may already be losing the ability to clot.",
      },
      {
        question: "How much does antivenom for a dog cost?",
        answer:
          "Antivenom is commonly quoted in veterinary emergency literature at roughly $600 to $1,000 or more per vial, and the number of vials depends on how severe the envenomation is. One canine trial averaged about 1.25 vials per dog, while a published severe case required 20 vials over 17 hours. Total treatment is frequently quoted above $2,500, and it varies by hospital and by how many vials your dog needs. Those are reported ranges rather than a Red Rock price, so ask the emergency hospital for an estimate when you call from the road.",
      },
      {
        question: "Does the rattlesnake vaccine actually work?",
        answer:
          "There is no published evidence that it does in dogs. The 2022 AAHA Canine Vaccination Guidelines classify it as noncore, state there are no published data documenting efficacy in dogs, and note reported adverse reactions including anaphylaxis in previously vaccinated dogs that were later bitten; two retrospective studies, one of 82 dogs and one of 272, found no difference in illness or death between vaccinated and unvaccinated dogs. It is also labeled for Crotalus atrox, the western diamondback, which does not live in Colorado, while our snake is the prairie rattlesnake, Crotalus viridis. Whether to give it is a conversation to have with your veterinarian, but a vaccinated dog that is bitten is still an emergency and still needs a 24-hour hospital immediately.",
      },
      {
        question: "My dog keeps shaking his head and licking one paw after a hike. Could it be a foxtail?",
        answer:
          "Very possibly, and it is worth having looked at rather than waited out. Foxtails and cheatgrass awns are barbed so they only travel one direction, which is inward, and they lodge between toes, in ears, up noses, and under eyelids before migrating deeper. The signs are usually sudden and one-sided: violent head shaking, an ear the dog will not leave alone, relentless licking of a single paw, or sneezing that starts on a walk and does not stop. An awn that has migrated is a harder and more expensive problem than one that has not, so early is genuinely cheaper here. We remove them during business hours, sedated when the location requires it. Call (719) 204-3647 for a same-day urgent slot, which is $109.",
      },
      {
        question: "Are there rattlesnakes at Red Rock Canyon Open Space, Section 16, and Garden of the Gods?",
        answer:
          "Yes. All three are prairie rattlesnake habitat, along with Ute Valley Park and the Palmer-Red Rock Loop. Colorado Springs sits near 6,035 feet and prairie rattlesnakes range up to 7,500 to 9,500 feet, so no Westside trail is above their range. They emerge from dens in late March or early April and begin returning in late September or early October, and they hunt most actively in the late afternoon and evening.",
      },
    ],
    faqJsonLd: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "My dog was just bitten by a rattlesnake — what do I do right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drive to a 24-hour emergency hospital immediately. In Colorado Springs that is Animal ER Care at (719) 260-7141, 5520 N. Nevada Ave, Ste 150, open 24/7. Keep the dog still and carry it to the car if possible, because muscle activity moves venom faster. No tourniquet, no ice, no cutting or suction, no Benadryl, and do not approach the snake."
      }
    },
    {
      "@type": "Question",
      "name": "Can a dog survive a rattlesnake bite without treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A known or suspected rattlesnake bite needs a 24-hour emergency hospital immediately, even if the dog looks completely normal. Estimates drawn from human pit viper data put roughly one in five bites as dry, injecting little or no venom, but there is no way to tell which kind of bite occurred without veterinary evaluation. The Merck Veterinary Manual specifically names delay in presentation as a harmful response; antivenom works best in the first six hours, and dogs can still improve when it is given later, so a delayed arrival is still worth the drive."
      }
    },
    {
      "@type": "Question",
      "name": "What is the survival rate for a dog bitten by a rattlesnake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In a published series of 272 dogs treated for rattlesnake envenomation, 264 survived, about 97.1 percent. Dogs older than 10 years that presented late were more likely to die. Most dogs survive with prompt treatment, though no outcome can be guaranteed for an individual dog, and delay is the factor owners control."
      }
    },
    {
      "@type": "Question",
      "name": "What does a rattlesnake bite look like on a dog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One or several puncture wounds rather than a neat matching pair, with swelling and marked discoloration that can begin within minutes, and dark bloody fluid oozing from the punctures that does not clot. Most bites are on the muzzle, face, or a front leg because dogs investigate nose-first. Fur hides the wounds easily, and the absence of visible signs does not rule out a bite."
      }
    },
    {
      "@type": "Question",
      "name": "Should I give my dog Benadryl for a snake bite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Diphenhydramine does nothing to snake venom, and a study of 272 envenomated dogs found no evidence that diphenhydramine, glucocorticoids, or preventive antibiotics reduced illness or death. There is no effective home treatment for a rattlesnake bite, and aspirin and other NSAIDs are contraindicated because the dog may already be unable to clot."
      }
    },
    {
      "@type": "Question",
      "name": "How much does antivenom for a dog cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antivenom is commonly quoted in veterinary emergency literature at roughly $600 to $1,000 or more per vial, and the number of vials depends on severity. One canine trial averaged about 1.25 vials per dog, while a published severe case required 20 vials over 17 hours. Totals above $2,500 are frequently quoted. These are reported ranges rather than a Red Rock price, and cost varies by hospital and by how many vials the dog needs."
      }
    },
    {
      "@type": "Question",
      "name": "Does the rattlesnake vaccine actually work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no published evidence of efficacy in dogs. The 2022 AAHA Canine Vaccination Guidelines classify it as noncore, state there are no published efficacy data in dogs, and note reported anaphylaxis in previously vaccinated dogs that were later bitten; two retrospective studies of 82 and 272 dogs found no difference in illness or death. The product is labeled for Crotalus atrox, the western diamondback, which does not live in Colorado. Whether to give it is a conversation to have with a veterinarian, but a vaccinated dog that is bitten still needs a 24-hour hospital immediately."
      }
    },
    {
      "@type": "Question",
      "name": "My dog keeps shaking his head and licking one paw after a hike. Could it be a foxtail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Very possibly. Foxtails and cheatgrass awns are barbed so they travel only inward, lodging between toes, in ears, up noses and under eyelids before migrating deeper. Signs are usually sudden and one-sided: violent head shaking, an ear the dog will not leave alone, relentless licking of a single paw, or sneezing that begins on a walk and does not stop. An awn that has migrated is a harder and more expensive problem than one that has not, so early evaluation costs less. Red Rock Veterinary Health removes foxtails and grass awns during business hours, using sedation when the location requires it. A same-day urgent appointment is $109."
      }
    },
    {
      "@type": "Question",
      "name": "Are there rattlesnakes at Red Rock Canyon Open Space, Section 16, and Garden of the Gods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All three are prairie rattlesnake habitat, as are Ute Valley Park and the Palmer-Red Rock Loop. Colorado Springs sits near 6,035 feet and prairie rattlesnakes range up to 7,500 to 9,500 feet, so no Westside trail is above their range. Snakes emerge from dens in late March or early April, begin returning in late September or early October, and hunt most actively in late afternoon and evening."
      }
    }
  ]
}`,
  },
  {
    id: "found-a-lump-on-my-dog-when-to-worry",
    title: "I Found a Lump on My Dog: What to Do Next",
    slug: "found-a-lump-on-my-dog-when-to-worry",
    excerpt: "Dr. Dan Muelhaupt explains why no veterinarian can identify a lump by sight or feel, what to do tonight, and what a fine needle aspirate can and cannot tell you.",
    content: `[[QUICKTAKE]] Quick take
- No veterinarian can tell what a lump is by sight or feel. CSU's Flint Animal Cancer Center, Merck and MSPCA-Angell all say so.
- Do not squeeze or massage it. Handling a mast cell tumor can make it swell and redden.
- The only way to know is to sample it — a needle in the exam room, usually without sedation.
- Collapse, pale gums, bleeding that will not stop, or a hot swelling in a feverish dog: go to a 24-hour emergency hospital now. We close at 5 p.m. with no on-call line.

Your fingers found something on your dog's chest that was not there in the spring, and you want to know tonight whether it is cancer. I am Dr. Dan Muelhaupt at Red Rock Veterinary Health on West Colorado Avenue, and I cannot tell by looking.

## No one can tell what a lump is by looking at it

That includes me. CSU's Flint Animal Cancer Center states it flatly: mast cell tumors can look and feel like anything, so it is impossible to diagnose one without a microscope. Merck says clinical appearance alone cannot establish a diagnosis, and MSPCA-Angell agrees. A 2023 study found 12 to 20 percent of sampled masses were malignant: most lumps are not cancer, but nobody can tell which from the outside.

## What to do in the first ten minutes

1. Stop handling it. Look, do not press.
2. Measure the widest point in millimeters and photograph it beside a quarter so the scale is fixed.
3. Note the date, the location, soft or firm, and whether the skin is broken.
4. Check the whole dog — 11 to 14 percent of dogs with a mast cell tumor have more than one.
5. Write it down, then call [(719) 204-3647](tel:719-204-3647) or text [(719) 355-8343](tel:719-355-8343) when we open. We answer Monday to Friday, 8 a.m. to 5 p.m.; nobody is on either line overnight or on weekends. If this is an emergency below, drive instead of calling.

Mast cell tumors are packed with unstable histamine granules, and the Veterinary Society of Surgical Oncology notes that handling may trigger degranulation — redness, swelling, rarely anaphylaxis. A lump that swells, reddens, then shrinks over a day or two is mast cell behavior, not resolution.

## When to worry: the changes that matter

- **Speed.** A mass that changes over weeks rather than years needs a needle now.
- **A change in character.** Soft that turned firm, or loose that now feels anchored.
- **Fixed to what is underneath.** Stuck to muscle or bone suggests invasion, but a sliding mass has not ruled itself out — early malignant tumors can palpate as discrete lumps.
- **Broken skin.** Ulceration, bleeding, hair loss, or a dog that will not stop licking.
- **Pain or heat.** Fever or lost appetite alongside a swelling runs on a shorter clock.

The owner-facing threshold comes from Dr. Sue Ettinger, a board-certified veterinary oncologist: her See Something, Do Something campaign says a lump a centimeter across, or a month old, should be sampled — her campaign, not a specialty-college guideline. Waiting turns small operations into large ones.

## When to call us, and when to drive past us

[[SAFETY]] Go to a 24-hour emergency hospital now, not to us, if your dog collapses or has pale gums; if the face swells or breathing gets hard after a lump was handled; if a mass bleeds through five minutes of firm pressure; if a swelling turned hot, hard and larger over hours in a feverish dog; if a dog with a known or suspected mast cell tumor vomits blood or passes black tarry stool; if a dog will not bear weight on a leg with a firm swelling over the bone; if a neck mass causes noisy breathing or gagging; or if you suspect a rattlesnake bite anywhere — Red Rock Canyon, Garden of the Gods, Ute Valley Park, Austin Bluffs and your own yard all count. Do not ice it, cut it, or wait to see whether swelling worsens. Animal ER Care, 5520 N. Nevada Ave Ste 150, is open 24 hours: [(719) 260-7141](tel:719-260-7141). Uintah Pet Emergency, 1635 W. Uintah St Ste E, is open daily noon to midnight: [(719) 633-3214](tel:719-633-3214) — not 24 hours. Red Rock is Monday through Friday, 8 a.m. to 5 p.m., with no overnight staff and no on-call line.

Most lumps are none of those things. A stable lump found on a Saturday can wait for Monday — measure it, photograph it, leave it alone. Our standard exam is $79, and a [same-day urgent appointment](/services/urgent-emergency-care), held Monday to Friday during business hours, is $109.

## The lumps we find most often

### The mast cell tumor, the great pretender

Mast cell tumors are the most common malignant skin tumor in dogs, roughly one in six to one in five, and our common breeds top the risk table: odds ratios of 11.3 for Boxers, 6.1 for Staffordshire Bull Terriers, 4.2 for Labradors. They can look like an insect bite, a wart, a skin tag or a fatty tumor, and Merck describes them as soft to solid, so the squishy movable lump that feels like fat can be one. CSU says many patients can be cured of this disease, and that low and intermediate grade tumors are unlikely to spread, so surgery may be the only treatment required. Those are population statements, not a prediction about your dog.

### The fatty tumor everyone assumes it is

A UK primary-care study of 384,284 dogs found 1.9 percent were diagnosed with a lipoma in a year, median age 10 — highest in Weimaraners, Dobermans and German Pointers, Labradors behind them. So "my dog is an old Lab, it is probably fatty" is a reasonable prior and still not a diagnosis: fat on the slide does not separate a simple lipoma from an infiltrative lipoma or a liposarcoma.

### Histiocytoma, the one that really does resolve

In dogs under about three and a half, a raised, hairless, pink button of a lump on the head, ear or limb is often a histiocytoma, and most resolve on their own in two to three months. Leaving one alone is only safe after cytology confirms that is what it is.

### Cysts, abscesses and Front Range foxtails

Follicular cysts are benign, but a ruptured one causes pain, inflammation and infection — and you still need the needle to know that is what it is. An abscess is hot, painful, fast and often feverish, and needs drainage and debridement, not antibiotics alone. A firm lump or draining tract between the toes weeks after a trail can be a migrating foxtail awn, which has to come out. All three are told apart by the same aspirate.

## What a fine needle aspirate can and cannot tell you

A small needle pulls cells from the mass onto a slide, and a stain makes them readable. Most dogs handle it about as well as a vaccination — no incision, no stitches, usually no sedation. Some masses and some dogs do need sedation for a safe sample, and we tell you before we start, not after. And no, it does not make cancer spread; every major authority recommends aspirating before cutting.

Cytology and the final biopsy agree about 89 to 91 percent of the time, and when cytology says a mass is a tumor it is right more than 98 percent of the time — close to definitive. A negative is far weaker: negative predictive value is only about 64 to 69 percent, so roughly one in three reassuring results does not fully exclude cancer. A clean aspirate lowers my concern; it does not end the conversation, and a mass that keeps growing gets re-sampled or removed anyway.

About 18 percent of aspirates come back non-diagnostic — not enough cells to read. Firm, deep, fixed masses are the worst offenders, because those cells cling together instead of releasing into the needle; when one comes back unreadable the next step is a biopsy or a referral, not another aspirate. I also check the nearest lymph node and sample it if it feels enlarged, because that is where a mast cell tumor travels first.

## What happens after the aspirate

If it is benign and stable, we set a recheck date and a number to measure against, not an open-ended "keep an eye on it." If it needs to come out, cytology sets the plan but not the size of it. About 2 centimeters of normal-looking skin in every direction plus one layer of tissue beneath is the published standard for a small, low-grade mast cell tumor, and because cytology cannot give us the grade beforehand, the Veterinary Society of Surgical Oncology recommends 3 to 4 centimeters when the grade is unknown. These tumors extend microscopically into skin that feels normal, which is why the incision surprises people. Everything we remove goes to a pathologist for a diagnosis, a grade and a margin report.

We do the exam, the aspirate and [mass removals](/services/surgery) here. We read cytology in-house, which usually means an answer in five to fifteen minutes while you are still in the room; when a case warrants a clinical pathologist's read, that comes back in three to seven business days, and we tell you which route we are taking and why. In-house aspirate cytology is $99. For removals that need a specialist we strongly recommend Dr. Jennifer Swiderski, a board-certified surgeon who operates on-site through our MOVES partnership, so your dog stays in a building it knows; if she is not available, we refer to Mountain View Veterinary Surgery. We have no CT scanner and we do not give chemotherapy or radiation therapy — for those, CSU's Flint Animal Cancer Center is two hours north in Fort Collins.

[[KEYTAKEAWAY]] The lump on your dog does not have an answer you can see or feel. It has one on a glass slide, and getting it takes a needle and one appointment. Call us at [(719) 204-3647](tel:719-204-3647), Monday through Friday, 8 a.m. to 5 p.m.`,
    featuredImage: "/blogs/drunsellperformingemergencysurgery.jpg",
    imageAlt: "A veterinarian at Red Rock Veterinary Health performing surgery in the practice's surgical suite",
    author: "Dr. Dan Muelhaupt",
    publishedAt: "2026-08-07",
    readingTime: 7,
    categories: ["Cancer & Masses", "Pet Care Tips"],
    tags: ["lump on my dog", "when to worry about a lump on my dog", "mast cell tumor in dogs", "cancerous lump on dog", "dog fatty tumor", "fine needle aspiration dog", "histiocytoma dog", "vet Colorado Springs"],
    seo: {
      metaTitle: "Lump on My Dog: When to Worry | Colorado Springs Vet",
      metaDescription: "Dr. Dan Muelhaupt on why no vet can identify a lump by sight or feel, the changes that mean call now, and what a fine needle aspirate really tells you.",
      focusKeywords: ["lump on my dog", "when to worry about a lump on my dog", "mast cell tumor in dogs", "cancerous lump on dog", "fine needle aspiration dog"],
    },
    faqs: [
      {
        question: "When should I worry about a lump on my dog?",
        answer:
          "Worry about change more than appearance. A mass that visibly grows over weeks rather than years, that turns from soft to firm, that becomes anchored to muscle or bone, that ulcerates or bleeds, or that shows up alongside fever, lethargy or lost appetite should be sampled promptly. Location matters too: masses on the face, a limb, a joint, an eyelid, the armpit or the groin have very little spare skin around them, so acting early keeps the surgery small. Call Red Rock at (719) 204-3647 Monday through Friday, 8 a.m. to 5 p.m., and we will find you the earliest appointment we have.",
      },
      {
        question: "Can a vet tell if a lump on my dog is cancerous just by looking at it or feeling it?",
        answer:
          "No, and any veterinarian who says otherwise is guessing. Colorado State University's Flint Animal Cancer Center states that mast cell tumors can look and feel like anything, so it is impossible to diagnose one without looking at cells under a microscope. The Merck Veterinary Manual and MSPCA-Angell say the same thing independently. The only way to know is to sample the mass and read the cells.",
      },
      {
        question: "Does a lump that moves under the skin mean it is benign?",
        answer:
          "No. Mobility is one input, not an all-clear. Merck notes that early malignant tumors can feel like discrete, encapsulated lumps, and the subcutaneous mast cell tumor is the one that most often masquerades as a soft, movable fatty tumor. A mass fixed to muscle or bone is more concerning, but a mass that slides freely has not ruled itself out.",
      },
      {
        question: "What does a cancerous lump look like on a dog?",
        answer:
          "There is no reliable look. Mast cell tumors are called the great pretenders because they can resemble an insect bite, a wart, an allergic welt, a skin tag or a fatty tumor, and Merck describes them as anything from soft to solid on palpation. Ulceration, bleeding and hair loss over a mass are worrying signs, but plenty of malignant masses look completely unremarkable. Photographs on the internet cannot diagnose your dog.",
      },
      {
        question: "Can a mast cell tumor be benign?",
        answer:
          "Mast cell tumors are classified as malignant, but their behavior varies enormously by grade. Low and intermediate grade tumors are unlikely to spread, and surgery is often the only treatment needed, while high-grade tumors behave far more aggressively. Grade cannot be determined from an aspirate. It is assigned by a pathologist after the mass is removed, which is why everything we take out is submitted for histopathology.",
      },
      {
        question: "What is a fine needle aspiration for a dog, does it hurt, and what does it cost?",
        answer:
          "A fine needle aspirate uses a small needle on a syringe to draw cells out of the mass onto a glass slide. Most dogs tolerate it about as well as a vaccination, with no incision, no stitches and usually no sedation, though some masses and some dogs do need sedation for a safe sample and we tell you that before we start. In-house aspirate cytology is $99, on top of the standard $79 exam or the $109 same-day urgent exam. We read most slides here, which means an answer in five to fifteen minutes while you are still in the room; when a case warrants a clinical pathologist, that takes three to seven business days. And no, putting a needle in a mass does not make cancer spread.",
      },
      {
        question: "Do fatty tumors have to be removed?",
        answer:
          "Not always, but that decision comes after a sample, not instead of one. Even when cytology shows fat, it does not cleanly separate a simple lipoma from an infiltrative lipoma or a liposarcoma, so a confirmed, stable, slow-growing lipoma gets a recheck date and a recorded measurement rather than an open-ended wait-and-see. Removal makes sense when a mass interferes with movement, grows quickly, or changes character. There is no supplement, cream or home remedy that dissolves one.",
      },
      {
        question: "I found a lump on my dog after hours or on a weekend. Can it wait until Monday?",
        answer:
          "Usually yes. A stable lump on a dog who feels well can wait for a Monday appointment; measure it, photograph it beside a quarter and leave it alone until then. Go now instead if your dog collapses, has pale gums, bleeds through five minutes of firm pressure, has a hot, hard, rapidly enlarging swelling with a fever, has facial swelling or breathing trouble after a lump was handled, or has a neck mass causing noisy breathing or gagging: Animal ER Care at 5520 N. Nevada Ave Ste 150 is open 24 hours at (719) 260-7141, and Uintah Pet Emergency at 1635 W. Uintah St Ste E, (719) 633-3214, is open daily noon to midnight and is not a 24-hour hospital. Red Rock is open Monday through Friday, 8 a.m. to 5 p.m. with no overnight staff and no on-call line, so call us at (719) 204-3647 when we open.",
      },
    ],
    faqJsonLd: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I worry about a lump on my dog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Change matters more than appearance. A mass that grows visibly over weeks rather than years, turns from soft to firm, becomes anchored to muscle or bone, ulcerates or bleeds, or appears alongside fever, lethargy or lost appetite should be sampled promptly. Masses on the face, limbs, joints, eyelids, armpits or groin have little spare skin around them, so acting early keeps the surgery small. Red Rock Veterinary Health can be reached at (719) 204-3647 Monday through Friday, 8 a.m. to 5 p.m."
      }
    },
    {
      "@type": "Question",
      "name": "Can a vet tell if a lump on my dog is cancerous just by looking at it or feeling it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Colorado State University's Flint Animal Cancer Center states that mast cell tumors can look and feel like anything, so diagnosis is impossible without examining cells under a microscope. The Merck Veterinary Manual and MSPCA-Angell agree independently. The only way to know is to sample the mass and read the cells."
      }
    },
    {
      "@type": "Question",
      "name": "Does a lump that moves under the skin mean it is benign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Mobility is one input, not an all-clear. Merck notes that early malignant tumors can feel like discrete, encapsulated lumps, and subcutaneous mast cell tumors often masquerade as soft, movable fatty tumors. A fixed mass is more concerning, but a freely sliding mass has not ruled itself out."
      }
    },
    {
      "@type": "Question",
      "name": "What does a cancerous lump look like on a dog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no reliable look. Mast cell tumors are called the great pretenders because they can resemble an insect bite, a wart, an allergic welt, a skin tag or a fatty tumor, and Merck describes them as anything from soft to solid on palpation. Ulceration, bleeding and hair loss are worrying signs, but many malignant masses look unremarkable."
      }
    },
    {
      "@type": "Question",
      "name": "Can a mast cell tumor be benign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mast cell tumors are classified as malignant, but behavior varies enormously by grade. Low and intermediate grade tumors are unlikely to spread and surgery is often the only treatment needed, while high-grade tumors behave far more aggressively. Grade cannot be determined from an aspirate; a pathologist assigns it after the mass is removed."
      }
    },
    {
      "@type": "Question",
      "name": "What is a fine needle aspiration for a dog, does it hurt, and what does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fine needle aspirate uses a small needle on a syringe to draw cells from a mass onto a glass slide. Most dogs tolerate it about as well as a vaccination, with no incision, no stitches and usually no sedation, though some masses and some dogs do need sedation for a safe sample. At Red Rock Veterinary Health in-house aspirate cytology is $99, in addition to the standard $79 exam or the $109 same-day urgent exam. Most slides are read in-house, giving an answer in five to fifteen minutes during the appointment; when a case warrants a clinical pathologist, results take three to seven business days. Aspirating a mass does not make cancer spread."
      }
    },
    {
      "@type": "Question",
      "name": "Do fatty tumors have to be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always, but the decision comes after a sample rather than instead of one. Cytology showing fat does not cleanly separate a simple lipoma from an infiltrative lipoma or a liposarcoma, so a confirmed, stable lipoma gets a recheck date and a recorded measurement. Removal makes sense when a mass interferes with movement, grows quickly or changes character. No supplement or home remedy dissolves one."
      }
    },
    {
      "@type": "Question",
      "name": "I found a lump on my dog after hours or on a weekend. Can it wait until Monday?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually yes. A stable lump on a dog who feels well can wait for a Monday appointment; measure it, photograph it beside a quarter and leave it alone. Collapse, pale gums, bleeding through five minutes of firm pressure, a hot, hard, rapidly enlarging swelling with fever, facial swelling or breathing trouble after a lump was handled, or a neck mass causing noisy breathing or gagging should go to Animal ER Care at 5520 N. Nevada Ave Ste 150, open 24 hours at (719) 260-7141; Uintah Pet Emergency at 1635 W. Uintah St Ste E, (719) 633-3214, is open daily noon to midnight and is not a 24-hour hospital. Red Rock Veterinary Health is open Monday through Friday, 8 a.m. to 5 p.m., with no overnight staff and no on-call line."
      }
    }
  ]
}`,
  },
  {
    id: "flat-faced-dogs-breathing-colorado-springs-altitude",
    title: "Flat-Faced Dogs at 6,035 Feet: Which Breathing Noises Mean the ER Tonight",
    slug: "flat-faced-dogs-breathing-colorado-springs-altitude",
    excerpt: "Dr. Jaime Clevenger on flat-faced dogs at 6,035 feet: which breathing noises mean a weekday appointment, which mean the ER tonight, and when to skip Red Rock entirely.",
    content: `[[QUICKTAKE]] Quick take
- Snoring, snorting, gagging, and stopping to rest on walks are clinical signs, not breed quirks.
- Blue, gray, purple, or very pale gums, collapse, or breathing that will not settle with rest: 24-hour emergency hospital now.
- At 6,035 feet the inspired oxygen pressure is 118 mmHg against 149 at sea level, about 21% lower. That removes reserve; it does not cause BOAS.
- Heat and exertion are the biggest local trigger, ahead of altitude and ahead of the parked car, which is still never safe.
- Reverse sneezing and airway distress are different events. The test is below.

Families move here from sea level all year through Fort Carson, Peterson, and the Air Force Academy, many with a flat-faced dog that has never breathed air this thin. They ask one thing: is my dog's breathing normal?

I am Dr. Jaime Clevenger, a veterinarian at Red Rock Veterinary Health on the Westside.

## BOAS in plain English

Brachycephalic — brak-ee-suh-FAL-ik — obstructive airway syndrome, or BOAS, is four problems stacked:

- **Stenotic nares.** Narrow nostrils that collapse inward on inhalation. The only piece I can assess awake.
- **An elongated soft palate.** It extends past the epiglottis and flutters in the airstream. Usually the snoring.
- **A hypoplastic trachea.** A windpipe built too small; no surgery fixes it.
- **Everted laryngeal saccules.** Tissue dragged into the airway by years of pulling against a blockage.

The first three your dog was born with. Everted saccules are the one your dog earned: already Grade I laryngeal collapse, and it progresses. Waiting is not neutral.

## The signs owners get told are "just the breed"

UK research found 58% of owners of BOAS-affected dogs said their dog had no breathing problem. None of this is normal:

- Snoring at rest, or audible from another room
- Snorting or wet, gurgly breathing while awake
- Gagging, retching, or bringing up undigested food
- Stopping to rest on a walk, or falling behind
- Sleeping propped upright to splint the airway open, or waking up gasping

These dogs also get sleep fragmentation and gastrointestinal disease at high rates. A Frenchie that spits up regularly is showing an airway sign, not a food sensitivity, and regurgitation is the road to aspiration pneumonia. If it then coughs, runs a fever, goes off food, or turns lethargic, treat that as pneumonia — us if we are open, the ER if we are not.

## Reverse sneezing: the noise owners mistake for an emergency

Cornell's Riney Canine Health Center describes a reverse sneeze as an episode in which the dog stands with the neck extended, head tilted back and elbows out, pulling air inward in a rapid repeated series — the opposite of an ordinary sneeze. Episodes run seconds to minutes and usually stop on their own.

### Reverse sneeze, or genuine airway distress?

- **A reverse sneeze starts and stops; distress builds.** Reverse sneezing comes in bursts with normal breathing between; BOAS noise is on every breath in, a wet rattle or a high wheeze, and grows with excitement, heat, and effort.
- **Posture does not separate them.** Both stand neck extended with elbows off the body. The difference is the dog thirty seconds later.
- **Gum color settles it.** Blue, gray, purple, or very pale gums are never a reverse sneeze. That is cyanosis, an emergency now.

If every line fits — short, self-limiting, normal dog afterward, pink gums — that one episode is not by itself an emergency. If any line does not fit, treat it as airway distress and drive to a 24-hour emergency hospital. I will not call it cute either way: "he just does that" is how a real airway problem goes unexamined for years.

## Does 6,035 feet actually make it worse?

No published veterinary study has looked at brachycephalic dogs at Colorado front-range altitude. Anyone quoting a percentage for how much worse your dog breathes here, or an elevation flat-faced dogs "should never go above," invented it. Here is the physics.

Barometric pressure at 6,035 feet is about 608 mmHg against 760 at sea level. Air is 20.9% oxygen everywhere; what falls is the pressure pushing it into the lungs, about 118 mmHg against 149.

For a healthy dog, that is close to a non-event: dogs of every skull shape live normal lives here. An obstructed airway starts lower, so another 30 mmHg off leaves less margin before excitement, heat, or a hill pushes it into distress. That is reserve, not severity. Altitude does not cause BOAS, and sea level will not fix it.

## Heat, exertion, and the one Colorado detail in your favor

Our low humidity genuinely helps: dogs shed heat by evaporating water off the upper airway, and evaporation works better in dry air. A Frenchie at 85°F here is under less strain than one in Houston.

Our normal July daily maximum is about 86.5°F, and this past July averaged 89.8°F. Neither number sounds alarming, and that is the trap. UK primary-care research found 74.2% of heat-illness events with a known trigger were exertional and 5.2% vehicular, with brachycephalic dogs at roughly twice the odds of medium-muzzled dogs. The danger here is your Saturday morning hike, not just your parked car. Still never leave a flat-faced dog in a car, even briefly: vehicular cases were rarer in that data but killed a higher share of the dogs affected, and Bulldogs were the most over-represented.

Walk at dawn, wet the dog down early, and use a harness: a collar compresses an already narrow airway every time your dog pulls. Weight is the other lever: in one 105-dog study, body condition score mattered more for body temperature than breed type.

## What to do right now

1. Look at the gums first. Blue, gray, purple, brick-red, or very pale means stop here and drive to a 24-hour emergency hospital now, without calling first.
2. Pink gums do not mean the dog is fine; they mean you have a little time. Move the dog somewhere cool, dark, and quiet, stop all handling, and give it a few minutes of real rest. Noise that settles is different from noise that does not, and noise that does not settle is an emergency.

[[SAFETY]] Go straight to a 24-hour emergency hospital, without calling us first, for blue, gray, purple, brick-red, or very pale gums; collapse after excitement, heat, or exercise; open-mouth breathing that will not settle after a few minutes of rest somewhere cool; or any open-mouth breathing in a cat, because cats do not pant normally and that is always an emergency. For a rectal temperature of 104°F or higher after heat or exertion — or, with no thermometer, distressed panting plus stumbling, disorientation, vomiting, or brick-red gums — treat it as heat stroke: pour cool or cold water over the dog, get air over the wet coat before you leave, then drive and call the ER on the way. Animal ER Care, 5520 N. Nevada Ave Ste 150, [(719) 260-7141](tel:719-260-7141), is open 24/7. Uintah Pet Emergency, 1635 W. Uintah St Ste E, [(719) 633-3214](tel:719-633-3214), is open daily noon to midnight, not overnight.

Red Rock is open Monday through Friday, 8 a.m. to 5 p.m. No overnight staff, no on-call line, and we are not going to bury that. Call [(719) 204-3647](tel:719-204-3647) in business hours to have the noise assessed. Our [same-day urgent appointments](/services/urgent-emergency-care) are for the day something changed but the dog is stable and pink. After a night at the ER, we [take the handoff](/blog/after-er-visit-follow-up-care-colorado-springs).

## What an airway assessment involves

A conscious exam honestly gets one component: the nostrils. The palate, saccules, and larynx need sedation, because a thick tongue makes the larynx nearly impossible to see awake. Radiographs identify a hypoplastic trachea, and [we take those here](/services/radiography-ultrasound).

We do perform BOAS corrective surgery here. For these airways we strongly recommend Dr. Jennifer Swiderski, a board-certified surgeon (Diplomate, ACVS) who operates on-site through our partnership with MOVES, so your dog has the procedure in a building it already knows rather than being sent across town. Dr. Muelhaupt performs these surgeries as well. If neither is the right fit for your dog, we refer to Mountain View Veterinary Surgery. No one should promise a result: reported improvement ranges from 30% to 90%, a hypoplastic trachea cannot be corrected, and earlier surgery beats emergency surgery. One limit we will state plainly — we have no overnight staff, so a patient who is not stable by 5 p.m. is transferred to a 24-hour hospital rather than sent home, and that plan is made before surgery, not after.

## Anesthesia: why your bulldog gets a different plan

In 223 brachycephalic dogs and 223 matched controls under routine anesthesia, postanesthetic complications ran 13.9% versus 3.6% — dentals and spays, not airway surgery. The dangerous window is recovery, not induction, and per the 2020 AAHA guidelines three minutes of pre-oxygenation buys nearly six minutes of adequate saturation.

The standard of care is to keep a flat-faced dog intubated as long as it is safe and to recover it sternal with the head up, watched by a person, not only by a monitor. That is why the anesthetic day should start early: recovery needs the whole day, and we close at 5 p.m. We have no overnight staff, so a patient of ours that is not stable by then goes to a 24-hour hospital rather than home. There is no third option, and you should know that before you book a dental. Ask any clinic all three questions, including ours.

[[KEYTAKEAWAY]] Noise is information, not personality. A flat-faced dog that snores, snorts, gags, or stops on walks belongs in an ordinary Tuesday appointment, not an 11 p.m. crisis. Call [(719) 204-3647](tel:719-204-3647), Monday through Friday, 8 a.m. to 5 p.m. If the gums are blue or the breathing will not settle, skip us and go to Animal ER Care at [(719) 260-7141](tel:719-260-7141).`,
    featuredImage: "/blogs/bulldog-puppy-lick-mat.jpg",
    imageAlt: "An English bulldog puppy taking peanut butter from a spoon during a low-stress exam at Red Rock Veterinary Health",
    author: "Dr. Jaime Clevenger",
    publishedAt: "2026-08-07",
    readingTime: 7,
    categories: ["Pet Care Tips", "Emergency & Urgent Care", "Pet Safety"],
    tags: ["french bulldog breathing problems", "reverse sneezing in dogs", "brachycephalic dogs", "BOAS in dogs", "flat faced dog breathing", "flat faced dog breathing hard", "pug breathing problems", "Colorado Springs veterinarian"],
    seo: {
      metaTitle: "Flat-Faced Dog Breathing at Altitude | Red Rock Vet",
      metaDescription: "Dr. Jaime Clevenger on flat-faced dogs at 6,035 feet: which breathing noises mean a weekday appointment, which mean the ER tonight, and when to skip us.",
      focusKeywords: ["french bulldog breathing problems", "reverse sneezing in dogs", "brachycephalic dogs Colorado Springs", "flat faced dog breathing altitude", "BOAS in dogs", "brachycephalic dog altitude Colorado Springs"],
    },
    faqs: [
      {
        question: "Is my French Bulldog's heavy breathing normal, or is this an emergency?",
        answer:
          "Heavy, noisy breathing is not normal for any dog, French Bulldogs included, but it is not automatically an emergency. Treat it as one if the gums are blue, gray, purple, or very pale, if your dog collapses, or if open-mouth breathing does not settle after a few minutes of rest somewhere cool and quiet — any of those means driving to a 24-hour emergency hospital now, without calling us first. If your dog is pink, alert, and settles with rest, call Red Rock at (719) 204-3647 during business hours and have the airway properly assessed. Our exam is $79, or $109 for a same-day urgent visit, and that covers the visit itself, not sedated airway evaluation, imaging, or surgery.",
      },
      {
        question: "It is 9 p.m. and my bulldog cannot catch his breath. Where do I go?",
        answer:
          "Go to a 24-hour emergency hospital. Red Rock is open Monday through Friday, 8 a.m. to 5 p.m. only, with no overnight staff and no on-call line, so we cannot help you at 9 p.m. Animal ER Care at 5520 N. Nevada Ave, Suite 150, phone (719) 260-7141, is open 24/7. Uintah Pet Emergency at 1635 W. Uintah St, Suite E, phone (719) 633-3214, is open daily from noon to midnight but is not an overnight hospital.",
      },
      {
        question: "Why is my dog reverse sneezing, and how do I know it is not something worse?",
        answer:
          "Cornell's Riney Canine Health Center describes a reverse sneeze as a short episode in which the dog stands with the neck extended, head tilted back, and elbows out, pulling air inward in a rapid repeated series, the opposite direction from an ordinary sneeze. Episodes run seconds to minutes and usually stop on their own. Genuine airway distress is different: it builds instead of stopping, and the noise is on every breath in rather than in bursts with normal breathing between. Posture does not reliably separate the two, so judge by whether it resolves and by gum color — blue, gray, purple, or very pale gums are never a reverse sneeze, and frequent or worsening episodes deserve an exam.",
      },
      {
        question: "Does Colorado's altitude make my flat-faced dog's breathing worse?",
        answer:
          "There is no published veterinary study of brachycephalic dogs at Colorado front-range altitude, so anyone quoting a percentage for how much worse your dog breathes here, or an elevation limit, is guessing. The physics is certain: barometric pressure at 6,035 feet is about 608 mmHg versus 760 at sea level, so the inspired oxygen pressure is roughly 118 mmHg here against 149 at sea level. A dog whose airway is already obstructed starts from a lower baseline and has less reserve before heat, excitement, or a hill causes visible distress. Altitude does not cause the condition, and moving back to sea level will not fix it.",
      },
      {
        question: "How hot is too hot to walk my French Bulldog in Colorado Springs?",
        answer:
          "There is no published temperature at which a flat-faced dog becomes unsafe, so use time of day and your dog's own response rather than a number. Our normal July daily maximum is about 86.5 degrees and this past July averaged 89.8, and UK primary-care research found that 74.2 percent of canine heat-related illness events with a known trigger were exertional rather than vehicular — though you should still never leave a flat-faced dog in a car, even briefly. Walk at dawn, keep summer routes flat and short, carry water, and wet your dog down before there is a problem. If breathing does not settle within a few minutes of rest in the shade, that is an emergency, not a next-day appointment, and most hot afternoons fall outside our Monday to Friday, 8 a.m. to 5 p.m. hours, so go to Animal ER Care at 5520 N. Nevada Ave, Suite 150, phone (719) 260-7141, open 24/7.",
      },
      {
        question: "My Frenchie snores loudly. Is that cute, or is it a medical sign?",
        answer:
          "It is a medical sign. Snoring usually comes from an elongated soft palate fluttering in the airstream, one of the four components of brachycephalic obstructive airway syndrome. UK research found that 58 percent of owners whose dogs were affected reported their dog had no breathing problem at all, and snoring is the sign most often waved off as normal for the breed. Snoring at rest, or snoring you can hear from another room, is worth an appointment.",
      },
      {
        question: "Does Red Rock do BOAS surgery, and what does it cost?",
        answer:
          "Yes. We strongly recommend Dr. Jennifer Swiderski, a board-certified surgeon (Diplomate, American College of Veterinary Surgeons) who operates on-site here through our partnership with MOVES, so your dog stays in a familiar building instead of being referred across town. Dr. Muelhaupt also performs these procedures. If neither is the right fit, we refer to Mountain View Veterinary Surgery. Cost depends on which components need correcting and is quoted after the sedated airway assessment rather than over the phone, because the plan for a stenotic nares correction and the plan for nares plus soft palate are different operations. We have no overnight staff, so if your dog is not stable by 5 p.m. the plan is a transfer to a 24-hour hospital, and we arrange that before surgery rather than after.",
      },
      {
        question: "Is anesthesia riskier for my bulldog?",
        answer:
          "Yes. In a study of 223 brachycephalic dogs matched against 223 non-brachycephalic dogs undergoing routine anesthesia, postanesthetic complications occurred in 13.9 percent of the brachycephalic dogs versus 3.6 percent of the others, and those were ordinary procedures such as dentals and spays. The dangerous window is recovery rather than induction, so ask any clinic three things: whether pre-oxygenation is standard, whether a person rather than only a monitor watches the whole recovery, and what happens if the dog is not stable by closing time. At Red Rock we have no overnight staff, so a patient that is not stable by 5 p.m. goes to a 24-hour hospital rather than home.",
      },
    ],
    faqJsonLd: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is my French Bulldog's heavy breathing normal, or is this an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Heavy, noisy breathing is not normal for a French Bulldog, but it is not automatically an emergency. Blue, gray, purple, or very pale gums, collapse, or open-mouth breathing that will not settle after a few minutes of rest in a cool, quiet place means driving to a 24-hour emergency hospital immediately, without calling first. A dog that is pink, alert, and settles with rest should be assessed during business hours at Red Rock Veterinary Health, (719) 204-3647; the exam is $79, or $109 same-day urgent, and covers the visit only."
      }
    },
    {
      "@type": "Question",
      "name": "It is 9 p.m. and my bulldog cannot catch his breath. Where do I go?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to a 24-hour emergency hospital. Red Rock Veterinary Health is open Monday through Friday, 8 a.m. to 5 p.m. only, with no overnight staff and no on-call line. Animal ER Care, 5520 N. Nevada Ave Suite 150, (719) 260-7141, is open 24/7. Uintah Pet Emergency, 1635 W. Uintah St Suite E, (719) 633-3214, is open daily noon to midnight and is not an overnight hospital."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my dog reverse sneezing, and how do I know it is not something worse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cornell's Riney Canine Health Center describes a reverse sneeze as a short episode in which the dog stands with the neck extended, head tilted back and elbows out, pulling air inward in a rapid repeated series, the opposite direction from an ordinary sneeze; episodes run seconds to minutes and usually stop on their own. Genuine airway distress builds instead of stopping and is audible on every breath in rather than in bursts. Posture does not reliably separate the two, so judge by whether it resolves and by gum color: blue, gray, purple, or very pale gums are never a reverse sneeze, and frequent or worsening episodes warrant an exam."
      }
    },
    {
      "@type": "Question",
      "name": "Does Colorado's altitude make my flat-faced dog's breathing worse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No published veterinary study has measured brachycephalic dogs at Colorado front-range altitude, so any specific percentage or elevation limit is invented. The physics is established: barometric pressure at 6,035 feet is about 608 mmHg versus 760 at sea level, so inspired oxygen pressure is roughly 118 mmHg here against 149. A dog with an already obstructed airway therefore has less reserve. Altitude does not cause the condition, and moving to sea level does not resolve it."
      }
    },
    {
      "@type": "Question",
      "name": "How hot is too hot to walk my French Bulldog in Colorado Springs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no published safe-temperature threshold for flat-faced dogs, so time of day and the dog's own response matter more than a number. The normal July daily maximum in Colorado Springs is about 86.5 degrees and this past July averaged 89.8, and UK primary-care research found 74.2 percent of canine heat-related illness events with a known trigger were exertional rather than vehicular — though a flat-faced dog should never be left in a car, even briefly. Walk at dawn, keep routes flat and short, and carry water. If breathing does not settle within a few minutes of shaded rest, that is an emergency: go to Animal ER Care, (719) 260-7141, open 24/7, not to a next-day appointment."
      }
    },
    {
      "@type": "Question",
      "name": "My Frenchie snores loudly. Is that cute, or is it a medical sign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a medical sign. Snoring usually comes from an elongated soft palate fluttering in the airstream, one of the four components of brachycephalic obstructive airway syndrome. UK research found 58 percent of owners of affected dogs reported no breathing problem at all. Snoring at rest, or snoring audible from another room, warrants a veterinary appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Does Red Rock do BOAS surgery, and what does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Red Rock Veterinary Health performs BOAS corrective surgery on-site. The practice strongly recommends Dr. Jennifer Swiderski, a board-certified surgeon and Diplomate of the American College of Veterinary Surgeons who operates at Red Rock through its partnership with MOVES, so the dog stays in a familiar building rather than being referred elsewhere. Dr. Dan Muelhaupt also performs these procedures. If neither is the right fit, Red Rock refers to Mountain View Veterinary Surgery. Cost is quoted after the sedated airway assessment rather than over the phone, because correcting stenotic nares alone and correcting nares plus an elongated soft palate are different operations. Red Rock has no overnight staff, so a patient who is not stable by 5 p.m. is transferred to a 24-hour hospital, and that plan is arranged before surgery."
      }
    },
    {
      "@type": "Question",
      "name": "Is anesthesia riskier for my bulldog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. In 223 brachycephalic dogs matched against 223 non-brachycephalic dogs undergoing routine anesthesia, postanesthetic complications occurred in 13.9 percent of brachycephalic dogs versus 3.6 percent of the others, for ordinary procedures such as dentals and spays. The dangerous window is recovery rather than induction, so owners should ask whether pre-oxygenation is standard, whether a person rather than only a monitor watches the entire recovery, and what happens if the dog is not stable by closing time. Red Rock has no overnight staff, so a patient not stable by 5 p.m. goes to a 24-hour hospital rather than home."
      }
    }
  ]
}`,
  },
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