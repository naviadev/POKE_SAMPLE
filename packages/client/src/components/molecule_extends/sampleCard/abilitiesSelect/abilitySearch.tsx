import SelectField from "@/components/molecule/selectField/selectField";
import Option from "../../../../../common/interface/option.interface";
import { useState, useEffect } from "react";

interface AbilityProps {
  pokemon: Option | null;
  onAbilityChange: (ability: string | null) => void;
}

const AbilitySearch: React.FC<AbilityProps> = ({
  pokemon,
  onAbilityChange,
}) => {
  const [abilityOption, setAbilityOption] = useState<Option[] | undefined>();
  const [cache, setCache] = useState<Map<number, Option[]>>(new Map());

  useEffect(() => {
    if (pokemon) {
      const cachedOptions = cache.get(pokemon.value);
      if (cachedOptions) {
        setAbilityOption(cachedOptions);
      } else {
        fetch(`http://localhost:3001/abilities/${pokemon.value}`)
          .then((response) => response.json())
          .then((data) => {
            const options = data.abilities.map((value: string, index: number) => ({
              label: value,
              value: index,
            }));
            setAbilityOption(options);
            setCache((prevCache) => new Map(prevCache).set(pokemon.value, options));
          });
      }
    }
  }, [pokemon, cache]);

  return (
    <SelectField
      id="pokemon"
      onFocus={() => {}}
      options={abilityOption}
      onChange={onAbilityChange}
      label="특성"
      placeholder="포켓몬을 먼저 골라주세요"
    />
  );
};

export default AbilitySearch;
