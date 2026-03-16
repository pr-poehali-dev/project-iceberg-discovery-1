export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 260 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* A — два скруглённых штриха, сходятся вверху, без перекладины */}
      <path
        d="M5 62 L31 10 L57 62"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* P — вертикальный штрих только до середины снизу */}
      <line x1="74" y1="36" x2="74" y2="62" stroke="white" strokeWidth="9" strokeLinecap="round" />
      {/* P — полукруг верхняя часть, начинается чуть ниже верха */}
      <path
        d="M74 14 C74 14 101 14 101 32 C101 50 74 50 74 50"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Оранжевая точка — в разрыве между вертикалью и полукругом */}
      <circle cx="74" cy="32" r="5" fill="#F5A623" />

      {/* E — три оранжевые горизонтальные капсулы */}
      <rect x="114" y="10"  width="40" height="10" rx="5" fill="#F5A623" />
      <rect x="114" y="30"  width="40" height="10" rx="5" fill="#F5A623" />
      <rect x="114" y="50"  width="40" height="10" rx="5" fill="#F5A623" />

      {/* X — два скруглённых диагональных штриха, симметричные */}
      <line x1="172" y1="10" x2="218" y2="62" stroke="white" strokeWidth="9" strokeLinecap="round" />
      <line x1="218" y1="10" x2="172" y2="62" stroke="white" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
};