import { Button } from "@/components/atom/shad/button";

interface MenuButtonProps {
  text: string;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ text, onClick }) => {
  return (
    <div className="w-300">
      <Button onClick={onClick} variant="outline">
        {text}
      </Button>
    </div>
  );
};
export default MenuButton;
