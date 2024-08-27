import React from "react";
import EvsField from "@/components/molecule/formField/evField";
import { Stats } from "../../../../../common/data/stats";
import { Label } from "@/components/atom/shad/label";

interface EvsFormProps {
  value: Stats;
  onChange: (field: keyof Stats, value: number) => void;
}

const EvsForm: React.FC<EvsFormProps> = ({ value, onChange }) => {
  const evFields: { label: keyof Stats }[] = [
    { label: "H" },
    { label: "A" },
    { label: "B" },
    { label: "C" },
    { label: "D" },
    { label: "S" },
  ];

  // Handle Max and Min actions
  const handleMax = (field: keyof Stats) => () => {
    const total = Object.values(value).reduce((acc, curr) => acc + curr, 0);
    const max = 510 - (total - value[field]);
    onChange(field, Math.min(252, max));
  };

  const handleMin = (field: keyof Stats) => () => {
    onChange(field, 0);
  };

  const handleChange = (field: keyof Stats, newValue: number) => {
    const total = Object.values(value).reduce((acc, curr) => acc + curr, 0);
    const newTotal = total - value[field] + newValue;

    if (newTotal <= 510) {
      onChange(field, newValue);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-2 bg-gray-100 p-4 border border-gray-100 rounded-lg">
      <Label>Evs</Label>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {evFields.map((field) => (
          <EvsField
            key={field.label}
            id={field.label}
            type="number"
            label={field.label}
            value={value[field.label]}
            onChange={(e) => handleChange(field.label, Number(e.target.value))}
            onMax={handleMax(field.label)}
            onMin={handleMin(field.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default EvsForm;
