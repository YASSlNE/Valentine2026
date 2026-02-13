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
    { href: "/letter", label: "✉️ Letter" },
    { href: "/gallery", label: "📸 Gallery" },
    { href: "/valentine", label: "💛 Valentine" },
    { href: "/reasons", label: "20 Reasons" },
    { href: "/golden", label: "🐶 Golden" },
    { href: "/dream-home", label: "✈️ Places" },
    { href: "/boutique", label: "🪐 I Miss" }
  ] satisfies NavItem[],
  unlock: {
    eyebrow: "🔐 Private Page",
    title: "For Farah Only 🌸",
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
    smileLine: "el jweb ma yet7all ken ki twariniii akal dha7ka l mzyenaaa 😬😬🧐🧐📸",
    preOpenLine: "Enzel 3al jweb ya biibii. ✨",
    postOpenLine: "حصلتك التشاااش 🤪🤪🤪 \n haya khw enzel 3al bouton louta tawa 💝 ",
    openButton: "Open Envelope",
    continueButton: "Read the Letter →"
  },
  letter: {
    title: "✉️ A Letter for my Queen 👰🏻‍♀️💫",
    subtitle: "Playful heart, serious love.",
    greeting: "To frihty 💛,",
    paragraphs: [
      "Fariiihaaa happy valentines day w nchalah kol valentine wntii m3aya ya mama, stehiichtikkkk w twahacht alwenekk w dhahktkk w bledtek w rkektekk 🫨🫨🤭",
      "Hatta b hal 5000 kilometres li binetna man7esech li ena mtwa7chekk 3ala khater kayeni khsartek wala dhaya3tek ama kayeni haaja khtartha w raj3elha w nheb no93od dima nakhtarha kol mara m3aayaa 😍❤️",
      "Kadech twahacht kifech kol mara tkhalii ayy lahdha m3ak twali feha jaawww w tdhahekk w exciting hata meghir chayyy keka; enti li tkhaliha keka b rou7ekk l sghayra ta3 tofla 3morha 12 sneee tfarka7 🤸‍♀️🐒🤣🫵",
      "Nchalahh ykoun hedha ekher valentine n3adiwh b3ad 3la b3adhna l distance hedhi lkol ❤️",
      "Bch nkhalih el site hedha haka bch na7farnaa fel internet bch nkhalih lilna wahadna bch ntdhakrouh mba3d a3wemmm w no93dou nadhhkou w a7na 3zewezzz 👴👵 hahah",
      "Nhebek barcha ya bibiii rabi ykhalik liya 💓",
      // "Right now there's distance between us. France, Qatar, time zones, missed calls. But here's what the distance taught me: I don't miss you like something I lost. I miss you like something I chose and would choose again every single morning.",
      // "You do this thing where you can turn any moment into something fun — doesn't matter where we are or what we have. A random afternoon becomes an adventure. That's not a skill, Farah. That's magic.",
      // "So this little website is me, being dramatic on purpose (you love it), building you a corner of the internet that belongs only to us. No one else gets in. Just you, me, and maybe a golden retriever one day.",
      // "Nhebek, ya bibi. Today and every day I get after this one."
    ],
    signOff: "Forever yours in cute chaos, Mahmoud",
    nextButton: "See Our Gallery →"
  },
  gallery: {
    title: "📸 Our Moments",
    subtitle: "Every photo here is a moment I'd relive. Tap any to open.",
    cta: "To The Final Question → 💛",
    closeModalText: "Close"
  },
  valentine: {
    title: "🌹 One Last Thing",
    subtitle: "You already know what I'm about to ask.",
    question: "Even from 5000 km away — will you be my Valentine, Farah? 💍",
    yesText: "Tab3an ya bibi 💛",
    noText: "Hmm... still yes 💛",
    yesResponse: "🎉 Best answer I'll ever get. My golden yes, forever.",
    noResponse: "Even your 'no' sounds like nhebek. I'll take it. 😏",
    bouquetImage: "/photos/bouquet.webp",
    nextButton: "See 20 Reasons →"
  },
  reasons: {
    title: "💛 20 Reasons I Love You",
    subtitle: "Swipe through them like a stack of little love notes.",
    prevText: "← Previous",
    nextText: "Next →",
    cta: "Golden Corner → 🐾",
    items: [
      { id: 1, title: "👋 The Staircase Wave", text: "Kol ma ntaychekk w tatla3 tbaybilii. It's a tiny thing. It's my favorite thing." },
      { id: 2, title: "🍝 El nwasser li tayabtheli", text: "Nwasser hedhika dakhlet galbii direct 💘 (ghir zidha chwaya mé bch ma tjich yebsa🤭)" },
      { id: 3, title: "📍 L moufej3a ta3 3id miledy", text: "A7la birthday trip w a7la destination m3a a7la friha fel 3alem 😍 (hezni 7ata l dzeyer miselech)" },
      { id: 4, title: "🌅 Sunset on Horseback", text: "You and the white horse, the golden light. You were PERFECT 😍💯." },
      { id: 5, title: "🦸 Batman vs. Spiderman", text: "Kol 3am wentii l net 🕸️ to my spider 🕷️" },
      { id: 6, title: "🍰 The Cheesecake", text: "Abannn cheesecake fl 3alem ya nes 🫠🤤" },
      { id: 7, title: "🎉 The Surprise", text: "My first birthday surprise 🥳🥸" },
      { id: 8, title: "💇 Your Hair", text: "However you do it, cha3ratekk yatl3ou mazyounin everytime." },
      { id: 9, title: "🧒 Your Childish Soul", text: "Sometimes (most of the times) you're 12 and it's honestly the best thing about my day with you" },
      { id: 10, title: "🎪 The Entertainer", text: "You can turn any place, any moment into something fun. Doesn't matter where or when." },
      // { id: 11, title: "🧥 The Hoodie Thief", text: "You wore my graduation hoodie and looked better in it than I ever did." },
      { id: 12, title: "✨ Eid Energy", text: "Ki telbes haja traditional, I forget how to talk." },
      { id: 13, title: "❤️ Nhebek Barcha", text: "You make me say it like I invented the words myself." },
      { id: 14, title: "🕷️ The Spider & The Net", text: "BATMAN 🦇." },
      { id: 15, title: "🩷 Frihty", text: "You made it my favorite word in any language." },
      // { id: 16, title: "💎 Your Fashion Sense", text: "Gold, diamonds, clean lines — you wear confidence like it was tailored for you." },
      { id: 17, title: "✈️ The Distance", text: "You make 5000 km feel survivable. That takes a rare kind of love." },
      { id: 18, title: "♚ The Chess King", text: "You gave me a king keychain. I carry it everywhere. You already know who you made the queen." },
      { id: 19, title: "😍 The First Look Back", text: "When I came back from Qatar, the way you looked at me fixed everything." },
      { id: 20, title: "🌻 Random Tuesday Flowers", text: "You're the reason I think about flowers on days that don't require them." },
      // { id: 21, title: "🎭 My Dramatic Side", text: "You laugh at it instead of running from it. That's love." },
      { id: 22, title: "🧊 Soft and Strong", text: "You are both in the same breath. I've never met anyone like that." },
      { id: 23, title: "🌍 5000 km", text: "Even from this far, my heart still says your name first, ya frihty. 💛" }
    ] satisfies ReasonItem[]
  },
  golden: {
    title: "🐶 Golden Retriever Corner",
    subtitle: "Because we both lose our minds every time we see one.",
    dogLabel: "Future Dog Parents 🐾",
    actionText: "Send a Paw 🐾",
    caption: "Somewhere out there, a golden retriever is waiting for us to get our life together so it can ruin our couch. I can't wait.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Z6YWE2MmxrMW5keWVlNnF6b2Jkb2phcjdpcmQzY2EzYnJ0bDRubiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mCRJDo24UvJMA/giphy.gif",
    cta: "Places We'll Go → ✈️"
  },
  dreamHome: {
    title: "✈️ Places We'll Go",
    subtitle: "A map of everywhere I want to be with you. One day, all of them.",
    cta: "One More Section → 🪐",
    tiles: [
      {
        id: "toulouse",
        title: "🇫🇷 Toulouse",
        caption: "You will get there before me, I'll just need to show up with flowers and a ticket.",
        tone: "warm"
      },
      {
        id: "paris",
        title: "🗼 Paris",
        caption: "We're not leaving until we've had coffee on every bridge and you've judged every bakery.",
        tone: "gold"
      },
      {
        id: "barcelona",
        title: "🇪🇸 Barcelona",
        caption: "Architecture you'll photograph, food we'll fight over, sunsets we'll forget to post.",
        tone: "warm"
      },
      {
        id: "istanbul",
        title: "🇹🇷 Istanbul",
        caption: "Tea, mosques, that light everyone talks about. I just want to get lost in it with you.",
        tone: "gold"
      },
      {
        id: "japan",
        title: "🇯🇵 Japan",
        caption: "You in a kimono in Kyoto. I'm already saving for this one.",
        tone: "neutral"
      },
      {
        id: "lombok",
        title: "🌴 Lombok",
        caption: "Crystal water, no schedule, nowhere to be. Just us and the ocean.",
        tone: "neutral"
      }
    ] satisfies DreamHomeTile[]
  },
  boutique: {
    title: "🪐 What I Miss Right Now",
    subtitle: "The small things that feel massive from 5000 km away.",
    cards: [
      {
        id: "pathe",
        title: "🎬 Pathé Nights",
        caption: "Picking a movie we'll forget, driving home way too late, talking over each other the whole ride back.",
        tag: "🌙 Late Nights"
      },
      {
        id: "nothing",
        title: "🚗 Rakchet l 206",
        caption: "Sitting next to you in the car with no plans, no phone, no agenda. Just being there. That's the thing I miss most.",
        tag: "🧘 Quiet"
      },
      {
        id: "painting",
        title: "🎨 Nerkchou norsmou",
        caption: "Mazlt n7eb nkamel l jelyfish raw 🧐",
        tag: "🖌️ Creative"
      },
      {
        id: "restaurants",
        title: "🍽️ New Restaurants",
        caption: "Njarbou rastouranat w meklet jdod kol chwaya",
        tag: "💛 Together"
      }
    ] satisfies BoutiqueCard[]
  }
} as const;

export type SiteContent = typeof siteContent;
