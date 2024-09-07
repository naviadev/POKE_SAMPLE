interface StatTextProps {
  value: string;
  label: string;
}

const StatText: React.FC<StatTextProps> = ({ value, label }) => {
  return (
    <div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
};

export default StatText;
