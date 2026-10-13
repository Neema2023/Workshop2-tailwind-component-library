import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen bg-slate-100 px-6 py-12 text-slate-800">
    <div class="mx-auto max-w-5xl">

      <!-- Page Header -->
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

      <!-- Buttons -->
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-bold">Buttons</h2>
        <p class="mt-2 text-sm text-slate-500">
          Primary, secondary and outline variants with interactive states.
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-4">
          <button type="button"
            class="btn-primary hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 active:scale-95">
            Primary
          </button>

          <button type="button"
            class="btn-secondary hover:bg-slate-300 focus:outline-2 focus:outline-offset-2 focus:outline-slate-500 active:scale-95">
            Secondary
          </button>

          <button type="button"
            class="btn-outline hover:bg-blue-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 active:scale-95">
            Outline
          </button>

          <button type="button" disabled
            class="btn-primary cursor-not-allowed opacity-60">
            Disabled
          </button>
        </div>
      </section>

      <!-- Cards -->
      <section class="mt-8">
        <div class="mb-5">
          <h2 class="text-2xl font-bold">Cards</h2>
          <p class="mt-2 text-slate-600">
            Reusable cards for profiles and products.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">

          <!-- Profile Card -->
          <article class="card">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <div class="flex items-center gap-4">
                <div class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 bg-white/20 text-2xl font-bold">
                  N
                </div>
                <div>
                  <h3 class="text-xl font-bold">Neema Zaninka</h3>
                  <p class="text-sm text-blue-100">Software Developer</p>
                </div>
              </div>
            </div>

            <div class="p-6">
              <p class="leading-7 text-slate-600">
                Passionate about building modern web applications and creating useful digital experiences.
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  JavaScript
                </span>
                <span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                  Tailwind CSS
                </span>
              </div>

              <button type="button"
                class="btn-secondary mt-6 w-full hover:bg-slate-300 focus:outline-2 focus:outline-offset-2 focus:outline-slate-500">
                View Profile
              </button>
            </div>
          </article>

          <!-- Product Card -->
          <article class="card">
            <div class="flex h-48 items-center justify-center bg-gradient-to-br from-violet-100 via-blue-100 to-cyan-100">
              <svg viewBox="0 0 120 120" class="h-28 w-28"
                fill="none" aria-label="Laptop illustration" role="img">
                <rect x="25" y="20" width="70" height="53" rx="5" fill="#334155"/>
                <rect x="31" y="26" width="58" height="41" rx="2" fill="#93C5FD"/>
                <path d="M16 79H104L96 91H24L16 79Z" fill="#64748B"/>
                <rect x="48" y="81" width="24" height="3" rx="1.5" fill="#CBD5E1"/>
                <circle cx="60" cy="46" r="9" fill="#2563EB"/>
                <path d="M55 46L59 50L66 42" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <div class="p-6">
              <div class="flex items-center justify-between gap-3">
                <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  IN STOCK
                </span>
                <span class="text-sm text-amber-500" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
              </div>

              <h3 class="mt-4 text-xl font-bold">Developer Laptop</h3>
              <p class="mt-2 leading-7 text-slate-600">
                A reliable laptop for coding, web development and everyday productivity.
              </p>

              <div class="mt-5 flex items-center justify-between gap-3">
                <span class="text-2xl font-extrabold text-slate-900">$899</span>
                <button type="button"
                  class="btn-primary hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600">
                  View Product
                </button>
              </div>
            </div>
          </article>

        </div>
      </section>

      <!-- Alerts -->
      <section class="mt-10">
        <div class="mb-5">
          <h2 class="text-2xl font-bold">Alerts</h2>
          <p class="mt-2 text-slate-600">
            Clear feedback messages for different situations.
          </p>
        </div>

        <div class="space-y-4">

          <div role="alert"
            class="alert border-emerald-200 bg-emerald-50 text-emerald-800">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold">✓</span>
            <div>
              <h3 class="font-bold">Success!</h3>
              <p class="mt-1 text-sm">Your changes have been saved successfully.</p>
            </div>
          </div>

          <div role="alert"
            class="alert border-amber-200 bg-amber-50 text-amber-900">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold">!</span>
            <div>
              <h3 class="font-bold">Warning</h3>
              <p class="mt-1 text-sm">Please review your information before continuing.</p>
            </div>
          </div>

          <div role="alert"
            class="alert border-red-200 bg-red-50 text-red-800">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold">×</span>
            <div>
              <h3 class="font-bold">Error occurred</h3>
              <p class="mt-1 text-sm">Something went wrong. Please try again.</p>
            </div>
          </div>

          <div role="status"
            class="alert border-sky-200 bg-sky-50 text-sky-800">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 font-bold">i</span>
            <div>
              <h3 class="font-bold">Information</h3>
              <p class="mt-1 text-sm">A new update is available for your dashboard.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- Footer -->
      <footer class="mt-10 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        Tailwind Component Library · Week 3 Workshop 2
      </footer>

    </div>
  </main>
`;