import React from "react";
import EvsField from "@/components/molecule/formField/evField";
import Stats from "@client/common/data/stats";
import { Label } from "@/components/atom/shad/label";
import StatFormProps from "../props/statsField.props";
import { StatsFields, labelText } from "../data/label";

const EvsForm: React.FC<StatFormProps> = ({ value, onChange }) => {
  // Handle Max and Min actions
  const handleMax = (field: keyof Stats) => () => {
    const total = Object.values(value).reduce((acc, curr) => acc + curr, 0);
    const max = 510 - (total - value[field]);
    onChange(field, Math.min(252, max));
  };

  const handleMin = (field: keyof Stats) => () => {
    onChange(field, 0);
  };

  const handleChange = async (field: keyof Stats, newValue: number) => {
    const total = Object.values(value).reduce((acc, curr) => acc + curr, 0);
    const newTotal = total - value[field] + newValue;

    if (newTotal <= 510) {
      await onChange(field, newValue);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-2 bg-gray-100 p-4 border border-gray-100 rounded-lg">
      <Label>Evs - 노력치</Label>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {StatsFields.map((field, index) => (
          <EvsField
            key={field.label}
            id={field.label}
            type="number"
            label={labelText[index]}
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
