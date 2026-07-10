export default function Login() {
  return (
    <section className="py-24 bg-zinc-950 text-white">

      <div className="max-w-md mx-auto bg-zinc-900 rounded-2xl p-8 shadow-2xl">

        <h2 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-400 mb-8">
          Login to your Creators Hub account.
        </p>
        <form className="space-y-5">

  <input
    type="email"
    placeholder="Email Address"
    className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-red-500"
  />

  <input
    type="password"
    placeholder="Password"
    className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-red-500"
  />

</form>

      </div>

    </section>
  );
}