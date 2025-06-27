"use client";

import { House, MessageSquare, PanelLeftClose, PanelLeftOpen, UserPen, UsersRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tabs = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: House,
    },
    {
      label: "Members",
      link: "/dashboard/members",
      icon: UsersRound,
    },
    {
      label: "Roles",
      link: "/dashboard/roles",
      icon: UserPen,
    },
    {
      label: "Messages",
      link: "/dashboard/messages",
      icon: MessageSquare,
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div
        className={`pt-10 h-dvh bg-gradient-to-b from-[#00033D] to-[#0033FF] flex flex-col transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-72"
        }`}
      >
        <div className="flex items-center gap-3 pb-5 px-3">
          {isCollapsed ? (
            <PanelLeftOpen
              className="hover:cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <PanelLeftClose
              className="hover:cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
          {!isCollapsed && <span className="text-white">Menu</span>}
        </div>

        <div className="flex flex-col gap-2 pr-3">
          {tabs.map((x, index) => {
            const Icon = x.icon;
            return (
              <Link
                href={x.link}
                key={index}
                className="py-3 px-4 flex rounded hover:bg-blue-900 text-white items-center gap-3"
              >
                  <Icon size={20} />
                  {!isCollapsed && <span>{x.label}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
