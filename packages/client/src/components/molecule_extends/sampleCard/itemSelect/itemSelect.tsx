import SelectField from "@/components/molecule/selectField/selectField";
import item from "../../../../../common/data/item";
import Option from "../../../../../common/interface/option.interface";
interface ItemSelectProps {
  onItemChange: (item: Option | null) => void;
  className?: string;
}
const ItemSelect: React.FC<ItemSelectProps> = ({ onItemChange, className }) => {
  return (
    <div>
      <SelectField
        id="item"
        options={item}
        onChange={onItemChange}
        label="지닌물건"
        placeholder="아이템"
        className={className}
      />
    </div>
  );
};
export default ItemSelect;
