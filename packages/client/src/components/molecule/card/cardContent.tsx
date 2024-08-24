import { CardContent } from "@/components/atom/shad/card";
interface PostCardProps {
  children: React.ReactNode;
}
const CardContentView: React.FC<PostCardProps> = ({ children }) => {
  return <CardContent>{children}</CardContent>;
};
export default CardContentView;
