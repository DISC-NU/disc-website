import { SVGProps } from "react";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

export default function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  className,
  ...props
}: Iphone15ProProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 433 882"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <clipPath id="screenArea">
          <rect x="21.25" y="19.25" width="389.5" height="843.5" rx="55" />
        </clipPath>
      </defs>

      {/* Phone Frame */}
      <path
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
        fill="#1F2937"
      />

      {/* Side Buttons */}
      <path
        d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
        fill="#1F2937"
      />
      <path
        d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
        fill="#1F2937"
      />
      <path
        d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
        fill="#1F2937"
      />
      <path
        d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
        fill="#1F2937"
      />

      {/* Screen Background */}
      <rect
        x="21.25"
        y="19.25"
        width="389.5"
        height="843.5"
        rx="55"
        fill="white"
      />

      {/* Screen Content */}
      {src && (
        <image
          href={src}
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#screenArea)"
        />
      )}

      {/* Dynamic Island */}
      <rect x="154" y="30" width="124" height="37" rx="18.5" fill="#1F2937" />

      {/* Camera Dot */}
      <circle cx="259.5" cy="48.5" r="8" fill="#000000" />
    </svg>
  );
}
