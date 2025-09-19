import React from 'react';
import Message from './Message';

// En el futuro, esta interfaz se usará para los mensajes dinámicos
export interface MessageData {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

interface ChatBodyProps {
  messages: MessageData[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <Message key={message.id} text={message.text} sender={message.sender} />
      ))}
    </div>
  );
};

export default ChatBody;