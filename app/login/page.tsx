export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-8">
          Login to your Creators Hub account.
        </p>

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

        <button className="w-full bg-red-600 hover:bg-red-700 transition rounded-xl py-3 font-bold">
          Login
        </button>
<div className="flex items-center my-6">
  <div className="flex-1 h-px bg-zinc-700"></div>

  <span className="px-4 text-gray-400 text-sm">
    OR
  </span>

  <div className="flex-1 h-px bg-zinc-700"></div>
</div>

<button className="w-full border border-zinc-700 hover:border-white rounded-xl py-3 font-semibold transition">
  Continue with Google
</button>

<button className="w-full border border-zinc-700 hover:border-white rounded-xl py-3 font-semibold mt-4 transition">
  Continue with GitHub
</button>

<p className="text-center text-gray-400 mt-6">
  Don't have an account?{" "}
  <a href="/signup" className="text-red-500 hover:underline">
    Sign Up
  </a>
</p>
      </div>
    </main>
  );
}