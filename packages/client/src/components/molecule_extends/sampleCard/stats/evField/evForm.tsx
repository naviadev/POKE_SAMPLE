import React from "react";
import EvsField from "@/components/molecule/formField/evField";
import Stats from "@client/common/data/stats";
import { Label } from "@/components/atom/shad/label";
import StatFormProps from "../props/statsField.props";
import { StatsFields, labelText } from "../data/label";

const EvsForm: React.FC<StatFormProps> = ({ value, onChange }) => {
  const handleMax = (field: keyof Stats) => () => {
    const total = Object.values(value).reduce((acc, curr) => acc + curr, 0);
    const max = 510 - (total - value[field]);
    onChange(field, Math.min(252, max));
  };

  const handleMin = (field: keyof Stats) => () => {
    onChange(field, 0);
  };

  const handleChange = async (field: keyof Stats, newValue: number) => {
    if (newValue > 252) {
      newValue = 252;
    }
    const total = Object.values(value).reduce((acc, curr) => acc + curr, 0);
    const newTotal = total - value[field] + newValue;
    if (newTotal <= 510) {
      await onChange(field, newValue);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <Label className="">Evs - 노력치</Label>
      <div className="grid grid-cols-3 gap-2 md:gap-x-24 md:gap-y-6s w-full justify-between">
        {StatsFields.map((field, index) => (
          <EvsField
            key={field.label}
            id={field.label}
            type="string"
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
