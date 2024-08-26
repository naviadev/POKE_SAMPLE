import React from "react";
import useSearchPokemonOptions from "./hooks/useSampleCard";
import SelectField from "@/components/molecule/selectField/selectField";
import Option from "../../../../common/interface/option.interface";

interface SearchPokemonFormProps {
  onPokemonChange: (pokmon: Option | null) => void;
}

const SearchPokemonForm: React.FC<SearchPokemonFormProps> = ({
  onPokemonChange,
}) => {
  const { pokemonOptionList, isLoading, loadOptions } =
    useSearchPokemonOptions();

  return (
    <SelectField
      id="pokedex"
      isClearable
      isLoading={isLoading}
      onInputChange={loadOptions} // 비동기 검색어 처리 함수 전달
      onChange={onPokemonChange}
      options={pokemonOptionList}
      placeholder="포켓몬을 검색해주세요"
      styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
      label="Pokemon"
    />
  );
};

export default SearchPokemonForm;
