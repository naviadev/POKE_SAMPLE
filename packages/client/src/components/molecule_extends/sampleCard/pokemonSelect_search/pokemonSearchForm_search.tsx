import React from "react";
import useSearchPokemonOptions from "./hooks/useSampleCard";
import SelectField from "@/components/molecule/selectField/selectField_search";
import Option from "../../../../../common/interface/option.interface";
import { useSampleCard } from "@/components/organism/postSampleCard/hooks/useSampleCard";

interface SearchPokemonFormProps {
  onInputChange?: (pokemon: Option | null) => void;
  className?: string;
}

const SearchPokemonForm: React.FC<SearchPokemonFormProps> = ({
  onInputChange,
  className,
}) => {
  const { pokemonOptionList, isLoading, loadOptions } =
    useSearchPokemonOptions();

  //Provider Import 구문. Props 최소화.
  const { state, dispatch } = useSampleCard();
  return (
    <SelectField
      id="pokedex"
      isClearable
      isLoading={isLoading}
      value={state.pokemon}
      onInputChange={loadOptions} // 비동기 검색어 처리 함수 전달
      onChange={(pokemon) => {
        // Fetch 구문으로 타입 불러오기.
        
        dispatch({ type: "SET_POKEMON", payload: pokemon });
      }}
      options={pokemonOptionList}
      placeholder="포켓몬 검색"
      styles={{
        menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
        control: () => ({}),
      }}
      className={className}
    />
  );
};

export default SearchPokemonForm;
