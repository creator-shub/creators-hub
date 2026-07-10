export default function Platforms() {
  return (
    <section className="py-20 bg-zinc-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Supported Platforms
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Join creators from the world's biggest social media platforms.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  <div className="bg-red-600 rounded-2xl p-8 text-center hover:scale-105 transition">
    <div className="text-5xl mb-4">📺</div>
    <h3 className="text-2xl font-bold">YouTube</h3>
  </div>

  <div className="bg-black border border-gray-700 rounded-2xl p-8 text-center hover:scale-105 transition">
    <div className="text-5xl mb-4">🎵</div>
    <h3 className="text-2xl font-bold">TikTok</h3>
  </div>

  <div className="bg-blue-600 rounded-2xl p-8 text-center hover:scale-105 transition">
    <div className="text-5xl mb-4">📘</div>
    <h3 className="text-2xl font-bold">Facebook</h3>
  </div>

  <div className="bg-pink-600 rounded-2xl p-8 text-center hover:scale-105 transition">
    <div className="text-5xl mb-4">📷</div>
    <h3 className="text-2xl font-bold">Instagram</h3>
  </div>

</div>

      </div>

    </section>
  );
}