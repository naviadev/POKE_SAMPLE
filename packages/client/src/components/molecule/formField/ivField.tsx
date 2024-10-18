import React, { ChangeEventHandler } from "react";
import { Input } from "@/components/atom/shad/input";
import { Label } from "@/components/atom/shad/label";
import { Button } from "@/components/atom/shad/button";

export interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const IvField: React.FC<FormFieldProps> = ({
  id,
  type,
  label,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    // 숫자만 입력되도록 제한하고 0에서 31 사이의 값만 허용
    if (/^\d*$/.test(newValue)) {
      let numValue = Number(newValue);
      if (numValue >= 0 && numValue <= 31) {
        onChange(e); // 0에서 31 사이일 경우에만 onChange 호출
      } else {
        e.target.value = "31";
        onChange(e);
      }
    }
  };

  return (
    <div className="flex  space-x-2 ">
      <div className="flex flex-col justify-center items-center">
        <Label htmlFor={id} className={`mb-1 text-statsColor-${label}`}>
          {label}
        </Label>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          min={0}
          max={31}
          className="w-16 text-center border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
};

export default IvField;
