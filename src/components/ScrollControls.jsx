import { useState, useEffect } from 'react';

export default function ScrollControls() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar flechas cuando el scroll baja más de 300px
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div
            className={`fixed right-6 bottom-32 md:right-8 md:bottom-32 flex flex-col gap-3 z-30 transition-all duration-500 origin-bottom ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
                }`}
        >
            {/* Scroll Up Button */}
            <button
                onClick={scrollToTop}
                title="Volver al inicio"
                className="w-12 h-12 bg-si-bg border-2 border-si-text text-si-text shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:shadow-[1px_1px_0px_rgba(0,0,0,0.8)] hover:translate-y-[3px] hover:translate-x-[3px] flex items-center justify-center transition-all group"
            >
                <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M5 15l7-7 7 7" />
                </svg>
            </button>

            {/* Scroll Down Button */}
            <button
                onClick={scrollToBottom}
                title="Ir al final"
                className="w-12 h-12 bg-si-red border-2 border-si-red text-white shadow-[4px_4px_0px_rgba(192,0,0,0.3)] hover:shadow-[1px_1px_0px_rgba(192,0,0,0.3)] hover:translate-y-[3px] hover:translate-x-[3px] flex items-center justify-center transition-all group"
            >
                <svg className="w-6 h-6 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
}
