import { Dispatch, SetStateAction } from "react";
import FormField from "../molecule/formField/formField";
import Option from "../../../common/interface/option.interface";

interface TitleFormProps {
  value: string;
  onChange: any;
}

const TitleFormField: React.FC<TitleFormProps> = ({ value, onChange }) => {
  return (
    <FormField
      id="title"
      type="text"
      label="제목"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    ></FormField>
  );
};

export default TitleFormField;
