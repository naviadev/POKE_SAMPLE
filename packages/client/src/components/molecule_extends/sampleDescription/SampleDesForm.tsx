import { Label } from "@/components/atom/shad/label";

interface SampleDesFormProps {
  labelText: string;
  pText: string;
}
const SampleDesForm: React.FC<SampleDesFormProps> = ({ labelText, pText }) => {
  return (
    <div className="flex flex-col items-center space-y-2 ">
      <Label htmlFor="" className="text-gray-500">
        {labelText}
      </Label>
      <p className="font-medium">{pText}</p>
    </div>
  );
};
export default SampleDesForm;
