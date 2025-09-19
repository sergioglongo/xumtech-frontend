import { useState } from 'react';
import ServiceCard from './components/ServiceCard';
import { colors } from './theme/colors';
import ChatWindow from './components/chatbot/ChatWindow';

// Importar imágenes de los servicios
import gestionComercialImg from './assets/images/Caso-de-uso_Gestion-comercial-1024x1024.jpg';
import mercadeoDigitalImg from './assets/images/Caso-de-uso_Mercadeo-Digital-1024x1024.jpg';
import serviciosDigitalesImg from './assets/images/Caso-de-uso_Servicios-digitales-1024x1024.jpg';
import automatizacionImg from './assets/images/Caso-de-uso_Automatizacion-1024x1024.jpg';
import heroBgImg from './assets/images/Certificacion-Oracle-Service-Expertise-_-Oracle-Customer-Experience-CX.jpg';

// Importar logo
import xumtechLogo from './assets/xumtech-logo.png';

// Componente principal de la aplicación.
export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.white, color: colors.text }}>
      {/* Encabezado */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div className="flex items-center justify-between rounded-xl bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm">
          <img src={xumtechLogo} alt="XumTech Logo" className="h-20 w-auto" />
          <nav className="hidden items-center md:flex space-x-8">
            <a href="#about" className="hover:underline" style={{ color: colors.text }}>Sobre Nosotros</a>
            <a href="#services" className="hover:underline" style={{ color: colors.text }}>Servicios</a>
            <a href="#contact" className="px-4 py-2 rounded-xl transition-colors duration-300" style={{ backgroundColor: colors.primary, color: colors.white }}>Contacto</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 pt-32 pb-16">
        {/* Sección principal (Hero) */}
        <section className="text-center py-20 rounded-3xl" style={{ backgroundColor: colors.primarylight }}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ color: colors.primary }}>
            Digitalizamos para conectar. Simplificamos para impactar.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: colors.text }}>
            En XUMTECH, somos consultores expertos en transformación digital.
          </p>
          <a href="#about" className="font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300" style={{ backgroundColor: colors.secondary, color: colors.white }}>
            Descubre más
          </a>
        </section>

        {/* Sección "Sobre Nosotros" */}
        <section id="about" className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
                ¿Quiénes Somos?
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: colors.text }}>
                Ayudamos a las empresas a aprovechar la tecnología para optimizar procesos, mejorar la experiencia del cliente y acelerar resultados de negocio. Digitalizamos con estrategia, pensando siempre en el impacto real que cada solución puede generar en las personas y en tu crecimiento.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md h-64 rounded-xl shadow-lg overflow-hidden">
                <img src={heroBgImg} alt="Equipo trabajando en transformación digital" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Sección "Nuestros Servicios" */}
        <section id="services" className="py-20" style={{ backgroundColor: colors.primarylight }}>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12" style={{ color: colors.text }}>
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            <ServiceCard 
              title="Gestión comercial"
              description="Impulsa tus ventas con soluciones que optimizan procesos, mejoran la productividad del equipo y te permiten tomar decisiones con datos en tiempo real."
              imageSrc={gestionComercialImg}
            />
            <ServiceCard 
              title="Mercadeo digital"
              description="Transforma tus datos en estrategias efectivas. Automatiza campañas, personaliza experiencias y fortalece relaciones duraderas con tus clientes."
              imageSrc={mercadeoDigitalImg}
            />
            <ServiceCard 
              title="Servicios digitales"
              description="Simplifica operaciones, digitaliza procesos clave y mejora la experiencia de tus clientes con soluciones que conectan mejor y hacen más ágil tu día a día."
              imageSrc={serviciosDigitalesImg}
            />
            <ServiceCard 
              title="Automatización"
              description="Haz más en menos tiempo con soluciones inteligentes. Elimina tareas repetitivas y enfoca a tu equipo en lo que realmente genera valor para el negocio."
              imageSrc={automatizacionImg}
            />
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer id="contact" className="py-12" style={{ backgroundColor: colors.secondary, color: colors.white }}>
        <div className="flex flex-col items-center justify-center text-center">
          <img src={xumtechLogo} alt="XumTech Logo" className="h-40 w-auto mb-4" />
          <p className="font-semibold text-lg mb-2">EXPERIENCIA DIGITAL</p>
          <div className="text-sm">
            <p className="mb-1">COPYRIGHT &copy; 2025 XUMTECH. TODOS LOS DERECHOS RESERVADOS.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:underline" style={{ color: colors.white }}>POLÍTICAS DE COOKIES</a>
              <a href="#" className="hover:underline" style={{ color: colors.white }}>POLÍTICA DE PRIVACIDAD</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante del Chatbot */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex h-24 w-24 items-center justify-center rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: colors.primary }}
        aria-label="Abrir chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Ventana del Chat */}
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
