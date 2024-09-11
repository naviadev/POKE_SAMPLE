import FormField from "@/components/molecule/formField/formField";
interface FormSectionProps {
  id: string;
  password: string;
  onIdChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}
const NonMemeberLoginForm: React.FC<FormSectionProps> = ({
  id,
  password,
  onIdChange,
  onPasswordChange,
}) => {
  return (
    <div className="flex gap-4 flex-end p-6">
      <FormField
        id="id"
        type="text"
        label="ID"
        value={id}
        onChange={(e) => onIdChange(e.target.value)}
      />
      <FormField
        id="password"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
    </div>
  );
};
export default NonMemeberLoginForm;
