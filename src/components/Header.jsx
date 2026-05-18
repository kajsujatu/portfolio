import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between py-6 px-8 border-b border-[var(--border)]">

            <div className="text-xl font-bold text-[var(--text-h)]">
                Michał Matwijow
            </div>

            <nav className="flex gap-8 text-[var(--text)]">
                <a
                    href="/"
                    className="hover:text-[var(--text-h)] transition"
                >
                    Prace
                </a>

                <a
                    href="/o-mnie"
                    className="hover:text-[var(--text-h)] transition"
                >
                    O mnie
                </a>

                <div className="flex gap-4 items-center">
                    <a href="mailto:michalmatwijow@gmail.com" className="hover:text-[var(--text-h)] transition">
                        <EnvelopeIcon className="w-5 h-5" />
                    </a>

                    <a href="tel:+48510846440" className="hover:text-[var(--text-h)] transition">
                        <PhoneIcon className="w-5 h-5" />
                    </a>
                </div>

            </nav>

        </header>
    );
}