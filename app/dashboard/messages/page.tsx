'use client';
import React, { useState } from 'react';
import MessageItem, { Message } from '@/Components/MessageItems';

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      avatar: 'https://i.pravatar.cc/100?img=1',
      username: 'Alice',
      timestamp: '10:24 AM · Today',
      content: 'Hey there! Just checking in on the project status.',
    },
    {
      id: 2,
      avatar: 'https://i.pravatar.cc/100?img=2',
      username: 'Bob',
      timestamp: '11:02 AM · Today',
      content: 'We’ve made good progress. I’ll send the updates shortly.',
    },
    {
      id: 3,
      avatar: 'https://i.pravatar.cc/100?img=3',
      username: 'Charlie',
      timestamp: '11:45 AM · Today',
      content: 'Great job everyone! Looking forward to the next sprint.',
    },
    {
      id: 4,
      avatar: 'https://i.pravatar.cc/100?img=1',
      username: 'Alice',
      timestamp: '10:24 AM · Today',
      content: 'Hey there! Just checking in on the project status.',
    },
    {
      id: 5,
      avatar: 'https://i.pravatar.cc/100?img=2',
      username: 'Bob',
      timestamp: '11:02 AM · Today',
      content: 'We’ve made good progress. I’ll send the updates shortly.',
    },
    {
      id: 6,
      avatar: 'https://i.pravatar.cc/100?img=3',
      username: 'Charlie',
      timestamp: '11:45 AM · Today',
      content: 'Great job everyone! Looking forward to the next sprint.',
    },
  ]);

  const handleDelete = (id: number) => {
    console.log('Mock delete message with ID:', id);
    // No real deletion — just log
  };

  return (
    <div className="min-h-screen bg-transparent p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Messages</h1>
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Messages;
