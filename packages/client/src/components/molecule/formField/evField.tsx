import React, { ChangeEventHandler } from "react";
import { Input } from "@/components/atom/shad/input";
import { Label } from "@/components/atom/shad/label";
import { Button } from "@/components/atom/shad/button";

export interface EvsFieldProps {
  id: string;
  type: string;
  label: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onMax: () => void;
  onMin: () => void;
}

const EvsField: React.FC<EvsFieldProps> = ({
  id,
  type,
  label,
  value,
  onChange,
  onMax,
  onMin,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-col">
        <Label htmlFor={id} className="mb-1 text-red-400">
          {label}
        </Label>
        <div className="flex items-center space-x-2">
          <Input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            min={0}
            max={252}
            className="w-24"
          />
          <Button
            variant="outline"
            type="button"
            onClick={onMin}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-300"
          >
            Min
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={onMax}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-300"
          >
            Max
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EvsField;
