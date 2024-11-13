import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/_components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
        },
      }}
    >
      <Card className="h-full transition-all hover:shadow-lg">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-[#14BD95]/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-[#14BD95]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </CardHeader>
        <CardContent className="text-gray-500 text-md">
          {description}
        </CardContent>
      </Card>
    </motion.div>
  );
}
