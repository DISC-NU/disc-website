import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/_components/ui/alert";

const DiscoverProgramBanner = () => {
  return (
    <Link href="/executive-board">
      <Alert className="cursor-pointer hover:bg-gray-50 bg-white shadow-sm border-[#40B4B4]">
        <AlertCircle className="h-4 w-4 text-[#40B4B4]" />
        <AlertTitle className="text-[rgb(64,180,180)] font-extrabold">
          Executive Board Applications are now open! Applications are due by on
          March 16th at 11:59 PM.
        </AlertTitle>
        <AlertDescription className="text-gray-600">
          Click to learn more.
        </AlertDescription>
      </Alert>
    </Link>
  );
};

export default DiscoverProgramBanner;
