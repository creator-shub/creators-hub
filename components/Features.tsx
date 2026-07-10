export default function Features() {
  const features = [
    {
      title: "YouTube Growth",
      description: "Learn advanced strategies to grow your YouTube channel faster.",
      icon: "📺",
    },
    {
      title: "AI Tools",
      description: "Generate scripts, titles, hashtags and thumbnails with AI.",
      icon: "🤖",
    },
    {
      title: "Creator Community",
      description: "Connect with thousands of creators around the world.",
      icon: "🌍",
    },
    {
      title: "Monetization",
      description: "Discover new ways to earn from your content.",
      icon: "💰",
    },
    {
      title: "Analytics",
      description: "Track your growth with powerful creator insights.",
      icon: "📊",
    },
    {
      title: "Learning Hub",
      description: "Access premium courses, guides and creator resources.",
      icon: "🎓",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Why Join Creators Hub?
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Everything a creator needs in one powerful platform.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 hover:bg-red-600 transition duration-300"
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-300">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}