import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DiscoverProgramBanner = () => {
  return (
    <Link href="/discover-program">
      <Alert className="cursor-pointer hover:bg-gray-50 bg-white shadow-sm border-[#40B4B4]">
        <AlertCircle className="h-4 w-4 text-[#40B4B4]" />
        <AlertTitle className="text-[rgb(64,180,180)] font-extrabold">
          Discover Program Application Now Available!!!
        </AlertTitle>
        <AlertDescription className="text-gray-600">
          Join our exciting discovery program and unlock new opportunities.
          Click to learn more.
        </AlertDescription>
      </Alert>
    </Link>
  );
};

export default DiscoverProgramBanner;