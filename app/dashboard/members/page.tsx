"use client"
import AddButton from "@/Components/AddButton";
import DropdownMenu from "@/Components/DropdownMenu";
import { ArrowUpDown, ChevronLeft, ChevronRight, User, X } from "lucide-react";
import { useState } from "react";

export default function Members() {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [search, setSearch] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    role: "",
  });

  const [selectedRole, setSelectedRole] = useState("All");

  const [users, setUsers] = useState([
    { id: 1, avatar: "a", username: "Tony", joinDate: "2011-10-10", role: "User" },
    { id: 2, avatar: "b", username: "Nina", joinDate: "2012-01-15", role: "Admin" },
    { id: 3, avatar: "c", username: "Liam", joinDate: "2013-04-20", role: "User" },
    { id: 4, avatar: "d", username: "Sophia", joinDate: "2014-06-30", role: "Moderator" },
    { id: 5, avatar: "e", username: "Jake", joinDate: "2015-08-11", role: "User" },
    { id: 6, avatar: "f", username: "Maya", joinDate: "2016-02-23", role: "Admin" },
    { id: 7, avatar: "g", username: "Ethan", joinDate: "2017-09-05", role: "User" },
    { id: 8, avatar: "h", username: "Olivia", joinDate: "2018-12-14", role: "User" },
    { id: 9, avatar: "i", username: "Noah", joinDate: "2019-07-19", role: "Moderator" },
    { id: 10, avatar: "j", username: "Zoe", joinDate: "2020-03-02", role: "User" },
    { id: 11, avatar: "k", username: "Leo", joinDate: "2020-10-10", role: "User" },
    { id: 12, avatar: "l", username: "Ava", joinDate: "2021-01-22", role: "Admin" },
    { id: 13, avatar: "m", username: "James", joinDate: "2021-06-18", role: "User" },
    { id: 14, avatar: "n", username: "Emma", joinDate: "2022-04-05", role: "User" },
    { id: 15, avatar: "o", username: "Lucas", joinDate: "2022-08-27", role: "Moderator" },
    { id: 16, avatar: "p", username: "Isla", joinDate: "2022-11-13", role: "User" },
    { id: 17, avatar: "q", username: "Henry", joinDate: "2023-02-01", role: "User" },
    { id: 18, avatar: "r", username: "Chloe", joinDate: "2023-06-09", role: "Admin" },
    { id: 19, avatar: "s", username: "Daniel", joinDate: "2024-01-17", role: "User" },
    { id: 20, avatar: "t", username: "Lily", joinDate: "2024-05-25", role: "User" },
    { id: 21, avatar: "u", username: "Ella", joinDate: "2024-06-01", role: "User" },
    { id: 22, avatar: "v", username: "Logan", joinDate: "2024-06-12", role: "Moderator" },
    { id: 23, avatar: "w", username: "Grace", joinDate: "2024-06-20", role: "Admin" },
    { id: 24, avatar: "x", username: "Jack", joinDate: "2024-07-05", role: "User" },
    { id: 25, avatar: "y", username: "Aria", joinDate: "2024-07-15", role: "User" },
    { id: 26, avatar: "z", username: "Aiden", joinDate: "2024-07-22", role: "Moderator" },
    { id: 27, avatar: "aa", username: "Scarlett", joinDate: "2024-08-01", role: "Admin" },
    { id: 28, avatar: "bb", username: "Sebastian", joinDate: "2024-08-10", role: "User" },
    { id: 29, avatar: "cc", username: "Hannah", joinDate: "2024-08-18", role: "User" },
    { id: 30, avatar: "dd", username: "Mason", joinDate: "2024-08-25", role: "Moderator" },
    { id: 31, avatar: "ee", username: "Aurora", joinDate: "2024-09-01", role: "User" },
    { id: 32, avatar: "ff", username: "Elijah", joinDate: "2024-09-08", role: "User" },
    { id: 33, avatar: "gg", username: "Riley", joinDate: "2024-09-15", role: "Admin" },
    { id: 34, avatar: "hh", username: "Caleb", joinDate: "2024-09-22", role: "User" },
    { id: 35, avatar: "ii", username: "Zara", joinDate: "2024-09-30", role: "Moderator" },
    { id: 36, avatar: "jj", username: "Wyatt", joinDate: "2024-10-07", role: "User" },
    { id: 37, avatar: "kk", username: "Eva", joinDate: "2024-10-14", role: "User" },
    { id: 38, avatar: "ll", username: "Isaac", joinDate: "2024-10-20", role: "Admin" },
    { id: 39, avatar: "mm", username: "Penelope", joinDate: "2024-10-28", role: "User" },
    { id: 40, avatar: "nn", username: "Nathan", joinDate: "2024-11-03", role: "User" }
  ]);

  const [sortBy, setSortBy] = useState<"username" | "joinDate" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: "username" | "joinDate") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  //Function for sorting
  const filteredUsers = [...users]
    .filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) &&
      (selectedRole === "All" || user.role === selectedRole)
    )
    .sort((a, b) => {
      if (!sortBy) return 0;
      const valA = a[sortBy].toLowerCase?.() ?? a[sortBy];
      const valB = b[sortBy].toLowerCase?.() ?? b[sortBy];
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div className="min-h-screen flex flex-col bg-transparent items-center p-5 border-solid rounded-lg border-amber-50" >
      <div className="flex py-3 justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="Search Users..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-3 py-1 rounded" 
            suppressHydrationWarning
          />
        </div>
        <div className="p-2 hover:cursor-pointer" onClick={() => setIsFormOpen(true)}>
          <AddButton title="Add Member" />
        </div>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="relative bg-white dark:bg-gray-900 text-black dark:text-white w-full max-w-lg mx-auto rounded-lg p-8 shadow-lg">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-800 dark:hover:text-white hover:cursor-pointer"
              >
                <X />
              </button>

              <h2 className="text-2xl font-bold mb-6">Add New Member</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const joinDate = new Date().toISOString().split("T")[0];
                  const nextId = users.length + 1;

                  setUsers([
                    ...users,
                    {
                      id: nextId,
                      avatar: "",
                      username: newUser.username,
                      role: newUser.role,
                      joinDate,
                    },
                  ]);
                  setNewUser({ username: "", role: "" });
                  setIsFormOpen(false);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block mb-1 text-md font-medium">Username</label>
                  <input
                    type="text"
                    value={newUser.username}
                    onChange={(e) =>
                      setNewUser({ ...newUser, username: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-md font-medium">Role</label>
                  <input
                    type="text"
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700"
                  />
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded hover:cursor-pointer">
                  Add Member
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
      <div className="backdrop-blur-md bg-white/30 rounded-lg shadow-lg w-full max-w-4xl overflow-x-auto">
        <div className="min-w-[300x]"> {/* or more based on your columns */}
        <table className="w-full text-white">
          <thead className="justify-center items-center">
            <tr className="text-left text-sm font-semibold border-b border-white/20 items-center">
              <th className="py-3 px-3">Avatar</th>
              <th>
                <div
                  className="py-3 px-3 flex items-center gap-1 hover:cursor-pointer"
                  onClick={() => handleSort("username")}
                >
                  Username
                  <ArrowUpDown
                    className={`w-4 h-4 ${
                      sortBy === "username"
                        ? sortOrder === "asc"
                          ? "rotate-180 text-yellow-400"
                          : "text-yellow-400"
                        : "text-white/40"
                    } transition-transform`}
                  />
                </div>
              </th>

              <th>
                <div
                  className="py-3 px-3 flex items-center gap-1 hover:cursor-pointer"
                  onClick={() => handleSort("joinDate")}
                >
                  Join Date
                  <ArrowUpDown
                    className={`w-4 h-4 ${
                      sortBy === "joinDate"
                        ? sortOrder === "asc"
                          ? "rotate-180 text-yellow-400"
                          : "text-yellow-400"
                        : "text-white/40"
                    } transition-transform`}
                  />
                </div>
              </th>

              <th className="py-3 px-3"><DropdownMenu selected={selectedRole} 
                onSelect={(role) => {
                  setSelectedRole(role);
                  setCurrentPage(1);
                }} />
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="hover:bg-white/10 transition">
                <td className="py-3 px-3"><User /></td>
                <td className="py-3 px-3">{user.username}</td>
                <td className="py-3 px-3">{user.joinDate}</td>
                <td className="py-3 px-3">{user.role}</td>
              </tr>
            ))}

          </tbody>
        </table>
          </div>
            <div className="flex justify-center mt-4 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`px-3 py-1 rounded bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 hover:cursor-pointer`}
              >
                <ChevronLeft/>
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded hover:cursor-pointer ${
                    currentPage === i + 1 ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"
                  } hover:bg-yellow-600`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`px-3 py-1 rounded bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 hover:cursor-pointer`}
              >
                <ChevronRight/>
              </button>
            </div>
          </div>
        </div>
  )
}
