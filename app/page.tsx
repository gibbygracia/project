import { Search, Menu, Settings, Sparkles } from "lucide-react";

const characters = [
  { src: "/char-1.png", alt: "RAN Academy male fighter" },
  { src: "/char-2.png", alt: "RAN Academy male swordsman" },
  { src: "/char-3.png", alt: "RAN Academy female archer" },
  { src: "/char-4.png", alt: "RAN Academy female staff user" },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white px-4 py-6 text-white sm:px-6 lg:px-10">
      <section className="mx-auto max-w-[1380px]">
        <DesktopHero />
      </section>
    </main>
  );
}

function GameLogo() {
  return (
    <div className="relative z-30 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/50 bg-black shadow-[0_0_25px_rgba(239,68,68,0.35)] sm:h-16 sm:w-16">
      <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-red-600/30 to-transparent" />
      <span className="relative text-2xl font-black tracking-tighter text-white sm:text-3xl">RA</span>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="hidden items-center gap-8 rounded-bl-[2.2rem] rounded-tr-[1.7rem] border border-white/10 bg-black/90 px-8 py-4 shadow-2xl backdrop-blur md:flex lg:gap-11 lg:px-12">
      <a className="text-sm font-extrabold text-red-500" href="#">Home</a>
      <a className="text-sm font-bold text-white/90 transition hover:text-red-500" href="#">Shop</a>
      <a className="text-sm font-bold text-white/90 transition hover:text-red-500" href="#">Trend&apos;s</a>
      <span className="h-5 w-px bg-white/40" />
      <button className="rounded-full border border-red-500 bg-red-600 px-7 py-2.5 text-sm font-black text-white shadow-[0_0_18px_rgba(239,68,68,0.45)] transition hover:bg-red-500">
        Sign In
      </button>
    </nav>
  );
}

function SearchPanel() {
  return (
    <div className="w-full max-w-[420px] rounded-[2rem] border border-white/10 bg-black/90 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-red-500/60 hover:text-red-500">
          <Settings size={20} />
        </button>
        <button className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-red-500/60 hover:text-red-500">
          <Sparkles size={20} />
        </button>
        <span className="h-8 w-px bg-white/25" />
        <label className="flex min-w-0 flex-1 items-center rounded-full border border-white/15 bg-white/10 px-4 py-3">
          <input
            className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/45"
            placeholder="Search"
          />
          <Search size={21} className="shrink-0 text-white" />
        </label>
      </div>

      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="text-xl font-black leading-tight text-white sm:text-2xl">
          For More Cool<br />Hoodie&apos;s
        </p>
        <span className="h-10 w-px bg-white/25" />
        <button className="rounded-xl bg-red-600 px-6 py-3 text-sm font-black uppercase text-white shadow-[0_0_20px_rgba(239,68,68,0.35)] transition hover:bg-red-500 sm:px-8">
          Explore
        </button>
      </div>
    </div>
  );
}

function DesktopHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden rounded-[2.2rem] border border-gray-300 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.28)] lg:min-h-[820px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.18),transparent_35%),linear-gradient(120deg,#050505_0%,#090909_45%,#111_100%)]" />
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(130deg,transparent_0%,transparent_48%,rgba(239,68,68,0.55)_49%,transparent_50%,transparent_100%)]" />
      <div className="absolute -left-24 top-20 h-[560px] w-[560px] rounded-full bg-red-600/10 blur-3xl" />

      <header className="relative z-20 flex items-start justify-between p-6 sm:p-8 lg:p-10">
        <GameLogo />
        <div className="absolute right-0 top-0 hidden rounded-bl-[3rem] bg-white md:block">
          <NavBar />
        </div>
        <button className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black text-white md:hidden">
          <Menu size={24} />
        </button>
      </header>

      <div className="relative z-10 grid min-h-[590px] items-center px-6 pb-8 pt-4 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:pb-12">
        <CharacterStage />

        <div className="relative order-1 mx-auto w-full max-w-[520px] py-8 text-center lg:order-2 lg:mx-0 lg:text-left">
          <h1 className="text-[3.6rem] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-[5.2rem] lg:text-[5.9rem] xl:text-[6.5rem]">
            Where<br />
            <span className="text-red-600">Comfort</span><br />
            Meets Cool
          </h1>
          <div className="mt-9 flex justify-center lg:mt-16 lg:justify-start">
            <SearchPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function CharacterStage() {
  return (
    <div className="relative order-2 flex h-[500px] items-end justify-center lg:order-1 lg:h-[660px] lg:justify-start">
      <div className="absolute bottom-0 left-0 h-[92%] w-[88%] rounded-[3rem] bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="relative h-full w-full max-w-[720px]">
        {characters.map((character, index) => (
          <img
            key={character.src}
            src={character.src}
            alt={character.alt}
            className={[
              "absolute bottom-0 w-auto object-contain drop-shadow-[0_28px_38px_rgba(0,0,0,0.75)] transition duration-300 hover:scale-[1.03]",
              index === 0 ? "left-[0%] z-20 h-[90%]" : "",
              index === 1 ? "left-[22%] z-30 h-[96%]" : "",
              index === 2 ? "left-[48%] z-10 hidden h-[90%] opacity-80 xl:block" : "",
              index === 3 ? "left-[66%] z-0 hidden h-[84%] opacity-70 2xl:block" : "",
            ].join(" ")}
          />
        ))}

        <div className="absolute bottom-[22%] left-[16%] max-w-[390px] select-none text-[15rem] font-black leading-none tracking-[-0.15em] text-white/5 sm:text-[18rem]">
          RA
        </div>
      </div>
    </div>
  );
}
