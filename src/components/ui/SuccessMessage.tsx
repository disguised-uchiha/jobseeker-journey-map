
import { CheckCircle } from "lucide-react";

interface SuccessMessageProps {
  title?: string;
  message?: string;
}

export const SuccessMessage = ({
  title = "Thank You for your Interest",
  message = "We will get back to you soon."
}: SuccessMessageProps) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-8 text-center max-w-md mx-auto shadow-lg animate-slide-up">
      <div className="flex justify-center mb-4">
        <div className="rounded-full bg-green-600/20 p-3">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300">{message}</p>
    </div>
  );
};
