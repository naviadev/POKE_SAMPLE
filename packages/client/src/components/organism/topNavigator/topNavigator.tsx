"use client";
import MenuButton from "@/components/molecule/menuButton/menuButton";
import Logo from "@/components/molecule/logo/logo";

const TopNavigator = () => {
  const menuList = [
    { text: "샘플", href: "/sample" },
    { text: "파티", href: "/party" },
    { text: "계산기", href: "/calculator" },
  ];

  return (
    <header className="sticky top-0 bg-white flex justify-center items-center p-4 border-b w-full z-50">
      <div className="flex flex-col sm:flex-row justify-between w-full max-w-7xl px-4">
        <div className="flex justify-between items-center w-full sm:w-auto space-x-4">
          <Logo />
          <div className="flex space-x-2 sm:space-x-4">
            {menuList.map(({ text, href }) => (
              <MenuButton
                key={text}
                className="w-16 sm:w-20 h-8 sm:h-10"
                text={text}
                href={href}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <div className="w-16 sm:w-20 h-8 sm:h-10 bg-gray-300 rounded"></div>
          <div className="w-16 sm:w-20 h-8 sm:h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigator;
