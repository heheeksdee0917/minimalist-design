export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-display-medium max-sm:text-section-heading-mobile text-text-primary mb-6" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
          Let&apos;s create something exceptional
        </h1>

        <a
          href="mailto:hello@minimalistdesign.my"
          className="block text-xl max-sm:text-lg text-text-primary hover:underline mb-6 transition-all duration-200"
          style={{ fontWeight: 400 }}
        >
          hello@minimalistdesign.my
        </a>

        <p className="text-sm text-muted tracking-heading">
          Kuala Lumpur, Malaysia
        </p>
      </div>
    </main>
  );
}
