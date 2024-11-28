export default function SubheadingWithHighlight({
  children,
  highlight = false,
  className = "",
  green = false,
  center = true,
}: {
  children: React.ReactNode;
  highlight?: boolean;
  className?: string;
  green?: boolean;
  center?: boolean;
}) {
  return (
    <h2
      style={{
        color: green ? "#14BD95" : "black",
        textAlign: center ? "center" : "left",
      }}
      className={`text-3xl font-bold px-2 ${className}`}
    >
      <span className="inline-block md:inline relative">
        {highlight ? (
          <span className="inline-flex relative before:absolute before:inset-0 before:bg-greenHighlight before:-z-10 before:-rotate-1 before:translate-y-1/4">
            {children}
          </span>
        ) : (
          children
        )}
      </span>
    </h2>
  );
}
