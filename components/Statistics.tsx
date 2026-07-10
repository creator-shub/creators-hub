export default function Statistics() {
  return (
    <section className="bg-black py-20">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-5xl font-bold text-red-500">10K+</h2>
          <p className="text-gray-400 mt-2">Creators</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-blue-500">50K+</h2>
          <p className="text-gray-400 mt-2">Videos Shared</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-pink-500">120+</h2>
          <p className="text-gray-400 mt-2">Countries</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-green-500">24/7</h2>
          <p className="text-gray-400 mt-2">Community Support</p>
        </div>

      </div>

    </section>
  );
}