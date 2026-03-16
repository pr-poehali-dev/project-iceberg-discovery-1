export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* A */}
      <path d="M4 52L18 10H22L36 52H31L27.5 41H12.5L9 52H4ZM14 37H26L20 18L14 37Z" fill="white" />

      {/* P */}
      <path d="M42 52V10H57C59.8 10 62.1 10.5 63.9 11.5C65.7 12.5 67 13.8 67.9 15.4C68.8 17 69.2 18.8 69.2 20.7C69.2 22.6 68.8 24.4 67.9 26C67 27.6 65.7 28.9 63.9 29.9C62.1 30.9 59.8 31.4 57 31.4H46.5V52H42ZM46.5 27.2H56.7C58.9 27.2 60.6 26.6 61.8 25.5C63 24.4 63.6 22.8 63.6 20.7C63.6 18.6 63 17 61.8 15.9C60.6 14.8 58.9 14.2 56.7 14.2H46.5V27.2Z" fill="white" />
      {/* Orange dot above P */}
      <ellipse cx="55" cy="6" rx="3.5" ry="3.5" fill="#F5A623" />

      {/* E (без правой вертикали — три горизонтальные оранжевые полосы + левая вертикаль белая) */}
      <path d="M76 52V10H76.5V52H76Z" fill="white" />
      <rect x="76" y="10" width="4" height="42" fill="white" />
      {/* Three orange bars */}
      <rect x="83" y="12" width="26" height="7" rx="3.5" fill="#F5A623" />
      <rect x="83" y="26.5" width="26" height="7" rx="3.5" fill="#F5A623" />
      <rect x="83" y="41" width="26" height="7" rx="3.5" fill="#F5A623" />

      {/* X */}
      <path d="M118 10L133 31L148 10H154L136 33L155 52H149L133 36L117 52H111L130 33L112 10H118Z" fill="white" />
    </svg>
  );
};
