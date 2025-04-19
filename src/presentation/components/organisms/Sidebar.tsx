const Sidebar = () => {
  return (
    <div className="w-64 bg-[#000] p-6 space-y-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Spotify</h1>
      <nav className="space-y-3">
        <a href="#" className="hover:text-green-500">
          Home
        </a>
        <a href="#" className="hover:text-green-500">
          Search
        </a>
        <a href="#" className="hover:text-green-500">
          Your Library
        </a>
      </nav>
      <hr className="border-t border-gray-700 my-4" />
      <div className="text-sm text-gray-400 space-y-2">
        <p>Playlist 1</p>
        <p>Playlist 2</p>
        <p>Playlist 3</p>
      </div>
    </div>
  );
};

export default Sidebar;
