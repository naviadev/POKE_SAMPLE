import React from "react";
import useSearchPokemonOptions from "./hooks/useSampleCard";
import SelectField from "@/components/molecule/selectField/selectField_search";
import Option from "../../../../../common/interface/option.interface";
import { useSampleCard } from "@/components/organism/postSampleCard/hooks/useSampleCard";
import { Type } from "@client/common/interface/type.interface";

interface SearchPokemonFormProps {
  onInputChange?: (pokemon: Option | null) => void;
  className?: string;
  setType: (type: Type | Type[] | null) => void;
}

const SearchPokemonForm: React.FC<SearchPokemonFormProps> = ({
  onInputChange,
  className,
  setType,
}) => {
  const { pokemonOptionList, isLoading, loadOptions, getPokemonTypes } =
    useSearchPokemonOptions();

  //Provider Import 구문. Props 최소화.
  const { state, dispatch } = useSampleCard();
  return (
    <SelectField
      id="pokedex"
      isClearable
      isLoading={isLoading}
      value={state.pokemon}
      onInputChange={loadOptions}
      onChange={(pokemon) => {
        // x 버튼을 누르면 값이 빌 수 있도록 dispatch를 가장 먼저 실행. null이라면 type까지 가져올 수 있도록 getPokemonTypes 함수 실행
        setType(null);
        dispatch({ type: "SET_POKEMON", payload: pokemon });
        if (pokemon !== null) {
          getPokemonTypes(pokemon.value, setType);
        }
      }}
      options={pokemonOptionList}
      placeholder="포켓몬 검색"
      styles={{
        menu: (provided: any) => ({
          ...provided,
          zIndex: 9999,
          width: "100%",
          maxWidth: "600px", // 최대 너비 설정
          minWidth: "300px", // 최소 너비 설정
          "@media(max-width: 768px)": {
            maxWidth: "100%",
          },
        }),
        control: () => ({}),
      }}
      className={`${className} w-full sm:w-1/2 lg:w-1/3`} // 반응형 클래스 추가
    />
  );
};

export default SearchPokemonForm;
