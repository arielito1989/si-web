import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({ children, className = "", delay = 0, direction = "up" }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // To avoid the issue where very tall elements never reach higher thresholds (like 0.15)
                // we use threshold 0.01 but require isIntersecting.
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getInitialTransform = () => {
        switch (direction) {
            case "down": return 'translateY(-3rem)';
            case "left": return 'translateX(-3rem)';
            case "right": return 'translateX(3rem)';
            case "none": return 'translate(0,0)';
            case "up":
            default: return 'translateY(3rem)';
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transitionDuration: '1000ms',
                transitionTimingFunction: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
                transitionProperty: 'opacity, transform',
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate(0,0)' : getInitialTransform(),
                willChange: 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
}
