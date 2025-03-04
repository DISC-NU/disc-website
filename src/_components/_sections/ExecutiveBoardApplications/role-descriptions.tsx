import type { RoleDescriptionCardProps } from "@/types";
import { Card, CardContent } from "@/_components/ui/card";

export const RoleDescriptionCard: React.FC<RoleDescriptionCardProps> = ({
  title,
  items,
}) => {
  return (
    <Card className="overflow-hidden border-[#40B4B4]/20 bg-white/70 backdrop-blur-sm">
      <div className="bg-[#40B4B4]/10 p-4">
        <h4 className="text-[#40B4B4] font-semibold">{title}</h4>
      </div>
      <CardContent className="pt-4">
        <ul className="list-disc pl-5 space-y-1 text-gray-500 text-sm">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
