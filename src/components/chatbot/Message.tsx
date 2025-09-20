import React from 'react';
import { colors } from '../../theme/colors';

interface MessageProps {
  text: string;
  sender: 'bot' | 'user';
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  const isBot = sender === 'bot';

  // Clases base para la burbuja del mensaje
  const bubbleBaseClasses = "rounded-lg p-3 max-w-xs text-sm";

  // Clases y estilos condicionales
  const botStyles = { color: colors.text };
  const userStyles = { backgroundColor: colors.secondary };

  return (
    <div className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`${bubbleBaseClasses} ${isBot ? 'bg-gray-200' : 'text-white'}`}
        style={isBot ? botStyles : userStyles}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;