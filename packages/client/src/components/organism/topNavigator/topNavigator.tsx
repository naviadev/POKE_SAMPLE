"use client"
import MenuButton from "@/components/molecule/menuButton/menuButton";
import Logo from "@/components/molecule/logo/logo";

const TopNavigator = () => {
  const menuList = [
    { text: "샘플", href: "/sample" }, // "샘플" 버튼을 "/"로 이동
    { text: "파티", href: "/party" },
    { text: "계산기", href: "/calculator" },
  ];

  return (
    <header className="sticky top-0 bg-white flex justify-center items-center p-4 border-b w-screen z-50">
      <div className="flex justify-between w-11/12">
        {/* 왼쪽 메뉴 */}
        <div className="flex space-x-4">
          {/* 임의의 Logo DIV */}
          <Logo />
          {/* menuList 동적 생성 */}
          {menuList.map(({ text, href }) => (
            <MenuButton
              key={text}
              className="w-24 h-10"
              text={text}
              href={href}
            />
          ))}
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
