import closeIcon from "../assets/Close.png";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 w-60 md:w-100 h-full bg-[var(--background)] text-[var(--secondary)] p-6 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--secondary)]"
        >
          <img src={closeIcon} className="w-8 h-8" />
        </button>

        <ul className="mt-10 space-y-8 md:space-y-10">
          <li className="block text-lg md:text-xl text-[var(--secondary)] hover:text-[var(--primary)] transition">
            <a href="#home" onClick={onClose}>
              Home
            </a>
          </li>
          <li className="block text-lg md:text-xl text-[var(--secondary)] hover:text-[var(--primary)] transition">
            <a href="#about" onClick={onClose}>
              About Me
            </a>
          </li>

          <li className="block text-lg md:text-xl text-[var(--secondary)] hover:text-[var(--primary)] transition">
            <a href="#projects" onClick={onClose}>
              Projects
            </a>
          </li>

          <li className="block text-lg md:text-xl text-[var(--secondary)] hover:text-[var(--primary)] transition">
            <a href="#techStack" onClick={onClose}>
              Tech Stack
            </a>
          </li>
          <li className="block text-lg md:text-xl text-[var(--secondary)] hover:text-[var(--primary)] transition">
            <a href="#contact" onClick={onClose}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
