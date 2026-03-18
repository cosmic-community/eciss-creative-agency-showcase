export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold tracking-wide text-ink">ECISS</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate">
          <a href="#about" className="hover:text-ink">O agencji</a>
          <a href="#team" className="hover:text-ink">Zespół</a>
          <a href="#case-studies" className="hover:text-ink">Studia przypadku</a>
          <a href="#testimonials" className="hover:text-ink">Referencje</a>
          <a href="#contact" className="hover:text-ink">Kontakt</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white"
        >
          Skontaktuj się
        </a>
      </div>
    </header>
  );
}