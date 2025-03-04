import type { FAQItemProps } from "@/types";
import { motion } from "framer-motion";

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#40B4B4]/5 to-white p-6 rounded-xl border border-[#40B4B4]/10"
    >
      <h4 className="font-semibold text-lg text-gray-900 mb-2">{question}</h4>
      <p
        className="text-gray-500"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </motion.div>
  );
};
