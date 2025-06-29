"use client";

import { ChevronLeft, ChevronRight, House, MessageSquare, UserPen, UsersRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();


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
      <div className="text-4xl p-7 oldstyle-nums">
        URV
      </div>
      <div
        className={`pt-10 h-auto bg-transparent flex flex-col transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-72"
        }`}
      >
        <div className="flex items-center gap-3 pb-5 px-3">
          {isCollapsed ? (
            <ChevronRight
              key="right"
              onClick={toggleSidebar}
              className="hover:cursor-pointer"
            />
          ) : (
            <ChevronLeft
              key="left"
              onClick={toggleSidebar}
              className="hover:cursor-pointer"
            />
          )}
          {!isCollapsed && <span className="text-white">Menu</span>}
        </div>

        <div className="flex flex-col gap-2 pr-3">
        {tabs.map((x, index) => {
          const Icon = x.icon;
          const isActive = pathname === x.link;

          return (
            <Link
              href={x.link}
              key={index}
              className={`py-3 px-4 flex rounded-4xl items-center gap-3 text-white hover:bg-blue-900 transition
                ${isActive ? "bg-blue-700 font-semibold" : ""}
              `}
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
