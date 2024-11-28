import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export default function DiscoverProgramHero() {
  return (
    <div className="space-y-6 mb-16">
      <div className="text-3xl md:text-4xl font-bold text-center px-2 flex flex-col justify-center items-center">
        <HeaderWithHighlight highlight={true} green={true}>
          Discover Program 2025 Overview and Application
        </HeaderWithHighlight>
      </div>

      <p className="text-gray-500 text-center text-lg">
        Connect, Create, and Make an Impact
      </p>
    </div>
  );
}
