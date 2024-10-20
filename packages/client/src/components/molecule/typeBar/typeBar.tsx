import { Type } from "@client/common/interface/type.interface";
import capitalizeFirstLetter from "@client/common/service/capitalizeFirstLetter";

interface TypeBarProps {
  type: Type;
}

const TypeBar: React.FC<TypeBarProps> = ({ type }) => {
  return (
    <div
      className={`w-20 h-8 rounded-sm text-center bg-typeColors-${type.type_id} text-white flex justify-center items-center`}
    >
      <p className="font-bold">{capitalizeFirstLetter(type.type_name)}</p>
    </div>
  );  
};

export default TypeBar;
