import { useState } from "react";
import { Stats } from "../../../../../common/data/stats";
import Option from "../../../../../common/interface/option.interface";

const usePostSampleCard = () => {
  const [title, setTitle] = useState<string>("");
  const [pokemon, setPokemon] = useState<Option | null>(null);
  const [ability, setAbility] = useState<string | null>(null);
  const [item, setItem] = useState<Option | null>(null);
  const [content, setContent] = useState<string>("");
  const [tera, setTera] = useState<string>("");
  const [stats, setStats] = useState<Stats>({
    H: 31,
    A: 31,
    B: 31,
    C: 31,
    D: 31,
    S: 31,
  });
  const [evStats, setEvStats] = useState<Stats>({
    H: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    S: 0,
  });

  const handleStatChange = (field: string, value: number) => {
    setStats((prevStats) => ({
      ...prevStats,
      [field]: value,
    }));
  };

  const handlePokemonChange = (pokedex: Option | null) => {
    setPokemon(pokedex);
  };

  const handleTeraChange = (teraType: string) => {
    setTera(teraType)
  }

  const handleAbility = (ability: string | null) => {
    setAbility(ability);
  };

  const handleItem = (item: Option | null) => {
    setItem(item);
  };

  const handleEvStatChange = (field: string, value: number) => {
    setEvStats((prevStats) => ({
      ...prevStats,
      [field]: value,
    }));
  };

  return {
    title,
    setTitle,
    pokemon,
    setPokemon,
    ability,
    setAbility,
    item,
    setItem,
    content,
    setContent,
    tera,
    setTera,
    stats,
    setStats,
    evStats,
    setEvStats,
    handleStatChange,
    handlePokemonChange,
    handleAbility,
    handleItem,
    handleEvStatChange,
    handleTeraChange,
  };
};

export default usePostSampleCard;
