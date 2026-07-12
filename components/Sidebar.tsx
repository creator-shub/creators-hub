import Link from "next/link";
import {
  House,
  Bot,
  Clapperboard,
  Image,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 min-h-screen p-6">

      <h2 className="text-2xl font-bold text-red-500 mb-10">
        Creators Hub
      </h2>

      <nav className="space-y-2">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl bg-red-600 text-white font-semibold"
        >
          <House size={20} />
          Dashboard
        </Link>

        <Link
          href="/dashboard/ai-tools"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          <Bot size={20} />
          AI Tools
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          <Clapperboard size={20} />
          Scripts
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          <Image size={20} />
          Thumbnails
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          <BarChart3 size={20} />
          Analytics
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          <Settings size={20} />
          Settings
        </Link>

      </nav>

    </aside>
  );
}