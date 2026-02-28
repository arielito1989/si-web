import RevealOnScroll from './RevealOnScroll';

export default function ServicesSection() {
    const services = [
        {
            title: "Sistemas de Calderas y Presión",
            items: [
                "Mantenimiento y Reparación (Normas OPDS)",
                "Calibración de Válvulas de Seguridad",
                "Sistemas de Cañerías de Alta Presión"
            ],
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.25" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
            )
        },
        {
            title: "Ingeniería de Tuberías",
            items: [
                "Cañerías en Acero Inoxidable Sanitario",
                "Instalación de Cañerías en PRFV",
                "Termofusión, Galvanizado y PVC"
            ],
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.25" d="M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Sistemas de Seguridad",
            items: [
                "Redes de Incendio Certificadas",
                "Diseño e Instalación bajo Normativa",
                "Mantenimiento Preventivo"
            ],
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.25" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    <path strokeLinecap="square" strokeWidth="1.5" d="M9 12l2 2 4-4" />
                </svg>
            )
        },
        {
            title: "Fabricación e Infraestructura",
            items: [
                "Tanques a Medida",
                "Estructuras y Tinglados",
                "Obras Civiles y Montajes Industriales"
            ],
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.25" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Electricidad y Automatización",
            items: [
                "Electricidad Industrial",
                "Automatización de Tableros",
                "Ingeniería Eléctrica para Control"
            ],
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.25" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section
            id="servicios"
            className="py-28 relative bg-scroll md:bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/FOTOS/redincendio1.webp')" }}
        >
            {/* Overlay — 45% opacidad para mayor nitidez de la imagen de fondo */}
            <div className="absolute inset-0 bg-si-bg/45 pointer-events-none" />

            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-si-red/30 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

                {/* Section Header */}
                <RevealOnScroll direction="up" className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col gap-4 max-w-xl">
                            <div className="flex items-center gap-4">
                                <span className="text-si-red font-black tracking-widest uppercase text-xs">/ Servicios</span>
                                <div className="h-px bg-si-red/25 w-12" />
                            </div>
                            <h2 className="text-5xl sm:text-6xl font-black text-si-text uppercase tracking-tight leading-none">
                                Capacidad<br />
                                <span className="text-si-red">Operativa</span>
                            </h2>
                            <p className="text-xl text-si-text font-semibold border-l-2 border-si-red/40 pl-4 leading-relaxed">
                                Soluciones completas para la industria, desde el diseño hasta la puesta en marcha.
                            </p>
                        </div>
                        <div className="hidden md:flex flex-col items-end gap-2">
                            <span className="text-xs uppercase tracking-widest text-si-text font-black">5 especialidades</span>
                            <div className="flex gap-1">
                                {services.map((_, i) => (
                                    <div key={i} className="w-6 h-[3px] bg-si-red/20 last:bg-si-red" />
                                ))}
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>


                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <RevealOnScroll
                            key={index}
                            direction="up"
                            delay={index * 80}
                            className={`group bg-white border border-gray-200 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.13)] hover:border-si-red/30 shadow-[0_2px_16px_rgba(0,0,0,0.06)] cursor-default${
                                index === services.length - 1 && services.length % 2 !== 0
                                    ? ' sm:col-span-2 lg:col-span-1'
                                    : ''
                            }`}
                        >
                            {/* Top accent bar — always visible, turns bold red on hover */}
                            <div className="h-1 bg-gray-200 group-hover:bg-si-red transition-colors duration-400" />

                            <div className="p-8 flex flex-col flex-grow gap-6">
                                {/* Icon + Number */}
                                <div className="flex items-start justify-between">
                                    <div className="w-16 h-16 bg-si-bg group-hover:bg-si-red/10 border border-gray-200 group-hover:border-si-red/30 flex items-center justify-center text-si-red transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <span className="text-5xl font-black text-si-text/[0.06] group-hover:text-si-red/20 transition-colors duration-400 select-none tabular-nums leading-none">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-black uppercase tracking-wide text-si-text group-hover:text-si-red transition-colors duration-300 leading-snug">
                                    {service.title}
                                </h3>

                                {/* Divider */}
                                <div className="h-px bg-gray-100 group-hover:bg-si-red/30 transition-colors duration-400" />

                                {/* Items */}
                                <ul className="space-y-3.5 flex-grow">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-base text-si-text font-semibold items-start leading-snug">
                                            <span className="w-2 h-2 rounded-full bg-si-red/40 group-hover:bg-si-red flex-shrink-0 mt-[5px] transition-colors duration-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom CTA — always visible, not just on hover */}
                                <a
                                    href="#contacto"
                                    className="mt-2 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-600 group-hover:text-si-red transition-colors duration-300"
                                >
                                    <span>Consultar disponibilidad</span>
                                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="square" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </RevealOnScroll>
                    ))}

                    {/* Fill slot — shown when last row has an empty cell in lg grid */}
                    {services.length % 3 !== 0 && (
                        <RevealOnScroll
                            direction="up"
                            delay={services.length * 80}
                            className="hidden lg:flex bg-white border border-dashed border-gray-300 items-center justify-center relative overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
                            <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center">
                                <img src="/logosi.webp" alt="SI" className="w-12 h-12 opacity-15 mix-blend-multiply" />
                                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Más de 5<br />especialidades</p>
                            </div>
                        </RevealOnScroll>
                    )}
                </div>

                {/* Bottom CTA */}
                <RevealOnScroll direction="up" delay={300} className="mt-12">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 px-8 bg-white/60 backdrop-blur-sm border border-white/40">
                        <p className="text-si-text text-lg font-bold max-w-md text-center sm:text-left leading-snug">
                            ¿Necesita una solución que no aparece en la lista?{' '}
                            <span className="text-si-red">Contáctenos para una consulta personalizada.</span>
                        </p>
                        <a
                            href="#contacto"
                            className="flex-shrink-0 group inline-flex items-center gap-3 px-7 py-3.5 bg-si-red text-white text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all duration-300 shadow-[3px_3px_0px_rgba(192,0,0,0.3)] hover:shadow-[1px_1px_0px_rgba(192,0,0,0.3)] hover:translate-y-[2px] hover:translate-x-[2px]"
                        >
                            Solicitar Presupuesto
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


