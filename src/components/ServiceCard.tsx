import React from 'react';
import { colors } from '../theme/colors';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc }) => (
  <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: colors.white }}>
    <div className="relative w-full h-48 bg-gray-200">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 flex flex-col items-start text-left">
      <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>{title}</h3>
      <p className="text-sm mb-4" style={{ color: colors.secondary }}>{description}</p>
      <a href="#" className="flex items-center font-semibold transition-colors duration-300" style={{ color: colors.secondary }}>
        Ver más
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
);

export default ServiceCard;