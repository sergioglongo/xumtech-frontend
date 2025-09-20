import { colors } from "../theme/colors";
import xumtechLogo from "../assets/xumtech-logo.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-12"
      style={{ backgroundColor: colors.secondary, color: colors.white }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={xumtechLogo}
          alt="XumTech Logo"
          className="h-40 w-auto mb-4"
        />
        <p className="font-semibold text-lg mb-2">EXPERIENCIA DIGITAL</p>
        <div className="text-sm">
          <p className="mb-1">
            COPYRIGHT &copy; 2025 XUMTECH. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline" style={{ color: colors.white }}>
              POLÍTICAS DE COOKIES
            </a>
            <a href="#" className="hover:underline" style={{ color: colors.white }}>
              POLÍTICA DE PRIVACIDAD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;