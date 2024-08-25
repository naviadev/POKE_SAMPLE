import { Dispatch, SetStateAction } from "react";
import FormField from "../molecule/formField/formField";

interface TitleFormProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
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
