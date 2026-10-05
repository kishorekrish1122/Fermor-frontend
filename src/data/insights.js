// import { sipFutureValue, emi, totalInterest, realReturnPct } from "../lib/finance";
// import { formatCompact, formatINR } from "../lib/format";

// // Every number below is computed, not typed.
// const at12 = sipFutureValue(10000, 20, 12);
// const at11 = sipFutureValue(10000, 20, 11);
// const early = sipFutureValue(10000, 25, 12);
// const late = sipFutureValue(10000, 20, 12);
// const bigger = sipFutureValue(10500, 20, 12);
// const interest20 = totalInterest(5000000, 8.5, 20);
// const interest15 = totalInterest(5000000, 8.5, 15);
// const real = realReturnPct(7, 6);

// export const insights = [
//   {
//     id: "return",
//     icon: "return",
//     tone: "warn",
//     metric: formatCompact(at12 - at11),
//     title: "One percentage point of return is worth a lot",
//     body: `A ₹10,000 monthly SIP for 20 years grows to ${formatCompact(at12)} at 12% a year, but only ${formatCompact(at11)} at 11%. Check the return and the fees before you start.`,
//     compare: { from: "At 11%", fromValue: at11, to: "At 12%", toValue: at12 },
//   },
//   {
//     id: "early",
//     icon: "early",
//     tone: "good",
//     metric: formatCompact(early - late),
//     title: "Five extra years do more than a bigger SIP",
//     body: `Same ₹10,000 a month at 12%: 25 years gives ${formatCompact(early)} against ${formatCompact(late)} for 20. Starting early beats starting big.`,
//   },
//   {
//     id: "emi",
//     icon: "emi",
//     tone: "warn",
//     metric: formatCompact(interest20 - interest15),
//     title: "A longer home loan costs far more interest",
//     body: `On ₹50 lakh at 8.5%, the EMI is ${formatINR(emi(5000000, 8.5, 20))} over 20 years or ${formatINR(emi(5000000, 8.5, 15))} over 15. The 20-year loan costs ${formatCompact(interest20 - interest15)} more in interest.`,
//   },
//   {
//     id: "fd",
//     icon: "fd",
//     tone: "neutral",
//     metric: `${real.toFixed(2)}%`,
//     title: "A 7% FD barely grows your money after inflation",
//     body: `With 6% inflation, a 7% fixed deposit gives a real return of ${real.toFixed(2)}% a year, before tax.`,
//   },
//   {
//     id: "small",
//     icon: "small",
//     tone: "good",
//     metric: formatCompact(bigger - late),
//     title: "An extra ₹500 a month adds up",
//     body: `Raising the same 20-year SIP from ₹10,000 to ₹10,500 a month adds ${formatCompact(bigger - late)} at 12%.`,
//   },
// ];
import { sipFutureValue, emi, totalInterest, realReturnPct } from "../lib/finance";
import { formatCompact, formatINR } from "../lib/format";

// Every number below is computed, not typed.
const at12 = sipFutureValue(10000, 20, 12);
const at11 = sipFutureValue(10000, 20, 11);
const early = sipFutureValue(10000, 25, 12);
const late = sipFutureValue(10000, 20, 12);
const bigger = sipFutureValue(10500, 20, 12);
const interest20 = totalInterest(5000000, 8.5, 20);
const interest15 = totalInterest(5000000, 8.5, 15);
const real = realReturnPct(7, 6);

export const insights = [
  {
    id: "return",
    icon: "return",
    tone: "warn",
    metric: formatCompact(at12 - at11),
    title: "One percentage point of return is worth a lot",
    body: `A ₹10,000 monthly SIP for 20 years grows to ${formatCompact(at12)} at 12% a year, but only ${formatCompact(at11)} at 11%. Check the return and the fees before you start.`,
    compare: { from: "At 11%", fromValue: at11, to: "At 12%", toValue: at12 },
  },
  {
    id: "early",
    icon: "early",
    tone: "good",
    metric: formatCompact(early - late),
    title: "Five extra years do more than a bigger SIP",
    body: `Same ₹10,000 a month at 12%: 25 years gives ${formatCompact(early)} against ${formatCompact(late)} for 20. Starting early beats starting big.`,
  },
  {
    id: "emi",
    icon: "emi",
    tone: "warn",
    metric: formatCompact(interest20 - interest15),
    title: "A longer home loan costs far more interest",
    body: `On ₹50 lakh at 8.5%, the EMI is ${formatINR(emi(5000000, 8.5, 20))} over 20 years or ${formatINR(emi(5000000, 8.5, 15))} over 15. The 20-year loan costs ${formatCompact(interest20 - interest15)} more in interest.`,
  },
  {
    id: "fd",
    icon: "fd",
    tone: "neutral",
    metric: `${real.toFixed(2)}%`,
    title: "A 7% FD barely grows your money after inflation",
    body: `With 6% inflation, a 7% fixed deposit gives a real return of ${real.toFixed(2)}% a year, before tax.`,
  },
  {
    id: "small",
    icon: "small",
    tone: "good",
    metric: formatCompact(bigger - late),
    title: "An extra ₹500 a month adds up",
    body: `Raising the same 20-year SIP from ₹10,000 to ₹10,500 a month adds ${formatCompact(bigger - late)} at 12%.`,
  },
];