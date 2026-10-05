// import { Eye, Zap, Sprout } from "lucide-react";
// import Section, { SectionHeading } from "./ui/Section";

// const values = [
//   {
//     icon: Eye,
//     title: "Understand",
//     heading: "See every account in one place",
//     body: "Bank accounts, cards and UPI are sorted into categories automatically, so “Misc” stops being your biggest expense.",
//   },
//   {
//     icon: Zap,
//     title: "Act",
//     heading: "Get told what to change, not just what happened",
//     body: "Fermor flags the dining overspend, the subscription you forgot and the bill due on Friday.",
//   },
//   {
//     icon: Sprout,
//     title: "Grow",
//     heading: "Turn spare money into a plan",
//     body: "Set goals, see how soon you will reach them and move surplus cash while it is still there.",
//   },
// ];

// export default function ValueSection() {
//   return (
//     <Section id="features" className="border-y border-line bg-white">
//       <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
//         <SectionHeading
//           title="Money advice that starts from your own numbers"
//           intro="Most finance apps show you a pie chart and stop. Fermor reads your history and says what it means."
//           className="lg:sticky lg:top-28 lg:self-start"
//         />
//         <ul className="divide-y divide-line border-y border-line">
//           {values.map(({ icon: Icon, title, heading, body }) => (
//             <li key={title} className="flex gap-5 py-8">
//               <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-dark">
//                 <Icon size={20} />
//               </span>
//               <div>
//                 <p className="text-sm font-semibold text-brand-dark">{title}</p>
//                 <h3 className="mt-1 text-xl font-bold tracking-tight">{heading}</h3>
//                 <p className="mt-2 leading-relaxed text-muted">{body}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Section>
//   );
// }
import { Eye, Zap, Sprout } from "lucide-react";
import Section, { SectionHeading } from "./ui/Section";

const values = [
  {
    icon: Eye,
    title: "Understand",
    heading: "See the math behind the number",
    body: "SIP returns, EMI, FD interest, income tax and take-home pay. Each result comes with its formula and assumptions, so there are no black boxes.",
  },
  {
    icon: Zap,
    title: "Act",
    heading: "Compare before you commit",
    body: "Put two loan tenures or two return rates side by side and see the difference in rupees before you sign anything.",
  },
  {
    icon: Sprout,
    title: "Grow",
    heading: "Plan for the long run",
    body: "Small monthly amounts compound over years. See how much time and a slightly higher return change your corpus.",
  },
];

export default function ValueSection() {
  return (
    <Section id="features" className="border-y border-line bg-white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          title="Independent, free and clear about how it works"
          intro="Fermor doesn't sell funds, FDs or insurance, so nothing on the page is nudging you toward a product. You get the math and the trade-offs, then you decide."
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <ul className="divide-y divide-line border-y border-line">
          {values.map(({ icon: Icon, title, heading, body }) => (
            <li key={title} className="flex gap-5 py-8">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-dark">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-dark">{title}</p>
                <h3 className="mt-1 text-xl font-bold tracking-tight">{heading}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}