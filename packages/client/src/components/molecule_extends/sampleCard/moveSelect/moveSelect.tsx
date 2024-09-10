import React, { useState } from "react";
import SelectField from "@/components/molecule/selectField/selectField";
import { optionsArray } from "../../../../../common/data/move/moveOptions";
import Option from "@client/common/interface/option.interface";

interface MoveSelectProps {
  moves: Option[];
  onMoveChange: (index: number, move: Option) => void;
}

const MoveSelect: React.FC<MoveSelectProps> = ({ moves, onMoveChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {moves.map((move, index) => (
        <SelectField
          key={index}
          label={`기술 ${index + 1}`}
          placeholder="기술을 입력해주세요"
          onChange={(newMove) => onMoveChange(index, newMove)}
          options={optionsArray}
        />
      ))}
    </div>
  );
};

export default MoveSelect;
