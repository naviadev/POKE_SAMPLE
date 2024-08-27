import { CardContent } from "@/components/atom/shad/card";
interface PostCardProps {
  children: React.ReactNode;
  className: string;
}
const CardContentView: React.FC<PostCardProps> = ({ children, className }) => {
  return <CardContent className={className}>{children}</CardContent>;
};
export default CardContentView;
