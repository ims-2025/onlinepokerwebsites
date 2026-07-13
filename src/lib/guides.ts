export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "h3"; text: string };

export type GuideSection = { heading: string; blocks: GuideBlock[] };

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  updated: string;
  readMins: number;
  intro: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-choose-a-poker-site",
    title: "How to Choose an Online Poker Site",
    metaTitle: "How to Choose an Online Poker Site (2026 Guide)",
    description:
      "The 9 factors that actually matter when picking an online poker site — traffic, safety, bonuses, banking, rake and more. A practical guide for US and Canadian players.",
    updated: "July 2026",
    readMins: 7,
    intro: [
      "Not all poker sites are created equal, and the flashiest bonus is rarely the best reason to sign up. The right room for you depends on the stakes you play, how you like to deposit, and how much you value traffic versus rewards.",
      "This guide walks through the nine factors we weigh when ranking sites, so you can judge any poker room for yourself — not just the ones we cover.",
    ],
    sections: [
      {
        heading: "1. Player traffic and game selection",
        blocks: [
          {
            type: "p",
            text: "Traffic is the single most important factor. A site with more players running more tables means you can find action at your preferred stake and format whenever you sit down. Thin traffic leads to empty tables, long waits and a narrow choice of games.",
          },
          {
            type: "p",
            text: "For US and Canadian players, the Winning Poker Network (Americas Cardroom, Black Chip Poker) offers the deepest pool, with the Chico Network (BetOnline, SportsBetting.ag, TigerGaming) as the main alternative. Check that the room spreads the games you want — cash, tournaments, PLO, fast-fold — at the stakes you play.",
          },
        ],
      },
      {
        heading: "2. Safety, licensing and reputation",
        blocks: [
          {
            type: "p",
            text: "You are trusting a poker site with your money, so its track record matters. Look for operators with years of history, a clean payout record and an established network behind them.",
          },
          {
            type: "p",
            text: "Be clear-eyed about regulation: the offshore rooms popular with US players are not licensed by US state regulators. That is a real trade-off. Established brands mitigate the risk through reputation and reliability, but you should never deposit more than you're comfortable keeping online.",
          },
        ],
      },
      {
        heading: "3. Welcome bonus and rakeback",
        blocks: [
          {
            type: "p",
            text: "Almost every site offers a deposit-match welcome bonus, typically 100% up to $1,000–$2,000. But these clear slowly as you generate rake, so the headline figure overstates what most players actually collect.",
          },
          {
            type: "p",
            text: "Ongoing rakeback and loyalty rewards usually deliver more long-term value than the sign-up bonus. Weigh both together, and read our dedicated bonuses guide before you deposit.",
          },
        ],
      },
      {
        heading: "4. Banking speed and fees",
        blocks: [
          {
            type: "p",
            text: "How fast can you get paid, and what does it cost? Offshore rooms are built around cryptocurrency: crypto deposits are instant and withdrawals typically clear within 24–48 hours with no platform fees. Card deposits often carry fees and slower payout paths.",
          },
          {
            type: "p",
            text: "If you're comfortable using crypto, it's the smoothest experience by far. If not, factor card and wire fees into your decision.",
          },
        ],
      },
      {
        heading: "5. Software, mobile and stability",
        blocks: [
          {
            type: "p",
            text: "Good software fades into the background. Look for stable multi-tabling, useful features like hand history and notes, and a mobile app if you play on the go. Most major networks now support Windows, Mac, iOS and Android.",
          },
        ],
      },
      {
        heading: "6. Rake",
        blocks: [
          {
            type: "p",
            text: "Rake — the small cut the site takes from each pot or tournament fee — directly affects your bottom line, especially at lower stakes. Offshore rooms tend to rake more than licensed sites, which is where rakeback helps offset the cost. Volume players should pay close attention here.",
          },
        ],
      },
      {
        heading: "7. Availability in your region",
        blocks: [
          {
            type: "p",
            text: "Not every site accepts players from every state or province. Some rooms block specific US states outright at registration. Always confirm the room accepts players from your exact location before you deposit — see our US legality and Canada guides.",
          },
        ],
      },
      {
        heading: "8. Customer support",
        blocks: [
          {
            type: "p",
            text: "You hopefully won't need support often, but when you do — a stuck withdrawal, a disputed hand — responsive, competent help makes a big difference. Live chat and email availability during your playing hours is ideal.",
          },
        ],
      },
      {
        heading: "9. Promotions and tournaments",
        blocks: [
          {
            type: "p",
            text: "Beyond the welcome bonus, look at the ongoing calendar: reloads, freerolls, leaderboard races and flagship tournament series like ACR's Venom. These add real value and keep the experience fresh.",
          },
          {
            type: "p",
            text: "Put it together and the best site is the one that balances deep traffic, fair banking and rewards that match how you actually play.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What's the most important factor when choosing a poker site?",
        a: "Player traffic. Without enough players, you can't find good games at your stake — no bonus makes up for empty tables. After traffic, prioritise safety/track record and banking speed.",
      },
      {
        q: "Should I pick the site with the biggest bonus?",
        a: "Not necessarily. Welcome bonuses clear slowly through rake, so most players collect only part of the headline figure. Ongoing rakeback and the quality of the games usually matter more over time.",
      },
      {
        q: "Do I need cryptocurrency to play?",
        a: "You don't strictly need it, but crypto is by far the fastest and cheapest way to deposit and withdraw at offshore rooms. Cards work but often carry fees and slower payouts.",
      },
    ],
  },
  {
    slug: "poker-bonuses-explained",
    title: "Poker Bonuses Explained",
    metaTitle: "Poker Bonuses Explained: How Welcome Offers Really Work",
    description:
      "How online poker welcome bonuses and rakeback actually work — clearing requirements, promo codes, reloads and how to compare real value. A no-nonsense 2026 guide.",
    updated: "July 2026",
    readMins: 6,
    intro: [
      "\"100% up to $2,000\" sounds generous — but poker bonuses rarely work the way newcomers expect. Understanding how they clear is the difference between chasing a number you'll never see and choosing a genuinely valuable offer.",
      "Here's exactly how poker bonuses work, what the terms mean, and how to compare real value across sites.",
    ],
    sections: [
      {
        heading: "How a deposit-match bonus works",
        blocks: [
          {
            type: "p",
            text: "A 100% match up to $2,000 means the site will match your first deposit dollar-for-dollar, up to a $2,000 maximum. Deposit $500 and you're eligible for $500 in bonus; deposit $2,000 and you're eligible for the full $2,000.",
          },
          {
            type: "p",
            text: "Crucially, the money is not handed to you upfront. It sits in a pending balance and is released to your cash account in small increments as you play real-money games and generate rake.",
          },
        ],
      },
      {
        heading: "Clearing the bonus: rake and increments",
        blocks: [
          {
            type: "p",
            text: "Sites release the bonus based on the rake you contribute. A common structure is a few dollars released for every set amount of rake generated — for example, $5 unlocked per $50 of rake. The more you play, the more of the bonus you collect.",
          },
          {
            type: "p",
            text: "Bonuses also carry an expiry window (often 30–60 days). Anything you haven't cleared by then is forfeited. This is why a huge headline bonus can be worthless to a casual player who won't generate enough rake in time.",
          },
        ],
      },
      {
        heading: "Promo codes",
        blocks: [
          {
            type: "p",
            text: "Many rooms require a promo or bonus code entered at sign-up or first deposit to activate the best offer. Miss it and you may get a smaller default bonus — or none at all. Always check the current code on the operator's site before depositing, since codes change.",
          },
        ],
      },
      {
        heading: "Rakeback vs. the welcome bonus",
        blocks: [
          {
            type: "p",
            text: "Rakeback returns a percentage of the rake you pay, ongoing, for as long as you play. Unlike a one-time welcome bonus, it never expires. For regular players, rakeback usually delivers far more lifetime value than any sign-up offer.",
          },
          {
            type: "p",
            text: "Some sites apply rakeback automatically; others require you to opt in or reach loyalty tiers. Always check how a room's rewards program works — it's often where the real value lives.",
          },
        ],
      },
      {
        heading: "Reloads, freerolls and leaderboards",
        blocks: [
          {
            type: "p",
            text: "Beyond the welcome package, look for ongoing promotions: reload bonuses on later deposits, freeroll tournaments with real prize pools, and leaderboard races that reward volume. These recurring extras can add up to more than the initial bonus.",
          },
        ],
      },
      {
        heading: "How to compare real bonus value",
        blocks: [
          {
            type: "list",
            items: [
              "Clearing rate — how much rake unlocks each increment of bonus?",
              "Expiry window — can you realistically clear it in time?",
              "Rakeback — what ongoing percentage do you earn, and is it automatic?",
              "Match cap vs. your bankroll — a $2,000 cap is meaningless if you're depositing $100.",
              "Ongoing promos — reloads, freerolls and leaderboards that add long-term value.",
            ],
          },
          {
            type: "p",
            text: "Judge an offer by what you'll actually collect given how you play — not by the biggest number on the banner.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why didn't I get my whole poker bonus?",
        a: "Poker bonuses release incrementally as you generate rake, and they expire after a set period. If you don't play enough before the deadline, you only collect the portion you cleared. The headline figure is the maximum, not a guaranteed payout.",
      },
      {
        q: "What is rakeback?",
        a: "Rakeback is an ongoing rebate of a percentage of the rake you pay. Unlike a welcome bonus, it doesn't expire and continues as long as you play, making it the most valuable reward for regular players.",
      },
      {
        q: "Do I need a promo code?",
        a: "Often yes. Many sites require a code at sign-up or first deposit to unlock the best welcome offer. Check the current code on the operator's site, as codes change over time.",
      },
    ],
  },
  {
    slug: "deposits-and-withdrawals",
    title: "Deposits & Withdrawals at Online Poker Sites",
    metaTitle: "Poker Site Deposits & Withdrawals: Crypto, Cards & Payout Speeds",
    description:
      "The fastest, cheapest ways to deposit and cash out at online poker sites — cryptocurrency, cards and vouchers — plus payout speeds, fees and security tips for US & Canadian players.",
    updated: "July 2026",
    readMins: 6,
    intro: [
      "Banking is where offshore poker sites differ most from the licensed sportsbooks and casinos you may be used to. The good news: getting money on and off these sites is fast and cheap if you use the right method.",
      "This guide covers every common banking option, realistic payout speeds and fees, and how to keep your funds secure.",
    ],
    sections: [
      {
        heading: "Cryptocurrency: the default option",
        blocks: [
          {
            type: "p",
            text: "Every site in our top five is built around cryptocurrency, and it's the method we recommend. Crypto deposits are instant, withdrawals typically clear within 24–48 hours, and there are usually no platform fees.",
          },
          {
            type: "p",
            text: "Commonly accepted coins include:",
          },
          {
            type: "list",
            items: [
              "Bitcoin (BTC) — universally supported, the standard choice.",
              "Ethereum (ETH) — widely accepted, faster confirmations than BTC.",
              "Litecoin (LTC) — low fees and quick transfers, popular for smaller amounts.",
              "Stablecoins (USDT, USDC) — pegged to the US dollar, avoiding crypto price swings.",
              "Others — Bitcoin Cash (BCH), XRP and more depending on the room.",
            ],
          },
        ],
      },
      {
        heading: "How to use crypto if you're new to it",
        blocks: [
          {
            type: "p",
            text: "You don't need to be a crypto expert. Buy the coin from a mainstream exchange, send it to the deposit address the poker site shows you, and it arrives in minutes. To withdraw, the site sends crypto back to your wallet, which you can convert to cash on the same exchange.",
          },
          {
            type: "p",
            text: "Stablecoins like USDC or USDT are worth considering because their value stays pegged to the dollar — so your bankroll doesn't move with the crypto market while it sits in your wallet.",
          },
        ],
      },
      {
        heading: "Cards and other methods",
        blocks: [
          {
            type: "p",
            text: "Most sites accept Visa and Mastercard for deposits, but these often carry processing fees (sometimes approaching 10%) and can't always be used for withdrawals. Some rooms also support vouchers, player-to-player transfers, bank wires and courier checks for cashouts.",
          },
          {
            type: "p",
            text: "As a rule: use a card only if you can't use crypto, and expect slower, pricier payouts if you do.",
          },
        ],
      },
      {
        heading: "Payout speeds and fees at a glance",
        blocks: [
          {
            type: "list",
            items: [
              "Crypto — fastest (usually 24–48 hours), typically no platform fee.",
              "Bank wire — slower (several business days), suited to larger amounts.",
              "Courier check — slowest (1–2 weeks), rarely the best choice.",
              "Card deposits — instant to fund, but often fee-heavy and not for withdrawals.",
            ],
          },
        ],
      },
      {
        heading: "Security tips",
        blocks: [
          {
            type: "list",
            items: [
              "Enable every security feature the site offers, including two-factor authentication.",
              "Keep your crypto in a wallet you control; only move what you intend to play with.",
              "Verify deposit and withdrawal addresses carefully — crypto transactions can't be reversed.",
              "Withdraw winnings regularly rather than leaving a large balance on any offshore site.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the fastest way to withdraw from a poker site?",
        a: "Cryptocurrency. Crypto withdrawals typically process within 24–48 hours with no platform fees, far faster than bank wires or courier checks.",
      },
      {
        q: "Do I have to use cryptocurrency?",
        a: "No, most sites accept Visa and Mastercard for deposits. But crypto is faster and cheaper, and cards often can't be used for withdrawals, so crypto is strongly recommended.",
      },
      {
        q: "Are stablecoins better than Bitcoin for poker?",
        a: "For holding a bankroll, stablecoins like USDC and USDT have an advantage: their value stays pegged to the US dollar, so your balance doesn't swing with the crypto market. Bitcoin is more universally supported.",
      },
    ],
  },
  {
    slug: "us-poker-legality",
    title: "US Online Poker Legality Explained",
    metaTitle: "Is Online Poker Legal in the US? State-by-State (2026)",
    description:
      "A plain-English guide to US online poker law in 2026: regulated states, the offshore option, what federal law actually says, and what it all means for players. Not legal advice.",
    updated: "July 2026",
    readMins: 7,
    intro: [
      "US online poker law is a patchwork, and it's easy to get confused by the headlines. The short version: a handful of states run their own regulated poker rooms, most don't, and many players use offshore sites that operate in a legal gray area.",
      "This guide explains how the law is structured and what it means for you as a player. It is general information, not legal advice — laws change and vary by location, so confirm the rules where you live.",
    ],
    sections: [
      {
        heading: "Federal vs. state law",
        blocks: [
          {
            type: "p",
            text: "There is no single federal law that makes playing online poker a crime for individuals. The two federal laws people cite most — the Wire Act and UIGEA — primarily target operators and payment processing, not players placing a bet. A 2011 Department of Justice opinion clarified that the Wire Act applies to sports betting, which opened the door for states to regulate online poker individually.",
          },
          {
            type: "p",
            text: "The practical result: online poker is regulated at the state level. Whether a licensed, legal option exists for you depends entirely on your state.",
          },
        ],
      },
      {
        heading: "States with regulated online poker",
        blocks: [
          {
            type: "p",
            text: "A small group of states have passed laws to license and regulate online poker, some sharing player pools through a multi-state agreement:",
          },
          {
            type: "list",
            items: [
              "Nevada — one of the earliest to regulate online poker.",
              "New Jersey — a mature regulated market with several licensed rooms.",
              "Pennsylvania — a large regulated market.",
              "Michigan — regulated and part of shared-liquidity agreements.",
              "Delaware — small but long-standing regulated market.",
              "West Virginia — has passed enabling legislation.",
              "Connecticut — regulated online gaming including poker.",
            ],
          },
          {
            type: "p",
            text: "In these states, residents can play on licensed, state-regulated platforms. Availability and the specific rooms differ by state and evolve over time.",
          },
        ],
      },
      {
        heading: "The offshore option",
        blocks: [
          {
            type: "p",
            text: "Most US states have no regulated online poker of their own. Players in those states often turn to offshore sites — like the rooms reviewed on this site — which are licensed abroad and accept US customers but are not overseen by any US state regulator.",
          },
          {
            type: "p",
            text: "This is the gray area. These sites operate outside US regulatory oversight, which means fewer consumer protections than a licensed operator provides. Established offshore brands mitigate this through long track records, but the trade-off is real and you should weigh it before depositing.",
          },
        ],
      },
      {
        heading: "What this means for you as a player",
        blocks: [
          {
            type: "list",
            items: [
              "If you live in a regulated state, a licensed, state-supervised poker room is the safest option.",
              "If you don't, offshore sites are the common alternative, with the caveats above.",
              "Enforcement has overwhelmingly targeted operators and payment processors, not individual players.",
              "Some offshore rooms block specific states at registration — always check acceptance from your location.",
            ],
          },
        ],
      },
      {
        heading: "A note on responsibility",
        blocks: [
          {
            type: "p",
            text: "Laws differ by state and change over time. Nothing here is legal advice. If you have questions about your specific situation, consult a qualified attorney in your jurisdiction, and always play within your means.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is online poker legal in the United States?",
        a: "It depends on your state. Several states (including New Jersey, Pennsylvania, Michigan and Nevada) license and regulate online poker. Most don't, and players there often use offshore sites that operate outside US regulatory oversight. Federal law mainly targets operators, not individual players. This is general information, not legal advice.",
      },
      {
        q: "Which states have legal, regulated online poker?",
        a: "As of 2026, regulated states include Nevada, New Jersey, Pennsylvania, Michigan, Delaware, West Virginia and Connecticut. Details and available rooms change over time, so check your state's current status.",
      },
      {
        q: "Are offshore poker sites legal for US players?",
        a: "Offshore sites operate in a legal gray area: they are licensed abroad and accept US players but are not regulated by US state authorities. Enforcement has focused on operators rather than players, but there are fewer consumer protections. Confirm what's allowed where you live.",
      },
    ],
  },
  {
    slug: "canada-online-poker",
    title: "Online Poker in Canada",
    metaTitle: "Online Poker in Canada: Legality, Provinces & Best Sites (2026)",
    description:
      "Where Canadians can play online poker in 2026: federal and provincial law, Ontario's regulated market, offshore options and CAD-friendly banking. Not legal advice.",
    updated: "July 2026",
    readMins: 6,
    intro: [
      "Canada is one of the more player-friendly countries for online poker. Millions of Canadians play without issue, and in 2026 there's both a growing regulated market and a wide range of offshore options.",
      "This guide explains how the law works federally and by province, and what your best options are. It's general information, not legal advice.",
    ],
    sections: [
      {
        heading: "Is online poker legal in Canada?",
        blocks: [
          {
            type: "p",
            text: "For players, the practical answer is yes. Canadian law has historically focused on operators based in Canada rather than individuals playing online, and there is no record of everyday players being prosecuted for playing poker on offshore sites.",
          },
          {
            type: "p",
            text: "Gaming regulation is largely a provincial matter, so the specific legal landscape — and whether a locally regulated option exists — depends on your province.",
          },
        ],
      },
      {
        heading: "Ontario's regulated market",
        blocks: [
          {
            type: "p",
            text: "Ontario launched a regulated online gaming market that allows private operators to offer poker, casino and sports betting under provincial oversight. For Ontario residents, this created licensed, locally regulated options with stronger consumer protections.",
          },
          {
            type: "p",
            text: "Other provinces primarily offer government-run platforms and are watching Ontario's model. Expect the regulated landscape across Canada to keep evolving.",
          },
        ],
      },
      {
        heading: "Offshore sites for Canadian players",
        blocks: [
          {
            type: "p",
            text: "Outside of regulated provincial markets, Canadians widely use offshore rooms — including the sites reviewed here. These accept Canadian players, offer deep traffic during North American hours, and support crypto banking. As with any offshore operator, you trade some consumer protection for access and choice.",
          },
          {
            type: "p",
            text: "The Kahnawake Gaming Commission, based in Quebec, has also licensed online gaming operators for years, and is a name you'll see associated with the industry in Canada.",
          },
        ],
      },
      {
        heading: "Banking for Canadian players",
        blocks: [
          {
            type: "p",
            text: "Cryptocurrency works the same for Canadians as for US players and is the fastest, cheapest option at offshore rooms. Regulated Ontario operators typically support standard Canadian banking methods and CAD directly.",
          },
        ],
      },
      {
        heading: "Playing responsibly in Canada",
        blocks: [
          {
            type: "p",
            text: "Every province has problem-gambling support resources. Set limits, treat poker as entertainment, and reach out to your provincial helpline if play stops being fun. This guide is general information and not legal advice.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is online poker legal in Canada?",
        a: "For players, effectively yes — Canadian law has focused on operators rather than individuals, and there's no history of players being prosecuted for using offshore sites. Regulation is provincial, so specifics vary. Ontario has a licensed, regulated market. This is general information, not legal advice.",
      },
      {
        q: "Can Ontario players use regulated poker sites?",
        a: "Yes. Ontario operates a regulated online gaming market where licensed private operators can offer poker under provincial oversight, giving Ontario residents locally regulated options with stronger consumer protections.",
      },
      {
        q: "Do offshore poker sites accept Canadian players?",
        a: "Yes. The offshore rooms we review accept Canadian players nationwide, with crypto-friendly banking and traffic that peaks during North American evenings.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
