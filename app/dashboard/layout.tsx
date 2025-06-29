"use client"
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import SidebarMobile from "@/Components/SidebarMobile";

export default function Layout({ children }: { children: React.ReactNode }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define a media query
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    // Set the initial state
    setIsMobile(mediaQuery.matches);

    // Define a handler for changes
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Listen for changes
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen flex bg-cover"
      style={{ backgroundImage:  "url('/background.jpeg')" }}>
        {!isMobile ? (
          <div className="rounded-xl border-2 border-solid border-gray-700 focus:border-pink-600">
            <Sidebar />
          </div>
        ) : <SidebarMobile />}


      <div className="w-full flex flex-col">
        <div className="rounded-xl border-2 border-solid border-gray-700 focus:border-pink-600">
          <Navbar />
        </div>

        <main className="p-6 rounded-xl border-2 border-solid border-gray-700 focus:border-pink-600">{children}</main>
      </div>
    </div>
  )
}