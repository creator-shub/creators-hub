export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 lg:px-12 py-5 bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center gap-3">

  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-xl">
    CH
  </div>

  <div>
    <h1 className="text-2xl font-bold text-white">
      Creators Hub
    </h1>

    <p className="text-xs text-gray-400">
      Build. Grow. Monetize.
    </p>
  </div>

</div>

      <div className="hidden md:flex items-center gap-8 text-lg font-medium">
        <a
  href="#"
  className="transition hover:text-red-500 hover:scale-105"
>
  Home
</a>
        <a
  href="#"
  className="transition hover:text-red-500 hover:scale-105"
>
  Features
</a>
        <a
  href="#"
  className="transition hover:text-red-500 hover:scale-105"
>
  Community
</a>
        <a
  href="#"
  className="transition hover:text-red-500 hover:scale-105"
>
  About
</a>
      </div>

      <div className="flex gap-3">

  <button className="px-5 py-2 rounded-lg border border-zinc-700 hover:border-red-500 hover:text-red-500 transition duration-300">
  Login
</button>

  <button className="px-6 py-2 rounded-lg bg-red-600 font-semibold hover:bg-red-700 hover:scale-105 transition duration-300">
  Join Free
</button>
</div>
    </nav>
  );
}