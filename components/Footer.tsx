export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate">
        <span>ECISS © {new Date().getFullYear()}</span>
        <span>Full Stack Creative Agency</span>
      </div>
    </footer>
  );
}