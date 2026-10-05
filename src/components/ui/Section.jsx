export default function Section({
  id,
  padding = "py-20 md:py-28",
  className = "",
  children,
}) {
  return (
    <section id={id} className={`${padding} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({ title, intro, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}