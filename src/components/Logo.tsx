export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* A - два диагональных штриха без перекладины */}
      <path d="M10 68L28 14H34L52 68H45L41 55H21L17 68H10Z" fill="white" fillOpacity="0.85" />
      <path d="M23 49H39L31 24L23 49Z" fill="white" fillOpacity="0.15" />

      {/* P - вертикальная линия + полукруг */}
      <path d="M60 68V14H78C81.5 14 84.3 14.7 86.5 16C88.7 17.3 90.3 19 91.2 21C92.1 23 92.5 25.1 92.5 27.2C92.5 29.3 92.1 31.4 91.2 33.4C90.3 35.4 88.7 37.1 86.5 38.4C84.3 39.7 81.5 40.4 78 40.4H66V68H60Z" fill="white" fillOpacity="0.85" />
      <path d="M66 35H77.5C80 35 81.9 34.3 83.2 33C84.5 31.7 85.1 30 85.1 27.8C85.1 25.6 84.5 23.9 83.2 22.6C81.9 21.3 80 20.6 77.5 20.6H66V35Z" fill="white" fillOpacity="0.2" />
      {/* Оранжевая точка справа от P */}
      <ellipse cx="98" cy="20" rx="5" ry="5" fill="#F5A623" />

      {/* Три оранжевые капсулы вместо E */}
      <rect x="110" y="13" width="40" height="11" rx="5.5" fill="#F5A623" />
      <rect x="110" y="34.5" width="40" height="11" rx="5.5" fill="#F5A623" />
      <rect x="110" y="56" width="40" height="11" rx="5.5" fill="#F5A623" />

      {/* X - два пересекающихся диагональных штриха */}
      <path d="M162 14L180 41L198 14H206L184 45L207 68H199L180 48L161 68H153L176 45L154 14H162Z" fill="white" fillOpacity="0.85" />
    </svg>
  );
};
