import { useState, useRef, useCallback } from "react";
import debounce from "lodash.debounce";

import { Pokemon } from "../../../../common/interface/pokemon.interface";

interface Options {
  value: number;
  label: string;
}

/**
 * @pokemonOptionList : 포켓몬 검색 리스트. Select 컴포넌트에 출력될 값들을 나타낸다.
 * @isLoading : 로딩 처리 관리.
 * @cache : 반복적인 데이터 요청을 방지하기 위해 캐싱.
 */
const useSearchPokemonOptions = () => {
  const [pokemonOptionList, setPokemonOptionList] = useState<Options[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const cache = useRef<{ [key: string]: Options[] }>({});

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
        console.log(data);
        const formattedOptions = data.map((pokemon) => ({
          value: pokemon.pokedex,
          label: pokemon.name,
        }));

        cache.current[inputValue] = formattedOptions;
        setPokemonOptionList(formattedOptions);
      } catch (error) {
        console.error("Failed to fetch options:", error);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );

  return { pokemonOptionList, isLoading, loadOptions };
};

export default useSearchPokemonOptions;
