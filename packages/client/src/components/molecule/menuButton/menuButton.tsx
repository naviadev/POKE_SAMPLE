import { Button } from "@/components/atom/shad/button";
import { useRouter } from "next/navigation";

interface MenuButtonProps {
  // 텍스트
  text: string;
  // 버튼에 추가될 스타일
  className: string;
  // 이동할 링크
  href?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ text, className, href }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };
  return (
    <div className="w-300">
      <Button onClick={handleClick} variant="outline" className={className}>
        {text}
      </Button>
    </div>
  );
};
export default MenuButton;
