import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  MdOutlineDashboard,
  MdFormatListBulleted,
  MdIntegrationInstructions,
} from "react-icons/md";
import images from "../assets";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <div
        className={`bg-[#427A76] flex flex-col w-64 fixed top-0 left-0 z-50 h-full transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:fixed md:translate-x-0 md:h-screen
`}
      >
        <div className="flex justify-center p-6">
          <img src={images.Logo} alt="Logo" className="w-28 h-auto" />
        </div>

        <div className="overflow-y-auto pr-2 pb-20 border-t border-gray-200 flex-1">
          <div className="pt-4 space-y-4">
            <Link
              onClick={() => setActiveMenu("menu1")}
              className={`px-6 flex items-center gap-2.5 font-medium transition-colors ${
                activeMenu === "menu1"
                  ? "text-[#F9B487] bg-[#174143]"
                  : "text-[#F5E5E1]"
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
                  activeMenu === "menu2"
                    ? "text-[#F9B487] bg-[#174143]"
                    : "text-[#F5E5E1]"
                } hover:text-[#F9B487]`}
              >
                <MdFormatListBulleted size={22} /> Menu 2{" "}
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </p>

              {isOpen && (
                <div className="ml-4 mt-2">
                  <Link
                    onClick={() => setActiveMenu("menu2-1")}
                    className={`flex items-center gap-2.5 px-6 transition-colors ${
                      activeMenu === "menu2-1"
                        ? "text-[#F9B487] bg-[#174143]"
                        : "text-[#F5E5E1]"
                    } hover:text-[#F9B487]`}
                    to="/menu2-1"
                  >
                    <MdIntegrationInstructions size={20} /> Menu 2-1
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#174143] px-4 py-3 border-t border-gray-200 mt-auto">
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
            <FiLogOut size={22} className="opacity-70" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
