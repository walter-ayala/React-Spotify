import { PropsWithChildren } from "react";
import Sidebar from "../organisms/Sidebar";
import Topbar from "../atoms/Topbar";
import FooterPlayer from "../molecules/FooterPlayer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
        <FooterPlayer />
      </div>
    </div>
  );
};

export default MainLayout;
