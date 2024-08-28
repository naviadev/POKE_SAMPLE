import React from "react";
import SelectField from "@/components/molecule/selectField/selectField";
import { optionsArray } from "../../../../../common/data/move/moveOptions";
const MoveSelect: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SelectField label="기술 1" options={optionsArray} />
      <SelectField label="기술 2" options={optionsArray} />
      <SelectField label="기술 3" options={optionsArray} />
      <SelectField label="기술 4" options={optionsArray} />
    </div>
  );
};

export default MoveSelect;
