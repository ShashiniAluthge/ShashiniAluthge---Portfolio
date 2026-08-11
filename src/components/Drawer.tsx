import { Link } from "react-scroll";
import closeIcon from "../assets/Close.png";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { to: "home", label: "Home", offset: -80 },
  { to: "about", label: "About Me", offset: -75 },
  { to: "projects", label: "Projects", offset: -71 },
  { to: "techstack", label: "Tech Stack", offset: -68 },
  { to: "contact", label: "Contact", offset: -78 },
];

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      style={{ background: "rgba(5,21,31,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      {/* Drawer panel */}
      <div
        className={`fixed top-20 right-4 md:right-6 w-[85vw] max-w-sm rounded-3xl overflow-hidden transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-[120%]"
          }`}
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(0,157,255,0.15)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <h2
            className="text-lg font-bold uppercase tracking-widest select-none"
            style={{ color: "var(--secondary)", fontFamily: "'Syne', sans-serif" }}
          >
            <span style={{ color: "var(--primary)", fontSize: "1.2rem", fontStyle: "italic" }}>S</span>
            hashini
          </h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <img src={closeIcon} className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-1.5 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={800}
              activeClass="active-drawer-link"
              className="drawer-link px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.65)" }}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hire Me CTA */}
        <div className="px-4 pb-5 pt-1">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-78}
            duration={800}
            className="block text-center px-6 py-3 rounded-full text-sm font-semibold text-white cursor-pointer transition-transform hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--gradient_1))",
              boxShadow: "0 4px 16px rgba(0,157,255,0.35)",
            }}
            onClick={onClose}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;