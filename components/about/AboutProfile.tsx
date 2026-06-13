'use client';

import { useInView } from '@/hooks/useInView';

function AnimatedParagraph({ text, delay }: { text: string; delay: string }) {
    const ref = useInView<HTMLParagraphElement>({ delay });
    return (
        <p ref={ref} className="fade-in">
            {text}
        </p>
    );
}

const paragraphs = [
    "Welcome to Minimalist Design, a space planning, interior architecture, and design consultancy firm established in 2004. Our broad spectrum of expertise and knowledge has allowed us to manifest ourselves in design excellence, delivering exceptional projects across Malaysia and beyond.",
    "At Minimalist Design, we believe in hands-on operations and attention to detail. We have extensive experience and a proven track record in effectively planning and organizing space while creating an experience within interior environments that appeals to a wide audience. Our team of fully accredited interior designers is experienced in all genres of design work, capable of orchestrating design both within and outside of the studio.",
    "Our philosophy is simplicity. We aim to design spaces and interiors according to the appropriate architectural context, always striving for simplicity in order to achieve durability and timelessness. Quality is more important than quantity, and we take pride in delivering exceptional design solutions that exceed our clients' expectations.",
    "We offer a range of services, including space planning, interior architecture, design consultation, branding, and more. Our portfolio includes commercial and residential projects across Malaysia, showcasing our ability to deliver exceptional results across a range of industries.",
];

export default function AboutProfile() {
    const dividerRef = useInView<HTMLDivElement>({ delay: '0s' });
    const labelRef = useInView<HTMLHeadingElement>({ delay: '0s' });

    return (
        <div>
            <div
                ref={dividerRef}
                className="border-t border-[rgba(255,255,255,0.08)] my-12 fade-in"
            />

            <h2
                ref={labelRef}
                className="text-[11px] text-[#888888] uppercase tracking-[0.12em] font-semibold mb-6 fade-in"
            >
                Profile
            </h2>

            <div className="space-y-6 text-[17px] text-[#F5F5F5] leading-[1.75] font-normal">
                {paragraphs.map((text, index) => (
                    <AnimatedParagraph
                        key={index}
                        text={text}
                        delay={`${index * 0.1}s`}
                    />
                ))}
            </div>
        </div>
    );
}