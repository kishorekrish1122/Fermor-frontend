import { Percent, Hourglass, Home, PiggyBank, Coins } from "lucide-react";
import Section, { SectionHeading } from "./ui/Section";
import { insights } from "../data/insights";
import { formatCompact } from "../lib/format";

const icons = { return: Percent, early: Hourglass, emi: Home, fd: PiggyBank, small: Coins };
const tones = {
  warn: "bg-amber-50 text-amber-700",
  good: "bg-brand-soft text-brand-dark",
  neutral: "bg-gray-100 text-ink",
};

function InsightCard({ data, featured }) {
  const Icon = icons[data.icon];
  return (
    <article
      className={`rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-md ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tones[data.tone]}`}>
          <Icon size={18} />
        </span>
        <span className="num text-2xl font-extrabold tracking-tight">{data.metric}</span>
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight">{data.title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{data.body}</p>

      {data.compare && (
        <div className="mt-6 space-y-3">
          {[
            { label: data.compare.from, value: data.compare.fromValue, bar: "bg-gray-300" },
            { label: data.compare.to, value: data.compare.toValue, bar: "bg-brand" },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3 text-sm">
              <span className="w-16 shrink-0 text-muted">{row.label}</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-line">
                <div
                  className={`h-full rounded-full ${row.bar}`}
                  style={{ width: `${(row.value / data.compare.toValue) * 100}%` }}
                />
              </div>
              <span className="num w-24 shrink-0 text-right font-semibold">
                {formatCompact(row.value)}
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Insights() {
  return (
    <Section id="insights">
      <SectionHeading
        title="Small differences, big numbers"
        intro="Five things the math shows. Each figure is calculated, not guessed, and uses the same formulas as the calculator above."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((item, i) => (
          <InsightCard key={item.id} data={item} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}