import MenuButton from "@/components/molecule/menuButton/menuButton";
import { Button } from "@/components/atom/shad/button";

const TopNavigator = () => {
  const menuList = ["샘플", "파티", "계산기"];
  return (
    <header className="flex justify-center items-center p-4 border-b w-screen">
      <div className="flex justify-between w-11/12">
        {/* 왼쪽 메뉴 */}
        <div className="flex space-x-4">
          {/* 임의의 Logo DIV */}
          <div id="logo" className="w-40 h-12 border">
            Pokesample Logo
          </div>

          {/* menuList 동적 생성 */}
          <>
            {menuList.map((value) => {
              return (
                <Button key={value} className="w-24 h-10">
                  {value}
                </Button>
              );
            })}
          </>
        </div>

        {/* 오른쪽 메뉴 */}
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
