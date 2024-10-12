import { useState, useRef, useCallback } from "react";
import debounce from "lodash.debounce";

import { Pokemon } from "../../../../../../common/interface/pokemon.interface";
import Option from "../../../../../../common/interface/option.interface";
import { API_URL } from "@client/common/enum/apiUrl.enum";

/**
 * @pokemonOptionList : 포켓몬 검색 리스트. Select 컴포넌트에 출력될 값들을 나타낸다.
 * @isLoading : 로딩 처리 관리.
 * @cache : 반복적인 데이터 요청을 방지하기 위해 캐싱.
 */
const useSearchPokemonOptions = () => {
  const [pokemonOptionList, setPokemonOptionList] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const cache = useRef<{ [key: string]: Option[] }>({});

  const getPokemonTypes = async (pokedex: number) => {
    const response = await fetch(`${API_URL.TYPE_SEARCH}/${pokedex}`);

  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadOptions = useCallback(
    debounce(async (inputValue: string) => {
      if (!inputValue) return;
      if (cache.current[inputValue]) {
        setPokemonOptionList(cache.current[inputValue]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3001/pokemon/query/search/${inputValue}`
        );

        const data: Pokemon[] = await response.json();

        const formattedOptions = data.map((pokemon) => ({
          value: pokemon.pokedex,
          label: pokemon.name,
        }));

        cache.current[inputValue] = formattedOptions;
        console.log(formattedOptions);

        setPokemonOptionList(formattedOptions);
      } catch (error) {
        console.error("검색 실패:", error);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );

  return { pokemonOptionList, isLoading, loadOptions };
};

export default useSearchPokemonOptions;
