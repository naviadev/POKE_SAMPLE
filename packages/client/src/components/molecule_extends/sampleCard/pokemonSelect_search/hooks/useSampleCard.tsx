import { useState, useRef, useCallback } from "react";
import debounce from "lodash.debounce";

import { Pokemon } from "../../../../../../common/interface/pokemon.interface";
import Option from "../../../../../../common/interface/option.interface";
import { API_URL } from "@client/common/enum/apiUrl.enum";
import getFetch from "@client/common/service/getFetch";
import { Type } from "@client/common/interface/type.interface";

/**
 * @pokemonOptionList : 포켓몬 검색 리스트. Select 컴포넌트에 출력될 값들을 나타낸다.
 * @isLoading : 로딩 처리 관리.
 * @cache : 반복적인 데이터 요청을 방지하기 위해 캐싱.
 */
const useSearchPokemonOptions = () => {
  const [pokemonOptionList, setPokemonOptionList] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 캐싱된 검색 옵션.
  const cache = useRef<{ [key: string]: Option[] }>({});

  // 검색 완료한 포켓몬의 타입을 가져오는 함수.
  const getPokemonTypes = useCallback(
    async (pokedex: number, setType: (type: Type | Type[]) => void) => {
      const result = await getFetch<Type | Type[]>(
        `${API_URL.TYPE_SEARCH}/${pokedex}`
      );
      result !== null ? setType(result) : null;
    },
    []
  );

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

  return { pokemonOptionList, isLoading, loadOptions, getPokemonTypes };
};

export default useSearchPokemonOptions;
