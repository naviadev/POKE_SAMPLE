import useSearchPokemonOptions from "@/custom_component/container/sample/hooks/useSampleCard";
import SelectField from "../molecule/selectField/selectField";

const SearchPokemonForm: React.FC = () => {
  const { pokemonOptionList, isLoading, loadOptions } =
    useSearchPokemonOptions();
  return (
    <SelectField
      id="pokedex"
      isClearable
      isLoading={isLoading}
      onInputChange={loadOptions}
      options={pokemonOptionList}
      placeholder="포켓몬을 검색해주세요"
      styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
      label="Pokedex"
    ></SelectField>
  );
};
export default SearchPokemonForm;
