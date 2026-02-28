import { useState, useEffect } from 'react';
import { CONTACT, getPhoneUrl, getGmailComposeUrl } from '../constants/contact';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = ['nosotros', 'servicios', 'proceso', 'casos-exito', 'contacto'];
        const observers = sectionIds.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: '-35% 0px -60% 0px' }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#', id: '' },
        { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
        { name: 'Servicios', href: '#servicios', id: 'servicios' },
        { name: 'Proceso', href: '#proceso', id: 'proceso' },
        { name: 'Proyectos', href: '#casos-exito', id: 'casos-exito' },
        { name: 'Contacto', href: '#contacto', id: 'contacto' },
    ];

    const isLight = isScrolled || isMobileMenuOpen;

    return (
        <>
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full z-[200] h-[3px] bg-black/10">
                <div
                    className="h-full bg-si-red transition-[width] duration-100 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <header
                className={`fixed top-[3px] left-0 w-full z-[100] transition-all duration-400 ${
                    isScrolled
                        ? 'bg-white/97 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.06)] py-3'
                        : isMobileMenuOpen
                        ? 'bg-white py-3 border-b border-gray-100'
                        : 'bg-transparent py-5'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="flex-shrink-0 group" onClick={() => setIsMobileMenuOpen(false)}>
                        <img
                            src="/si_soluciones.webp"
                            alt="SI Soluciones Industriales"
                            className={`transition-all duration-300 group-hover:opacity-75 ${isLight ? 'h-9 brightness-0' : 'h-16 drop-shadow-lg'}`}
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-5 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-200 group pb-0.5 ${
                                    isScrolled
                                        ? activeSection === link.id ? 'text-si-red' : 'text-si-text hover:text-si-red'
                                        : activeSection === link.id ? 'text-si-red' : 'text-white/90 hover:text-white drop-shadow-sm'
                                }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-si-red transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="ml-2 px-5 py-2.5 bg-si-red text-white text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all duration-300 shadow-[3px_3px_0px_rgba(0,0,0,0.85)] hover:shadow-[1px_1px_0px_rgba(0,0,0,0.85)] hover:translate-y-[2px] hover:translate-x-[2px]"
                        >
                            Cotizar
                        </a>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className={`md:hidden z-50 p-2 flex flex-col justify-center gap-[5px] w-9 h-9 ${isLight ? 'text-si-text' : 'text-white'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menú"
                    >
                        <span className={`block h-[2px] bg-current origin-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px] w-6' : 'w-6'}`} />
                        <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
                        <span className={`block h-[2px] bg-current origin-center transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px] w-6' : 'w-5'}`} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-white z-[90] md:hidden flex flex-col transition-all duration-500 ${
                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}
            >
                <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-8">
                    <nav className="flex flex-col">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center justify-between py-5 border-b border-gray-100 last:border-b-0 group transition-all duration-300 ${
                                    activeSection === link.id ? 'text-si-red' : 'text-si-text hover:text-si-red'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${i * 55}ms` : '0ms' }}
                            >
                                <span className="text-2xl font-black uppercase tracking-wider">{link.name}</span>
                                <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="square" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#contacto"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-8 py-5 bg-si-red text-white text-sm font-black uppercase tracking-widest text-center shadow-[5px_5px_0px_rgba(0,0,0,0.85)] hover:bg-red-700 transition-colors"
                    >
                        Solicitar Presupuesto →
                    </a>
                </div>

                {/* Contact at bottom */}
                <div className="px-8 pb-10 border-t border-gray-100 pt-6 flex flex-col gap-3">
                    <a href={getPhoneUrl()} className="flex items-center gap-3 text-si-text/50 text-sm hover:text-si-red transition-colors">
                        <span className="w-8 h-8 border border-si-red/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-si-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </span>
                        {CONTACT.phone.display}
                    </a>
                    <a href={getGmailComposeUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-si-text/50 text-sm hover:text-si-red transition-colors">
                        <span className="w-8 h-8 border border-si-red/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-si-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </span>
                        {CONTACT.email.full}
                    </a>
                </div>
            </div>
        </>
    );
}
