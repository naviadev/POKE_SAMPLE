import { Label } from "@/components/atom/shad/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atom/shad/tooltip";

interface SampleDesFormProps {
  labelText: string;
  pText: string;
}
// const SampleDesForm: React.FC<SampleDesFormProps> = ({ labelText, pText }) => {
//   return (
//     <div className="flex flex-col items-center space-y-2 ">
//       <Label htmlFor="" className="text-gray-500">
//         {labelText}
//       </Label>
//       <p className="font-medium">{pText}</p>
//     </div>
//   );
// };

const SampleDesForm : React.FC<SampleDesFormProps> = ({labelText, pText}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{pText}</TooltipTrigger>
        <TooltipContent>
          <p>{labelText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SampleDesForm;
