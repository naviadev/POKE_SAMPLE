import MenuButton from "@/components/molecule/menuButton/menuButton";
import { Button } from "@/components/atom/shad/button";
const TopNavigator = () => {
  return (
      <header className="flex justify-center items-center p-4 border-b w-screen">
        <div className="flex justify-between w-5/6">
        <div className="flex space-x-4">
          {/* 메뉴 버튼 예시 */}
          <div id="logo" className="w-40 h-12 border">
            Pokesample Logo
          </div>
          <Button className="w-24 h-10">샘플</Button>
          <Button className="w-24 h-10">파티</Button>
          <Button className="w-24 h-10">계산기</Button>
        </div>
        <div className="flex space-x-4">
          {/* 임시 메뉴 */}
          <div className="w-20 h-10 bg-gray-300 rounded"></div>
          <div className="w-20 h-10 bg-gray-300 rounded"></div>
        </div>
        </div>
      </header>    
  );
};

export default TopNavigator;
