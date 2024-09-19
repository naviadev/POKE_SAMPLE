interface CircleButtonProps {
  onClick: () => void;
  children: React.ReactElement<any, any>; // label을 children으로 변경

  key: number;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  key,
  onClick,
  children,
}) => {
  return (
    <button
      key={key}
      onClick={onClick}
      className="w-12 h-12 bg-white text-blue-500 rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center translate-x-[-4.5px]"
    >
      {children}
    </button>
  );
};

export default CircleButton;
