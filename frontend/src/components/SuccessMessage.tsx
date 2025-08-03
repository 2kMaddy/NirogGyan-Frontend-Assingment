import { CheckCircle } from "lucide-react";
import type { SuccessMessageProps } from "../types";

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-2xl rounded-xl p-6 max-w-sm w-full text-center animate-fade-in">
        <CheckCircle className="mx-auto text-green-500 w-12 h-12 mb-3" />
        <h2 className="text-xl font-bold text-green-600">Success!</h2>
        <p className="text-gray-700 mt-2">{message}</p>

        <button
          onClick={() => {
            if (onClose) {
              onClose();
            }
            window.history.back();
          }}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
