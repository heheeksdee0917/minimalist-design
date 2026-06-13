const services = [
  {
    name: 'Space Planning',
    description: 'Strategic allocation and organization of interior spaces to maximize function, flow, and livability.',
  },
  {
    name: 'Interior Architecture',
    description: 'Comprehensive design of built environments including spatial planning, materiality, and detailing.',
  },
  {
    name: 'Development Advisory',
    description: 'Concept development and design direction for property developers seeking market differentiation.',
  },
  {
    name: 'Project Management',
    description: 'End-to-end oversight from concept to completion, ensuring design intent is faithfully realized.',
  },
];

export default function AboutServices() {
  return (
    <div>
      <div className="border-t border-[rgba(255,255,255,0.08)] my-12" />

      <h2 className="text-[11px] text-[#888888] uppercase tracking-[0.12em] font-semibold mb-8">
        Services
      </h2>
      <div className="space-y-0">
        {services.map((service, index) => (
          <div
            key={service.name}
            className={`py-6 ${index < services.length - 1 ? 'border-b border-[rgba(255,255,255,0.08)]' : ''}`}
          >
            <h3 className="text-[15px] text-[#F5F5F5] font-semibold mb-2">
              {service.name}
            </h3>
            <p className="text-[14px] text-[#888888] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-[rgba(255,255,255,0.08)] mt-12 pt-8">
        <p className="text-[14px] text-[#888888]">
          Based in Kuala Lumpur. Working across Malaysia.
        </p>
      </div>
    </div>
  );
}
