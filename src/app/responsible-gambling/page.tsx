import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Responsible Gambling",
  description:
    "Play poker safely: set limits, recognise the warning signs of problem gambling, and find support helplines in the US and Canada.",
  alternates: { canonical: "/responsible-gambling/" },
};

export default function ResponsibleGamblingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Responsible Gambling", href: "/responsible-gambling/" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4">
        <header className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-bold text-gold-600">
            21+ · Play responsibly
          </span>
          <h1 className="mt-4 text-3xl font-black text-neutral-900 sm:text-4xl">Responsible Gambling</h1>
          <p className="mt-3 text-lg text-neutral-600">
            Poker should be fun. These tools and resources help keep it that way — and point you to
            support if it stops being fun.
          </p>
        </header>

        <div className="prose-poker mt-8">
          <h2>Keep it a game</h2>
          <ul>
            <li>Set a budget before you play, and never gamble money you can&apos;t afford to lose.</li>
            <li>Treat poker as entertainment, not a way to make money or recover losses.</li>
            <li>Never chase losses — the urge to win it back is where trouble starts.</li>
            <li>Set time limits and take regular breaks.</li>
            <li>Don&apos;t play when stressed, upset, or under the influence.</li>
            <li>Keep gambling separate from essential money like rent, bills and savings.</li>
          </ul>

          <h2>Use the tools sites provide</h2>
          <p>
            Reputable poker rooms offer responsible-gambling controls. Look for and use these
            features:
          </p>
          <ul>
            <li>
              <strong>Deposit limits</strong> — cap how much you can deposit per day, week or month.
            </li>
            <li>
              <strong>Session and time reminders</strong> — track how long you&apos;ve been playing.
            </li>
            <li>
              <strong>Cool-off periods</strong> — take a short, self-imposed break.
            </li>
            <li>
              <strong>Self-exclusion</strong> — block your own access for a set period, or
              permanently.
            </li>
          </ul>

          <h2>Warning signs of a problem</h2>
          <p>Consider reaching out for support if you:</p>
          <ul>
            <li>Spend more time or money gambling than you intended.</li>
            <li>Chase losses or gamble to escape stress or low mood.</li>
            <li>Lie to others about how much you gamble.</li>
            <li>Borrow money or neglect responsibilities to gamble.</li>
            <li>Feel anxious, guilty, or unable to stop.</li>
          </ul>

          <h2>Where to get help</h2>
          <h3>United States</h3>
          <ul>
            <li>
              <strong>National Problem Gambling Helpline:</strong> call or text{" "}
              <strong>1-800-GAMBLER</strong> (1-800-426-2537), available 24/7.
            </li>
            <li>
              <strong>National Council on Problem Gambling:</strong> visit ncpgambling.org for chat
              and resources.
            </li>
          </ul>
          <h3>Canada</h3>
          <ul>
            <li>
              Support is offered province by province. Contact your provincial problem-gambling
              helpline, or visit the Responsible Gambling Council (responsiblegambling.org) for
              guidance and referrals.
            </li>
          </ul>

          <p>
            If you or someone you know is struggling, help is available and it works. Reaching out is
            a sign of strength, not weakness.
          </p>
        </div>
      </div>
    </>
  );
}
