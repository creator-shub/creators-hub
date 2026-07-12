export default function AIStudioPage() {
  const studios = [
    {
      title: "Video Studio",
      description: "Create AI videos, image-to-video, storyboards and cinematic prompts.",
      icon: "🎬",
    },
    {
      title: "Image Studio",
      description: "Generate AI images, edit photos and create FLUX prompts.",
      icon: "🖼️",
    },
    {
      title: "Script Studio",
      description: "Generate YouTube, TikTok, documentary and commercial scripts.",
      icon: "📝",
    },
    {
      title: "Thumbnail Studio",
      description: "Create powerful thumbnail ideas and AI thumbnail prompts.",
      icon: "🎨",
    },
    {
      title: "Voice Studio",
      description: "Generate voiceover scripts and AI voice prompts.",
      icon: "🎤",
    },
    {
      title: "SEO Studio",
      description: "Generate titles, descriptions, hashtags and keywords.",
      icon: "📈",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Hero */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <p className="text-red-500 font-semibold mb-4">
            Powered by Guru AI
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to AI Studio
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl text-lg">
            Describe your idea once.
            Guru AI will help you generate scripts,
            prompts, thumbnails, SEO and complete creator workflows.
          </p>

          <textarea
            rows={5}
            placeholder="Example: Create a realistic football documentary with cinematic Veo prompts, image prompts, voiceover script and YouTube SEO..."
            className="w-full mt-8 rounded-2xl bg-black border border-zinc-700 p-5 outline-none focus:border-red-500 resize-none"
          />

          <button className="mt-6 bg-red-600 hover:bg-red-700 transition px-10 py-4 rounded-2xl font-bold">
            ✨ Ask Guru AI
          </button>

        </div>

        {/* Studios */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-8">
            AI Studios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {studios.map((studio) => (

              <div
                key={studio.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition duration-300 cursor-pointer"
              >

                <div className="text-5xl">
                  {studio.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {studio.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {studio.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Guru AI Floating Button */}

      <button className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 transition px-6 py-4 rounded-full shadow-2xl font-bold">
        🤖 Guru AI
      </button>

    </main>
  );
}