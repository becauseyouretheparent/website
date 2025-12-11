import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Because You&rsquo;re The Parent</title>
        <meta
          name="description"
          content="Quick, eye-opening facts and tools to help parents understand the risks of kids and phones, social media, and online games."
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="max-w-2xl text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
            Coming soon
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Because You&rsquo;re The Parent
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            A data-driven guide to help parents understand how kids are really using
            phones, apps, and games — and what you can do about it.
          </p>
        </div>
      </main>
    </>
  );
}
