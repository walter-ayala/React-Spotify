import { PropsWithChildren } from "react";
import { Sidebar } from "../organisms";
import { TopBar } from "../atoms";
import { FooterPlayer } from "../molecules";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
        <FooterPlayer />
      </div>
    </div>
  );
};

export default MainLayout;
