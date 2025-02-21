import { X } from "lucide-react"; // Import Close (X) icon

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
        className={`fixed top-0 right-0 w-[80%] h-full bg-[#292929] text-white p-6 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
      
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X size={24} color="#fff" />
        </button>

        
        <ul className="mt-10 space-y-4">
          <li className="block text-lg text-[#fff] hover:text-[#00FF08] transition">
            <a href="#home" onClick={onClose}>Home</a>
          </li>
          <li className="block text-lg text-[#fff] hover:text-[#00FF08] transition">
            <a href="#about" onClick={onClose}>About</a>
          </li>
          <li className="block text-lg text-[#fff] hover:text-[#00FF08] transition">
            <a href="#skills" onClick={onClose}>Skills</a>
          </li>
          <li className="block text-lg text-[#fff] hover:text-[#00FF08] transition">
            <a href="#projects" onClick={onClose}>Projects</a>
          </li>
          <li className="block text-lg text-[#fff] hover:text-[#00FF08] transition">
            <a href="#contact" onClick={onClose}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
