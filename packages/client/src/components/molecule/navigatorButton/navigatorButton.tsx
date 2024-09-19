import React, { ReactElement, useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  BiChevronUpCircle,
  BiEditAlt,
  BiSearch,
  BiHomeAlt2,
} from "react-icons/bi";

interface ButtonProps {
  label: ReactElement<any, any>;
  onClick: () => void;
}

const NavigatorButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuAnimation = useSpring({
    transform: isOpen ? "translateY(-40px)" : "translateY(0px)",
    opacity: isOpen ? 1 : 0,
  });

  const buttons: ButtonProps[] = [
    {
      label: <BiEditAlt />,
      onClick: () => {},
    },
    { label: <BiSearch />, onClick: () => console.log("검색 클릭") },
    { label: <BiEditAlt />, onClick: () => (window.location.href = "/sample") },
    {
      label: <BiChevronUpCircle />,
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col justify-center items-center">
      <button
        onClick={toggleMenu}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold transition-colors duration-300 ${
          isOpen
            ? "bg-blue-700 text-white"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        +
      </button>
      <animated.div
        style={menuAnimation}
        className="absolute bottom-12 right-0 flex flex-col items-end space-y-5"
      >
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className="w-12 h-12 bg-white text-blue-500 rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center translate-x-[-4.5px]"
          >
            {button.label}
          </button>
        ))}
      </animated.div>
    </div>
  );
};

export default NavigatorButton;
