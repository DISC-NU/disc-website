export function HeaderWithHighlight({
  children,
  highlight = false,
  className = "",
}: {
  children: React.ReactNode;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center ${className}`}>
      <span className="inline-block md:inline-flex relative">
        <span className={`relative z-10 ${highlight ? "text-[#14BD95]" : ""}`}>
          {children}
        </span>
        <span
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: "1.4375rem",
            background: "rgba(20, 189, 149, 0.20)",
          }}
        ></span>
      </span>
    </h2>
  );
}
