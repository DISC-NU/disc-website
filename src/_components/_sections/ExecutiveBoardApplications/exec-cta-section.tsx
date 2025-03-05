import { Button } from "@/_components/ui/button";
import { Card, CardContent, CardFooter } from "@/_components/ui/card";
import Link from "next/link";
import { BorderBeam } from "@/_components/border-beam";

export const CallToAction: React.FC = () => {
  return (
    <div className="flex justify-center px-4 my-12 md:mt-24 md:mb-32 lg:mt-48 lg:mb-60">
      <Card className="relative w-full max-w-7xl overflow-hidden rounded-lg border-0">
        <CardContent className="p-6 sm:p-12 md:p-16 lg:p-24 xl:p-32">
          <div>
            <div className="relative z-10 mx-auto text-center">
              <div className="mx-auto max-w-xl">
                <h2 className="mb-4 text-2xl font-bold text-[#40B4B4] sm:text-3xl">
                  Apply to Join the Greatest Team at Northwestern
                </h2>
                <p className="mb-6 text-base text-gray-600 sm:text-lg">
                  Join our executive board and be part of shaping DISC&apos;s
                  future at Northwestern.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdkIlr0JeYuL-4662qnGcY61fpAxjSIX7m5ZWUX-nhMJQeBgg/viewform?usp=preview"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full bg-[#40B4B4] text-white hover:bg-[#369999] sm:w-auto"
                    >
                      Application Form
                    </Button>
                  </Link>
                  <Link href="/#team" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-[#40B4B4] text-[#40B4B4] hover:bg-[#40B4B4]/10 sm:w-auto"
                    >
                      Meet Current Exec
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-transparent py-4 text-center">
          <p className="mx-auto text-sm text-gray-600 sm:text-base">
            Questions? Contact us at{" "}
            <a
              href="mailto:disc@u.northwestern.edu"
              className="font-medium text-[#40B4B4] hover:underline"
            >
              disc@u.northwestern.edu
            </a>
          </p>
        </CardFooter>
        <BorderBeam
          duration={6}
          size={700}
          thickness={4}
          colorFrom="transparent"
          colorTo="#40B4B4"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={700}
          thickness={4}
          colorFrom="transparent"
          colorTo="#54D8D8"
        />
      </Card>
    </div>
  );
};
