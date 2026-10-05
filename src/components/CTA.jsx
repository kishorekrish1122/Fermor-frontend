// import { useState } from "react";
// import { Check } from "lucide-react";
// import Button from "./ui/Button";
// import Section from "./ui/Section";

// export default function CTA() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [done, setDone] = useState(false);

//   const submit = (e) => {
//     e.preventDefault();
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setError("Enter a valid email address, like name@example.com.");
//       return;
//     }
//     setError("");
//     setDone(true);
//   };

//   return (
//     <Section id="get-started" padding="pb-20 md:pb-28">
//       <div className="rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12 md:py-20">
//         <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
//           Find out where this month's money went
//         </h2>
//         <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
//           Join the early access list and we will email you when your spot opens.
//         </p>

//         {done ? (
//           <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-4 font-medium" role="status">
//             <Check size={18} className="shrink-0 text-emerald-400" />
//             You're on the list. We'll write to {email}.
//           </p>
//         ) : (
//           <form onSubmit={submit} noValidate className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
//             <label htmlFor="cta-email" className="sr-only">Email address</label>
//             <input
//               id="cta-email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@work.com"
//               aria-invalid={Boolean(error)}
//               aria-describedby={error ? "cta-error" : undefined}
//               className="h-12 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
//             />
//             <Button type="submit" size="lg">Join early access</Button>
//           </form>
//         )}
//         {error && !done && (
//           <p id="cta-error" className="mt-3 text-sm text-red-300">{error}</p>
//         )}
//       </div>
//     </Section>
//   );
// }
import Button from "./ui/Button";
import Section from "./ui/Section";

export default function CTA() {
  return (
    <Section id="get-started" padding="pb-20 md:pb-28">
      <div className="rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Run your own numbers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Free to use, no login, and nothing you type leaves your browser.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#calculator" size="lg">Try the SIP calculator</Button>
          <a
            href="https://fermor.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-xl px-6 font-semibold text-white/80 transition-colors hover:text-white"
          >
            Browse calculators on fermor.in
          </a>
        </div>
      </div>
    </Section>
  );
}