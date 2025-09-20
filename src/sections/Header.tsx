import { colors } from "../theme/colors";
import xumtechLogo from "../assets/xumtech-logo.png";

interface HeaderProps {
  onOpenChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenChat }) => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="flex items-center justify-between rounded-xl bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm">
        <img src={xumtechLogo} alt="XumTech Logo" className="h-20 w-auto" />
        <nav className="hidden items-center md:flex space-x-8">
          <a
            href="#about"
            className="hover:underline"
            style={{ color: colors.text }}
          >
            Evaluación
          </a>
          <a
            href="#services"
            className="hover:underline"
            style={{ color: colors.text }}
          >
            Pasos a seguir
          </a>
          <button
            onClick={onOpenChat}
            className="px-4 py-2 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: colors.primary, color: colors.white }}
            aria-label="Abrir chat"
          >
            Consultas
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;