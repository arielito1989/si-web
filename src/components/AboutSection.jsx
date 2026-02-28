import { useEffect, useRef, useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

function AnimatedStat({ value, label, description }) {
    const [displayed, setDisplayed] = useState('—');
    const ref = useRef(null);
    const hasRun = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasRun.current) {
                    hasRun.current = true;
                    const numericStr = value.replace(/[^0-9]/g, '');
                    const numeric = parseInt(numericStr) || 0;
                    const suffix = value.replace(/[0-9]/g, '');

                    if (numeric === 0) { setDisplayed(value); return; }

                    const duration = 1800;
                    const start = performance.now();
                    const animate = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setDisplayed(Math.floor(eased * numeric) + suffix);
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { rootMargin: '0px 0px -60px 0px' }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="group flex flex-col gap-3 p-7 border border-gray-200 hover:border-si-red/40 hover:bg-white transition-all duration-300 cursor-default">
            <span className="text-6xl sm:text-7xl font-black text-si-red leading-none tabular-nums">{displayed}</span>
            <div>
                <div className="text-base font-black uppercase tracking-wider text-si-text mb-1.5">{label}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{description}</div>
            </div>
        </div>
    );
}

export default function AboutSection() {
    const stats = [
        { value: "15+", label: "Años de Experiencia", description: "Trayectoria comprobada en la industria nacional" },
        { value: "200+", label: "Proyectos Ejecutados", description: "Obras completadas con certificación de calidad" },
        { value: "100%", label: "Proyectos Certificados", description: "Cumplimiento total de normas OPDS y reglamentos" },
        { value: "0", label: "Margen de Error", description: "Estándar de precisión en cada intervención técnica" },
    ];

    const values = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Seguridad Certificada",
            text: "Todos nuestros procesos cumplen con las normativas OPDS y regulaciones nacionales vigentes.",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="square" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Ingeniería de Precisión",
            text: "Equipo técnico especializado con capacitación continua y tecnología de vanguardia.",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Servicio Integral",
            text: "Desde la planificación hasta el postventa, acompañamos cada etapa del proyecto.",
        },
    ];

    return (
        <section id="nosotros" className="relative py-24 bg-si-bg overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-white/60 -skew-x-6 origin-top-right z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">

                {/* Section label */}
                <RevealOnScroll direction="up" className="flex items-center gap-4 mb-16">
                    <span className="text-si-red font-black tracking-widest uppercase text-xs">/ Nosotros</span>
                    <div className="h-px bg-si-red/25 flex-grow max-w-[80px]" />
                </RevealOnScroll>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Text + values */}
                    <RevealOnScroll direction="left" className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-5xl sm:text-6xl font-black text-si-text uppercase tracking-tight leading-none mb-6">
                                Experiencia<br />
                                <span className="text-si-red">Técnica</span>
                            </h2>
                            <div className="space-y-5 text-xl text-gray-600 font-light leading-relaxed">
                                <p>
                                    En <strong className="text-si-text font-bold">SI Soluciones Industriales</strong> brindamos un servicio integral
                                    que abarca desde la planificación y definición del proyecto hasta su ejecución y mantenimiento.
                                </p>
                                <p className="pl-5 border-l-2 border-si-red text-gray-500">
                                    Nos especializamos en la readecuación de procesos industriales, incorporando
                                    tecnologías de vanguardia y asesoramiento técnico adaptado a cada cliente.
                                </p>
                            </div>
                        </div>

                        {/* Values / Differentials */}
                        <div className="flex flex-col gap-4">
                            {values.map((v, i) => (
                                <RevealOnScroll key={i} direction="left" delay={i * 100} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 border border-si-red/20 bg-white flex items-center justify-center text-si-red group-hover:bg-si-red group-hover:text-white group-hover:border-si-red transition-all duration-300">
                                        {v.icon}
                                    </div>
                                    <div>
                                        <div className="text-base font-black uppercase tracking-wider text-si-text mb-1.5">{v.title}</div>
                                        <div className="text-base text-gray-500 font-light leading-relaxed">{v.text}</div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>

                        <RevealOnScroll direction="up" delay={400}>
                            <a
                                href="#contacto"
                                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-si-red hover:text-red-700 transition-colors"
                            >
                                Consultar disponibilidad
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="square" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </RevealOnScroll>
                    </RevealOnScroll>

                    {/* Right Column: Animated Stats Grid */}
                    <RevealOnScroll direction="right" delay={200} className="relative">
                        {/* Decorative frame */}
                        <div className="absolute -inset-3 border border-si-text/10 z-0 translate-x-3 translate-y-3 pointer-events-none" />

                        <div className="relative z-10 bg-si-bg grid grid-cols-2 gap-0 border border-gray-200 shadow-[8px_8px_0px_rgba(0,0,0,0.06)]">
                            {stats.map((stat, i) => (
                                <AnimatedStat key={i} {...stat} />
                            ))}
                        </div>

                        {/* Logo watermark */}
                        <div className="absolute -bottom-6 -right-4 w-16 h-16 z-20 bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                            <img src="/logosi.webp" alt="SI Isotipo" className="w-9 h-9 opacity-60 mix-blend-multiply" />
                        </div>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    );
}
