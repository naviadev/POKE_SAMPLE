import { Input } from "@/components/atom/shad/input";
import { ChangeEventHandler } from "react";

export interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
const FormField: React.FC<FormFieldProps> = ({
  id,
  type,
  value,
  onChange,
  label,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input id={id} type={type} value={value} onChange={onChange}></Input>
    </div>
  );
};
export default FormField;