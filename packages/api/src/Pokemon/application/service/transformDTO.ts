import { Pokemon } from 'src/Pokemon/domain/entity/pokemon';
import { PokemonDTO } from 'src/Pokemon/presentation/DTO/pokemon.dto';

export const transformToDTO = (pokemon: Pokemon): PokemonDTO => {
  const dto = new PokemonDTO();
  dto.pokedex = pokemon.getPokedex().getValue();
  dto.name = pokemon.getName().getValue();
  return dto;
};
