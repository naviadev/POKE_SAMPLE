import { CardDescription, CardHeader, CardTitle } from "../../atom/shad/card";

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
}
const CardTitleOverView: React.FC<CardHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <CardHeader className={className}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
};
export default CardTitleOverView;
