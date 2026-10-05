// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import Button from "./ui/Button";
// import { navLinks } from "../data/navLinks";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Add a bottom border once the page has moved
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close the mobile menu with Escape
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e) => e.key === "Escape" && setOpen(false);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open]);

//   const close = () => setOpen(false);

//   return (
//     <header
//       className={`sticky top-0 z-50 bg-canvas/85 backdrop-blur-md transition-colors ${
//         scrolled || open ? "border-b border-line" : "border-b border-transparent"
//       }`}
//     >
//       <nav
//         aria-label="Main"
//         className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
//       >
//         <a href="#home" className="flex items-center gap-2" onClick={close}>
//           <span
//             aria-hidden="true"
//             className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-lg font-extrabold text-white"
//           >
//             F
//           </span>
//           <span className="text-xl font-extrabold tracking-tight">Fermor</span>
//         </a>

//         {/* Desktop links */}
//         <ul className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-sm font-medium text-muted transition-colors hover:text-ink"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="hidden md:block">
//           <Button href="#get-started">Get started</Button>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           type="button"
//           className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white md:hidden"
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//           onClick={() => setOpen((v) => !v)}
//         >
//           {open ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </nav>

//       {/* Mobile panel */}
//       {open && (
//         <div id="mobile-menu" className="border-t border-line bg-canvas md:hidden">
//           <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   onClick={close}
//                   className="block border-b border-line py-4 text-base font-medium"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//             <li className="py-4">
//               <Button href="#get-started" size="lg" className="w-full" onClick={close}>
//                 Get started
//               </Button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { navLinks } from "../data/navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a bottom border once the page has moved
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-canvas/85 backdrop-blur-md transition-colors ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" onClick={close}>
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-lg font-extrabold text-white"
          >
            F
          </span>
          <span className="text-xl font-extrabold tracking-tight">Fermor</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#calculator">Try the calculator</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-canvas md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block border-b border-line py-4 text-base font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <Button href="#calculator" size="lg" className="w-full" onClick={close}>
                Try the calculator
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}