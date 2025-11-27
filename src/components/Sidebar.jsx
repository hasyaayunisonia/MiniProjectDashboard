import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdOutlineDashboard, MdFormatListBulleted } from "react-icons/md";

import images from "../assets";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="w-64 bg-[#427A76] flex flex-col relative">
      <div className="flex justify-center p-6">
        <img src={images.Logo} alt="Logo" className="w-28 h-auto" />
      </div>

      <div className="overflow-y-auto pr-2 pb-20 border-t border-gray-200">
        <div className="pt-4 space-y-4">
          <Link
            onClick={() => setActiveMenu("menu1")}
            className={`px-6 flex items-center gap-2.5 font-medium transition-colors ${
              activeMenu === "menu1" ? "text-[#F9B487]" : "text-[#F5E5E1]"
            } hover:text-[#F9B487]`}
            to="/"
          >
            <MdOutlineDashboard size={22} /> Menu 1
          </Link>

          <div>
            <p
              onClick={() => {
                setIsOpen(!isOpen);
                setActiveMenu("menu2");
              }}
              className={`px-6 cursor-pointer font-medium flex items-center gap-2.5 transition-colors ${
                activeMenu === "menu2" ? "text-[#F9B487]" : "text-[#F5E5E1]"
              } hover:text-[#F9B487]`}
            >
              <MdFormatListBulleted size={22} /> Menu 2{" "}
              {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </p>

            {isOpen && (
              <div className="ml-4 mt-2">
                <Link
                  onClick={() => setActiveMenu("menu2-1")}
                  className={`px-6 block transition-colors ${
                    activeMenu === "menu2-1"
                      ? "text-[#F9B487]"
                      : "text-[#F5E5E1]"
                  } hover:text-[#F9B487]`}
                  to="/menu2-1"
                >
                  Menu 2-1
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="
    absolute bottom-0 inset-x-0 w-full
    bg-[#174143] px-4 py-3 border-t border-gray-200 z-10
    md:fixed md:left-0 md:w-64
  "
      >
        <button
          className="
      w-full 
      py-3
      bg-transparent
      text-white/70       
      rounded-md
      flex 
      items-center 
      justify-center 
      gap-2 
      text-lg
      font-semibold
      hover:text-white         
      transition-colors        
    "
        >
          <FiLogOut size={22} className="opacity-70 group-hover:opacity-100" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
