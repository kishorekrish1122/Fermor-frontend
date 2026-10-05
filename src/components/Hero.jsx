import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Button from "./ui/Button";
import Section from "./ui/Section";
import FinancialCard, { Sparkline } from "./FinancialCard";
import { sipFutureValue } from "../lib/finance";
import { formatCompact } from "../lib/format";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Example plan shown in the hero: all values are computed from these three numbers.
const PLAN = { monthly: 10000, years: 15, rate: 12 };

export default function Hero() {
  const { monthly, years, rate } = PLAN;
  const fv = sipFutureValue(monthly, years, rate);
  const invested = monthly * years * 12;
  const gains = fv - invested;
  const trend = Array.from({ length: years }, (_, i) => sipFutureValue(monthly, i + 1, rate));
  const lowerReturn = fv - sipFutureValue(monthly, years, rate - 1);
  const lateStart = fv - sipFutureValue(monthly, years - 3, rate);

  return (
    <Section id="home" padding="pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Know what your money decision really costs.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Free calculators for the choices people in India make most: SIPs, loans, FDs, tax and
            take-home pay. Every result shows its formula, so you can check the number instead of
            trusting it.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#calculator" size="lg">Try the SIP calculator</Button>
            <Button href="#how-it-works" variant="secondary" size="lg">How it works</Button>
          </motion.div>
          <motion.p variants={item} className="mt-6 flex items-center gap-2 text-sm text-muted">
            <ShieldCheck size={16} className="shrink-0 text-brand" />
            No login needed. The math runs in your browser.
          </motion.p>
        </motion.div>

        {/* Product visual: a worked example, not a mock dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="space-y-4"
        >
          <FinancialCard
            label={`₹10,000 a month for ${years} years at ${rate}%`}
            value={formatCompact(fv)}
            delta={{ text: `${(fv / invested).toFixed(1)}x invested`, positive: true }}
            className="shadow-sm"
          >
            <Sparkline data={trend} className="mt-4 h-16 w-full" />
            <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-line">
              <div className="bg-ink" style={{ width: `${(invested / fv) * 100}%` }} />
              <div className="bg-brand" style={{ width: `${(gains / fv) * 100}%` }} />
            </div>
            <div className="num mt-2 flex justify-between text-xs text-muted">
              <span>You put in {formatCompact(invested)}</span>
              <span>Returns {formatCompact(gains)}</span>
            </div>
          </FinancialCard>

          <div className="grid gap-4 sm:grid-cols-2">
            <FinancialCard label="If returns are 1% lower" value={`−${formatCompact(lowerReturn)}`} />
            <FinancialCard label="If you start 3 years later" value={`−${formatCompact(lateStart)}`} />
          </div>

          <p className="rounded-2xl border border-line bg-white px-5 py-4 text-sm leading-relaxed text-muted">
            Standard SIP formula with monthly compounding. An estimate, not a guarantee.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}