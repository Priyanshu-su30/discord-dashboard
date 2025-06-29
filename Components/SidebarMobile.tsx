"use client";

import { Menu, X, House, MessageSquare, UserPen, UsersRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  const tabs = [
    { label: "Dashboard", link: "/dashboard", icon: House },
    { label: "Members", link: "/dashboard/members", icon: UsersRound },
    { label: "Roles", link: "/dashboard/roles", icon: UserPen },
    { label: "Messages", link: "/dashboard/messages", icon: MessageSquare },
  ];

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  return (
    <>
      {/* Header with Hamburger Icon for Mobile */}
      <div className="fixed inset-0 z-40 p-4 text-white md:hidden">
        <button onClick={toggleMobileSidebar}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Overlay - Mobile */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm bg-opacity-50" onClick={() => setIsMobileSidebarOpen(false)}>
          <div
            className="fixed left-0 top-0 w-64 h-full bg-linear-to-r from-[#343738] to-[#596164] text-white p-5 z-50"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside sidebar
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">URV</span>
              <X size={24} className="cursor-pointer" onClick={toggleMobileSidebar} />
            </div>

            <div className="flex flex-col gap-4">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = pathname === tab.link;
                return (
                  <Link
                    key={index}
                    href={tab.link}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                      isActive ? "bg-blue-700 font-semibold" : "hover:bg-blue-600"
                    }`}
                    onClick={() => setIsMobileSidebarOpen(false)} // Close sidebar on navigation
                  >
                    <Icon size={20} />
                    <span>{tab.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
