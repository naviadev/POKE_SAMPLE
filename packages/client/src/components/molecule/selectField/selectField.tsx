import React from "react";
import Select from "react-select";
import { OptionsOrGroups } from "react-select";

interface Options {
  value: number;
  label: string;
}

interface SelectProps {
  id?: string;
  label?: string; // Label 추가
  isClearable?: boolean;
  isLoading?: boolean;
  onInputChange?: (inputValue: string) => void;
  options: Options[];
  placeholder?: string;
  styles?: object;
}

const SelectField: React.FC<SelectProps> = ({
  id = "default-select",
  label = "Select an option",
  isClearable = false,
  isLoading = false,
  onInputChange,
  options,
  placeholder = "Select...",
  styles = {},
}) => {
  const handleInputChange = (inputValue: string) => {
    if (onInputChange) {
      onInputChange(inputValue);
    }
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Select
        id={id}
        isClearable={isClearable}
        isLoading={isLoading}
        onInputChange={handleInputChange} 
        options={options}
        placeholder={placeholder}
        styles={styles}
      />
    </div>
  );
};

export default SelectField;
