import { Button } from "@/components/atom/shad/button";
import { CardFooter } from "@/components/atom/shad/card";
interface CardFooterProps {
  approveName: string;
  cancelName: string;
}

const CardFooterView: React.FC<CardFooterProps> = ({
  approveName,
  cancelName,
}) => {
  return (
    <CardFooter className="justify-center gap-32">
      <Button variant="outline">{cancelName}</Button>
      <Button>{approveName}</Button>
    </CardFooter>
  );
};
export default CardFooterView;
