import React from "react";
import useSearchPokemonOptions from "./hooks/useSampleCard";
import SelectField from "@/components/molecule/selectField/selectField";

const SearchPokemonForm: React.FC = () => {
  const { pokemonOptionList, isLoading, loadOptions } =
    useSearchPokemonOptions();

  return (
    <SelectField
      id="pokedex"
      isClearable
      isLoading={isLoading}
      onInputChange={loadOptions} // 비동기 검색어 처리 함수 전달
      options={pokemonOptionList}
      placeholder="포켓몬을 검색해주세요"
      styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
      label="Pokedex"
    />
  );
};

export default SearchPokemonForm;
