import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atom/shad/tooltip";
import { tagNames } from "@client/common/enum/tagNames.enum";

interface SampleDesFormProps {
  labelText: string;
  pText: string | number;
}

const SampleDesForm: React.FC<SampleDesFormProps> = ({ labelText, pText }) => {
  let content;
  if (typeof pText === "number") {
    content = tagNames[pText];
  } else {
    content = pText;
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger>{content}</TooltipTrigger>
        <TooltipContent>{labelText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SampleDesForm;
