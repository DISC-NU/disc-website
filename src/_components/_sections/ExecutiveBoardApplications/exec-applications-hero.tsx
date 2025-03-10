import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export const HeroSection: React.FC = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <HeaderWithHighlight highlight={true} green={true}>
          2025-2026 DISC Executive Board Applications
        </HeaderWithHighlight>
        <p className="mt-16 text-xl text-gray-500 max-w-3xl mx-auto">
          Help shape the future of DISC by applying to be part of our executive
          team. We&apos;re looking for passionate students who want to make an
          impact through technology and leadership.
        </p>
      </div>
    </section>
  );
};
