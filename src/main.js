import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen bg-slate-100 px-6 py-12 text-slate-800">
    <div class="mx-auto max-w-5xl">
      <header class="mb-10">
        <p class="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Week 3 · Workshop 2
        </p>
        <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Tailwind Component Library
        </h1>
        <p class="mt-3 max-w-2xl text-slate-600">
          Reusable UI components built with Tailwind CSS utilities.
        </p>
      </header>

      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-bold">Buttons</h2>
        <p class="mt-2 text-sm text-slate-500">
          Primary, secondary and outline variants.
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-4">
          <button class="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 active:scale-95">
            Primary
          </button>

          <button class="rounded-lg bg-slate-200 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-300 focus:outline-2 focus:outline-offset-2 focus:outline-slate-500 active:scale-95">
            Secondary
          </button>

          <button class="rounded-lg border border-blue-600 px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 active:scale-95">
            Outline
          </button>

          <button disabled class="cursor-not-allowed rounded-lg bg-blue-300 px-5 py-3 font-semibold text-white opacity-60">
            Disabled
          </button>
        </div>
      </section>
    </div>
  </main>
`;