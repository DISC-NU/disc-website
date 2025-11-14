import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/_components/ui/alert";

const DiscoverProgramBanner = () => {
  return (
    <Link href="/executive-board">
      <Alert className="cursor-pointer hover:bg-gray-50 bg-white shadow-sm border-[#40B4B4]">
        <AlertCircle className="h-4 w-4 text-[#40B4B4]" />
        <AlertTitle className="text-[rgb(64,180,180)] font-bold">
          Executive Board Application Deadline{" "}
          <span className="font-extrabold underline">
            extended until March 23rd at 11:59 PM CST.
          </span>{" "}
          Applicants will be notified on a rolling basis.
        </AlertTitle>
        <AlertDescription className="text-gray-600">
          Click to learn more.
        </AlertDescription>
      </Alert>
    </Link>
  );
};

export default DiscoverProgramBanner;
