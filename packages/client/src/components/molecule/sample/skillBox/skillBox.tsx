import React from "react";

interface SkillProps {
  name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
  return (
    <div className="w-32 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
      {name}
    </div>
  );
};

export default Skill;
