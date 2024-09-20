import React from "react";
import { Loader } from "lucide-react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100px]">
      <Loader className="animate-spin text-blue-500" width={40} height={40} />
      <span className="ml-2 text-xl font-semibold text-gray-600">
        로딩 중...
      </span>
    </div>
  );
};

export default LoadingSpinner;
