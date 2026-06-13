'use client';

import { useInView } from '@/hooks/useInView';

const phases = [
  {
    number: '01',
    name: 'Planning',
    summary:
      "Interior architectural layouts and design are created to fulfil the client's requirements. We provide an overall evaluation and define functional criteria as a basis for the development and implementation of the interior design, project schedule and budgets.",
    services: ['Project Research', 'Program and Schedule', 'Space Analysis', 'Space Planning'],
  },
  {
    number: '02',
    name: 'Concept',
    summary:
      'We develop preliminary plans, elevations, sections, material and furniture selections and interior sketches that identify and establish the basic design direction. Estimated costs of implementing the interior design concept are established.',
    services: ['Presentation of Colours and Material', '3D Renderings'],
  },
  {
    number: '03',
    name: 'Design Development',
    summary:
      'Through the development of sketches and CAD documentation, we provide sufficient information for the architect, mechanical and electrical consultants to incorporate the interior design information into their construction documents and specifications.',
    services: ['Floor Covering Plans', 'Reflected Ceiling Plans'],
  },
  {
    number: '04',
    name: 'Interior Design Documents',
    summary:
      'We produce a final set of FF&E drawings and specifications which provide the basis of bid documents, product samples and shop drawings.',
    services: ['Material Reference Specifications', 'Fixture Detail Drawings', 'Furnishing Specification'],
  },
  {
    number: '05',
    name: 'Bidding and Negotiation',
    summary:
      'We work with the client, contractors and manufacturers in reviewing bids, assisting in negotiation and making reasonable adjustments in order to meet budgets.',
    services: [
      'Evaluation of Bids',
      'Documentation of Budget Required in Design Revision',
      'Co-ordination with All Other Consultants',
      'Minor Adjustment Due to Field Variations',
    ],
  },
  {
    number: '06',
    name: 'Design Implementation',
    summary:
      'We make periodic visits to the project site to ensure that work is being performed in accordance with documents, specifications and design concepts.',
    services: ['Review of Shop Drawings', 'Installation Review and QA/QC', 'Completion Punch List', 'Project Wrap-up'],
  },
];

// Individual phase row — needs its own ref per item
function PhaseRow({ phase, index, isLast }: { phase: typeof phases[0]; index: number; isLast: boolean }) {
  const ref = useInView<HTMLDivElement>({ delay: '0s' });

  return (
    <div
      ref={ref}
      className={`py-8 fade-in ${!isLast ? 'border-b border-[rgba(255,255,255,0.08)]' : ''}`}
    >
      <div className="flex items-baseline gap-4 mb-3">
        <span className="text-[11px] text-[#555555] tracking-[0.12em] font-semibold uppercase shrink-0">
          Phase {phase.number}
        </span>
        <h3 className="text-[15px] text-[#F5F5F5] font-semibold">{phase.name}</h3>
      </div>

      <p className="text-[14px] text-[#888888] leading-relaxed mb-4">{phase.summary}</p>

      <ul className="space-y-1">
        {phase.services.map((service) => (
          <li key={service} className="text-[13px] text-[#555555] tracking-[0.02em] flex items-start gap-2">
            <span className="mt-[5px] w-[3px] h-[3px] rounded-full bg-[#555555] shrink-0" />
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutServices() {
  const dividerRef = useInView<HTMLDivElement>({ delay: '0s' });
  const labelRef = useInView<HTMLHeadingElement>({ delay: '0.1s' });
  const footerRef = useInView<HTMLDivElement>({ delay: '0s' });

  return (
    <div>
      {/* Section divider */}
      <div
        ref={dividerRef}
        className="border-t border-[rgba(255,255,255,0.08)] my-12 fade-in"
      />

      {/* Section label */}
      <h2
        ref={labelRef}
        className="text-[11px] text-[#888888] uppercase tracking-[0.12em] font-semibold mb-10 fade-in"
      >
        How We Work
      </h2>

      {/* Phase list — each row observes itself */}
      <div>
        {phases.map((phase, index) => (
          <PhaseRow
            key={phase.number}
            phase={phase}
            index={index}
            isLast={index === phases.length - 1}
          />
        ))}
      </div>

      {/* Footer line */}
      <div
        ref={footerRef}
        className="border-t border-[rgba(255,255,255,0.08)] mt-12 pt-8 fade-in"
      >
        <p className="text-[14px] text-[#888888]">
          Based in Kuala Lumpur. Working across Malaysia.
        </p>
      </div>
    </div>
  );
}