// import React from 'react'

// export default function Roles() {
//   return (
//     <div>Roles</div>
//   )
// }

'use client';
import React, { useState } from 'react';
import RoleItem from '@/Components/RoleItem';

interface Role {
  id: number;
  name: string;
  color: string;
  visible: boolean;
}

const Page: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: 'Admin', color: '#EF4444', visible: true },
    { id: 2, name: 'Moderator', color: '#3B82F6', visible: true },
    { id: 3, name: 'Member', color: '#10B981', visible: false },
  ]);

  const renameRole = (id: number, newName: string) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === id ? { ...role, name: newName } : role
      )
    );
  };

  const toggleVisibility = (id: number) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === id ? { ...role, visible: !role.visible } : role
      )
    );
  };

  return (
    <div className="h-full bg-transparent0 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Server Roles</h1>
      {roles.map((role) => (
        <RoleItem
        key={role.id}
        role={role}
        onRename={renameRole}
        onToggleVisibility={toggleVisibility}
        />
      ))}
      <h5>Click Role To Edit</h5>
    </div>
  );
};

export default Page;
