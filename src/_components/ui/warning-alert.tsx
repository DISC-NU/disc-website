import { Alert, AlertTitle, AlertDescription } from "@/_components/ui/alert";
import { AlertCircle } from "lucide-react";

interface WarningAlertProps {
  title: string;
  message: string;
}

export default function WarningAlert({ title, message }: WarningAlertProps) {
  return (
    <Alert
      variant="default"
      className="mb-16 border-[#F1C40F] bg-[#FDF8E4] text-[#7C6A1C]"
    >
      <AlertCircle color="#F1C40F" size={24} />
      <AlertTitle className="text-[#7C6A1C] font-medium">{title}</AlertTitle>
      <AlertDescription className="text-[#7C6A1C] text-base mt-2">
        {message}
      </AlertDescription>
    </Alert>
  );
}
