import { motion } from "framer-motion";

export function Sparkline({ data, className = "" }) {
  const w = 120;
  const h = 40;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    h - 3 - ((v - min) / (max - min || 1)) * (h - 6),
  ]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className} aria-hidden="true">
      <motion.path
        d={line}
        fill="none"
        stroke="#059669"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
      />
    </svg>
  );
}

export default function FinancialCard({ label, value, delta, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-line bg-card p-5 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-muted">{label}</p>
        {delta && (
          <span
            className={`num rounded-full px-2 py-0.5 text-xs font-semibold ${
              delta.positive ? "bg-brand-soft text-brand-dark" : "bg-red-50 text-loss"
            }`}
          >
            {delta.text}
          </span>
        )}
      </div>
      <p className="num mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">{value}</p>
      {children}
    </div>
  );
}