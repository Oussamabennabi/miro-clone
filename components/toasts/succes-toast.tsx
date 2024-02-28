import { CheckCircle2Icon } from "lucide-react";
import { toast } from "sonner";

const succesToast = (title:string) => {
  toast.success(title, {
    icon: <CheckCircle2Icon className="w-4 h-4 text-green-500" />,
  });
};

export default succesToast;
