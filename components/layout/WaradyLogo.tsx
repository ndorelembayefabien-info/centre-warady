type WaradyLogoProps = {
  light?: boolean;
  compact?: boolean;
};

export default function WaradyLogo({
  light = false,
  compact = false,
}: WaradyLogoProps) {
  const textColor = light ? "text-white" : "text-[#073B2E]";
  const sloganColor = light ? "text-white/80" : "text-[#315347]";

  return (
    <div className="flex items-center gap-3">
      {/* Emblème géométrique W */}
      <svg
        viewBox="0 0 120 82"
        role="img"
        aria-label="Emblème W du Centre WARADY"
        xmlns="http://www.w3.org/2000/svg"
        className={
          compact
            ? "h-10 w-14 shrink-0"
            : "h-12 w-[76px] shrink-0 sm:h-14 sm:w-[88px]"
        }
      >
        {/* Partie gauche dorée */}
        <path d="M5 7 H27 L43 44 L60 18 L71 35 L43 75 Z" fill="#C6A15B" />

        {/* Partie droite verte */}
        <path d="M60 18 L77 44 L93 7 H115 L83 75 L49 35 Z" fill="#07513D" />

        {/* Accent central doré */}
        <path d="M49 35 L60 18 L71 35 L60 51 Z" fill="#E2B85B" />
      </svg>

      {/* Identité textuelle */}
      {!compact && (
        <div className="flex flex-col leading-tight">
          <span
            className={`whitespace-nowrap text-lg font-extrabold tracking-[0.04em] sm:text-xl ${textColor}`}
          >
            CENTRE WARADY
          </span>

          <span
            className={`mt-1 whitespace-nowrap text-[9px] italic tracking-wide sm:text-[10px] ${sloganColor}`}
          >
            Former aujourd&apos;hui, réussir demain
          </span>
        </div>
      )}
    </div>
  );
}
