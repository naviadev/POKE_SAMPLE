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
  className?: string;
  value?: Option | string | null;
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
  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      width: "100%",
      minWidth: "220px", // 최소 너비 설정
    }),
    control: (provided: any) => ({
      ...provided,
      minHeight: "38px",
      height: "38px",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      height: "38px",
      padding: "0 6px",
    }),
    input: (provided: any) => ({
      ...provided,
      margin: "0px",
    }),
    // 옵션 메뉴가 컨테이너를 벗어나도록 설정
    menu: (provided: any) => ({
      ...provided,
      width: "max-content",
      minWidth: "100%",
    }),
  };

  return (
    <div>
      {/* 고정 높이 추가 */}
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
        styles={{ ...customStyles, ...styles }}
        className={`${className} w-full`}
      />
    </div>
  );
};

export default SelectField;
