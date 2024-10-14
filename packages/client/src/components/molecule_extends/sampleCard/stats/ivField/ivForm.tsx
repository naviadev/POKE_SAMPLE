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
    <div className="flex flex-col gap-2 bg-gray-100 border border-gray-100 rounded-lg w-full justify-items-center">
      <Label className="text-base text-gray-500">Ivs - 개체값</Label>
      <div className="grid grid-cols-3 gap-2 md:flex md:gap-4 md : justify-items-center w-full">
        {StatsFields.map((field, index) => (
          <IvField
            key={field.label}
            id={field.label}
            type="string"
            label={labelText[index]}
            value={value[field.label]}
            onChange={(e) => onChange(field.label, Number(e.target.value))}
          />
        ))}
      </div>
      <Label className=" text-green-800">현재 : {ivMessage}</Label>
    </div>
  );
};

export default IvForm;
