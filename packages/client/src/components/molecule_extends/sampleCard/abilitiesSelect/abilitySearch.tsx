import SelectField from "@/components/molecule/selectField/selectField";
import Option from "../../../../../common/interface/option.interface";
import { useState } from "react";

interface AbilityProps {
  pokemon: Option | null;
  onAbilityChange: (ability: string | null) => void;
}

const AbilitySearch: React.FC<AbilityProps> = ({
  pokemon,
  onAbilityChange,
}) => {
  const [abilityOption, setAbilityOption] = useState<Option[] | undefined>();
  const cache = [];
  const handleFocus = async () => {
    if (pokemon) {
      const data = await fetch(
        `http://localhost:3001/abilities/${pokemon.value}`
      );
      const a = await data.json();
      let option: Option[] = [];
      a.abilities.map((value: string, index: number) => {
        option.push({
          label: value,
          value: index,
        });
      });
      setAbilityOption(option);
    }
  };
  return (
    <SelectField
      id="pokemon"
      onFocus={handleFocus}
      options={abilityOption}
      onChange={onAbilityChange}
      label="특성"
      placeholder="포켓몬을 먼저 골라주세요"
    />
  );
};
export default AbilitySearch;
