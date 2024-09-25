import { API_URL } from "@client/common/enum/apiUrl.enum";
import Option from "@client/common/interface/option.interface";
import { useState } from "react";

const useAdvancedSearch = () => {
  const [pokemon, setPokemon] = useState<Option | null>(null);
  const [sampleType, setSampleType] = useState<Option | null>(null);
  const [item, setItem] = useState<Option | null>(null);
  const [partyType, setPartyType] = useState<Option | null>(null);

  const [title, setTitle] = useState<string | null>(null);
  const [index, setIndex] = useState<string | null>(null);

  const handleFetch = async () => {
    if (!pokemon) return; // pokemon이 없으면 반환
    // 기본 URL 구성
    const urlParts = [`${API_URL.ADVANCED_SEARCH}/pokemon/${pokemon.value}`];

    // 존재하는 값들을 기반으로 데이터를 전달할 수 있게 URL 추가.
    if (sampleType) {
      urlParts.push(`sample_tag/${sampleType.label}`);
    }
    if (partyType) {
      urlParts.push(`party_tag/${partyType.label}`);
    }
    if (title) {
      urlParts.push(`title/${title}`);
    }
    if (index) {
      urlParts.push(`index/${index}`);
    }
    if (item) {
      urlParts.push(`item/${index}`);
    }

    const finalUrl = urlParts.join('/');

    try {
      const response = await fetch(finalUrl);
      // 응답 처리...
    } catch (error) {
      throw error;
    }
  };

  return {
    sampleType,
    setSampleType,
    pokemon,
    setPokemon,
    handleFetch,
    setTitle,
    title,
    partyType,
    setPartyType,
    item,
    setItem,
    index,
    setIndex
  };
};

export default useAdvancedSearch;
