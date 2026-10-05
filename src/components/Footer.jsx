// import { navLinks } from "../data/navLinks";

// export default function Footer() {
//   return (
//     <footer className="border-t border-line bg-white">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
//         <div>
//           <a href="#home" className="flex items-center gap-2">
//             <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-lg font-extrabold text-white">F</span>
//             <span className="text-xl font-extrabold tracking-tight">Fermor</span>
//           </a>
//           <p className="mt-4 max-w-xs leading-relaxed text-muted">
//             Personal finance that tells you what to do next, not just what happened.
//           </p>
//         </div>

//         <div>
//           <p className="font-semibold">Product</p>
//           <ul className="mt-4 space-y-3">
//             {navLinks.map((l) => (
//               <li key={l.href}>
//                 <a href={l.href} className="text-muted transition-colors hover:text-ink">{l.label}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <p className="font-semibold">Contact</p>
//           <ul className="mt-4 space-y-3">
//             <li><a href="mailto:hello@fermor.app" className="text-muted transition-colors hover:text-ink">hello@fermor.app</a></li>
//             <li><a href="#get-started" className="text-muted transition-colors hover:text-ink">Join early access</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-line">
//         <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-muted sm:px-6 lg:px-8">
//           © 2026 Fermor. All figures shown are demo data.
//         </p>
//       </div>
//     </footer>
//   );
// }
import { navLinks } from "../data/navLinks";

const link = "text-muted transition-colors hover:text-ink";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-lg font-extrabold text-white">F</span>
            <span className="text-xl font-extrabold tracking-tight">Fermor</span>
          </a>
          <p className="mt-4 max-w-xs leading-relaxed text-muted">
            Free finance calculators for India. Understand. Act. Grow.
          </p>
        </div>

        <div>
          <p className="font-semibold">On this page</p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold">Fermor</p>
          <ul className="mt-4 space-y-3">
            <li><a href="https://fermor.in" target="_blank" rel="noopener noreferrer" className={link}>fermor.in</a></li>
            <li><a href="https://fermor.in/about" target="_blank" rel="noopener noreferrer" className={link}>About Fermor</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm leading-relaxed text-muted sm:px-6 lg:px-8">
          An independent homepage concept for Fermor, built as a frontend assignment. Figures are
          estimates for learning, not financial advice.
        </p>
      </div>
    </footer>
  );
}