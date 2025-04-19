const Card = () => {
  return (
    <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition duration-300 cursor-pointer">
      <div className="aspect-square bg-gray-600 rounded mb-4" />
      <h3 className="text-white font-semibold">Playlist Title</h3>
      <p className="text-sm text-gray-400">Playlist description</p>
    </div>
  );
};

export default Card;
