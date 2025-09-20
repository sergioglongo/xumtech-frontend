import { useState } from "react";
import { colors } from "./theme/colors";
import ChatWindow from "./components/chatbot/ChatWindow";
import Header from "./sections/Header";
import MainContent from "./sections/MainContent";
import Footer from "./sections/Footer";


export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: colors.white, color: colors.text }}
    >
      <Header onOpenChat={() => setIsChatOpen(true)} />

      <MainContent />

      <Footer />

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex h-24 w-24 items-center justify-center rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: colors.primary }}
        aria-label="Abrir chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
