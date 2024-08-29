import React from "react";
import IvField from "@/components/molecule/formField/ivField";
import Stats from "@client/common/data/stats";
import { Label } from "@/components/atom/shad/label";
import StatFormProps from "../props/statsField.props";
import { StatsFields, labelText, fieldToZ } from "../data/label";
import determineIvGrade from "../service/grade";

const IvForm: React.FC<StatFormProps> = ({ value, onChange }) => {
  const handleMax = (field: keyof Stats) => () => {
    onChange(field, 31);
  };
  const handleMin = (field: keyof Stats) => () => {
    onChange(field, 0);
  };
  const totalIvValue = Object.values(value).reduce((sum, val) => sum + val, 0);
  const zeroFields = StatsFields.filter((field) => value[field.label] === 0)
    .map((field) => fieldToZ[field.label] || "")
    .join(" ");
  const ivGrade = determineIvGrade(totalIvValue);
  const ivMessage = zeroFields ? `${ivGrade} (${zeroFields})` : ivGrade;

  return (
    <div className="flex flex-col justify-center gap-2 bg-gray-100 p-4 border border-gray-100 rounded-lg">
      <Label>Ivs - 개체값</Label>
      <Label className="text-gray-700 text-green-800">현재 : {ivMessage}</Label>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {StatsFields.map((field, index) => (
          <IvField
            key={field.label}
            id={field.label}
            type="number"
            label={labelText[index]}
            value={value[field.label]}
            onChange={(e) => onChange(field.label, Number(e.target.value))}
            onMax={handleMax(field.label)}
            onMin={handleMin(field.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default IvForm;
