type ThinkingManProps = {
  className?: string;
};

const ThinkingMan = ({ className }: ThinkingManProps) => (
  <svg
    width="55"
    height="86"
    viewBox="0 0 55 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>thinking man</title>
    <path
      d="M46 44L49.1448 50.1638C51.4711 54.7233 52.9006 59.687 53.3558 64.7853L54 72"
      stroke="white"
    />
    <path
      d="M11 43V43C6.88988 47.5073 4.16732 53.1047 3.15889 59.1207L1 72"
      stroke="white"
    />
    <path d="M17 69L14 66L12 84" stroke="white" strokeOpacity="0.46" />
    <path d="M39 70.8333L41.4 68L43 85" stroke="white" strokeOpacity="0.46" />
    <path
      d="M10 58V48C10 44.2229 11.7783 40.6663 14.8 38.4C16.8772 36.8421 19.4036 36 22 36H35C37.5964 36 40.1228 36.8421 42.2 38.4C45.2217 40.6663 47 44.2229 47 48V58C47 68.2173 38.7173 76.5 28.5 76.5C18.2827 76.5 10 68.2173 10 58Z"
      fill="white"
      fillOpacity="0.9"
      stroke="white"
    />
    <path
      d="M49.0286 18.8813C49.0286 28.9893 40.0017 37.2625 28.7643 37.2625C17.5268 37.2625 8.5 28.9893 8.5 18.8813C8.5 8.77323 17.5268 0.5 28.7643 0.5C40.0017 0.5 49.0286 8.77323 49.0286 18.8813Z"
      fill="white"
      fillOpacity="0.9"
      stroke="white"
    />
  </svg>
);

export default ThinkingMan;
