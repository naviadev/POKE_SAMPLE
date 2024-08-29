import { Button } from "@/components/atom/shad/button";
import { CardFooter } from "@/components/atom/shad/card";
interface CardFooterProps {
  approveName: string;
  cancelName: string;
  approveEvent?: () => void;
}

const CardFooterView: React.FC<CardFooterProps> = ({
  approveName,
  cancelName,
  approveEvent
}) => {
  return (
    <CardFooter className="justify-center gap-32">
      <Button variant="outline">{cancelName}</Button>
      <Button onClick={approveEvent}>{approveName}</Button>
    </CardFooter>
  );
};
export default CardFooterView;
