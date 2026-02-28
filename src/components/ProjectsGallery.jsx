import { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function ProjectsGallery() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [isFiltering, setIsFiltering] = useState(false);
    const [showSwipeHint, setShowSwipeHint] = useState(true);
    const minSwipeDistance = 50;

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedProject]);

    // Reset swipe hint when opening a new project
    useEffect(() => {
        if (selectedProject) setShowSwipeHint(true);
    }, [selectedProject]);

    const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
    const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) { nextImage(); setShowSwipeHint(false); }
        if (distance < -minSwipeDistance) { prevImage(); setShowSwipeHint(false); }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, currentImageIndex]);

    const projects = [
        {
            id: 1, title: "Naves Industriales", category: "Infraestructura",
            images: ["/FOTOS/naves1.webp", "/FOTOS/naves2.webp", "/FOTOS/naves3.webp", "/FOTOS/naves4.webp"],
            description: "Diseño y montaje de nave industrial de gran envergadura para nueva línea de producción.",
            client: "Planta Industrial",
            location: "Zona Norte, Buenos Aires",
            materials: "Acero estructural, chapa galvanizada",
            duration: "—"
        },category: "Seguridad",
            images: ["/FOTOS/redincendio1.webp", "/FOTOS/redincendio2.webp", "/FOTOS/redincendio3.webp"],
            description: "Implementación de sistema completo incluyendo sala de bombas y red de rociadores bajo norma.",
            client: "Complejo Industrial",
            location: "Pilar, Buenos Aires",
            materials: "Acero al carbono, válvulas certificadas",
            duration: "3 meses"
        },
        {
            id: 3, title: "Tuberías Sanitarias", category: "Tuberías",
            images: ["/FOTOS/aceroinox.webp"],
            description: "Tendido de cañerías en acero inoxidable 316L y soldadura orbital de alta precisión.",
            client: "Laboratorio Farmacéutico",
            location: "Pte. Derqui, Buenos Aires",
            materials: "Acero inoxidable 316L",
            duration: "6 semanas"
        },
        {
            id: 4, title: "Plantas de Tratamiento", category: "Ingeniería",
            images: ["/FOTOS/conexioninox/conexionpulida1.webp", "/FOTOS/conexioninox/conexionpulida2.webp", "/FOTOS/conexioninox/conexionpulida3.webp"],
            description: "Modificación y expansión de sistemas de filtrado con spooler en inoxidable.",
            client: "Planta de Alimentos",
            location: "Zona Oeste, Buenos Aires",
            materials: "Inoxidable sanitario, juntas clamp",
            duration: "2 meses"
        },
        {
            id: 5, title: "Instalaciones Eléctricas", category: "Automatización",
            images: ["/FOTOS/electricidad1.webp", "/FOTOS/electricidad2.webp"],
            description: "Actualización de tendido eléctrico y diseño de tableros de control de procesos.",
            client: "Fábrica Metalúrgica",
            location: "Moreno, Buenos Aires",
            materials: "Cableado industrial, tableros IP65",
            duration: "5 semanas"
        },
        {
            id: 6, title: "Aislación Térmica", category: "Mantenimiento",
            images: ["/FOTOS/aislacion/aislacion1.webp", "/FOTOS/aislacion/aislacion2.webp", "/FOTOS/aislacion/aislacion3.webp"],
            description: "Aislación térmica integral de tanques y líneas de vapor con recubrimiento de aluminio.",
            client: "Planta Química",
            location: "Campana, Buenos Aires",
            materials: "Lana mineral, aluminio liso",
            duration: "3 semanas"
        },
        {
            id: 7, title: "Reparación de Calderas", category: "Calderas",
            images: ["/FOTOS/caldera/caldera1.webp", "/FOTOS/caldera/caldera2.webp", "/FOTOS/caldera/caldera3.webp", "/FOTOS/caldera/caldera4.webp"],
            description: "Retubado completo y calibración de válvulas de seguridad con certificación OPDS.",
            client: "Industria Textil",
            location: "San Martín, Buenos Aires",
            materials: "Tubos de humo, válvulas OPDS",
            duration: "6 semanas"
        },
        {
            id: 9, title: "Tanques Industriales", category: "Fabricación",
            images: ["/FOTOS/inox/inox1.webp", "/FOTOS/inox/inox2.webp", "/FOTOS/inox/inox3.webp"],
            description: "Construcción in situ de tanques de almacenamiento en acero inoxidable y acero al carbono.",
            client: "Bodega Vitivinícola",
            location: "Mendoza",
            materials: "Acero inoxidable 304, acero al carbono",
            duration: "3 meses"
        },
    ];

    const categories = ['Todos', ...new Set(projects.map(p => p.category))];
    const filtered = activeFilter === 'Todos' ? projects : projects.filter(p => p.category === activeFilter);

    const handleFilterChange = (cat) => {
        if (cat === activeFilter) return;
        setIsFiltering(true);
        setTimeout(() => {
            setActiveFilter(cat);
            setIsFiltering(false);
        }, 150);
    };

    const handleImageLoad = (src) => {
        setLoadedImages(prev => new Set([...prev, src]));
    };

    const openModal = (project) => { setSelectedProject(project); setCurrentImageIndex(0); };
    const closeModal = () => setSelectedProject(null);
    const nextImage = (e) => {
        if (e) e.stopPropagation();
        if (selectedProject) setCurrentImageIndex(p => (p + 1) % selectedProject.images.length);
    };
    const prevImage = (e) => {
        if (e) e.stopPropagation();
        if (selectedProject) setCurrentImageIndex(p => p === 0 ? selectedProject.images.length - 1 : p - 1);
    };

    const getProjectDetails = (project) => [
        project.client && {
            label: "Cliente", value: project.client,
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        project.location && {
            label: "Ubicación", value: project.location,
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="square" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        project.materials && {
            label: "Materiales", value: project.materials,
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="square" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        project.duration && {
            label: "Duración", value: project.duration,
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
    ].filter(Boolean);

    return (
        <section id="casos-exito" className="py-28 bg-si-bg relative">

            {/* Top red accent */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-si-red" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

                {/* Header */}
                <RevealOnScroll direction="up" className="mb-14">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <div className="flex items-center gap-4">
                            <span className="text-si-red font-black tracking-widest uppercase text-xs">/ Casos de Éxito</span>
                            <div className="h-px bg-si-red/25 w-12" />
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-black text-si-text uppercase tracking-tight leading-none">
                            Trabajos<br />
                            <span className="font-light text-si-text/60">Realizados</span>
                        </h2>
                        <p className="text-2xl text-si-text font-semibold leading-relaxed border-l-2 border-si-red/40 pl-4">
                            Ejecutados con los más altos estándares de calidad y seguridad industrial.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Category Filters — counts always visible */}
                <RevealOnScroll direction="up" delay={100} className="mb-10 flex flex-wrap gap-2">
                    {categories.map((cat) => {
                        const count = cat === 'Todos' ? projects.length : projects.filter(p => p.category === cat).length;
                        return (
                            <button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                className={`px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-200 border ${
                                    activeFilter === cat
                                        ? 'bg-si-red text-white border-si-red shadow-[3px_3px_0px_rgba(192,0,0,0.3)]'
                                        : 'bg-white text-si-text/60 border-gray-200 hover:border-si-red hover:text-si-red'
                                }`}
                            >
                                {cat}
                                <span className={`ml-2 ${activeFilter === cat ? 'opacity-70' : 'opacity-40'}`}>
                                    ({count})
                                </span>
                            </button>
                        );
                    })}
                </RevealOnScroll>

                {/* Gallery Grid — animated on filter change */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px] transition-opacity duration-150 ${isFiltering ? 'opacity-0' : 'opacity-100'}`}>
                    {filtered.map((project, index) => (
                        <RevealOnScroll
                            key={project.id}
                            direction="up"
                            delay={index * 60}
                            className={project.featured ? 'lg:col-span-2' : ''}
                        >
                            <div
                                className={`group relative overflow-hidden bg-black cursor-pointer ${
                                    project.featured ? 'aspect-[16/9]' : 'aspect-square'
                                }`}
                                onClick={() => openModal(project)}
                            >
                                {/* Skeleton placeholder */}
                                {!loadedImages.has(project.images[0]) && (
                                    <div className="absolute inset-0 bg-gray-800 animate-[skeleton-pulse_1.5s_ease-in-out_infinite]" />
                                )}

                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    loading="lazy"
                                    onLoad={() => handleImageLoad(project.images[0])}
                                    className={`w-full h-full object-cover transition-all duration-700 ${
                                        loadedImages.has(project.images[0])
                                            ? 'opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
                                            : 'opacity-0'
                                    }`}
                                />

                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

                                {/* Featured badge — always visible */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-[9px] font-black uppercase tracking-[0.15em] px-2 py-1 flex items-center gap-1 shadow-sm">
                                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                        Destacado
                                    </div>
                                )}

                                {/* Category badge — on hover */}
                                <div className={`absolute ${project.featured ? 'top-12' : 'top-4'} left-4 bg-si-red text-white text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0`}>
                                    {project.category}
                                </div>

                                {/* Photo count */}
                                <div className="absolute top-4 right-4 bg-black/60 text-white text-[9px] font-bold px-2 py-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.images.length} fotos
                                </div>

                                {/* Gallery icon — centered on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                    <div className="w-14 h-14 bg-si-red/90 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Title + description */}
                                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white text-lg font-black uppercase tracking-wide leading-tight mb-1.5">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm font-light line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Red border on hover */}
                                <div className="absolute inset-0 border-2 border-si-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="py-20 text-center text-gray-400 font-light">
                        No hay proyectos en esta categoría.
                    </div>
                )}

                {/* Bottom CTA */}
                <RevealOnScroll direction="up" delay={200} className="mt-14">
                    <div className="relative overflow-hidden bg-[#111] p-10 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-si-red" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-si-red/[0.06] -translate-y-1/2 translate-x-1/2" />
                        <div
                            className="absolute inset-0 pointer-events-none opacity-[0.03]"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                                backgroundSize: '48px 48px',
                            }}
                        />

                        <div className="relative z-10 flex flex-col gap-3 max-w-lg text-center sm:text-left">
                            <div className="flex items-center gap-3 justify-center sm:justify-start">
                                <div className="w-8 h-[2px] bg-si-red" />
                                <span className="text-si-red text-[10px] font-black uppercase tracking-[0.2em]">Consulta Gratuita</span>
                            </div>
                            <p className="text-white text-xl sm:text-2xl font-bold leading-snug">
                                ¿Le interesa un trabajo similar?{' '}
                                <span className="text-gray-400 font-light">Contáctenos para una evaluación técnica sin compromiso.</span>
                            </p>
                        </div>

                        <a
                            href="#contacto"
                            className="relative z-10 flex-shrink-0 group inline-flex items-center gap-3 px-8 py-4 bg-si-red text-white text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.85)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.85)] hover:translate-y-[2px] hover:translate-x-[2px]"
                        >
                            Solicitar Presupuesto
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Lightbox */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/96 p-0 sm:p-6 animate-fade-in"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full h-full sm:h-[88vh] sm:max-w-6xl bg-[#0f0f0f] flex flex-col md:flex-row shadow-[0_0_60px_rgba(0,0,0,0.9)] animate-scale-up overflow-hidden sm:border sm:border-white/5"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 z-50 w-9 h-9 bg-si-red text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                            aria-label="Cerrar"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image Area */}
                        <div
                            className="relative w-full md:w-[62%] h-[50vh] md:h-full bg-black flex-shrink-0 touch-pan-y group/car"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <img
                                key={currentImageIndex}
                                src={selectedProject.images[currentImageIndex]}
                                alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain select-none animate-fade-in"
                            />

                            {/* Image counter */}
                            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 tabular-nums">
                                {currentImageIndex + 1} / {selectedProject.images.length}
                            </div>

                            {selectedProject.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-si-red hover:border-si-red transition-all opacity-0 group-hover/car:opacity-100"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-si-red hover:border-si-red transition-all opacity-0 group-hover/car:opacity-100"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="square" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Swipe hint — mobile only, disappears after first swipe */}
                            {selectedProject.images.length > 1 && showSwipeHint && (
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex md:hidden items-center gap-2 bg-black/70 backdrop-blur-sm text-white/70 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 animate-fade-in">
                                    <svg className="w-3.5 h-3.5 animate-[swipe-hint_1.5s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="square" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                    </svg>
                                    Deslizá
                                    <svg className="w-3.5 h-3.5 animate-[swipe-hint-reverse_1.5s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="square" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            )}

                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {selectedProject.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`transition-all duration-300 rounded-full ${
                                            currentImageIndex === idx
                                                ? 'w-5 h-1.5 bg-si-red'
                                                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Info Panel */}
                        <div className="flex-1 flex flex-col bg-[#171717] text-white overflow-y-auto">
                            <div className="p-7 md:p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-6 h-[2px] bg-si-red" />
                                    <span className="text-si-red font-black uppercase tracking-widest text-xs">
                                        {selectedProject.category}
                                    </span>
                                    {selectedProject.featured && (
                                        <span className="ml-auto flex items-center gap-1 text-amber-500 text-[10px] font-bold uppercase tracking-widest">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                            </svg>
                                            Destacado
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-3xl sm:text-4xl font-black mb-5 uppercase leading-tight">
                                    {selectedProject.title}
                                </h3>

                                <p className="text-gray-400 font-light text-lg border-l-2 border-si-red/40 pl-4 mb-6 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                {/* Project details grid */}
                                <div className="grid grid-cols-2 gap-2 mb-8">
                                    {getProjectDetails(selectedProject).map((detail, i) => (
                                        <div key={i} className="flex items-start gap-2.5 p-3 bg-white/[0.03] border border-white/[0.06]">
                                            <div className="text-si-red flex-shrink-0 mt-0.5">{detail.icon}</div>
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-0.5">{detail.label}</div>
                                                <div className="text-sm text-gray-300 font-light leading-snug">{detail.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {selectedProject.images.length > 1 && (
                                    <div className="mt-auto">
                                        <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-3 font-bold">
                                            Galería · {selectedProject.images.length} fotos
                                        </div>
                                        <div className="grid grid-cols-5 gap-1.5">
                                            {selectedProject.images.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`relative aspect-square overflow-hidden border-2 transition-all duration-200 ${
                                                        currentImageIndex === idx
                                                            ? 'border-si-red opacity-100 scale-[1.03]'
                                                            : 'border-transparent opacity-45 hover:opacity-80 hover:border-gray-500'
                                                    }`}
                                                >
                                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-5 border-t border-white/[0.06] bg-black/30 flex flex-col gap-3">
                                <a
                                    href="#contacto"
                                    onClick={closeModal}
                                    className="block text-center w-full py-4 bg-si-red text-white uppercase tracking-widest text-xs font-black hover:bg-red-700 transition-colors"
                                >
                                    Solicitar Presupuesto
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="w-full py-3 border border-white/10 text-gray-500 text-[11px] font-bold uppercase tracking-widest hover:text-white hover:border-white/30 transition-all"
                                >
                                    ← Cerrar Galería
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
