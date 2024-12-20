import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiSearch, FiBook, FiHeart } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-64 flex-col justify-between border-r-4 border-green-500 bg-white shadow-lg">
      {/* Bookshelf Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          <span>My</span>{" "}
          <span className="font-medium text-orange-500">Book</span>
        </h1>
        <h1 className="text-2xl font-bold text-gray-800">Shelf</h1>
      </div>

      {/* Links */}
      <nav className="flex-1 space-y-4 p-4 text-gray-600">
        <Link to="/" className="flex items-center gap-3 hover:text-orange-500">
          <FiHome size={20} /> Home
        </Link>
        <Link to="/search" className="flex items-center gap-3 hover:text-orange-500">
          <FiSearch size={20} /> Search
        </Link>
        <Link to="/my-shelf" className="flex items-center gap-3 hover:text-orange-500">
          <FiBook size={20} /> My Shelf
        </Link>
        <Link to="/favourite" className="flex items-center gap-3 hover:text-orange-500">
          <FiHeart size={20} /> Favourite
        </Link>
      </nav>

      {/* Footer */}
      <div className="space-y-2 border-t border-gray-200 p-4 text-sm text-gray-500">
        <Link to="/about" className="block hover:text-orange-500">About</Link>
        <Link to="/support" className="block hover:text-orange-500">Support</Link>
        <Link to="/terms" className="block hover:text-orange-500">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Sidebar;