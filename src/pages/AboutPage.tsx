const services = [
  {
    name: "Space Planning",
    description: "Strategic spatial layouts that optimize flow and function.",
  },
  {
    name: "Interior Architecture",
    description: "Comprehensive interior design from concept to completion.",
  },
  {
    name: "Development Advisory",
    description: "Strategic guidance for property development projects.",
  },
  {
    name: "Project Management",
    description: "End-to-end oversight ensuring seamless execution.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-prose mx-auto px-6 pt-20 max-sm:pt-16">
      <h1 className="text-display-medium max-sm:text-page-title-mobile text-text-primary mb-16 max-sm:mb-12">
        About
      </h1>

      <section className="mb-16">
        <span className="section-label block mb-6">The Firm</span>
        <p className="text-body text-text-primary mb-6">
          Minimalist Design is a Kuala Lumpur-based studio specializing in
          luxury space planning and interior architecture. We work with
          discerning homeowners and property developers who value precision,
          restraint, and the transformative power of well-considered spaces.
        </p>
        <p className="text-body text-text-primary">
          From intimate residential projects to complex commercial developments,
          our approach remains the same: strip away the unnecessary, honor the
          essential, and create environments that function as beautifully as
          they look. Every project is an exercise in clarity.
        </p>
      </section>

      <hr className="divider border-t mb-16" />

      <section className="mb-16">
        <span className="section-label block mb-8">Services</span>
        <ul>
          {services.map((service, index) => (
            <li key={service.name}>
              {index > 0 && <hr className="divider border-t my-6" />}
              <h3 className="text-base text-text-primary mb-1" style={{ fontWeight: 600 }}>
                {service.name}
              </h3>
              <p className="text-sm text-muted">{service.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <hr className="divider border-t mb-8" />

      <footer className="pb-16">
        <p className="text-sm text-muted">
          Based in Kuala Lumpur. Working across Malaysia.
        </p>
      </footer>
    </main>
  );
}
