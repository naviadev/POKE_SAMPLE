import React from "react";

interface ContentAreaProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ContentArea: React.FC<ContentAreaProps> = ({ value, onChange }) => {
  const contentLength = value?.length || 0;
  const maxLength = 400;

  return (
    <div className="flex flex-col gap-2">
      <textarea
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        rows={4}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="여기에 내용을 입력하세요..."
      />
      <p className="text-right text-gray-500 text-sm">
        {contentLength}/{maxLength}
      </p>
    </div>
  );
};

export default ContentArea;
