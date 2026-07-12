import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <div className="flex-1 overflow-y-auto">

        <DashboardHeader />

        <div className="max-w-7xl mx-auto px-8 py-8">

          {/* Hero */}

          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 p-10">

            <span className="inline-flex items-center rounded-full bg-red-600/20 border border-red-600 px-4 py-2 text-red-500 font-semibold">
              Powered by Guru AI
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
              Welcome Back 👋
            </h1>

            <p className="mt-5 max-w-3xl text-gray-400 text-lg leading-8">
              Welcome to AI Studio.
              Simply describe your idea and Guru AI will generate
              professional scripts, prompts, thumbnails, SEO and
              complete creator workflows.
            </p>

            <div className="mt-10">

              <textarea
                rows={6}
                placeholder="Describe your idea...

Example:
Create a realistic football documentary with cinematic Veo prompts, thumbnail prompt, image prompts, voiceover script and YouTube SEO."
                className="w-full rounded-3xl bg-black border border-zinc-700 p-6 outline-none focus:border-red-500 resize-none"
              />

              <div className="flex flex-wrap gap-4 mt-6">

                <button className="bg-red-600 hover:bg-red-700 transition px-10 py-4 rounded-2xl font-bold">
                  ✨ Ask Guru AI
                </button>

                <button className="border border-zinc-700 hover:border-white transition px-10 py-4 rounded-2xl">
                  Browse Templates
                </button>

              </div>

            </div>

          </div>

          {/* Popular Studios */}

          <div className="mt-14">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">
                Popular Studios
              </h2>

              <button className="text-red-500 hover:text-red-400">
                View All →
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition cursor-pointer">

                <div className="text-5xl">
                  🎬
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Video Studio
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Create Text to Video, Image to Video,
                  Storyboards and cinematic prompts.
                </p>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition cursor-pointer">

                <div className="text-5xl">
                  🖼️
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Image Studio
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Generate AI images,
                  edit photos,
                  upscale and build FLUX prompts.
                </p>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition cursor-pointer">

                <div className="text-5xl">
                  📝
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Script Studio
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Create YouTube,
                  Documentary,
                  Shorts and Commercial scripts.
                </p>

              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition cursor-pointer">

                <div className="text-5xl">
                  🎨
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Thumbnail Studio
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Generate high-converting thumbnail ideas,
                  AI prompts and professional thumbnail concepts.
                </p>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500 transition cursor-pointer">

                <div className="text-5xl">
                  🎤
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Voice Studio
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Create voiceover scripts,
                  AI voice prompts and narration workflows.
                </p>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition cursor-pointer">

                <div className="text-5xl">
                  📈
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  SEO Studio
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  Generate titles,
                  descriptions,
                  hashtags and keyword strategies.
                </p>

              </div>

            </div>

          </div>

          {/* Continue Working */}

          <div className="mt-16">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">
                Continue Working
              </h2>

              <button className="text-red-500 hover:text-red-400">
                View All →
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-red-500 transition cursor-pointer">

                <h3 className="text-xl font-bold">
                  Tarzan Movie
                </h3>

                <p className="text-gray-400 mt-3">
                  Last edited 20 minutes ago
                </p>

                <button className="mt-6 text-red-500 font-semibold">
                  Continue →
                </button>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-blue-500 transition cursor-pointer">

                <h3 className="text-xl font-bold">
                  Football Documentary
                </h3>

                <p className="text-gray-400 mt-3">
                  Yesterday
                </p>

                <button className="mt-6 text-blue-500 font-semibold">
                  Continue →
                </button>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-green-500 transition cursor-pointer">

                <h3 className="text-xl font-bold">
                  Luxury Fashion Ad
                </h3>

                <p className="text-gray-400 mt-3">
                  2 days ago
                </p>

                <button className="mt-6 text-green-500 font-semibold">
                  Continue →
                </button>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-purple-500 transition cursor-pointer">

                <h3 className="text-xl font-bold">
                  Skeleton Cooking
                </h3>

                <p className="text-gray-400 mt-3">
                  Last week
                </p>

                <button className="mt-6 text-purple-500 font-semibold">
                  Continue →
                </button>

              </div>

            </div>

          </div>
          {/* Guru AI Suggestions */}

          <div className="mt-16">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                  🤖 Suggested by Guru AI
                </h2>

                <button className="text-red-500 hover:text-red-400">
                  View More →
                </button>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <button className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-red-500 transition text-left">

                  <h3 className="text-xl font-bold">
                    Create a Viral YouTube Script
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Generate a complete YouTube script with title,
                    hook, storytelling and call to action.
                  </p>

                </button>

                <button className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition text-left">

                  <h3 className="text-xl font-bold">
                    Generate Cinematic Veo Prompt
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Create production-ready cinematic prompts for AI
                    video generation.
                  </p>

                </button>

                <button className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-green-500 transition text-left">

                  <h3 className="text-xl font-bold">
                    Build Thumbnail Prompt
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Design high CTR thumbnail prompts for YouTube.
                  </p>

                </button>

                <button className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 transition text-left">

                  <h3 className="text-xl font-bold">
                    Complete Content Workflow
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Generate script, prompts, thumbnails,
                    SEO and publishing strategy together.
                  </p>

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Guru AI */}

      <button className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 transition px-6 py-4 rounded-full shadow-2xl font-bold text-white z-50">
        🤖 Guru AI
      </button>

    </main>
  );
}