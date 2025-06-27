import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main section with sidebar + content */}
      <div className="flex flex-1">
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}