export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl font-bold text-red-500">
          Creators Hub
        </h2>

        <p className="text-gray-400 mt-3">
          One Platform. Every Creator.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="hover:text-red-500">YouTube</a>
          <a href="#" className="hover:text-pink-500">Instagram</a>
          <a href="#" className="hover:text-blue-500">Facebook</a>
          <a href="#" className="hover:text-white">TikTok</a>
        </div>

        <p className="text-gray-600 mt-8 text-sm">
          © 2026 Creators Hub. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}