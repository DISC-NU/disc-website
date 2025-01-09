import Link from "next/link";
import { Button } from "./ui/button";
import { footerSections, socialMediaLinks } from "@/utils/constants";
import { LucideIcon } from "lucide-react";

interface FooterLink {
  text: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialMediaLink {
  icon: LucideIcon;
  link: string;
  label: string;
}
const typedFooterSections = footerSections as FooterSection[];
const typedSocialMediaLinks = socialMediaLinks as SocialMediaLink[];

export default function Footer() {
  return (
    <footer className="mx-auto mt-32 w-full max-w-screen-xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 pb-12 sm:grid-cols-4 sm:gap-6 xl:grid-cols-6">
        <div className="col-span-full mb-2 sm:mb-8 xl:col-span-2 xl:mb-0">
          <Link
            className="-ml-1 inline-block dark:invert font-bold text-[#40B4B4]"
            href="/"
          >
            Develop & Innovate for Social Change
          </Link>
          <p className="mt-5 text-sm leading-[1.75] text-neutral-500 dark:text-neutral-400">
            Empowering students through technology and innovation. Join us in
            building the future of computing at our university.
          </p>
        </div>

        {typedFooterSections.map(({ title, links }, idx) => (
          <div key={idx}>
            <h5 className="font-semibold text-[#40B4B4]">{title}</h5>
            <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
              {links.map(({ text, href, target = "_self" }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    target={target}
                    className="text-sm hover:text-primary-600"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="font-semibold text-[#40B4B4]">Join Us</h5>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Interested in becoming a member? Check out our{" "}
            <Link
              href="/membership"
              className="text-primary-700 underline-offset-1 hover:underline"
            >
              membership page
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2.5 border-t py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        <div className="-mr-2 flex items-center gap-1">
          {typedSocialMediaLinks.map(({ icon: Icon, link, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label={label}
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>

        <span className="text-sm">
          &copy; {new Date().getFullYear()} DISC Student Organization - All
          rights reserved.
        </span>
      </div>
    </footer>
  );
}
