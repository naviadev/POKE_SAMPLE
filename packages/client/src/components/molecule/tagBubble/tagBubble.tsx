import { Tag } from "lucide-react";

interface TagBubbleProps {
  value : string | number;
}
const TagBubble: React.FC<TagBubbleProps> = ({ value }) => {
  return (
    <div className="absolute top-2 left-2 overflow-hidden">
      <div className="bg-gray-200 text-black rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:w-auto group-hover:px-3 group-hover:py-1">
        <span className="text-xs font-semibold whitespace-nowrap overflow-hidden transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {value}
        </span>
      </div>
    </div>
  );
};

export default TagBubble;
