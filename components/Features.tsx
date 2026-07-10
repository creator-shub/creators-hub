export default function Features() {
  return (
    <section className="py-20 px-6 bg-gray-950">

      <h2 className="text-4xl font-bold text-center mb-14 text-white">
        Why Join Creators Hub?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-red-500 mb-3">
            🚀 Grow Faster
          </h3>
          <p className="text-gray-300">
            Learn from other creators and improve your content with valuable feedback.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-blue-500 mb-3">
            🤝 Strong Community
          </h3>
          <p className="text-gray-300">
            Connect with creators from different social media platforms.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-pink-500 mb-3">
            🤖 AI Resources
          </h3>
          <p className="text-gray-300">
            Access AI tools, prompts, workflows and creator resources.
          </p>
        </div>

      </div>

    </section>
  );
}