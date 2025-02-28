import { Link } from "react-scroll";
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
        className={`fixed top-0 right-0 w-60 md:w-100 h-auto mb-20 bg-[var(--background)] text-[var(--secondary)] p-8 shadow-lg transition-transform duration-300 rounded-2xl border-2 mt-20 mr-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--secondary)] cursor-pointer"
        >
          <img src={closeIcon} className="w-8 h-8" />
        </button>

        <div className="mt-10 space-y-8 md:space-y-10 flex flex-col ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8 "
            onClick={onClose}
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-75}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8"
            onClick={onClose}
          >
            About Me
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-71}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8"
            onClick={onClose}
          >
            Projects
          </Link>

          <Link
            to="techstack"
            spy={true}
            smooth={true}
            offset={-68}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8"
            onClick={onClose}
          >
            Tech Stack
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-78}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
