export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

  <h2 className="text-2xl font-bold mb-6">
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
        <span>Instagram</span>
        <span className="text-purple-500">91%</span>
      </div>

      <div className="w-full h-3 bg-zinc-800 rounded-full">
        <div className="w-[91%] h-3 bg-purple-500 rounded-full"></div>
      </div>
    </div>

  </div>

</div>
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

      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10 leading-8">
        Everything you need to build your audience, grow your brand, and monetize your content — all in one powerful platform.
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
      <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">

  <h3 className="text-2xl font-bold mb-6">
    Creator Dashboard
  </h3>

  <div className="space-y-4">

    <div className="flex justify-between">
      <span>YouTube Growth</span>
      <span className="text-red-500 font-bold">+245%</span>
    </div>

    <div className="flex justify-between">
      <span>TikTok Views</span>
      <span className="text-green-400 font-bold">12.8M</span>
    </div>

    <div className="flex justify-between">
      <span>Facebook Reach</span>
      <span className="text-blue-400 font-bold">890K</span>
    </div>

    <div className="flex justify-between">
      <span>Instagram Followers</span>
      <span className="text-pink-400 font-bold">156K</span>
    </div>

  </div>

</div>
      </div>

    </section>
  );
}