import { useState } from "react";
import { colors } from "../../theme/colors";
import ChatBody, { type MessageData } from "./ChatBody";
import ChatInput from "./ChatInput";
import { findBestAnswer } from "../../services/api/questionAnswerApi";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  
  const [messages, setMessages] = useState<MessageData[]>([
    {
      id: 1,
      text: "¡Hola! ¿Te puedo ayudar con alguna pregunta sobre el proceso?",
      sender: "bot",
    },
  ]);
  
  const handleSendMessage = async (text: string) => {
    const userMessage: MessageData = {
      id: Date.now(),
      text,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await findBestAnswer(text);
      const botResponseText =
        response.answer ||
        response.message ||
        "Lo siento, no pude procesar tu solicitud.";

      const botMessage: MessageData = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error al obtener respuesta del bot:", error);
      const errorMessage: MessageData = {
        id: Date.now() + 1,
        text: "Hubo un problema de conexión. Por favor, inténtalo de nuevo más tarde.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-5 right-6 z-50 flex h-[70vh] max-h-[700px] w-96 flex-col rounded-2xl bg-white shadow-2xl">
      <header
        className="flex items-center justify-between rounded-t-2xl px-4 py-3"
        style={{ backgroundColor: colors.primary }}
      >
        <h3 className="text-lg font-bold text-white">Xum bot</h3>
        <button
          className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: colors.secondary }}
          aria-label="Cerrar"
          onClick={onClose}
        >
          X
        </button>
      </header>

      <ChatBody messages={messages} />

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
