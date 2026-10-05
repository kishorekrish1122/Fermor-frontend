// // Indian digit grouping: 12,34,567
// export const formatINR = (n, decimals = 0) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     minimumFractionDigits: decimals,
//     maximumFractionDigits: decimals,
//   }).format(Math.abs(n));

// // Lakh / crore shorthand: ₹50.46 L, ₹1.84 Cr
// export function formatCompact(n) {
//   const v = Math.abs(n);
//   if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
//   if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`;
//   return formatINR(v);
// }
// Indian digit grouping: 12,34,567
export const formatINR = (n, decimals = 0) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Math.abs(n));

// Lakh / crore shorthand: ₹50.46 L, ₹1.84 Cr
export function formatCompact(n) {
  const v = Math.abs(n);
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`;
  return formatINR(v);
}