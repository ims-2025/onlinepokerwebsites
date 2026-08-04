import Link from "next/link";
import { Fragment } from "react";

// Renders a string that may contain markdown-style links: [label](/internal/path)
// or [label](https://external). Internal links use next/link; external open safely.
// Also supports **bold** segments. No dangerouslySetInnerHTML — safe by construction.
export default function RichText({ text }: { text: string }) {
  return <>{parse(text)}</>;
}

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const BOLD = /\*\*([^*]+)\*\*/g;

function parse(text: string) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK.lastIndex = 0;
  while ((m = LINK.exec(text)) !== null) {
    if (m.index > last) nodes.push(<Fragment key={last}>{bold(text.slice(last, m.index))}</Fragment>);
    const [, label, href] = m;
    if (href.startsWith("/")) {
      nodes.push(
        <Link key={m.index} href={href} className="font-semibold text-felt-700 underline underline-offset-2 hover:text-felt-800">
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a key={m.index} href={href} rel="nofollow noopener" target="_blank" className="font-semibold text-felt-700 underline underline-offset-2">
          {label}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(<Fragment key={last}>{bold(text.slice(last))}</Fragment>);
  return nodes;
}

function bold(text: string) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  BOLD.lastIndex = 0;
  while ((m = BOLD.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    nodes.push(
      <strong key={m.index} className="font-semibold text-neutral-900">
        {m[1]}
      </strong>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
