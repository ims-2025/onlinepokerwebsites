export const site = {
  name: "Online Poker Websites",
  shortName: "OnlinePokerWebsites",
  url: "https://www.onlinepokerwebsites.com",
  tagline: "Expert reviews & rankings of the best US and Canada friendly poker sites",
  description:
    "Independent reviews and rankings of the best online poker sites for US and Canadian players. Compare real-money poker rooms on bonuses, traffic, banking, safety and game selection — updated for 2026.",
  locale: "en_US",
  twitter: "@onlinepokerweb",
  updatedLabel: "July 2026",
  markets: ["United States", "Canada"],
} as const;

// Navigation used by the header and footer
export const primaryNav = [
  { label: "Best Poker Sites", href: "/" },
  { label: "Reviews", href: "/#rankings" },
  { label: "News", href: "/news/" },
  { label: "Bonuses", href: "/guides/poker-bonuses-explained/" },
  { label: "Banking", href: "/guides/deposits-and-withdrawals/" },
  { label: "US Legality", href: "/guides/us-poker-legality/" },
  { label: "Canada", href: "/guides/canada-online-poker/" },
];

export const guideLinks = [
  {
    href: "/guides/how-to-choose-a-poker-site/",
    title: "How to Choose an Online Poker Site",
    blurb:
      "The 9 factors that actually matter — safety, traffic, rake, banking speed and more.",
  },
  {
    href: "/guides/poker-bonuses-explained/",
    title: "Poker Bonuses Explained",
    blurb:
      "How rake-based welcome bonuses clear, what the terms mean, and how to compare real value.",
  },
  {
    href: "/guides/deposits-and-withdrawals/",
    title: "Deposits & Withdrawals",
    blurb:
      "Crypto, cards and vouchers — the fastest, cheapest ways to bank at offshore poker rooms.",
  },
  {
    href: "/guides/us-poker-legality/",
    title: "US Online Poker Legality",
    blurb:
      "Regulated states vs. offshore sites, and what the law actually says for US players.",
  },
  {
    href: "/guides/canada-online-poker/",
    title: "Online Poker in Canada",
    blurb: "Where Canadians can play, provincial rules, and the best CAD-friendly rooms.",
  },
];
