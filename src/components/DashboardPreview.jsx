import { useState } from "react";
import Section, { SectionHeading } from "./ui/Section";
import { sipFutureValue } from "../lib/finance";
import { formatINR, formatCompact } from "../lib/format";

const W = 640;
const H = 240;

const toPath = (values, max) =>
  values
    .map((v, i) => `${i ? "L" : "M"}${((i / (values.length - 1)) * W).toFixed(1)} ${(H - (v / max) * H).toFixed(1)}`)
    .join(" ");

function Field({ id, label, display, min, max, step, value, onChange }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-muted">{label}</label>
        <span className="num text-lg font-bold">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer accent-brand"
      />
    </div>
  );
}

export default function DashboardPreview() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(12);

  const fv = sipFutureValue(monthly, years, rate);
  const invested = monthly * years * 12;
  const gains = fv - invested;

  const corpus = Array.from({ length: years + 1 }, (_, y) => (y === 0 ? 0 : sipFutureValue(monthly, y, rate)));
  const put = Array.from({ length: years + 1 }, (_, y) => monthly * 12 * y);
  const max = fv * 1.05;

  const n = years * 12;
  const i = rate / 12;

  return (
    <Section id="calculator">
      <SectionHeading
        title="Try it: what will your SIP grow to?"
        intro="Move the sliders. Nothing you enter leaves your browser."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.5fr]">
        {/* Inputs */}
        <div className="space-y-8 rounded-2xl border border-line bg-card p-5 sm:p-6">
          <Field id="sip-monthly" label="Monthly investment" display={formatINR(monthly)}
            min={500} max={100000} step={500} value={monthly} onChange={setMonthly} />
          <Field id="sip-years" label="Time period" display={`${years} years`}
            min={1} max={40} step={1} value={years} onChange={setYears} />
          <Field id="sip-rate" label="Expected return per year" display={`${rate}%`}
            min={4} max={18} step={0.5} value={rate} onChange={setRate} />
        </div>

        {/* Results */}
        <div className="rounded-2xl border border-line bg-card p-5 sm:p-6">
          <p className="text-sm font-medium text-muted">You would have</p>
          <p className="num mt-1 text-4xl font-extrabold tracking-tight">{formatINR(fv)}</p>

          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-5">
            <div>
              <p className="text-sm text-muted">You invest</p>
              <p className="num text-lg font-bold">{formatCompact(invested)}</p>
            </div>
            <div>
              <p className="text-sm text-muted">Returns earned</p>
              <p className="num text-lg font-bold text-brand-dark">{formatCompact(gains)}</p>
            </div>
          </div>

          <div className="mt-6">
            <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-48 w-full sm:h-56"
              role="img" aria-label={`Growth of a SIP over ${years} years`}>
              {[0.25, 0.5, 0.75].map((g) => (
                <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="#E5E7EB" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              ))}
              <path d={toPath(put, max)} fill="none" stroke="#1C1C1E" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <path d={toPath(corpus, max)} fill="none" stroke="#059669" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="num mt-2 flex justify-between text-xs text-muted">
              <span>Year 0</span>
              <span>Year {years}</span>
            </div>
            <div className="mt-3 flex gap-6 text-sm">
              <span className="flex items-center gap-2"><i className="h-0.5 w-5 bg-brand" /> Total value</span>
              <span className="flex items-center gap-2"><i className="h-0.5 w-5 bg-ink" /> Amount invested</span>
            </div>
          </div>
        </div>
      </div>

      <details className="mt-4 rounded-2xl border border-line bg-card p-5 sm:p-6">
        <summary className="cursor-pointer font-semibold">Show the full math</summary>
        <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          <p className="num font-medium text-ink">FV = P × [((1 + i)ⁿ − 1) / i] × (1 + i)</p>
          <p className="num">P = {formatINR(monthly)} per month, i = {i.toFixed(3)}% per month, n = {n} months</p>
          <p>
            Assumes the return stays constant, you invest at the start of every month and returns compound
            monthly. Real returns vary. This is an estimate for learning, not financial advice.
          </p>
        </div>
      </details>
    </Section>
  );
}