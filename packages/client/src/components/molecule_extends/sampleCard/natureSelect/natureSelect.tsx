import SelectField from "@/components/molecule/selectField/selectField";
import nature from "../../../../../common/data/nature";
import Option from "../../../../../common/interface/option.interface";
interface NatureSelectProps {
  onNatureChange: (nature: Option | null) => void;
  className?: string;
}
const NatureSelect: React.FC<NatureSelectProps> = ({
  className,
  onNatureChange,
}) => {
  return (
    <div>
      <SelectField
        id="nature"
        options={nature}
        onChange={onNatureChange}
        label="성격"
        placeholder="성격"
        className={className}
      />
    </div>
  );
};
export default NatureSelect;
