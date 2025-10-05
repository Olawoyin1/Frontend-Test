


import { useState, useEffect, useRef } from "react";
import { FiSearch, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-6 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="text-2xl font-bold">Travelsy</div>

        {/* CENTER/RIGHT: Nav Links + Actions (Desktop) */}
        <div className="hidden lg:flex items-center space-x-20">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-[#FF5200] transition">Camping Locations</a>
            <a href="#" className="text-gray-700 hover:text-[#FF5200] transition">Activities</a>
            <a href="#" className="text-gray-700 hover:text-[#FF5200] transition">Equipment</a>
            <a href="#" className="text-gray-700 hover:text-[#FF5200] transition">Blogs</a>
          </div>

          <div className="flex items-center space-x-2 relative">
            {/* CTA Button */}
            <button className="px-5 py-2 bg-[#FF5200] text-white flex items-center gap-2 rounded-full hover:bg-blue-700 transition cursor-pointer">
              <FaRegBookmark />
              Reservations
            </button>

            {/* Search Icon */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <FiSearch size={20} className="text-gray-600" />
            </button>

            {/* Profile Section */}
<div className="relative">
  <div
    ref={dropdownRef}
    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-full transition select-none"
    onClick={() => setDropdownOpen((prev) => !prev)}
  >
    <img
      src="../../Images/profile.png"
      alt="Profile"
      className="w-10 h-10 rounded-full border flex-shrink-0"
    />
    <span className="h-3 w-3 rounded-full bg-[#FF5200] absolute top-1 right-6"></span>
    <FiChevronDown
      className={`text-gray-600 transition-transform duration-300 ${
        dropdownOpen ? "rotate-180" : ""
      }`}
    />
  </div>

  {/* ✅ Fixed dropdown — absolute, no layout shift */}
  {dropdownOpen && (
    <div
      className="absolute right-0 mt-5.5 w-48 bg-white  py-2 border border-gray-200 z-50"
    >
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
      >
        My Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
      >
        My Bookings
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
      >
        Settings
      </a>
      <button
        className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 transition"
        onClick={() => alert("Logged out!")}
      >
        Logout
      </button>
    </div>
  )}
</div>

          </div>
        </div>

        {/* MOBILE: Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white border-b border-gray-300 shadow-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center mb-4 space-y-5 py-6">
          <a href="#" className="text-gray-700 hover:text-[#FF5200] transition">Camping Locations</a>
          <a href="#" className="text-gray-700 hover:text-[#FF5200] transition">Activities</a>
          <a href="#" className="text-gray-700 hover:text-[#FF5200] transition">Equipment</a>
          <a href="#" className="text-gray-700 hover:text-[#FF5200] transition">Blogs</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
