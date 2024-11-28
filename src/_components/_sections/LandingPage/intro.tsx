import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export function IntroSection() {
  return (
    <div id="intro" className="flex flex-col">
      <div className="text-3xl md:text-4xl font-bold text-center px-2 flex justify-center items-center">
        <h1>At DISC, we build </h1>
        <HeaderWithHighlight highlight={true} green={true}>
          technology for social good
        </HeaderWithHighlight>
      </div>

      <p className="mt-4 max-w-4xl text-gray-500 text-md leading-relaxed mx-auto py-4 px-2">
        Since 2017, DISC has been transforming how Northwestern students engage
        with technology and community impact. What started as a small student
        group has grown into a dynamic community of innovators, bringing
        together diverse perspectives and skills to tackle real-world
        challenges.
        <br />
        <br />
        We believe in the power of collaboration across disciplines. By
        combining technical expertise with creative problem-solving, we&apos;ve
        built lasting partnerships with organizations throughout the
        Evanston/Chicago area. Our project teams blend computer science, design,
        and social impact to create solutions that matter.
      </p>

      <div className="mt-16 flex flex-col">
        <HeaderWithHighlight highlight={true}>Our Mission</HeaderWithHighlight>
        <p className="mt-6 text-gray-500 leading-relaxed max-w-4xl mx-auto px-2">
          Through hands-on projects and mentorship, we empower students to grow
          beyond the classroom. Our teams work directly with community partners,
          gaining real-world experience while making a meaningful difference.
          Having grown to over 300 members, we&apos;re proud to foster an
          environment where technical innovation meets social responsibility,
          creating technology solutions that serve our community&apos;s needs.
          <br />
          <br />
          DISC has become a stepping stone for many of our members towards
          successful careers in the technology industry, with alumni working at
          leading tech companies and startups. Our practical experience in
          project management, technical leadership, and collaborative
          development provides valuable skills that translate directly to
          professional success.
        </p>
      </div>
    </div>
  );
}
