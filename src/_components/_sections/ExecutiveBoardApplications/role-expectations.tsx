import { Info, Calendar, UserPlus } from "lucide-react";
import Link from "next/link";

export const RoleExpectationsNotice: React.FC = () => {
  return (
    <div className="mb-16 rounded-xl overflow-hidden border border-[#40B4B4]/20 bg-gradient-to-br from-[#40B4B4]/5 to-white">
      <div className="bg-[#40B4B4]/10 p-6">
        <div className="flex items-center gap-3">
          <Info className="text-[#40B4B4]" size={24} />
          <h3 className="text-xl font-bold text-[#40B4B4]">
            Note about role expectations
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <p className="text-gray-700">
          Thank you for your interest in applying to join DISC&apos;s Exec Board
          for the 2025-2026 school year!
        </p>

        <div className="flex items-start gap-3">
          <div className="mt-1 shrink-0">
            <Calendar className="text-[#40B4B4]" size={20} />
          </div>
          <p className="text-gray-700">
            To apply, fill out the following{" "}
            <Link href="/#team" className="font-bold underline">
              application
            </Link>{" "}
            and submit it for the role(s) you are interested in by{" "}
            <span className="font-semibold">
              March 16th, 2025 at 11:59 PM CST
            </span>
            .
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 shrink-0">
            <Info className="text-[#40B4B4]" size={20} />
          </div>
          <p className="text-gray-700">
            Please refer to the role descriptions below for more details about
            each role and the overall application timeline. Role descriptions
            include role responsibilities, what we&apos;re looking for, and why
            you should apply.
          </p>
        </div>

        <div className="flex items-start gap-3 bg-[#40B4B4]/5 p-4 rounded-lg">
          <div className="mt-1 shrink-0">
            <UserPlus className="text-[#40B4B4]" size={20} />
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">
                By applying, you are committing to DISC for not only next school
                year but also for this upcoming spring quarter.
              </span>{" "}
              Your Exec workload will be minimal this upcoming quarter, but we
              will be asking you to attend weekly Exec meetings and shadow
              present members in preparation for taking on their roles in the
              coming school year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
