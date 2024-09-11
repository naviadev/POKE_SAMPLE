import { useState } from "react";
import Option from "@client/common/interface/option.interface";

// Define the hook
const useMoveSelect = () => {
  const [moves, setMoves] = useState<Option[]>([
    { value: 0, label: "Select Move 1" },
    { value: 0, label: "Select Move 2" },
    { value: 0, label: "Select Move 3" },
    { value: 0, label: "Select Move 4" },
  ]);

  const handleMoveChange = (index: number, newMove: Option) => {
    const updatedMoves = [...moves];
    updatedMoves[index] = newMove;
    setMoves(updatedMoves);
  };


  return {
    moves,
    handleMoveChange,
  };
};

export default useMoveSelect;
