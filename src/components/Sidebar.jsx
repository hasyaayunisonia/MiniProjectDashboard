import { useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-64 bg-pink-200 border-r h-screen p-6 space-y-6">
      <img src={images.Logo} alt="Logo" className="w-32 h-auto" />

      <div>
        <Link className="text-blue-500 hover:underline" to="/">
          Menu 1
        </Link>
      </div>

      <div>
        <p
          className="cursor-pointer font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu 2 ▼
        </p>

        {isOpen && (
          <div className="ml-4 mt-2">
            <Link className="text-blue-500 hover:underline" to="/menu2-1">
              Menu 2-1
            </Link>
          </div>
        )}
      </div>

      <button className="mt-40 px-4 py-2 bg-red-500 text-white rounded-lg">
        Sign Out
      </button>
    </div>
  );
}
