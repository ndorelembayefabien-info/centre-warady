
"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Formations", href: "/formations" },
  { label: "Formateurs", href: "/formateurs" },
  { label: "Vie au centre", href: "/vie-au-centre" },
  { label: "Admissions", href: "/admissions" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Bouton d'ouverture et de fermeture */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center rounded-lg text-[#073B2E] hover:bg-[#F8F5EC]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          {isOpen ? (
            <path d="M6 6L18 18M18 6L6 18" />
          ) : (
            <path d="M4 7H20M4 12H20M4 17H20" />
          )}
        </svg>
      </button>

      {/* Navigation mobile */}
      {isOpen && (
        <nav className="absolute right-0 top-full z-50 mt-3 w-72 rounded-xl border border-[#E8E2D5] bg-white p-3 shadow-xl">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#173F35] transition-colors hover:bg-[#F8F5EC] hover:text-[#A77A25]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/admissions"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full bg-[#C6A15B] px-4 py-3 text-sm font-bold text-[#172B23] transition-colors hover:bg-[#D8B66F]"
          >
            Préinscription
          </Link>
        </nav>
      )}
    </div>
  );
}
