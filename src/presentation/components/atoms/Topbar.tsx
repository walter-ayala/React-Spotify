const TopBar = () => {
    return (
      <div className="flex items-center justify-between bg-[#121212] p-4">
        <input
          type="text"
          placeholder="¿Qué quieres reproducir?"
          className="bg-[#242424] text-white px-4 py-2 rounded-full w-full max-w-md"
        />
      </div>
    );
  };
  
  export default TopBar;
  