function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-pulse" style={{ textShadow: "0 0 10px #00fff0, 0 0 20px #00fff0" }}>
        WaizToon
      </h1>
      <p className="text-lg md:text-2xl bg-black/30 rounded-xl px-6 py-4 backdrop-blur-sm border border-purple-400 shadow-lg">
        The new home for free Movies, Anime, Web Series. <br />
        <span className="text-[#00fff0] font-semibold">Coming Soon!</span>
      </p>
    </div>
  );
}

export default App;
