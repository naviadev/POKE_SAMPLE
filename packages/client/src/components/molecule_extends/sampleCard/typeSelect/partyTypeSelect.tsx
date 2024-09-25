import partyTypeOptions from "@client/common/data/partyType";
import SelectField from "@/components/molecule/selectField/selectField";
import Option from "@client/common/interface/option.interface";
interface PartyTypeProps {
  value: Option | null ;
  onPartyTypeChange: (ability: Option | null) => void;
}

const PartyTypeSelect: React.FC<PartyTypeProps> = ({
  value,
  onPartyTypeChange,
}) => {
  return (
    <>
      <SelectField
        id="party_type"
        options={partyTypeOptions}
        value={value}
        onChange={onPartyTypeChange}
        label="파티타입"
        placeholder="파티타입"

        styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
      />
    </>
  );
};

export default PartyTypeSelect;
