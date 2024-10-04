const axios = require('axios');
const fs = require('fs');

// PokeAPI로부터 포켓몬 데이터를 가져오는 함수
async function fetchPokemonType(pokedex) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokedex}`;
  try {
    const response = await axios.get(url);
    const pokemon = response.data;

    // 포켓몬의 타입 정보 추출
    const types = pokemon.types.map(typeSlot => typeSlot.type.name);

    return {
      pokedex: pokedex,
      name: pokemon.name,
      types: types
    };
  } catch (error) {
    console.error(`Error fetching data for pokedex ${pokedex}:`, error);
    return null;  // 에러 발생 시 null 반환
  }
}

// 모든 포켓몬의 타입 정보를 가져오는 함수
async function fetchAllPokemonTypes() {
  const allPokemonTypes = [];

  for (let pokedex = 1; pokedex <= 1025; pokedex++) {
    const pokemonData = await fetchPokemonType(pokedex);
    console.log(pokemonData)
    if (pokemonData) {
      allPokemonTypes.push(pokemonData);
    }
  }

  // JSON 파일로 저장
  fs.writeFileSync('pokemon_types.json', JSON.stringify(allPokemonTypes, null, 2));
  console.log('Pokemon types data saved to pokemon_types.json');
}

// 함수 실행
fetchAllPokemonTypes();
