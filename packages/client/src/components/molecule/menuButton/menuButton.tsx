import { Button } from "@/components/atom/shad/button";

interface MenuButtonProps {
  text: string;
  onClick?: () => void;
  className: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <div className="w-300">
      <Button onClick={onClick} variant="outline" className={className}>
        {text}
      </Button>
    </div>
  );
};
export default MenuButton;
