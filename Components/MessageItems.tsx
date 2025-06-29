import { Trash2 } from 'lucide-react';
import React from 'react';

export interface Message {
  id: number;
  avatar: string;
  username: string;
  timestamp: string;
  content: string;
}

interface Props {
  message: Message;
  onDelete: (id: number) => void;
}

const MessageItem: React.FC<Props> = ({ message, onDelete }) => {
  return (
    <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-3">
      <img
        src={message.avatar}
        alt={message.username}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{message.username}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{message.timestamp}</p>
          </div>
          <button
            onClick={() => onDelete(message.id)}
            className="text-red-500 text-sm hover:cursor-pointer"
          >
            <Trash2/>
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">{message.content}</p>
      </div>
    </div>
  );
};

export default MessageItem;
