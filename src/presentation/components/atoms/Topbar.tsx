const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/40 to-transparent sticky top-0 z-10">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#2A2A2A] text-white rounded-full px-4 py-2 w-64 focus:outline-none"
      />
      <div className="flex items-center space-x-4">
        <button className="text-sm font-semibold hover:text-green-500">
          Sign up
        </button>
        <button className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-full hover:scale-105 transition">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Topbar;
