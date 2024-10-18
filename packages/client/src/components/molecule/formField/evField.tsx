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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // 숫자만 입력되도록 제한
    if (/^\d*$/.test(newValue)) {
      onChange(e);
    }
  };
  return (
    <div className="flex items-center space-x-4 justify-center">
      <div className="flex flex-col">
        <Label
          htmlFor={id}
          className="mb-1 text-gray-700 font-medium"
        >
          {label}
        </Label>
        <div className="flex flex-col items-center gap-2 justify-items-center">
          <Input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            // onFocus={handleFocus} // 포커스 되었을 때 빈 값으로 설정
            min={0}
            max={252}
            className="w-20 text-center border border-gray-300 rounded-lg"
          />
          <div className="flex">
            <Button
              type="button"
              onClick={onMin}
              className="bg-red-400 text-white hover:bg-red-600 w-10 h-8 rounded-r-none"
            >
              Min
            </Button>
            <Button
              type="button"
              onClick={onMax}
              className="bg-blue-400 text-white rounded-r-md rounded-l-none hover:bg-blue-600 w-10 h-8  border-blue-400"
            >
              Max
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvsField;
