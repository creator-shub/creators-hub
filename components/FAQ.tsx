export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Everything you need to know about Creators Hub.
        </p>

        <div className="space-y-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Is Creators Hub free?
            </h3>

            <p className="text-gray-400">
              Yes. You can join for free and access core features.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Which platforms are supported?
            </h3>

            <p className="text-gray-400">
              YouTube, TikTok, Facebook and Instagram.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Can I join today?
            </h3>

            <p className="text-gray-400">
              Absolutely! Click the Join Free button and create your account.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}