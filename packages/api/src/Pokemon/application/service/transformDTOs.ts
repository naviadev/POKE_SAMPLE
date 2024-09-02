import { Pokemon } from 'src/pokemon/domain/entity/pokemon';
import { PokemonDTO } from 'src/pokemon/presentation/DTO/pokemon.dto';
import { transformToDTO } from './transformDTO';
export const transformToDTOs = (pokemons: Pokemon[]): PokemonDTO[] => {
  return pokemons.map(transformToDTO);
};
