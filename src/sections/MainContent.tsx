import { colors } from "../theme/colors";
import ServiceCard from "../components/ServiceCard";

import gestionComercialImg from "../assets/images/Caso-de-uso_Gestion-comercial-1024x1024.jpg";
import mercadeoDigitalImg from "../assets/images/Caso-de-uso_Mercadeo-Digital-1024x1024.jpg";
import serviciosDigitalesImg from "../assets/images/Caso-de-uso_Servicios-digitales-1024x1024.jpg";
import automatizacionImg from "../assets/images/Caso-de-uso_Automatizacion-1024x1024.jpg";
import heroBgImg from "../assets/images/Programando.jpg";

const MainContent = () => {
  return (
    <main className="container mx-auto px-6 md:px-12 pt-36 pb-16">
      <section
        className="text-center py-20 rounded-3xl"
        style={{ backgroundColor: colors.primarylight }}
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          style={{ color: colors.primary }}
        >
          Bienvenidos al proceso de selección.
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          style={{ color: colors.text }}
        >
          En XUMTECH, somos consultores expertos en transformación digital.
        </p>
        <a
          href="#about"
          className="font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
          style={{ backgroundColor: colors.secondary, color: colors.white }}
        >
          Descubre más
        </a>
      </section>

      <section id="about" className="py-20">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              ¿Estas listo para probar tus habilidades?
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: colors.text }}>
              El propósito de esta evaluación es que las y los candidatos puedan mostrar sus habilidades y
capacidades consultivas a un panel de entrevistas en una sesión posterior.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-64 rounded-xl shadow-lg overflow-hidden">
              <img
                src={heroBgImg}
                alt="Equipo trabajando en transformación digital"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20"
        style={{ backgroundColor: colors.primarylight }}
      >
        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-12"
          style={{ color: colors.text }}
        >
          Pasos a seguir
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          <ServiceCard
            title="Tenes 3 días calendario"
            description="Después de haber recibido el enunciado."
            imageSrc={gestionComercialImg}
          />
          <ServiceCard
            title="Video de la solución"
            description="Deberas enviar un video haciendo un demo."
            imageSrc={mercadeoDigitalImg}
          />
          <ServiceCard
            title="Codigo fuente"
            description="También envia el codigo fuente."
            imageSrc={serviciosDigitalesImg}
          />
          <ServiceCard
            title="Atento al siguiente paso"
            description="Nos contactaremos para la presentación con el panel de entrevistas."
            imageSrc={automatizacionImg}
          />
        </div>
      </section>
    </main>
  );
};

export default MainContent;