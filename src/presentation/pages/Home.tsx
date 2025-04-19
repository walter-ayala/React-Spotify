import MainLayout from "../components/templates/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Viernes de lanzamientos</h1>
      <div className="grid grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-[#181818] p-4 rounded-md hover:bg-[#282828]">
            <div className="h-40 bg-gray-600 rounded-md mb-2" />
            <p className="text-white font-semibold">Nombre Playlist</p>
            <p className="text-sm text-gray-400">Descripción</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Home;
