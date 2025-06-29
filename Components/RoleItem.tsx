import React, { useState } from 'react';

interface Role {
  id: number;
  name: string;
  color: string;
  visible: boolean;
}

interface RoleItemProps {
  role: Role;
  onRename: (id: number, newName: string) => void;
  onToggleVisibility: (id: number) => void;
}

const RoleItem: React.FC<RoleItemProps> = ({ role, onRename, onToggleVisibility }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(role.name);

  const handleRename = () => {
    if (tempName.trim() === '') return;
    onRename(role.id, tempName);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-5 rounded-md mb-2 shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: role.color }}
        />
        {isEditing ? (
          <input
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleRename();
            }}
            className="bg-transparent border-b border-gray-500 px-1 text-sm text-gray-900 dark:text-white focus:outline-none"
            autoFocus
          />
        ) : (
          <span
            className="cursor-pointer text-sm dark:text-white"
            onClick={() => setIsEditing(true)}
          >
            {role.name}
          </span>
        )}
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={role.visible}
          onChange={() => onToggleVisibility(role.id)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
      </label>
    </div>
  );
};

export default RoleItem;
