export type NavItem = {
  href: string;
  label: string;
};

export type ReasonItem = {
  id: number;
  title: string;
  text: string;
};

export type DreamHomeTile = {
  id: string;
  title: string;
  caption: string;
  tone: "warm" | "gold" | "neutral";
};

export type BoutiqueCard = {
  id: string;
  title: string;
  caption: string;
  tag: string;
};

export const siteContent = {
  meta: {
    title: "Mahmoud x Farah",
    description: "A private Valentine story made for Farah.",
    brand: "M x F"
  },
  common: {
    storyNavAriaLabel: "Story navigation"
  },
  nav: [
    { href: "/home", label: "Home" },
    { href: "/letter", label: "Letter" },
    { href: "/gallery", label: "Gallery" },
    { href: "/valentine", label: "Valentine" },
    { href: "/reasons", label: "23 Reasons" },
    { href: "/golden", label: "Golden" },
    { href: "/dream-home", label: "Dream Home" },
    { href: "/boutique", label: "Boutique" }
  ] satisfies NavItem[],
  unlock: {
    eyebrow: "Private Page",
    title: "For Farah Only",
    subtitle: "Enter the passcode to open this little world.",
    inputLabel: "Passcode",
    inputPlaceholder: "Type the passcode",
    submitText: "Unlock",
    errorText: "Wrong passcode, ya bibi. Try again.",
    hintText: "Hosted privately, indexed nowhere, made with love."
  },
  home: {
    title: "A Little World, Just for You",
    subtitle: "Built from 5000 km away, with love and a little drama.",
    badge: "Private 🔒",
    preOpenLine: "Tap the envelope, frihty. The rest is between us.",
    postOpenLine: "Ya bibi, I hope you're smiling already. The story starts now.",
    openButton: "Open Envelope",
    continueButton: "Read the Letter →"
  },
  letter: {
    title: "A Letter for Farah",
    subtitle: "Playful heart, serious love.",
    greeting: "To my frihty,",
    paragraphs: [
      "I'm writing this from 5000 km away, which means you can't interrupt me with a random voice note about what you ate for lunch — so for once, I get to finish a thought. Here's what I want to say.",
      "You showed up in my life and made everything louder and softer at the same time. Louder because you have the energy of a 12-year-old at a birthday party (and I mean that as the biggest compliment). Softer because somehow, with you, even the boring parts of a day feel like they matter.",
      "I think about that birthday trip a lot. You gave me directions for an hour and a half — 'turn here, no wait, the other here' — and I pretended to be annoyed but honestly I'd drive another three hours if it meant ending up at that sunset with you on a white horse. That day was perfect, Farah. You were perfect.",
      "I think about the cheesecake you made me. How you learned it because I mentioned it once. I think about the surprise you planned with your friends — how I walked in with zero clue and you stood there grinning like you'd pulled off a heist. You kind of did.",
      "I think about the staircase wave. Every time I drop you off, I wait in the car, and you wave from the stairs. It's a tiny thing. It's my favorite thing.",
      "Nhebek barcha, ya rohi. Not the kind of love that needs fireworks — the kind that sits with you in an elevator before a seminar, that matches outfits without planning, that orders nwasser because it tastes like home.",
      "Right now there's distance between us. France, Qatar, time zones, missed calls. But here's what the distance taught me: I don't miss you like something I lost. I miss you like something I chose and would choose again every single morning.",
      "You do this thing where you can turn any moment into something fun — doesn't matter where we are or what we have. A random afternoon becomes an adventure. That's not a skill, Farah. That's magic.",
      "So this little website is me, being dramatic on purpose (you love it), building you a corner of the internet that belongs only to us. No one else gets in. Just you, me, and maybe a golden retriever one day.",
      "Nhebek, ya bibi. Today and every day I get after this one."
    ],
    signOff: "Forever yours in cute chaos, Mahmoud",
    nextButton: "See Our Gallery →"
  },
  gallery: {
    title: "Our Moments",
    subtitle: "Every photo here is a moment I'd relive. Tap any to open.",
    cta: "To The Final Question →",
    closeModalText: "Close"
  },
  valentine: {
    title: "One Last Thing",
    subtitle: "You already know what I'm about to ask.",
    question: "Even from 5000 km away — will you be my Valentine, Farah?",
    yesText: "Tab3an ya bibi 💛",
    noText: "Hmm... still yes 💛",
    yesResponse: "Best answer I'll ever get. My golden yes, forever.",
    noResponse: "Even your 'no' sounds like nhebek. I'll take it.",
    nextButton: "See 23 Reasons →"
  },
  reasons: {
    title: "23 Reasons I Love You",
    subtitle: "Swipe through them like a stack of little love notes.",
    prevText: "Previous",
    nextText: "Next",
    cta: "Golden Corner →",
    items: [
      { id: 1, title: "The Staircase Wave", text: "Every time I drop you off, you wave from the stairs. It's a tiny thing. It's my favorite thing." },
      { id: 2, title: "The Nwasser", text: "You cook my favorite dish like my heart placed the order directly." },
      { id: 3, title: "The GPS Era", text: "You gave me directions for an hour and a half to the horse place. I'd drive it all again." },
      { id: 4, title: "Sunset on Horseback", text: "That birthday trip — the white horse, the golden light, you. Perfect." },
      { id: 5, title: "Batman vs. Spiderman", text: "You did the Spiderman hand while saying Batman and I have never recovered." },
      { id: 6, title: "The Cheesecake", text: "You baked me one because I mentioned it once. Once." },
      { id: 7, title: "The Surprise", text: "You planned a whole party with your friends and kept a straight face. Legendary." },
      { id: 8, title: "The Hair", text: "However you do it, I notice every single time." },
      { id: 9, title: "Your Childish Soul", text: "Sometimes you're 12 and it's honestly the best thing about my day." },
      { id: 10, title: "The Entertainer", text: "You can turn any place, any moment into something fun. Doesn't matter where or when." },
      { id: 11, title: "The Hoodie Thief", text: "You wore my graduation hoodie and looked better in it than I ever did." },
      { id: 12, title: "Eid Energy", text: "You in traditional wear is a whole era. I forget how to talk." },
      { id: 13, title: "Nhebek Barcha", text: "You make me say it like I invented the words myself." },
      { id: 14, title: "The Spider & The Net", text: "You bought a spider and a net for us over one joke. Commitment to the bit." },
      { id: 15, title: "Frihty", text: "You made it my favorite word in any language." },
      { id: 16, title: "Your Fashion Sense", text: "Gold, diamonds, clean lines — you wear confidence like it was tailored for you." },
      { id: 17, title: "The Distance", text: "You make 5000 km feel survivable. That takes a rare kind of love." },
      { id: 18, title: "Future Home Talks", text: "You talk about our dream house like we're already picking furniture together. I love that." },
      { id: 19, title: "The First Look Back", text: "When I came back from Qatar, the way you looked at me fixed everything." },
      { id: 20, title: "Random Tuesday Flowers", text: "You're the reason I think about flowers on days that don't require them." },
      { id: 21, title: "My Dramatic Side", text: "You laugh at it instead of running from it. That's love." },
      { id: 22, title: "Soft and Strong", text: "You are both in the same breath. I've never met anyone like that." },
      { id: 23, title: "5000 km", text: "Even from this far, my heart still says your name first, ya frihty." }
    ] satisfies ReasonItem[]
  },
  golden: {
    title: "Golden Retriever Corner",
    subtitle: "For every golden we've stopped to stare at on the street.",
    dogLabel: "Golden Mood",
    actionText: "Send Paw 🐾",
    caption: "One day we'll have our own. Until then, we melt at every single one.",
    cta: "Dream Home →"
  },
  dreamHome: {
    title: "Dream Home Moodboard",
    subtitle: "Scandinavian lines, modern warmth — a preview of our future, one day.",
    cta: "Boutique Mood →",
    tiles: [
      {
        id: "scandi-light",
        title: "Morning Light",
        caption: "Floor-to-ceiling windows, white oak, and the sun doing its thing.",
        tone: "warm"
      },
      {
        id: "gold-detail",
        title: "Gold Accents",
        caption: "Brass fixtures, warm metallics — never loud, always her.",
        tone: "gold"
      },
      {
        id: "nordic-kitchen",
        title: "Nordic Kitchen",
        caption: "Clean stone counters, open shelves, coffee for two.",
        tone: "neutral"
      },
      {
        id: "walk-in",
        title: "Her Closet",
        caption: "A walk-in that feels like a boutique. Non-negotiable.",
        tone: "warm"
      },
      {
        id: "lily-entrance",
        title: "Lily Entrance",
        caption: "Yellow flowers greeting us at the door. Every single day.",
        tone: "gold"
      },
      {
        id: "cozy-nights",
        title: "Cozy Evenings",
        caption: "Soft lamps, linen textures, talking until we fall asleep.",
        tone: "neutral"
      }
    ] satisfies DreamHomeTile[]
  },
  boutique: {
    title: "Boutique Taste",
    subtitle: "Gold, diamonds, clean lines — your closet is a whole mood, Farah.",
    cards: [
      {
        id: "tailored",
        title: "Tailored Chic",
        caption: "Structured pieces with feminine softness. Classic her.",
        tag: "Timeless"
      },
      {
        id: "golden-hour",
        title: "Golden Hour",
        caption: "Warm gold tones that catch the light just right.",
        tag: "Glow"
      },
      {
        id: "diamond",
        title: "Diamond Detail",
        caption: "One statement piece, everything else clean.",
        tag: "Sparkle"
      },
      {
        id: "weekend-luxe",
        title: "Weekend Luxe",
        caption: "Comfortable silhouettes with polished edges.",
        tag: "Effortless"
      }
    ] satisfies BoutiqueCard[]
  }
} as const;

export type SiteContent = typeof siteContent;
