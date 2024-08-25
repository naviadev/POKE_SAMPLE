import { Pokemon } from 'src/Pokemon/domain/entity/pokemon';
import { PokemonDTO } from 'src/Pokemon/presentation/DTO/pokemon.dto';
import { transformToDTO } from './transformDTO';
export const transformToDTOs = (pokemons: Pokemon[]): PokemonDTO[] => {
  return pokemons.map(transformToDTO);
};
