import type { TimelineStepProps } from "@/types";
import { motion } from "framer-motion";

export const TimelineStep: React.FC<TimelineStepProps> = ({
  number,
  title,
  date,
  description,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-xl border border-[#40B4B4]/20 hover:shadow-md transition-all"
    >
      <div className="bg-[#40B4B4]/5 p-4">
        <div className="h-8 w-8 rounded-full bg-[#40B4B4] flex items-center justify-center mb-2">
          <span className="text-white font-bold">{number}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-[#40B4B4] font-medium">{date}</p>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};
