import { CardDescription, CardHeader, CardTitle } from "../../atom/shad/card";

interface CardHeaderProps {
  title: string;
  description: string;
}
const CardTitleOverView: React.FC<CardHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
};
export default CardTitleOverView;
