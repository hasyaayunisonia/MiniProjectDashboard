import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Menu1 from "./pages/Menu1/index.jsx";
import Menu21 from "./pages/Menu21/index.jsx";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex md:ml-64">
        <button
          className="md:hidden fixed top-4 left-4 z-50 text-gray-700"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? null : <FiMenu size={28} />}
        </button>

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Menu1 />} />
            <Route path="/menu2-1" element={<Menu21 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
