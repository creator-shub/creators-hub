export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="text-center lg:text-left">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            CREATORS HUB
          </h1>

          <p className="text-2xl text-gray-300 mb-6">
            Build.
            <br />
            Grow.
            <br />
            Monetize.
          </p>

          <p className="text-lg text-gray-400 leading-8 mb-10">
            Everything you need to build your audience, grow your brand,
            and monetize your content — all in one powerful platform.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">

  <img
    src="https://cdn.simpleicons.org/youtube/FF0000"
    alt="YouTube"
    className="w-10 h-10"
  />

  <img
    src="https://cdn.simpleicons.org/tiktok/ffffff"
    alt="TikTok"
    className="w-10 h-10"
  />

  <img
    src="https://cdn.simpleicons.org/facebook/1877F2"
    alt="Facebook"
    className="w-10 h-10"
  />

  <img
    src="https://cdn.simpleicons.org/instagram/E4405F"
    alt="Instagram"
    className="w-10 h-10"
  />

</div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition">
              Join Free
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-bold transition">
              Watch Demo
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-2xl font-bold mb-8">
            Creator Dashboard
          </h2>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between mb-2">
                <span>YouTube Growth</span>
                <span className="text-red-500">95%</span>
              </div>

              <div className="w-full h-3 bg-zinc-800 rounded-full">
                <div className="w-[95%] h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>TikTok Reach</span>
                <span className="text-pink-500">88%</span>
              </div>

              <div className="w-full h-3 bg-zinc-800 rounded-full">
                <div className="w-[88%] h-3 bg-pink-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Facebook Growth</span>
                <span className="text-blue-500">82%</span>
              </div>

              <div className="w-full h-3 bg-zinc-800 rounded-full">
                <div className="w-[82%] h-3 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Instagram Growth</span>
                <span className="text-purple-500">91%</span>
              </div>

              <div className="w-full h-3 bg-zinc-800 rounded-full">
                <div className="w-[91%] h-3 bg-purple-500 rounded-full"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}