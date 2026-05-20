export default function Footer() {
  return (
    <footer className="mt-6 border-t border-white/10 py-8 text-center text-xs text-gray-400">
      <p className="flex items-center justify-center gap-2">
        Michał Matwijow
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>Wszystkie prawa zastrzeżone</span>
      </p>
    </footer>
  );
}