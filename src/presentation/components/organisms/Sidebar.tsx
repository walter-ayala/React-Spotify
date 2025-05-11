import { useState } from "react";
import { Home, Search, Library } from "lucide-react";
import clsx from "clsx";
import { homeStrings } from "../../strings";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={clsx("bg-black text-white transition-all duration-300", collapsed ? "w-20" : "w-64")}>
      <div className="flex justify-between items-center p-4">
        <h2 className={clsx("text-xl font-bold", collapsed && "hidden")}>{homeStrings.spotify}</h2>
        <button onClick={() => setCollapsed(!collapsed)}>☰</button>
      </div>
      <nav className="flex flex-col gap-4 p-4">
        <a href="#" className="flex items-center gap-2">
          <Home size={20} />
          {!collapsed && <span>{homeStrings.home}</span>}
        </a>
        <a href="#" className="flex items-center gap-2">
          <Search size={20} />
          {!collapsed && <span>{homeStrings.search}</span>}
        </a>
        <a href="#" className="flex items-center gap-2">
          <Library size={20} />
          {!collapsed && <span>{homeStrings.library}</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
