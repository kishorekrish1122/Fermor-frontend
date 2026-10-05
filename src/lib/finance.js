// // Standard SIP future value, monthly compounding, instalment at the start of each month.
// // FV = P × [((1 + i)^n − 1) / i] × (1 + i)
// export function sipFutureValue(monthly, years, annualRatePct) {
//   const n = Math.round(years * 12);
//   const i = annualRatePct / 12 / 100;
//   if (n <= 0) return 0;
//   if (i === 0) return monthly * n;
//   return monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
// }

// // Standard EMI: EMI = P × i × (1 + i)^n / ((1 + i)^n − 1)
// export function emi(principal, annualRatePct, years) {
//   const n = Math.round(years * 12);
//   const i = annualRatePct / 12 / 100;
//   const f = Math.pow(1 + i, n);
//   return (principal * i * f) / (f - 1);
// }

// export const totalInterest = (principal, annualRatePct, years) =>
//   emi(principal, annualRatePct, years) * Math.round(years * 12) - principal;

// // Real return after inflation
// export const realReturnPct = (nominalPct, inflationPct) =>
//   ((1 + nominalPct / 100) / (1 + inflationPct / 100) - 1) * 100;
// Standard SIP future value, monthly compounding, instalment at the start of each month.
// FV = P × [((1 + i)^n − 1) / i] × (1 + i)
export function sipFutureValue(monthly, years, annualRatePct) {
  const n = Math.round(years * 12);
  const i = annualRatePct / 12 / 100;
  if (n <= 0) return 0;
  if (i === 0) return monthly * n;
  return monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
}

// Standard EMI: EMI = P × i × (1 + i)^n / ((1 + i)^n − 1)
export function emi(principal, annualRatePct, years) {
  const n = Math.round(years * 12);
  const i = annualRatePct / 12 / 100;
  const f = Math.pow(1 + i, n);
  return (principal * i * f) / (f - 1);
}

export const totalInterest = (principal, annualRatePct, years) =>
  emi(principal, annualRatePct, years) * Math.round(years * 12) - principal;

// Real return after inflation
export const realReturnPct = (nominalPct, inflationPct) =>
  ((1 + nominalPct / 100) / (1 + inflationPct / 100) - 1) * 100;