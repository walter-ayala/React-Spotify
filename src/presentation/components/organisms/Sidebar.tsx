import { useState } from "react";
import { Home, Search, Library } from "lucide-react";
import clsx from "clsx";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={clsx("bg-black text-white transition-all duration-300", collapsed ? "w-20" : "w-64")}>
      <div className="flex justify-between items-center p-4">
        <h2 className={clsx("text-xl font-bold", collapsed && "hidden")}>Spotify</h2>
        <button onClick={() => setCollapsed(!collapsed)}>☰</button>
      </div>
      <nav className="flex flex-col gap-4 p-4">
        <a href="#" className="flex items-center gap-2">
          <Home size={20} />
          {!collapsed && <span>Inicio</span>}
        </a>
        <a href="#" className="flex items-center gap-2">
          <Search size={20} />
          {!collapsed && <span>Buscar</span>}
        </a>
        <a href="#" className="flex items-center gap-2">
          <Library size={20} />
          {!collapsed && <span>Tu Biblioteca</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
