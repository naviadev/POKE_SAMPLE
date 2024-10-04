import Option from "@client/common/interface/option.interface";

interface TypeBarProps {
  type: Option;
}

const typeColors: Record<number, string> = {
  1: "bg-gray-300",
  2: "bg-red-400",
  3: "bg-blue-400",
  4: "bg-yellow-400",
  5: "bg-green-400",
  6: "bg-cyan-300",
  7: "bg-purple-600",
  8: "bg-purple-700",
  9: "bg-brown-400",
  10: "bg-sky-400",
  11: "bg-pink-400",
  12: "bg-green-600",
  13: "bg-gray-600",
  14: "bg-indigo-400",
  15: "bg-blue-700",
  16: "bg-gray-800",
  17: "bg-gray-400",
  18: "bg-pink-300",
};

const TypeBar: React.FC<TypeBarProps> = ({ type }) => {
  const bgColor = typeColors[type.value] || "bg-gray-200"; // 기본값 설정
  return (
    <div className={`w-16 h-6 rounded-sm text-center ${bgColor}`}>
      <p>{type.label}</p>
    </div>
  );
};

export default TypeBar;
