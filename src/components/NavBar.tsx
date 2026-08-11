import { useState, useEffect, useRef } from "react";
import Drawer from "./Drawer";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
  { to: "home", label: "Home", offset: -80 },
  { to: "about", label: "About Me", offset: -75 },
  { to: "projects", label: "Projects", offset: -70 },
  { to: "techstack", label: "Tech Stack", offset: -70 },
  { to: "contact", label: "Contact", offset: -80 },
];

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setScrolled((prev) => {
          const next = window.scrollY > 40;
          return prev === next ? prev : next; // avoid redundant state updates
        });
        tickingRef.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        animate={{ paddingTop: scrolled ? "10px" : "20px" }}
        transition={{ duration: 0.1 }}
      >
        <motion.nav
          className="flex items-center justify-between w-full"
          animate={{
            maxWidth: scrolled ? "780px" : "1400px",
            borderRadius: scrolled ? 50 : 0,
            paddingLeft: scrolled ? 24 : 48,
            paddingRight: scrolled ? 24 : 48,
            paddingTop: scrolled ? 10 : 14,
            paddingBottom: scrolled ? 10 : 14,
            backgroundColor: scrolled ? "rgba(5, 21, 31, 0.85)" : "rgba(5, 21, 31, 0)",
          }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          style={{
            margin: "0 auto",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            border: scrolled ? "1px solid rgba(0,157,255,0.12)" : "1px solid transparent",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(0,157,255,0.08)"
              : "none",
          }}
        >
          {/* ── Logo ── */}
          <motion.h1
            className="text-xl font-bold uppercase tracking-widest select-none"
            style={{ color: "var(--secondary)", fontFamily: "'Syne', sans-serif" }}
            whileHover={{ scale: 1.04 }}
          >
            <span
              style={{
                color: "var(--primary)",
                fontSize: "1.5rem",
                fontStyle: "italic",
              }}
            >
              S
            </span>
            hashini
          </motion.h1>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={link.offset}
                activeClass="active-nav"
                className="nav-link relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Hire Me button ── */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              className="relative px-6 py-2.5 text-sm font-semibold rounded-full overflow-hidden text-white"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--gradient_1))",
                boxShadow: "0 4px 16px rgba(0, 157, 255, 0.35)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 20px rgba(0, 157, 255, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Shine sweep on hover */}
              <motion.span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                }}
                whileHover={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Hire Me</span>
            </motion.button>
          </div>

          {/* ── Mobile menu button ── */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg cursor-pointer"
            style={{ background: "rgba(0,157,255,0.08)", border: "1px solid rgba(0,157,255,0.15)" }}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 rounded-full" style={{ background: "var(--primary)" }} />
            <span className="block w-3.5 h-0.5 rounded-full" style={{ background: "var(--primary)", marginLeft: "auto" }} />
            <span className="block w-5 h-0.5 rounded-full" style={{ background: "var(--primary)" }} />
          </button>
        </motion.nav>
      </motion.div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default NavBar;