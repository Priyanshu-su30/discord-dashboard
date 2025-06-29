import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex bg-cover"
      style={{ backgroundImage:  "url('/background.jpeg')" }}>
      <div className="rounded-xl border-2 border-solid border-gray-700 focus:border-pink-600">
        <Sidebar />
      </div>

      <div className="w-full flex flex-col">
        <div className="rounded-xl border-2 border-solid border-gray-700 focus:border-pink-600">
          <Navbar />
        </div>

        <main className="p-6 rounded-xl border-2 border-solid border-gray-700 focus:border-pink-600">{children}</main>
      </div>
    </div>
  )
}