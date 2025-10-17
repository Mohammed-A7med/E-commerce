import SectionDivider from "./SectionDivider";

interface TitleProps {
  title: string;
  subTitle?: string;
  className?: string;
}

export default function Title({ title, subTitle, className = "" }: TitleProps) {
  return (
    <div
      className={`text-center mb-4 ${className}`}
      aria-labelledby="section-title"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <SectionDivider />
        <h2
          id="section-title"
          className="text-2xl sm:text-3xl font-prata tracking-wide"
        >
          {title}
        </h2>
        <SectionDivider />
      </div>

      {subTitle && (
        <p className="font-libre italic text-gray-600 text-sm sm:text-base">
          {subTitle}
        </p>
      )}
    </div>
  );
}
