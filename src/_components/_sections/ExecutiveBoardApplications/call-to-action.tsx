import { Button } from "@/_components/ui/button";
import Link from "next/link";

export const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#40B4B4]/10 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#40B4B4]">
            Ready to Help Lead DISC?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Join our executive board and be part of shaping DISC&apos;s future
            at Northwestern.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#40B4B4] hover:bg-[#369999] text-white"
              onClick={() =>
                window.open(
                  "https://forms.gle/YourApplicationFormLink",
                  "_blank"
                )
              }
            >
              Apply Now
            </Button>
            <Link href="/#team">
              <Button
                variant="outline"
                size="lg"
                className="border-[#40B4B4] text-[#40B4B4] hover:bg-[#40B4B4]/10"
              >
                Meet Current Exec
              </Button>
            </Link>
          </div>
        </div>

        <p className="mt-12 text-gray-500">
          Questions? Contact us at{" "}
          <a
            href="mailto:disc@u.northwestern.edu"
            className="text-[#40B4B4] hover:underline font-medium"
          >
            disc@u.northwestern.edu
          </a>
        </p>
      </div>
    </section>
  );
};
