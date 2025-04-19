import Section from "../components/molecules/Section";
import Sidebar from "../components/organisms/Sidebar";
import Topbar from "../components/atoms/Topbar";

const Home = () => {
  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Topbar />
        <div className="p-6 space-y-8">
          <Section title="Recently played" />
          <Section title="Made For You" />
          <Section title="Your top mixes" />
        </div>
      </div>
    </div>
  );
};

export default Home;
