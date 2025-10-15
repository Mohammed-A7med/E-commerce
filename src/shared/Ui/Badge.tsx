interface BadgeProps {
  value?: number;
  className?: string;
}

export default function Badge({ value, className = "" }: BadgeProps) {
  return (
    <span
      className={`absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full ${className}`}
    >
      {value}
    </span>
  );
}
