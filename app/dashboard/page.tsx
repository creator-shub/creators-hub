import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <div className="flex-1 p-8">

        <DashboardHeader />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-gray-400">Total Creators</h3>
            <p className="text-4xl font-bold mt-3 text-red-500">
              10,254
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-gray-400">AI Scripts</h3>
            <p className="text-4xl font-bold mt-3 text-green-400">
              2,148
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-gray-400">Videos Created</h3>
            <p className="text-4xl font-bold mt-3 text-blue-400">
              58K+
            </p>
          </div>

        </div>

        {/* Recent Activity + Quick Actions */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

          {/* Recent Activity */}
          <div className="xl:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>🎬 AI Script Generated</span>
                <span className="text-gray-500">2 min ago</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>🖼 Thumbnail Created</span>
                <span className="text-gray-500">15 min ago</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>📈 Analytics Updated</span>
                <span className="text-gray-500">1 hour ago</span>
              </div>

              <div className="flex justify-between">
                <span>🤖 AI Prompt Generated</span>
                <span className="text-gray-500">Today</span>
              </div>

            </div>

          </div>

          {/* Quick Actions */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="space-y-4">

              <button className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-red-500 transition text-left">
                <div className="text-3xl">🤖</div>
                <h3 className="text-lg font-bold mt-3">AI Script</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Generate video scripts instantly.
                </p>
              </button>

              <button className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-blue-500 transition text-left">
                <div className="text-3xl">🎨</div>
                <h3 className="text-lg font-bold mt-3">Thumbnail</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Create eye-catching thumbnails.
                </p>
              </button>

              <button className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-green-500 transition text-left">
                <div className="text-3xl">🎬</div>
                <h3 className="text-lg font-bold mt-3">Video Prompt</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Generate cinematic AI prompts.
                </p>
              </button>

              <button className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-purple-500 transition text-left">
                <div className="text-3xl">📊</div>
                <h3 className="text-lg font-bold mt-3">Analytics</h3>
                <p className="text-gray-400 text-sm mt-2">
                  View your creator insights.
                </p>
              </button>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}