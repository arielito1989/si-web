import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { CONTACT, getPhoneUrl, getGmailComposeUrl } from '../constants/contact';

export default function ContactFooter() {
    const [formState, setFormState] = useState('idle'); // idle | submitting | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('submitting');

        const form = e.target;
        const formData = new FormData(form);

        try {
            const res = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });

            if (res.ok) {
                setFormState('success');
                form.reset();
            } else {
                setFormState('error');
            }
        } catch {
            setFormState('error');
        }
    };
    const contactItems = [
        {
            href: getPhoneUrl(),
            label: CONTACT.phone.display,
            sublabel: CONTACT.phone.hours,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
        },
        {
            href: getGmailComposeUrl(),
            label: CONTACT.email.user,
            sublabel: CONTACT.email.domain,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            href: null,
            label: CONTACT.address.city,
            sublabel: CONTACT.address.region,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="square" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    return (
        <footer id="contacto" className="relative bg-[#111] text-white overflow-hidden">

            {/* Top red border */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-si-red" />

            {/* Background image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10 grayscale"
                style={{ backgroundImage: "url('/piecarpeta.webp')" }}
            />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-20 pb-0">

                {/* CTA Header */}
                <RevealOnScroll direction="up" className="mb-16">
                    <div className="flex flex-col gap-5 max-w-xl">
                        <div className="flex items-center gap-4">
                            <span className="text-si-red font-black tracking-widest uppercase text-xs">/ Contacto</span>
                            <div className="h-px bg-si-red/30 w-12" />
                        </div>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none">
                            ¿Listo para<br />
                            <span className="text-si-red">su Proyecto?</span>
                        </h2>
                        <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
                            Contáctenos para analizar sus necesidades. Respuesta técnica garantizada en menos de 24hs.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* 2-col: contact + form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

                    {/* Left: Contact items */}
                    <RevealOnScroll direction="left" className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 gap-3">
                            {contactItems.map((item, i) => (
                                <div key={i} className="group">
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 border border-white/[0.06] hover:border-si-red/40 hover:bg-white/[0.04] transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 bg-white/[0.06] flex items-center justify-center text-si-red flex-shrink-0 group-hover:bg-si-red group-hover:text-white transition-all duration-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white leading-none mb-1">{item.label}</div>
                                                <div className="text-sm text-gray-500 font-light">{item.sublabel}</div>
                                            </div>
                                            <svg className="w-4 h-4 text-gray-600 group-hover:text-si-red group-hover:translate-x-1 transition-all ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="square" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 p-4 border border-white/[0.06]">
                                            <div className="w-10 h-10 bg-white/[0.06] flex items-center justify-center text-gray-500 flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-400 leading-none mb-1">{item.label}</div>
                                                <div className="text-sm text-gray-600 font-light">{item.sublabel}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>

                    {/* Right: Form */}
                    <RevealOnScroll direction="right" delay={200} className="border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-8">
                        <h3 className="text-base font-black uppercase tracking-widest text-white mb-1">Envíanos un Mensaje</h3>
                        <div className="w-8 h-[2px] bg-si-red mb-6" />
                        {formState === 'success' ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                                <div className="w-14 h-14 bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="square" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-black uppercase tracking-widest text-sm mb-1">Consulta Enviada</p>
                                    <p className="text-gray-400 font-light text-sm">Nos pondremos en contacto en menos de 24hs.</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setFormState('idle')}
                                    className="text-xs text-si-red font-bold uppercase tracking-widest hover:text-red-400 transition-colors mt-2"
                                >
                                    Enviar otra consulta →
                                </button>
                            </div>
                        ) : (
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                                <label>No completar: <input name="bot-field" /></label>
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nombre</label>
                                    <input
                                        name="nombre"
                                        type="text"
                                        required
                                        placeholder="Juan García"
                                        className="bg-white/[0.05] border border-white/10 px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-si-red transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Empresa</label>
                                    <input
                                        name="empresa"
                                        type="text"
                                        placeholder="Empresa S.A."
                                        className="bg-white/[0.05] border border-white/10 px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-si-red transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Correo Electrónico</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="email@empresa.com"
                                    className="bg-white/[0.05] border border-white/10 px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-si-red transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Consulta Técnica</label>
                                <textarea
                                    name="consulta"
                                    required
                                    placeholder="Describa brevemente el proyecto o necesidad..."
                                    rows="4"
                                    className="bg-white/[0.05] border border-white/10 px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-si-red transition-colors resize-none"
                                />
                            </div>

                            {formState === 'error' && (
                                <div className="flex items-center gap-3 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-sm">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="square" strokeWidth="2" d="M12 9v2m0 4h.01M12 3l9.66 16.5H2.34L12 3z" />
                                    </svg>
                                    Error al enviar. Intente nuevamente o contáctenos por teléfono.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={formState === 'submitting'}
                                className="group flex items-center justify-center gap-3 py-4 bg-si-red text-white font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all duration-300 mt-1 shadow-[3px_3px_0_rgba(192,0,0,0.3)] hover:shadow-[1px_1px_0_rgba(192,0,0,0.3)] hover:translate-y-[2px] hover:translate-x-[2px] disabled:opacity-60 disabled:pointer-events-none"
                            >
                                {formState === 'submitting' ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Consulta
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                        )}
                    </RevealOnScroll>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-7 flex flex-col sm:flex-row justify-between items-center gap-5">
                    <div className="flex items-center gap-4">
                        <img src="/si_soluciones.webp" alt="SI Logo" className="h-8 brightness-0 invert opacity-80" />
                        <div className="w-px h-8 bg-white/10" />
                        <div>
                            <div className="text-xs font-black uppercase tracking-widest text-gray-400">Soluciones Industriales</div>
                            <div className="text-[10px] text-si-red font-bold uppercase tracking-widest">Pte. Derqui · Bs. As.</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-end gap-1 text-center sm:text-right">
                        <p className="text-gray-600 text-[11px] tracking-wider uppercase">
                            &copy; 2026 SI Soluciones Industriales · Todos los derechos reservados
                        </p>
                        <p className="text-gray-700 text-[11px] tracking-wider">
                            Desarrollado por <span className="text-gray-500 font-semibold">Ariel Nogueroles</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


