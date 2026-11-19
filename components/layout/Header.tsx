
import Link from "next/link";
import WaradyLogo from "./WaradyLogo";
import MobileMenu from "./MobileMenu";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Formations", href: "/formations", dropdown: true },
  { label: "Formateurs", href: "/formateurs" },
  { label: "Vie au centre", href: "/vie-au-centre", dropdown: true },
  { label: "Admissions", href: "/admissions" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="relative z-40 w-full">
      {/* Bandeau supérieur : coordonnées et réseaux sociaux */}
      <div className="hidden bg-[#073B2E] text-white md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2 text-xs lg:px-10">
          <div className="flex items-center gap-7">
            <span className="flex items-center gap-2">
              <span aria-hidden="true">📍</span>
              Chagoua, 7e Arr., N'Djamena, Tchad
            </span>

            <a
              href="tel:+23566000000"
              className="flex items-center gap-2 transition-colors hover:text-[#E8BD63]"
            >
              <span aria-hidden="true">☎</span>
              +235 66 00 00 00
            </a>

            <a
              href="mailto:contact@warady.td"
              className="flex items-center gap-2 transition-colors hover:text-[#E8BD63]"
            >
              <span aria-hidden="true">✉</span>
              contact@warady.td
            </a>
          </div>

          {/* Réseaux sociaux : liens à configurer ultérieurement */}
          <div className="flex items-center gap-3 font-bold">
            <span aria-label="Facebook" title="Facebook">f</span>
            <span aria-label="YouTube" title="YouTube">▶</span>
            <span aria-label="LinkedIn" title="LinkedIn">in</span>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="border-b border-[#EDE9DF] bg-white">
        <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-5 px-5 py-3 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Centre WARADY - Accueil"
            className="shrink-0"
          >
            <WaradyLogo />
          </Link>

          {/* Navigation ordinateur */}
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1 rounded-full px-3 py-3 text-[12px] font-bold text-[#172B23] transition-colors hover:bg-[#073B2E] hover:text-white ${
                  item.href === "/"
                    ? "bg-[#073B2E] text-white"
                    : ""
                }`}
              >
                {item.label}

                {item.dropdown && (
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 7L10 12L15 7" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Bouton préinscription sur ordinateur */}
          <Link
            href="/admissions"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#E8AD27] px-5 py-3 text-xs font-extrabold text-[#172B23] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#F2BD43] lg:flex"
          >
            <span aria-hidden="true">🎓</span>
            Préinscription
          </Link>

          {/* Menu téléphone et tablette */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
