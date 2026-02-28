import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsLoaded(true), 120);
        return () => clearTimeout(t);
    }, []);

    const stats = [
        { value: "15+", label: "Años de Experiencia" },
        { value: "200+", label: "Proyectos Ejecutados" },
        { value: "100%", label: "Proyectos Certificados" },
        { value: "0", label: "Margen de Error" },
    ];

    const stagger = (delay) => ({
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ${delay}ms cubic-bezier(0.16,1,0.3,1), transform 0.7s ${delay}ms cubic-bezier(0.16,1,0.3,1)`,
    });

    return (
        <section className="relative flex flex-col overflow-hidden bg-black" style={{ minHeight: '100dvh' }}>

            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/titu.webp')", backgroundPosition: 'center 20%' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/70" />
                <div className="absolute inset-0 bg-si-red/[0.06]" />
            </div>

            {/* Industrial grid overlay */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none opacity-[0.035]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                }}
            />

            {/* Red left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-si-red to-transparent z-[2]" />

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-28">
                    <div className="max-w-4xl flex flex-col gap-7">

                        {/* Certification badge */}
                        <div style={stagger(200)}>
                            <div className="inline-flex items-center gap-3 border border-white/15 px-4 py-2 bg-white/[0.06] backdrop-blur-sm w-max">
                                <span className="w-1.5 h-1.5 rounded-full bg-si-red animate-pulse flex-shrink-0" />
                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">
                                    Certificado OPDS · Buenos Aires, Argentina
                                </span>
                            </div>
                        </div>

                        {/* Headline */}
                        <div style={stagger(380)}>
                            <div className="w-16 h-[3px] bg-si-red mb-6" />
                            <h1 className="text-[clamp(52px,8vw,96px)] font-black text-white leading-[0.92] tracking-tight uppercase">
                                Ingeniería<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-si-red via-red-400 to-si-red bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
                                    de Precisión
                                </span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <div style={stagger(560)}>
                            <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-xl leading-relaxed border-l-2 border-si-red/50 pl-6">
                                Soluciones industriales integrales. Readecuación de procesos,
                                mantenimiento crítico e infraestructura con los más altos estándares
                                de seguridad y eficiencia.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div style={stagger(720)} className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#contacto"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-si-red text-white font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-all duration-300 shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-y-[3px] hover:translate-x-[3px]"
                            >
                                Iniciar Proyecto
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="square" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a
                                href="#casos-exito"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all duration-300 border border-white/35 hover:border-white/80 backdrop-blur-sm"
                            >
                                Ver Proyectos
                                <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="square" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Stats Strip */}
            <div
                className="relative z-10 border-t border-white/10"
                style={{
                    ...stagger(920),
                    background: 'rgba(0,0,0,0.55)',
                    backdropFilter: 'blur(16px)',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center py-5 px-4 group hover:bg-white/[0.04] transition-colors duration-300 cursor-default"
                            >
                                <span className="text-[clamp(22px,3vw,32px)] font-black text-white group-hover:text-si-red transition-colors duration-300 leading-none">
                                    {stat.value}
                                </span>
                                <span className="text-xs uppercase tracking-[0.15em] text-gray-400 mt-2 text-center font-medium leading-tight">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#nosotros"
                className="absolute left-1/2 -translate-x-1/2 bottom-[calc(56px+1px)] flex flex-col items-center gap-3 opacity-65 hover:opacity-100 transition-opacity z-20 cursor-pointer"
            >
                <span className="text-white text-[11px] uppercase tracking-[0.3em] font-bold">Descubrir</span>
                <div className="relative w-[1px] h-14 bg-white/20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full bg-si-red animate-[scroll-line_2.2s_ease-in-out_infinite]" style={{ height: '40%' }} />
                </div>
            </a>

        </section>
    );
}
