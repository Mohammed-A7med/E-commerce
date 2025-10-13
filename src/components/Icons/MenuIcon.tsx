
export default function MenuIcon({
  width = 24,
  height = 24,
  className = "",
  stroke = "currentColor",
  strokeWidth = 2,
  title,
}: {
  width?: number;
  height?: number;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  title?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={title ? "false" : "true"}
      role="img"
    >
      {title && <title>{title}</title>}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
