export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-3xl font-bold text-red-500">
        Creators Hub
      </h1>

      <div className="hidden md:flex gap-8 text-lg">
        <a href="#" className="hover:text-red-500 transition">
          Home
        </a>
        <a href="#" className="hover:text-red-500 transition">
          Features
        </a>
        <a href="#" className="hover:text-red-500 transition">
          Community
        </a>
        <a href="#" className="hover:text-red-500 transition">
          Contact
        </a>
      </div>

      <button className="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700 transition">
        Login
      </button>
    </nav>
  );
}