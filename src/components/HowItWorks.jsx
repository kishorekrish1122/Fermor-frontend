import { Link2, BarChart3, ListChecks } from "lucide-react";
import Section, { SectionHeading } from "./ui/Section";

const steps = [
  {
    icon: Link2,
    title: "Connect",
    body: "Link your bank accounts and cards in about two minutes. Access is read-only, so Fermor sees transactions but can never move money.",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    body: "Every transaction is categorized and compared with your own past months, not a generic national average.",
  },
  {
    icon: ListChecks,
    title: "Act",
    body: "Each week you get a short list: what changed, what it costs you, and the one thing worth doing about it.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-y border-line bg-white">
      <SectionHeading title="From connected to clear in three steps" />

      <div className="relative mt-14">
        {/* connector line, desktop only; stops at the third circle */}
        <div
          aria-hidden="true"
          className="absolute left-6 right-[33%] top-6 hidden h-px bg-line md:block"
        />

        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative flex gap-5 md:block">
              <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line bg-white text-brand-dark">
                <Icon size={20} />
                <span className="num absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-ink text-xs font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <div className="md:mt-6">
                <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-2 max-w-sm leading-relaxed text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}