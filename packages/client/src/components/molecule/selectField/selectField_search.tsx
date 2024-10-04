import React from "react";
import Select from "react-select";
import Option from "../../../../common/interface/option.interface";
import { Label } from "@/components/atom/shad/label";
import { FiSearch } from "react-icons/fi"; // 돋보기 아이콘 추가

interface SelectProps {
  id?: string;
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
    <div className="relative">
      <div className="flex items-center border-b border-gray-500 w-full">
        {/* 돋보기 아이콘 */}
        <FiSearch className="text-gray-500 mr-2" />
        {/* Select 컴포넌트 */}
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
          styles={{
            ...styles,
            control: (provided: any) => ({
              ...provided,
              border: "none",
              boxShadow: "none",
              "&:hover": {
                borderColor: "transparent",
              },
            }),
          }}
          className={`${className} w-full focus:outline-none bg-transparent border-none`}
        />
      </div>
    </div>
  );
};

export default SelectField;
