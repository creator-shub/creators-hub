export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          What Creators Say
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Trusted by creators around the world.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-red-500 transition">
            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 mb-6">
              "Creators Hub completely changed my YouTube workflow. Everything I need is in one place."
            </p>

            <h3 className="font-bold">
              Ali Khan
            </h3>

            <span className="text-gray-500">
              YouTube Creator
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition">
            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 mb-6">
              "The AI tools saved me hours every week. Highly recommended!"
            </p>

            <h3 className="font-bold">
              Sarah Ahmed
            </h3>

            <span className="text-gray-500">
              Content Creator
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition">
            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 mb-6">
              "Best platform for creators. Clean design and amazing experience."
            </p>

            <h3 className="font-bold">
              Ahmed Raza
            </h3>

            <span className="text-gray-500">
              TikTok Creator
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}