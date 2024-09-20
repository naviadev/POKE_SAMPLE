interface DivInH2Props {
  divClassName?: string; // div에 적용할 클래스 이름
  h2ClassName?: string; // h2에 적용할 클래스 이름
  children: React.ReactNode; // h2의 내용
}

const DivInH2: React.FC<DivInH2Props> = ({
  divClassName,
  h2ClassName,
  children,
}) => {
  return (
    <div className={divClassName}>
      <h2 className={h2ClassName}>{children}</h2>
    </div>
  );
};

export default DivInH2;
