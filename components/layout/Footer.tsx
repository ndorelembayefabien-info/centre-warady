
import Link from "next/link";
import WaradyLogo from "./WaradyLogo";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Formations", href: "/formations" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#073B2E] text-white">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        {/* Partie principale du Footer */}
        <div className="flex flex-col items-center justify-between gap-7 py-8 md:flex-row">
          {/* Identité du centre */}
          <Link
            href="/"
            aria-label="Centre WARADY - Accueil"
            className="shrink-0"
          >
            <WaradyLogo light />
          </Link>

          {/* Liens de navigation */}
          <nav
            aria-label="Navigation de pied de page"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
          >
            {footerLinks.map((item, index) => (
              <div key={item.href} className="flex items-center gap-3">
                <Link
                  href={item.href}
                  className="text-xs font-medium text-white/90 transition-colors hover:text-[#E8BD63]"
                >
                  {item.label}
                </Link>

                {index !== footerLinks.length - 1 && (
                  <span className="text-white/40">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Réseaux sociaux provisoires */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold">Suivez-nous :</span>

            <span
              title="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#073B2E]"
            >
              f
            </span>

            <span
              title="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#073B2E]"
            >
              ▶
            </span>

            <span
              title="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#073B2E]"
            >
              in
            </span>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/25" />

        {/* Informations légales */}
        <div className="flex flex-col items-center justify-between gap-3 py-4 text-center text-[11px] text-white/80 md:flex-row">
          <p>
            © 2026 Centre WARADY. Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#E8BD63]"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="transition-colors hover:text-[#E8BD63]"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
