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
    errorText: "That passcode did not match. Try again, frihty.",
    hintText: "Hosted privately, indexed nowhere, shared with love."
  },
  home: {
    title: "A Small Gift Before The Big Question",
    subtitle: "Tap the envelope and let the story start.",
    badge: "Soft-Lux Mode",
    preOpenLine: "One tap, one smile, one step closer to us.",
    postOpenLine: "Ya frihty, this page is my favorite way to say I miss you every day.",
    openButton: "Open Envelope",
    continueButton: "Read the Letter"
  },
  letter: {
    title: "Letter For Farah",
    subtitle: "Playful heart, serious love.",
    greeting: "To my frihty,",
    paragraphs: [
      "You make ordinary days feel like weekend sunshine. Even when life is loud, your voice turns everything soft again.",
      "I love how you carry beauty in everything, flowers, outfits, little details at home, and the way you laugh when I act dramatic on purpose.",
      "Nhebek barcha, ya rohi. Maaek el wa9t ywalli asra3 w ahla in the same minute.",
      "This is me, choosing you loudly and gently at once. Romantic? Yes. Playful? Always."
    ],
    signOff: "Forever your partner in cute chaos, Mahmoud",
    nextButton: "See Our Gallery"
  },
  gallery: {
    title: "Our Moments",
    subtitle: "Tap any polaroid to open it.",
    cta: "To The Final Question",
    closeModalText: "Close"
  },
  valentine: {
    title: "One Last Thing",
    subtitle: "You already know the answer in my eyes.",
    question: "Will you be my Valentine, Farah?",
    yesText: "Yes, habibti",
    noText: "Need one more smile first",
    yesResponse: "Best answer ever. You are my golden yes.",
    noResponse: "I will keep trying with flowers and snacks until you laugh.",
    nextButton: "Open 23 Reasons"
  },
  reasons: {
    title: "23 Reasons I Love You",
    subtitle: "Swipe left or right like a stack of little love notes.",
    prevText: "Previous",
    nextText: "Next",
    cta: "Golden Corner",
    items: [
      { id: 1, title: "Reason 1", text: "You turn simple moments into memories." },
      { id: 2, title: "Reason 2", text: "Your smile fixes my worst days." },
      { id: 3, title: "Reason 3", text: "You are elegant without trying." },
      { id: 4, title: "Reason 4", text: "You love yellow lilies like sunshine in a vase." },
      { id: 5, title: "Reason 5", text: "You make love feel calm, not loud." },
      { id: 6, title: "Reason 6", text: "Your fashion taste is always on point." },
      { id: 7, title: "Reason 7", text: "You notice details no one else sees." },
      { id: 8, title: "Reason 8", text: "You are soft and strong in the same breath." },
      { id: 9, title: "Reason 9", text: "You made frihty my favorite word." },
      { id: 10, title: "Reason 10", text: "You inspire me to build a beautiful future." },
      { id: 11, title: "Reason 11", text: "You make shopping look like art direction." },
      { id: 12, title: "Reason 12", text: "You are playful when I need laughter." },
      { id: 13, title: "Reason 13", text: "You make me feel chosen." },
      { id: 14, title: "Reason 14", text: "You have a heart that is kind and rare." },
      { id: 15, title: "Reason 15", text: "Your voice is my favorite notification." },
      { id: 16, title: "Reason 16", text: "You can make any room look like home." },
      { id: 17, title: "Reason 17", text: "You understand my chaos and still stay." },
      { id: 18, title: "Reason 18", text: "You are my biggest calm and my biggest spark." },
      { id: 19, title: "Reason 19", text: "You deserve flowers on random Tuesdays." },
      { id: 20, title: "Reason 20", text: "You are the best part of my plans." },
      { id: 21, title: "Reason 21", text: "You make romance feel modern and real." },
      { id: 22, title: "Reason 22", text: "With you, I never fake a smile." },
      { id: 23, title: "Reason 23", text: "Because my heart says your name first." }
    ] satisfies ReasonItem[]
  },
  golden: {
    title: "Golden Retriever Corner",
    subtitle: "Tap the button to send happy paw energy.",
    dogLabel: "Golden Mood",
    actionText: "Send Paw",
    caption: "For every time we saw a golden retriever and instantly smiled together.",
    cta: "Dream Home Vibes"
  },
  dreamHome: {
    title: "Dream Home Moodboard",
    subtitle: "A soft preview of our future corners.",
    cta: "Boutique Mood",
    tiles: [
      {
        id: "sun-corner",
        title: "Sun Corner",
        caption: "Cream walls, lily bouquet, warm reading chair.",
        tone: "warm"
      },
      {
        id: "gold-detail",
        title: "Gold Detail",
        caption: "Tiny luxe touches, never too loud, always classy.",
        tone: "gold"
      },
      {
        id: "soft-kitchen",
        title: "Soft Kitchen",
        caption: "Clean stone, wood shelves, coffee and laughter.",
        tone: "neutral"
      },
      {
        id: "closet-room",
        title: "Style Room",
        caption: "A boutique corner for your best fits.",
        tone: "warm"
      },
      {
        id: "lily-hall",
        title: "Lily Hall",
        caption: "Yellow flowers greeting us at the door.",
        tone: "gold"
      },
      {
        id: "night-lamp",
        title: "Quiet Night",
        caption: "Soft lamps, calm textures, us talking till late.",
        tone: "neutral"
      }
    ] satisfies DreamHomeTile[]
  },
  boutique: {
    title: "Boutique Taste Cards",
    subtitle: "Fashion, sparkle, and confident softness.",
    cards: [
      {
        id: "tailored",
        title: "Tailored Chic",
        caption: "Structured pieces with feminine softness.",
        tag: "Classic"
      },
      {
        id: "golden-hour",
        title: "Golden Hour",
        caption: "Cream and gold shades that glow naturally.",
        tag: "Glow"
      },
      {
        id: "statement",
        title: "Statement Detail",
        caption: "One bold accessory, everything else clean.",
        tag: "Sparkle"
      },
      {
        id: "weekend-luxe",
        title: "Weekend Luxe",
        caption: "Comfortable silhouettes with polished edges.",
        tag: "Soft"
      }
    ] satisfies BoutiqueCard[]
  }
} as const;

export type SiteContent = typeof siteContent;
