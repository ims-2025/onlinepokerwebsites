export type Rating = {
  overall: number;
  bonus: number;
  traffic: number;
  banking: number;
  software: number;
  trust: number;
};

export type ReviewSection = { heading: string; body: string[] };

export type Faq = { q: string; a: string };

export type Operator = {
  slug: string;
  tracking: string; // affiliate URL — cloaked behind /go/<slug>/ on this domain
  name: string;
  rank: number;
  network: "Winning Poker Network" | "Chico Poker Network";
  established: number;
  tagline: string;
  logoText: string; // short monogram used in the CSS logo tile
  accent: string; // tailwind gradient classes for the logo tile
  rating: Rating;
  bonusHeadline: string;
  bonusDetail: string;
  promoCode?: string;
  rakeback: string;
  keyFacts: { label: string; value: string }[];
  bestFor: string;
  usAvailability: string;
  canadaAvailability: string;
  pros: string[];
  cons: string[];
  banking: {
    deposits: string[];
    withdrawals: string[];
    payoutSpeed: string;
    note: string;
  };
  games: string[];
  intro: string[];
  sections: ReviewSection[];
  verdict: string[];
  faqs: Faq[];
};

// NOTE FOR THE SITE OWNER:
// Replace the "#" in every ctaHref (see components/Cta.tsx and page CTAs) with your
// own affiliate / tracking URL per brand. Bonus figures and promo codes are accurate
// as of July 2026 but change frequently — always confirm on the operator's site.

export const operators: Operator[] = [
  {
    slug: "americas-cardroom",
    tracking: "https://go.wpnaffiliates.com/visit/?bta=237090&brand=americascardroom",
    name: "Americas Cardroom",
    rank: 1,
    network: "Winning Poker Network",
    established: 2011,
    tagline: "The biggest US-facing poker room and home of the Venom.",
    logoText: "ACR",
    accent: "from-red-600 to-red-800",
    rating: { overall: 4.7, bonus: 4.6, traffic: 4.8, banking: 4.6, software: 4.4, trust: 4.5 },
    bonusHeadline: "100% up to $2,000",
    bonusDetail:
      "100% first-deposit match up to $2,000, released incrementally as you earn rewards through real-money play, plus frequent added-value freeroll tickets.",
    promoCode: "Check site for current code",
    rakeback: "Up to 65% via the Elite Benefits loyalty program",
    keyFacts: [
      { label: "Network", value: "Winning Poker Network (flagship)" },
      { label: "Established", value: "2011" },
      { label: "Welcome bonus", value: "100% up to $2,000" },
      { label: "Signature event", value: "The Venom ($10M+ GTD)" },
      { label: "Banking", value: "Crypto, cards, vouchers" },
      { label: "Mobile", value: "iOS, Android & Mac supported" },
    ],
    bestFor: "Tournament players and US grinders who want the deepest traffic.",
    usAvailability:
      "Accepts players from most US states. Access can be restricted in a handful of states that aggressively enforce against offshore operators — confirm from your location before depositing.",
    canadaAvailability:
      "Open to Canadian players nationwide, with crypto banking in CAD-equivalent value and traffic that peaks during North American evenings.",
    pros: [
      "Largest player pool of any US-facing poker network",
      "The Venom and OSS/MOSS series offer massive guarantees",
      "Jackpot Poker (lottery sit & gos) and Blitz fast-fold cash games",
      "Fast crypto cashouts and a well-developed rewards program",
      "Long track record dating back to 2011",
    ],
    cons: [
      "Offshore and unregulated — no US state gaming license",
      "Software is functional rather than flashy",
      "Rake is higher than at licensed, regulated rooms",
    ],
    banking: {
      deposits: ["Bitcoin & major altcoins (USDT, ETH, LTC, BCH)", "Visa / Mastercard", "Vouchers / player transfers"],
      withdrawals: ["Bitcoin & major altcoins", "Bank wire (larger amounts)", "Check by courier"],
      payoutSpeed: "Crypto withdrawals typically process within 24–48 hours.",
      note: "Cryptocurrency is by far the fastest and cheapest option; card deposits may carry a processing fee.",
    },
    games: [
      "No-Limit Hold'em (cash & MTT)",
      "Pot-Limit Omaha",
      "Jackpot Poker (lottery SNGs)",
      "Blitz Poker (fast-fold)",
      "Sit & Gos and satellites",
      "Windfall / bounty formats",
    ],
    intro: [
      "Americas Cardroom (ACR) is the flagship poker room of the Winning Poker Network and the most established US-facing site in our rankings. Since 2011 it has grown into the busiest real-money poker room open to American players, and that traffic advantage is the single biggest reason it tops our list.",
      "For most US and Canadian players, ACR's appeal comes down to one thing: you can almost always find a game. From micro-stakes cash tables to the seven-figure guarantees of the Venom, the lobby stays populated around the clock, especially during North American peak hours.",
    ],
    sections: [
      {
        heading: "Welcome bonus & rewards",
        body: [
          "New players receive a 100% match on their first deposit up to $2,000. Like every offshore poker bonus, it is not handed to you upfront — it releases in small increments as you generate rake at the tables, so it rewards volume rather than a single big deposit.",
          "Beyond the sign-up offer, ACR's Elite Benefits program returns value through rakeback that scales with your play, and the site runs a steady stream of freeroll tickets, reloads and leaderboard promotions. Grinders can reach effective rakeback well above the industry average once they climb the tiers.",
        ],
      },
      {
        heading: "Tournaments & the Venom",
        body: [
          "ACR's tournament schedule is the strongest available to US players. The Venom is its signature event — a multi-million-dollar guaranteed tournament that has grown into the largest regular MTT in US-facing online poker, now running in both No-Limit Hold'em and Pot-Limit Omaha formats with mystery-bounty prize pools.",
          "Around the flagship, the Online Super Series (OSS) and mini/monster variants deliver dozens of guaranteed events year-round, plus daily tournaments and satellites that let smaller bankrolls buy in cheaply.",
        ],
      },
      {
        heading: "Software & mobile",
        body: [
          "The desktop client is stable and feature-complete, with multi-tabling, hand history and note-taking. Following the network's move to newer software, ACR now supports Mac alongside Windows, and mobile apps are available for both iOS and Android.",
          "Unique formats add variety: Jackpot Poker offers lottery-style sit & gos with randomized prize pools, while Blitz Poker provides fast-fold action where you're moved to a new table the moment you fold.",
        ],
      },
    ],
    verdict: [
      "Americas Cardroom earns the top spot because it combines the deepest traffic available to US players with a genuinely elite tournament schedule and a mature rewards program. It is not a licensed, regulated operator, and that trade-off is real — but among offshore rooms open to North America, none match its liquidity.",
      "If you want the best chance of finding a game at any stake, any hour, ACR is the default choice for US and Canadian players in 2026.",
    ],
    faqs: [
      {
        q: "Is Americas Cardroom legit and safe?",
        a: "ACR has operated since 2011 and is the flagship of the Winning Poker Network, with a long history of processing player withdrawals. It is offshore and unregulated by US state authorities, so it carries the same caveats as any offshore room — but within that category it is among the most established and trusted names.",
      },
      {
        q: "What is the Americas Cardroom welcome bonus?",
        a: "A 100% match on your first deposit up to $2,000. The bonus releases in increments as you earn rewards through real-money play rather than being credited all at once.",
      },
      {
        q: "How fast are ACR withdrawals?",
        a: "Cryptocurrency withdrawals are the fastest, typically completing within 24–48 hours. Bank wires and courier checks take longer.",
      },
    ],
  },
  {
    slug: "betonline-poker",
    tracking: "https://record.betonlineaffiliates.ag/_CZzXr-5WlPfYJMJFEJBL7mNd7ZgqdRLk/1/",
    name: "BetOnline Poker",
    rank: 2,
    network: "Chico Poker Network",
    established: 2004,
    tagline: "Crypto-first poker plus a full sportsbook and casino under one roof.",
    logoText: "BOL",
    accent: "from-sky-600 to-blue-800",
    rating: { overall: 4.5, bonus: 4.4, traffic: 4.5, banking: 4.7, software: 4.3, trust: 4.4 },
    bonusHeadline: "100% up to $1,000",
    bonusDetail:
      "100% poker welcome bonus up to $1,000 that clears in fixed increments tied to rake — no confusing tier ladders or token requirements.",
    promoCode: "Check site for current code",
    rakeback: "Base rewards plus reloads; higher deals via loyalty play",
    keyFacts: [
      { label: "Network", value: "Chico Poker Network (flagship)" },
      { label: "Established", value: "2004" },
      { label: "Welcome bonus", value: "100% up to $1,000" },
      { label: "Also offers", value: "Sportsbook & casino" },
      { label: "Banking", value: "Crypto-first, 15+ coins" },
      { label: "Mobile", value: "Browser + mobile client" },
    ],
    bestFor: "Crypto players who also want a sportsbook and casino in one account.",
    usAvailability:
      "Accepts players from most US states, though it blocks a few states (including New Jersey) that regulate or restrict offshore play. Verify availability from your state before signing up.",
    canadaAvailability:
      "Fully open to Canadian players, with crypto-friendly banking and steady traffic during North American hours.",
    pros: [
      "Simple, transparent rake-based bonus clearing",
      "One of the widest crypto menus in offshore poker (15+ coins)",
      "Integrated sportsbook and casino share a single wallet",
      "Fast crypto cashouts and a long operating history since 2004",
      "Softer games thanks to a large recreational player base",
    ],
    cons: [
      "Offshore and unregulated",
      "Poker traffic is smaller than the Winning Poker Network's",
      "Card deposits can carry meaningful fees versus crypto",
    ],
    banking: {
      deposits: ["Bitcoin & 15+ cryptocurrencies (USDC, USDT, ETH, LTC)", "Visa / Mastercard", "Person-to-person / vouchers"],
      withdrawals: ["Cryptocurrency (fastest)", "Bank wire", "Courier check"],
      payoutSpeed: "Crypto payouts are usually processed the same day or within 24 hours.",
      note: "BetOnline is built around crypto — using it avoids the fees attached to card deposits and speeds up cashouts significantly.",
    },
    games: [
      "No-Limit Hold'em (cash & MTT)",
      "Pot-Limit Omaha",
      "Boost fast-fold poker",
      "Windfall lottery sit & gos",
      "Daily tournaments & guarantees",
      "Cross-product sports & casino",
    ],
    intro: [
      "BetOnline is the flagship skin of the Chico Poker Network and one of the longest-running gambling brands open to US players, dating back to 2004. It stands out for pairing a solid poker room with a full sportsbook and casino, all sharing a single crypto-friendly wallet.",
      "For players who value fast, cheap banking and want more than just poker, BetOnline is the most complete all-in-one option in our rankings.",
    ],
    sections: [
      {
        heading: "Welcome bonus & value",
        body: [
          "The poker welcome bonus is a 100% match up to $1,000. What sets it apart is clarity: it clears in fixed increments tied to the rake you generate, without the tiered token systems that make some offshore bonuses hard to value. You always know how much you've unlocked.",
          "New depositors also gain access to poker reloads, freerolls and cross-product promotions spanning the sportsbook and casino, which can add meaningful value if you play more than one vertical.",
        ],
      },
      {
        heading: "Banking & crypto",
        body: [
          "Banking is where BetOnline shines. The cashier supports more than a dozen cryptocurrencies — Bitcoin, Ethereum, Litecoin, USDC, USDT and more — with zero platform fees and same-day payouts on most crypto withdrawals.",
          "Traditional options like Visa and Mastercard exist for deposits, but they carry processing fees and slower payout paths, so crypto is strongly recommended for the smoothest experience.",
        ],
      },
      {
        heading: "Games & traffic",
        body: [
          "The Chico Network is the third-busiest pool open to US players, so while it can't match the Winning Poker Network's volume, you'll still find running cash games and tournaments through peak hours. Recreational traffic makes the games relatively soft.",
          "Formats include standard NLH and PLO cash, Boost fast-fold poker, Windfall lottery sit & gos and a daily tournament calendar with reliable guarantees.",
        ],
      },
    ],
    verdict: [
      "BetOnline is the best pick for players who prioritise banking flexibility and want a poker room bundled with a sportsbook and casino. Its crypto cashier is among the fastest in the offshore market, and its bonus is refreshingly easy to understand.",
      "It sits at #2 because poker traffic trails the Winning Poker Network, but as an all-round crypto gambling home it is hard to beat.",
    ],
    faqs: [
      {
        q: "Is BetOnline Poker legit?",
        a: "BetOnline has operated since 2004 and is the flagship of the Chico Poker Network, with a long record of paying players. It is offshore and unregulated, so standard offshore caveats apply, but it is one of the more established brands in the space.",
      },
      {
        q: "Does BetOnline accept US players?",
        a: "Yes, from most US states. It blocks a few states (including New Jersey) that restrict offshore operators, so confirm availability from your location first.",
      },
      {
        q: "What is the fastest way to withdraw from BetOnline?",
        a: "Cryptocurrency. Crypto payouts typically process the same day or within 24 hours and carry no platform fees.",
      },
    ],
  },
  {
    slug: "black-chip-poker",
    tracking: "https://go.wpnaffiliates.com/visit/?bta=237090&nci=5355",
    name: "Black Chip Poker",
    rank: 3,
    network: "Winning Poker Network",
    established: 2012,
    tagline: "A WPN room with rich promotions and one of the biggest weekly schedules.",
    logoText: "BCP",
    accent: "from-neutral-700 to-neutral-900",
    rating: { overall: 4.4, bonus: 4.5, traffic: 4.6, banking: 4.4, software: 4.3, trust: 4.3 },
    bonusHeadline: "100% up to $2,000",
    bonusDetail:
      "100% first-deposit bonus up to $2,000, added automatically after a qualifying deposit and cleared through real-money play over 60 days.",
    promoCode: "Check site for current code",
    rakeback: "Up to 27% rakeback (must be requested) plus 6-tier Elite Benefits",
    keyFacts: [
      { label: "Network", value: "Winning Poker Network" },
      { label: "Established", value: "2012" },
      { label: "Welcome bonus", value: "100% up to $2,000" },
      { label: "Weekly guarantees", value: "$9M+ across the schedule" },
      { label: "Rakeback", value: "Up to 27% (on request)" },
      { label: "Mobile", value: "iOS, Android & Mac supported" },
    ],
    bestFor: "Promo hunters who want WPN traffic with an alternative rewards angle.",
    usAvailability:
      "Open to players from most US states as a Winning Poker Network skin. As with all WPN rooms, a small number of states may be restricted — check from your location.",
    canadaAvailability:
      "Available to Canadian players, sharing the same large WPN player pool and tournament schedule as Americas Cardroom.",
    pros: [
      "Shares the huge Winning Poker Network player pool",
      "Generous 100% up to $2,000 welcome bonus",
      "Up to 27% rakeback plus a 6-tier loyalty program",
      "$9M+ in weekly tournament guarantees, including marquee Sunday events",
      "Mac and full mobile support",
    ],
    cons: [
      "Rakeback must be requested rather than applied automatically",
      "Offshore and unregulated",
      "Effectively a skin — same pool and software as other WPN rooms",
    ],
    banking: {
      deposits: ["Bitcoin & major altcoins", "Visa / Mastercard", "Vouchers / transfers"],
      withdrawals: ["Cryptocurrency (fastest)", "Bank wire", "Courier check"],
      payoutSpeed: "Crypto withdrawals generally clear within 24–48 hours.",
      note: "As a WPN room, banking mirrors Americas Cardroom — crypto is the fastest and lowest-cost route.",
    },
    games: [
      "No-Limit Hold'em (cash & MTT)",
      "Pot-Limit Omaha",
      "Jackpot Poker (lottery SNGs)",
      "Blitz Poker (fast-fold)",
      "Big weekly guaranteed tournaments",
      "Satellites & sit & gos",
    ],
    intro: [
      "Black Chip Poker is a Winning Poker Network room that has been running since 2012. Because it draws from the same shared pool as Americas Cardroom, it offers the same deep liquidity — but wraps it in a different promotions and rewards package that some players prefer.",
      "It's a natural pick for value hunters: you get WPN's traffic and tournaments, plus a requestable 27% rakeback deal and a distinct six-tier loyalty ladder.",
    ],
    sections: [
      {
        heading: "Welcome bonus & rakeback",
        body: [
          "The headline offer is a 100% first-deposit bonus up to $2,000, automatically added after a qualifying deposit of $25 or more and valid for 60 days as you clear it through play. That matches ACR's headline number while sitting on the same network.",
          "Where Black Chip differentiates is rakeback: players can secure up to 27% back, though it must be requested rather than being on by default. On top of that, the Elite Benefits program runs six tiers where you collect points toward escalating cash rewards.",
        ],
      },
      {
        heading: "Tournaments",
        body: [
          "Because it shares the WPN schedule, Black Chip guarantees millions in weekly prize pools — recent schedules total north of $9 million per week. Marquee Sunday majors and the network's flagship series give tournament players plenty to chase.",
          "Everyday grinders are well served too, with a full daily calendar, satellites into the big events and access to the network's signature Venom qualifiers.",
        ],
      },
      {
        heading: "Software & experience",
        body: [
          "Running on the network's modernized SJH software, Black Chip supports Windows, Mac and mobile (iOS and Android). The client includes the same fast-fold Blitz tables and Jackpot Poker lottery sit & gos found across WPN.",
          "In practice the playing experience is near-identical to Americas Cardroom — your choice between them usually comes down to which bonus and rewards structure fits your volume.",
        ],
      },
    ],
    verdict: [
      "Black Chip Poker is an excellent alternative entry point into the Winning Poker Network. You get the same market-leading traffic and tournaments as ACR, with a rewards package built around requestable rakeback and a tiered loyalty system.",
      "It ranks #3 mainly because it is a skin of the same pool rather than a distinct ecosystem — but for players who prefer its promotions, it's every bit as strong a home.",
    ],
    faqs: [
      {
        q: "Is Black Chip Poker the same as Americas Cardroom?",
        a: "They are separate brands (skins) on the same Winning Poker Network, so they share the same player pool, tournaments and software. The differences are in branding, bonuses and rewards programs.",
      },
      {
        q: "How do I get rakeback at Black Chip Poker?",
        a: "Rakeback of up to 27% is available but must be requested — it isn't applied automatically. Players also earn through the six-tier Elite Benefits loyalty program.",
      },
      {
        q: "What is the Black Chip Poker welcome bonus?",
        a: "A 100% first-deposit bonus up to $2,000, added automatically after a qualifying deposit and cleared over 60 days through real-money play.",
      },
    ],
  },
  {
    slug: "sportsbetting-ag",
    tracking: "https://record.betonlineaffiliates.ag/_CZzXr-5WlPfYJMJFEJBL7mNd7ZgqdRLk/1/",
    name: "SportsBetting.ag",
    rank: 4,
    network: "Chico Poker Network",
    established: 2003,
    tagline: "BetOnline's sister room — same pool, same fast crypto banking.",
    logoText: "SB",
    accent: "from-emerald-600 to-emerald-800",
    rating: { overall: 4.3, bonus: 4.2, traffic: 4.4, banking: 4.6, software: 4.2, trust: 4.2 },
    bonusHeadline: "100% up to $1,000",
    bonusDetail:
      "100% poker welcome bonus up to $1,000 using a qualifying deposit, released as $5 for every $50 of rake generated.",
    promoCode: "Check site for current code",
    rakeback: "Rake-based rewards, reloads and cross-product promos",
    keyFacts: [
      { label: "Network", value: "Chico Poker Network" },
      { label: "Established", value: "2003" },
      { label: "Welcome bonus", value: "100% up to $1,000" },
      { label: "Sister site", value: "BetOnline (shared pool)" },
      { label: "Banking", value: "Crypto-first, low fees" },
      { label: "Also offers", value: "Sportsbook & casino" },
    ],
    bestFor: "Players who want the Chico pool with a second brand's bonus and promos.",
    usAvailability:
      "Accepts players from most US states and Canada, but actively blocks registrations from several states — commonly New Jersey, New York, Nevada, Pennsylvania and Washington. Confirm from your location.",
    canadaAvailability:
      "Open to Canadian players, with crypto banking and traffic shared with BetOnline across the Chico Network.",
    pros: [
      "Shares BetOnline's Chico Network pool and banking",
      "Fast, low-fee crypto withdrawals",
      "Simple $5-per-$50-rake bonus clearing",
      "Long history dating to 2003 with a solid payout record",
      "Integrated sportsbook and casino",
    ],
    cons: [
      "Blocks several US states outright",
      "Offshore and unregulated",
      "Card deposits carry high fees (crypto strongly preferred)",
    ],
    banking: {
      deposits: ["Bitcoin, Ethereum, Litecoin, USDC, XRP, BCH & more", "Visa / Mastercard (fees apply)", "Vouchers / transfers"],
      withdrawals: ["Cryptocurrency (fastest, no platform fee)", "Bank wire", "Courier check"],
      payoutSpeed: "Crypto withdrawals typically process within 24 hours.",
      note: "Card deposits can carry a fee approaching 10%, so crypto is by far the best-value option here.",
    },
    games: [
      "No-Limit Hold'em (cash & MTT)",
      "Pot-Limit Omaha",
      "6-max and 9-max cash tables",
      "Boost fast-fold poker",
      "Windfall lottery sit & gos",
      "Daily tournament schedule",
    ],
    intro: [
      "SportsBetting.ag is the sister skin of BetOnline on the Chico Poker Network — the two share an identical player pool, banking and game selection. In practice, choosing between them comes down to which brand's bonus and promotions you prefer.",
      "With roots going back to 2003, it's one of the longest-standing gambling brands serving US and Canadian players, and it carries the same fast crypto cashier that makes the Chico rooms attractive.",
    ],
    sections: [
      {
        heading: "Welcome bonus",
        body: [
          "The poker welcome bonus is a 100% match up to $1,000. It uses the same transparent rake-based clearing as its sister site — roughly $5 released for every $50 in rake you generate — so progress is easy to track.",
          "Because SportsBetting shares infrastructure with BetOnline, you also get access to cross-product sportsbook and casino promotions from a single account and wallet.",
        ],
      },
      {
        heading: "Availability & banking",
        body: [
          "SportsBetting accepts players from most US states and Canada, but it is stricter than some rooms about geo-blocking — states including New Jersey, New York, Nevada, Pennsylvania and Washington are commonly blocked at registration. Always check that it accepts players from your specific location first.",
          "Banking is crypto-first: Bitcoin, Ethereum, Litecoin, USDC, XRP and Bitcoin Cash all work with no platform fee and fast payouts. Card deposits are possible but carry a steep fee, so crypto is the clear recommendation.",
        ],
      },
      {
        heading: "Games & traffic",
        body: [
          "As part of Chico, SportsBetting draws thousands of concurrent players at peak, with cash games spanning micro to mid stakes in both 6-max and 9-max formats, plus PLO and a daily tournament schedule.",
          "The recreational lean of the traffic keeps games relatively soft, which is a plus for winning players even if the overall pool is smaller than the Winning Poker Network's.",
        ],
      },
    ],
    verdict: [
      "SportsBetting.ag is essentially BetOnline under a different name, and that's a good thing: you get the same fast crypto banking, the same soft Chico pool and a comparable bonus. It's a smart second account if you've maxed out BetOnline's welcome offer and want more promotional value.",
      "It ranks #4 because of its stricter state blocking and the fact that it mirrors BetOnline rather than adding a distinct pool — but it's a dependable, long-established room.",
    ],
    faqs: [
      {
        q: "Is SportsBetting.ag the same as BetOnline?",
        a: "They are sister skins on the Chico Poker Network and share the same player pool, banking and games. The differences are branding, bonuses and promotions — you can hold accounts at both.",
      },
      {
        q: "Which US states does SportsBetting.ag block?",
        a: "It commonly blocks registrations from New Jersey, New York, Nevada, Pennsylvania and Washington, among others. Availability can change, so verify from your location before signing up.",
      },
      {
        q: "What is the best way to deposit at SportsBetting.ag?",
        a: "Cryptocurrency. Crypto carries no platform fee and fast payouts, whereas card deposits can incur a fee approaching 10%.",
      },
    ],
  },
  {
    slug: "tigergaming",
    tracking: "https://record.betonlineaffiliates.ag/_CZzXr-5WlPfYJMJFEJBL7mNd7ZgqdRLk/1/",
    name: "TigerGaming",
    rank: 5,
    network: "Chico Poker Network",
    established: 2004,
    tagline: "A Chico room with a clear, tiered rakeback ladder for regulars.",
    logoText: "TG",
    accent: "from-amber-500 to-orange-700",
    rating: { overall: 4.1, bonus: 4.0, traffic: 4.3, banking: 4.4, software: 4.1, trust: 4.0 },
    bonusHeadline: "100% up to $1,000",
    bonusDetail:
      "100% first-deposit poker bonus up to $1,000, released as $5 for every $50 of rake, alongside a base rakeback deal for all players.",
    promoCode: "Check site for current code",
    rakeback: "10% base, up to 25% via the RISE loyalty tiers",
    keyFacts: [
      { label: "Network", value: "Chico Poker Network" },
      { label: "Established", value: "2004" },
      { label: "Welcome bonus", value: "100% up to $1,000" },
      { label: "Rakeback", value: "10%–25% (RISE tiers)" },
      { label: "Banking", value: "Crypto & cards" },
      { label: "Also offers", value: "Sportsbook & casino" },
    ],
    bestFor: "Regulars who value an upfront, tiered rakeback structure on the Chico pool.",
    usAvailability:
      "Availability for US players varies and has been inconsistent across states; TigerGaming shares the Chico pool with US-friendly BetOnline. Confirm acceptance from your specific state before depositing.",
    canadaAvailability:
      "Generally open to Canadian players as part of the Chico Network, with crypto and card banking.",
    pros: [
      "Transparent base rakeback (10%) applied to all players",
      "RISE loyalty tiers raise rakeback up to 25%",
      "Shares the soft Chico Network player pool",
      "Crypto and card banking with a sportsbook and casino attached",
      "Simple rake-based bonus clearing",
    ],
    cons: [
      "US availability is less consistent than sister room BetOnline",
      "Grinder rakeback caps below some competitors",
      "Offshore and unregulated; mixed operator-reputation signals",
    ],
    banking: {
      deposits: ["Bitcoin & major cryptocurrencies", "Visa / Mastercard", "Vouchers / transfers"],
      withdrawals: ["Cryptocurrency (fastest)", "Bank wire", "Courier check"],
      payoutSpeed: "Crypto withdrawals typically process within 24–48 hours.",
      note: "Crypto remains the fastest and cheapest banking route, consistent with the wider Chico Network.",
    },
    games: [
      "No-Limit Hold'em (cash & MTT)",
      "Pot-Limit Omaha",
      "6-max and 9-max cash tables",
      "Fast-fold poker",
      "Lottery sit & gos",
      "Daily tournaments",
    ],
    intro: [
      "TigerGaming is a Chico Poker Network room best known for its clear, tiered rakeback structure. Every player starts with a base 10% rakeback, climbing toward 25% through the RISE loyalty program — a more upfront rewards approach than some offshore rooms offer.",
      "It shares the Chico pool with BetOnline and SportsBetting.ag, so the games and banking are familiar; the differentiator is that rakeback ladder for regulars.",
    ],
    sections: [
      {
        heading: "Rakeback & bonus",
        body: [
          "The welcome bonus is a 100% match up to $1,000, clearing at the standard Chico rate of roughly $5 per $50 of rake. What makes TigerGaming interesting is the rakeback: a 10% base rate applies to everyone, rising through Bronze, Silver, Gold and Platinum RISE tiers to as much as 25%.",
          "That upfront structure suits players who want to know their rewards rate from day one rather than chasing opaque point systems — though the ceiling sits below the top deals available on the Winning Poker Network.",
        ],
      },
      {
        heading: "Availability considerations",
        body: [
          "TigerGaming's acceptance of US players has been less consistent than its sister site BetOnline, and access can vary by state and over time. Because it sits on the same Chico Network, the underlying games are the same — but you should always confirm the room accepts players from your specific location before depositing.",
          "Canadian players are generally well served, with the full Chico banking menu including crypto and cards available.",
        ],
      },
      {
        heading: "Games & software",
        body: [
          "The game selection mirrors the rest of Chico: NLH and PLO cash across 6-max and 9-max, fast-fold poker, lottery sit & gos and a daily tournament schedule. Recreational traffic keeps the games soft.",
          "The software is solid and stable rather than cutting-edge, with the standard multi-tabling and tracking tools, plus browser and mobile access.",
        ],
      },
    ],
    verdict: [
      "TigerGaming rounds out our top five as a competent Chico Network room with a rakeback ladder that appeals to regulars who want clarity from the outset. The soft games and crypto banking are genuine strengths.",
      "It ranks #5 because US availability is less dependable than its sister rooms and its rakeback ceiling trails the best deals elsewhere. For Canadian players and those it does accept, it remains a reasonable option — but we'd start with BetOnline or SportsBetting.ag on the same network.",
    ],
    faqs: [
      {
        q: "How much rakeback does TigerGaming offer?",
        a: "All players get a base 10% rakeback, rising to as much as 25% through the four-tier RISE loyalty program (Bronze, Silver, Gold, Platinum).",
      },
      {
        q: "Does TigerGaming accept US players?",
        a: "Its US availability has been inconsistent and varies by state. It shares the Chico pool with US-friendly BetOnline, but you should confirm acceptance from your specific location before depositing.",
      },
      {
        q: "Is TigerGaming on the same network as BetOnline?",
        a: "Yes — TigerGaming, BetOnline and SportsBetting.ag all operate on the Chico Poker Network and share the same player pool and games.",
      },
    ],
  },
];

export function getOperator(slug: string): Operator | undefined {
  return operators.find((o) => o.slug === slug);
}

export const rankedOperators = [...operators].sort((a, b) => a.rank - b.rank);
