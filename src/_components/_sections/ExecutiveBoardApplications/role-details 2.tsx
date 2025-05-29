import type { RoleDetailsProps } from "@/types";
import SubheadingWithHighlight from "@/_components/ui/subheading-with-highlight";
import { RoleDescriptionCard } from "@/_components/_sections/ExecutiveBoardApplications/role-descriptions";

export const RoleDetails: React.FC<RoleDetailsProps> = ({ role }) => {
  return (
    <div className="bg-gradient-to-br from-[#40B4B4]/5 to-[#14BD95]/5 p-6 rounded-2xl border border-[#40B4B4]/10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#14BD95]/10 flex items-center justify-center shrink-0">
          {role.icon}
        </div>
        <SubheadingWithHighlight highlight={true} center={false} green={true}>
          {role.title} - {role.seats} {role.seats === 1 ? "Seat" : "Seats"}{" "}
          Available
        </SubheadingWithHighlight>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RoleDescriptionCard
          title="What We're Looking For"
          items={role.lookingFor}
        />
        <RoleDescriptionCard title="Why Apply" items={role.whyApply} />

        <div className="md:col-span-2">
          <RoleDescriptionCard
            title="Responsibilities"
            items={role.responsibilities}
          />
        </div>

        {role.timeCommitment && (
          <div className="md:col-span-2">
            <RoleDescriptionCard
              title="Time Commitment"
              items={role.timeCommitment}
            />
          </div>
        )}
      </div>
    </div>
  );
};
