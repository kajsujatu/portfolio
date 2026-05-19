import { useState } from "react";
import { Link } from "react-router-dom";
import {
    EnvelopeIcon,
    PhoneIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full border-b border-[var(--border)] px-8 py-6 relative">
            <div className="flex items-center justify-between">

                {/* Logo / nazwa */}
                <div className="text-xl font-bold text-[var(--text-h)]">

                    <Link
                        to="/"
                        className="hover:text-[var(--text-h)] transition"
                    >
                        <span className="md:hidden">MM</span>
                        <span className="hidden md:inline">
                            Michał Matwijow
                        </span>
                    </Link>

                </div>

                {/* Desktop menu */}
                <nav className="hidden md:flex gap-8 items-center text-[var(--text)] ml-auto">
                    <Link
                        to="/"
                        className="hover:text-[var(--text-h)] transition"
                    >
                        Prace
                    </Link>

                    <Link
                        to="/o-mnie"
                        className="hover:text-[var(--text-h)] transition"
                    >
                        O mnie
                    </Link>

                    <div className="flex gap-4">
                        <a
                            href="mailto:michalmatwijow@gmail.com"
                            className="hover:text-[var(--text-h)] transition"
                        >
                            <EnvelopeIcon className="w-5 h-5" />
                        </a>

                        <a
                            href="tel:+48510846440"
                            className="hover:text-[var(--text-h)] transition"
                        >
                            <PhoneIcon className="w-5 h-5" />
                        </a>
                    </div>
                </nav>

                {/* Mobile prawa strona */}
                <div className="flex items-center gap-4 md:hidden">

                    {/* Ikony tylko mobile */}
                    <div className="flex md:hidden gap-4">
                        <a
                            href="mailto:michalmatwijow@gmail.com"
                            className="hover:text-[var(--text-h)] transition"
                        >
                            <EnvelopeIcon className="w-5 h-5" />
                        </a>

                        <a
                            href="tel:+48510846440"
                            className="hover:text-[var(--text-h)] transition"
                        >
                            <PhoneIcon className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden"
                    >
                        {menuOpen ? (
                            <XMarkIcon className="w-8 h-8" />
                        ) : (
                            <Bars3Icon className="w-8 h-8" />
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <nav className="md:hidden flex flex-col gap-6 mt-6 text-[var(--text)]">

                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[var(--text-h)]"
                    >
                        Prace
                    </Link>

                    <Link
                        to="/o-mnie"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[var(--text-h)]"
                    >
                        O mnie
                    </Link>

                </nav>
            )}
        </header>
    );
}