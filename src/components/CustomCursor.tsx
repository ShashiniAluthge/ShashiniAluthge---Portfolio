import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let animId: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // dot follows instantly
            dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
        };

        // ring follows with smooth lag
        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
            animId = requestAnimationFrame(animate);
        };

        const onMouseEnterLink = () => {
            ring.style.width = "48px";
            ring.style.height = "48px";
            ring.style.borderColor = "var(--primary)";
            ring.style.background = "rgba(0,157,255,0.08)";
        };

        const onMouseLeaveLink = () => {
            ring.style.width = "36px";
            ring.style.height = "36px";
            ring.style.borderColor = "rgba(0,157,255,0.6)";
            ring.style.background = "transparent";
        };

        // apply hover effect on all clickable elements
        const addHoverListeners = () => {
            document
                .querySelectorAll("a, button, [role='button'], input, textarea, select, label, [onClick]")
                .forEach((el) => {
                    el.addEventListener("mouseenter", onMouseEnterLink);
                    el.addEventListener("mouseleave", onMouseLeaveLink);
                });
        };

        window.addEventListener("mousemove", onMouseMove);
        addHoverListeners();
        animId = requestAnimationFrame(animate);

        // re-apply listeners when DOM changes
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animId);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Small dot — snappy */}
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    pointerEvents: "none",
                    zIndex: 99999,
                    boxShadow: "0 0 8px var(--primary)",
                    transition: "width 0.2s, height 0.2s",
                }}
            />
            {/* Outer ring — laggy smooth follow */}
            <div
                ref={ringRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(0,157,255,0.6)",
                    pointerEvents: "none",
                    zIndex: 99998,
                    transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease",
                }}
            />
        </>
    );
};

export default CustomCursor;