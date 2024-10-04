import React from "react";
import Select from "react-select";
import Option from "../../../../common/interface/option.interface";
import { Label } from "@/components/atom/shad/label";
interface SelectProps {
  id?: string;
  label?: string; // Label 추가
  isClearable?: boolean;
  isLoading?: boolean;
  onInputChange?: (inputValue: string) => void;
  onChange?: (selectedOption: any) => void;
  options?: Option[];
  placeholder?: string;
  styles?: object;
  onFocus?: () => void; // 추가된 프로퍼티
  className? : string;
  value? : Option | string | null
}

const SelectField: React.FC<SelectProps> = ({
  id = "default-select",
  label = "Select an option",
  isClearable = false,
  isLoading = false,
  onInputChange,
  onChange,
  onFocus,
  value,
  options,
  placeholder = "Select...",
  styles = {},
  className,
}) => {
  const handleInputChange = (inputValue: string) => {
    if (onInputChange) {
      onInputChange(inputValue);
    }
  };
  const handleChange = (selectedOption: any) => {
    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <div>
      {/* <Label htmlFor={id}>{label}</Label> */}
      <Select
        id={id}
        value={value}
        isClearable={isClearable}
        isLoading={isLoading}
        onInputChange={handleInputChange}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        onFocus={onFocus}
        styles={styles}
        className={className} 
      />
    </div>
  );
};

export default SelectField;
