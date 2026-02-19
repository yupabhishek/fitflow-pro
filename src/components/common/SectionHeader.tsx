interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeader = ({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) => {
  return (
    <div className={`mb-10 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4 ${
          light ? "text-foreground" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-muted-foreground" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
