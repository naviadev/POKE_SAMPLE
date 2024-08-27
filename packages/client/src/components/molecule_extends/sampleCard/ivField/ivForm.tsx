import React from "react";
import IvField from "@/components/molecule/formField/ivField";
import { Stats } from "../../../../../common/data/stats";
import { Label } from "@/components/atom/shad/label";

interface IvFieldProps {
  value: Stats;
  onChange: (field: keyof Stats, value: number) => void;
}

const IvForm: React.FC<IvFieldProps> = ({ value, onChange }) => {
  const ivFields: { label: keyof Stats }[] = [
    { label: "H" },
    { label: "A" },
    { label: "B" },
    { label: "C" },
    { label: "D" },
    { label: "S" },
  ];
  const labelText = [
    "H(체력)",
    "A(공격)",
    "B(방어)",
    "C(특수공격)",
    "D(특수방어)",
    "S(스피드)",
  ];

  // Handle Max and Min actions
  const handleMax = (field: keyof Stats) => () => {
    onChange(field, 31);
  };

  const handleMin = (field: keyof Stats) => () => {
    onChange(field, 0);
  };

  return (
    <div className="flex flex-col justify-center gap-2 bg-gray-100 p-4 border border-gray-100 rounded-lg">
      <Label>Ivs</Label>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {ivFields.map((field, index) => (
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
