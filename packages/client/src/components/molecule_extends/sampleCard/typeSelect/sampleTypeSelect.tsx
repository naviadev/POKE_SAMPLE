import SampleType from "@client/common/type/sampleType.type";
import sampleTypeData from "@client/common/data/sampleType";
import SelectField from "@/components/molecule/selectField/selectField";
import Option from "@client/common/interface/option.interface";
interface SampleTypeProps {
  onSampleTypeChange: (ability: Option | null) => void;
  value: Option | null;
}

const SampleTypeSelect: React.FC<SampleTypeProps> = ({
  onSampleTypeChange,
  value,
}) => {
  return (
    <>
      <SelectField
        id="sample_type"
        options={sampleTypeData}
        value={value}
        onChange={onSampleTypeChange}
        label="샘플타입"
        placeholder="샘플타입"
        styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
      />
    </>
  );
};

export default SampleTypeSelect;
