import React, { useState } from "react";
import { useSampleCard } from "./hooks/useSampleCard";
import useMoveSelect from "./hooks/useMove";
import PokemonImageType from "@/components/molecule_extends/pokemonImageType/pokemonImageType";
import ItemSelect from "@/components/molecule_extends/sampleCard/itemSelect/itemSelect";
import NatureSelect from "@/components/molecule_extends/sampleCard/natureSelect/natureSelect";
import AbilitySearch from "@/components/molecule_extends/sampleCard/abilitiesSelect/abilitySearch";
import { Type } from "@client/common/interface/type.interface";
import { motion } from "framer-motion";

interface PostSampleCardProps {
  type: Type | Type[] | null;
}

const PostSampleCard: React.FC<PostSampleCardProps> = ({ type }) => {
  const { state, dispatch } = useSampleCard();
  const { moves, handleMoveChange } = useMoveSelect();
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const handleStatChange = (field: string, value: number) => {
    dispatch({ type: "SET_IV_STAT", payload: { field, value } });
  };

  const handleEvStatChange = (field: string, value: number) => {
    dispatch({ type: "SET_EV_STAT", payload: { field, value } });
  };

  const barColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
  ];
  const barTitles = ["HP", "Attack", "Defense", "Speed"];

  return (
    <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg flex flex-col space-y-8 justify-center items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <PokemonImageType
            pokedex={state.pokemon ? state.pokemon.value : null}
            type={type ? type : null}
          />
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
          <ItemSelect onItemChange={() => {}} />
          <NatureSelect onNatureChange={() => {}} />
          <AbilitySearch onAbilityChange={() => {}} pokemon={state.pokemon} />
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-2">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="w-full h-10 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        {barColors.map((color, index) => (
          <motion.div
            key={index}
            className={`w-full h-16 ${color} rounded-lg cursor-pointer flex items-center justify-center text-white font-bold text-lg`}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveModal(index)}
          >
            {barTitles[index]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PostSampleCard;
