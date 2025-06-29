'use client';
import React, { useState, useRef, useEffect } from "react";

const roles = ["All", "Admin", "User", "Moderator"];

export default function DropdownMenu({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (role: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleSelect = (role: string) => {
    onSelect(role); 
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="text-sm" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 border rounded-md hover:bg-gray-700 flex items-center gap-1"
      >
        {selected}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-28 bg-gray-900 backdrop-blur-lg border border-gray-700 rounded-md shadow-sm">
          {roles.map((role) => (
            <li
              key={role}
              onClick={() => handleSelect(role)}
              className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
            >
              {role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
