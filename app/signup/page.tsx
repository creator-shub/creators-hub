import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white mb-2">
          Join Creators Hub
        </h1>

        <p className="text-gray-400 mb-8">
          Create your free account.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 mb-4 text-white outline-none focus:border-red-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 mb-4 text-white outline-none focus:border-red-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 mb-6 text-white outline-none focus:border-red-500"
        />

        <button className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-3 font-bold transition">
          Create Account
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}