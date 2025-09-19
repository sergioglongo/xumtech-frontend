import React, { useState } from 'react';
import { colors } from '../../theme/colors';

interface ChatFooterProps {
  onSendMessage: (message: string) => void;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <footer className="border-t p-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 rounded-full border px-4 py-2 focus:outline-none focus:ring-2"
          style={
            {
              borderColor: colors.primarylight,
              '--tw-ring-color': colors.secondary,
            } as React.CSSProperties
          }
        />
        <button
          onClick={handleSend}
          className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: colors.secondary }}
          aria-label="Enviar mensaje"
        >
          Enviar
        </button>
      </div>
    </footer>
  );
};

export default ChatFooter;