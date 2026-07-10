export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24">

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4">
        CREATORS HUB
      </h1>

      <p className="text-2xl text-gray-300 mb-6">
         Build. Grow. Monetize.
      </p>

      <p className="max-w-2xl text-gray-400 mb-10">
        Learn, grow and connect with creators from YouTube, TikTok, Facebook and Instagram — all in one powerful platform.
      </p>

      <div className="flex justify-center gap-4 flex-wrap mb-10">
        <span className="bg-red-600 px-4 py-2 rounded-full">📺 YouTube</span>
        <span className="bg-black border border-gray-500 px-4 py-2 rounded-full">🎵 TikTok</span>
        <span className="bg-blue-600 px-4 py-2 rounded-full">📘 Facebook</span>
        <span className="bg-pink-600 px-4 py-2 rounded-full">📷 Instagram</span>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl text-xl font-bold">
          Join Free
        </button>

        <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl text-xl font-bold">
          Watch Demo
        </button>
      </div>

    </section>
  );
}