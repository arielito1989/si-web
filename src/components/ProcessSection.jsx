import RevealOnScroll from './RevealOnScroll';
import { CONTACT, getPhoneUrl } from '../constants/contact';

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Consulta Inicial",
            description: "Contacto por teléfono, WhatsApp o formulario web. Analizamos brevemente la necesidad y coordinamos los pasos siguientes.",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
        },
        {
            number: "02",
            title: "Visita en Planta",
            description: "Nuestro equipo técnico realiza un relevamiento in situ para evaluar el proyecto en detalle, tomar medidas y relevar condiciones operativas.",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            ),
        },
        {
            number: "03",
            title: "Propuesta Técnica",
            description: "Elaboramos un presupuesto detallado con materiales, plazos de ejecución y normativas aplicables. Respuesta garantizada en menos de 24 hs.",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            number: "04",
            title: "Ejecución",
            description: "Trabajo realizado por nuestro equipo especializado bajo los más altos estándares de seguridad y calidad industrial.",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="square" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            number: "05",
            title: "Entrega Certificada",
            description: "Documentación completa, certificación según normativa vigente y seguimiento postventa para garantizar el correcto funcionamiento.",
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative py-28 bg-[#111] overflow-hidden" id="proceso">

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                }}
            />

            {/* Red left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-si-red to-transparent" />

            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-si-red" />

            <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

                {/* Section Header */}
                <RevealOnScroll direction="up" className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col gap-4 max-w-xl">
                            <div className="flex items-center gap-4">
                                <span className="text-si-red font-black tracking-widest uppercase text-xs">/ Proceso</span>
                                <div className="h-px bg-si-red/25 w-12" />
                            </div>
                            <h2 className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
                                Cómo<br />
                                <span className="text-si-red">Trabajamos</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-light border-l-2 border-si-red/40 pl-4 leading-relaxed">
                                Un proceso claro y transparente, desde el primer contacto hasta la entrega con certificación.
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                            {steps.map((_, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${i === steps.length - 1 ? 'bg-si-red' : 'bg-white/20'}`} />
                                    {i < steps.length - 1 && <div className="w-6 h-px bg-white/10" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Steps — vertical on mobile, horizontal on desktop */}
                <div className="relative">

                    {/* Horizontal connector line (desktop only) */}
                    <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-white/10 z-0" style={{ left: '4%', right: '4%' }} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                        {steps.map((step, index) => (
                            <RevealOnScroll
                                key={index}
                                direction="up"
                                delay={index * 100}
                                className="relative z-10 group flex flex-col"
                            >
                                {/* Mobile: horizontal layout */}
                                <div className="flex lg:flex-col gap-5 lg:gap-5">

                                    {/* Icon circle */}
                                    <div className="flex-shrink-0 flex flex-col items-center lg:items-center">
                                        <div className="relative w-[104px] h-[104px] lg:w-24 lg:h-24 flex-shrink-0">
                                            {/* Outer ring */}
                                            <div className="absolute inset-0 border border-white/10 group-hover:border-si-red/40 transition-colors duration-500" />
                                            {/* Inner box */}
                                            <div className="absolute inset-2 bg-white/[0.04] group-hover:bg-si-red/10 border border-white/[0.06] group-hover:border-si-red/20 flex items-center justify-center text-gray-500 group-hover:text-si-red transition-all duration-500">
                                                {step.icon}
                                            </div>
                                            {/* Step number badge */}
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-si-red flex items-center justify-center">
                                                <span className="text-[9px] font-black text-white">{step.number}</span>
                                            </div>
                                        </div>

                                        {/* Vertical connector (mobile only) */}
                                        {index < steps.length - 1 && (
                                            <div className="flex lg:hidden w-px flex-1 min-h-[2rem] bg-white/10 mt-2" />
                                        )}
                                    </div>

                                    {/* Text content */}
                                    <div className="flex flex-col gap-2 pt-1 lg:pt-0 lg:mt-5">
                                        <h3 className="text-base font-black uppercase tracking-wide text-white group-hover:text-si-red transition-colors duration-300 leading-snug">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <RevealOnScroll direction="up" delay={600} className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/[0.06]">
                    <p className="text-gray-500 text-base font-light max-w-md text-center sm:text-left leading-relaxed">
                        ¿Listo para comenzar? El primer paso es una simple llamada o mensaje.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={getPhoneUrl()}
                            className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white/[0.05] border border-white/15 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <svg className="w-4 h-4 text-si-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {CONTACT.phone.display}
                        </a>
                        <a
                            href="#contacto"
                            className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-si-red text-white text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all duration-300 shadow-[3px_3px_0px_rgba(192,0,0,0.3)] hover:shadow-[1px_1px_0px_rgba(192,0,0,0.3)] hover:translate-y-[2px] hover:translate-x-[2px]"
                        >
                            Iniciar Consulta
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}
