import React, { useEffect, useRef } from 'react';
import Message from './Message';

export interface MessageData {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

interface ChatBodyProps {
  messages: MessageData[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      const chatBody = chatRef.current;
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatRef}
      className="flex-1 overflow-y-auto p-4 space-y-4"
    >
      {messages.map((message) => (
        <Message key={message.id} text={message.text} sender={message.sender} />
      ))}
    </div>
  );
};

export default ChatBody;