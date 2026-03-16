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

      {/* P — вертикальный штрих */}
      <line x1="74" y1="10" x2="74" y2="62" stroke="white" strokeWidth="9" strokeLinecap="round" />
      {/* P — полукруглая часть сверху */}
      <path
        d="M74 10 Q100 10 100 28 Q100 46 74 46"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Оранжевая точка между A и P (слева от полукруга P) */}
      <circle cx="66" cy="28" r="5" fill="#F5A623" />

      {/* E — три оранжевые горизонтальные капсулы */}
      <rect x="114" y="10"  width="40" height="10" rx="5" fill="#F5A623" />
      <rect x="114" y="30"  width="40" height="10" rx="5" fill="#F5A623" />
      <rect x="114" y="50"  width="40" height="10" rx="5" fill="#F5A623" />

      {/* X — два скруглённых диагональных штриха */}
      <line x1="168" y1="10" x2="210" y2="62" stroke="white" strokeWidth="9" strokeLinecap="round" />
      <line x1="210" y1="10" x2="168" y2="62" stroke="white" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
};
