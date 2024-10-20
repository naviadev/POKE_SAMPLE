import { Input } from "@/components/atom/shad/input";
import { Label } from "@/components/atom/shad/label";
import { ChangeEventHandler } from "react";

export interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  value: string | number;
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
    <div className="w-full">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={onChange}></Input>
    </div>
  );
};
export default FormField;
