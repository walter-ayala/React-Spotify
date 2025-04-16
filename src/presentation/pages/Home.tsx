const Home = () => {
  return (
    <div className="min-h-screen bg-spotify-background text-text p-6">
      <h1 className="text-3xl font-bold">Spotify Clone 🎵</h1>
      <p className="text-subtext mt-2">Home screen 😎</p>

      <button className="mt-4 px-4 py-2 bg-green text-black font-semibold rounded">
        {import.meta.env.MODE}
      </button>
    </div>
  );
};

export default Home;
