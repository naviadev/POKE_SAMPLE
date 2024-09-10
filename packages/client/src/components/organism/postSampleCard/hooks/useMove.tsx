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

  const submitMoves = async () => {
    try {
      const response = await fetch("/api/moves", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ moves }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit moves");
      }

      // Handle success
      console.log("Moves submitted successfully");
    } catch (error) {
      console.error("Error submitting moves:", error);
    }
  };

  return {
    moves,
    handleMoveChange,
    submitMoves,
  };
};

export default useMoveSelect;
