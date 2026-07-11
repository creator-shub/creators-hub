export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div>
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Here's what's happening today.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 outline-none focus:border-red-500"
        />

        <button className="bg-zinc-900 p-3 rounded-xl hover:bg-zinc-800 transition">
          🔔
        </button>

        <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center font-bold">
          H
        </div>

      </div>

    </div>
  );
}