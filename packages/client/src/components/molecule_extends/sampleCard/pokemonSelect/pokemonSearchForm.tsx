import React from "react";
import useSearchPokemonOptions from "./hooks/useSampleCard";
import SelectField from "@/components/molecule/selectField/selectField";
import Option from "../../../../../common/interface/option.interface";

interface SearchPokemonFormProps {
  onPokemonChange: (pokmon: Option | null) => void;
  onInputChange?: (pokmon: Option | null) => void;
  className?: string;
}

const SearchPokemonForm: React.FC<SearchPokemonFormProps> = ({
  onPokemonChange,
  onInputChange,
  className,
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
      placeholder="포켓몬 검색"
      styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
      label="Pokemon"
      className={className}
    />
  );
};

export default SearchPokemonForm;
