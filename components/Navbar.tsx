"use client";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl text-white"
>
  {menuOpen ? "✕" : "☰"}
</button>
      <div className="flex gap-3">

  <Link
  href="/login"
  className="px-5 py-2 rounded-lg border border-zinc-700 hover:border-red-500 hover:text-red-500 transition duration-300"
>
  Login
</Link>

  <Link
  href="/signup"
  className="px-6 py-2 rounded-lg bg-red-600 font-semibold hover:bg-red-700 hover:scale-105 transition duration-300"
>
  Join Free
</Link>
</div>
{menuOpen && (
  <div className="md:hidden mt-4 bg-zinc-900 rounded-xl p-6 space-y-4">

    <a href="#" className="block hover:text-red-500 transition">
      Home
    </a>

    <a href="#" className="block hover:text-red-500 transition">
      Features
    </a>

    <a href="#" className="block hover:text-red-500 transition">
      Community
    </a>

    <a href="#" className="block hover:text-red-500 transition">
      About
    </a>

    <button className="w-full border border-zinc-700 py-3 rounded-lg hover:border-red-500 transition">
      Login
    </button>

    <button className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700 transition">
      Join Free
    </button>

  </div>
)}
    </nav>
  );
}