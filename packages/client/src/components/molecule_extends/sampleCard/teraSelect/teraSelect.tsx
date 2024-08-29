import React from "react";
import SelectField from "@/components/molecule/selectField/selectField";
import teraTypes from "../../../../../common/data/teraType";
import Option from "../../../../../common/interface/option.interface";

interface TeraTypeSelectProps {
  selectedType: string | null;
  onTypeChange: (type: string) => void;
}

const TeraTypeSelect: React.FC<TeraTypeSelectProps> = ({
  selectedType,
  onTypeChange,
}) => {
  // 테라스탈 타입 옵션을 배열로 변환
  const teraTypeOptions: Option[] = teraTypes.map((type: string, index) => ({
    label: type,
    value: index,
  }));

  return (
    <SelectField
      id="tera-type"
      onChange={(option) => onTypeChange(option ? option.label : null)}
      options={teraTypeOptions}
      placeholder="테라스탈 타입을 선택하세요"
      label="Tera Type"
      styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
    />
  );
};

export default TeraTypeSelect;
