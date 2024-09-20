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

const SampleDesForm: React.FC<SampleDesFormProps> = ({ labelText, pText }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger>{pText}</TooltipTrigger>
        <TooltipContent>{labelText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SampleDesForm;
