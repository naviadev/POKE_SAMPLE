import { Pokemon } from 'src/pokemon/domain/entity/pokemon';
import { PokemonDTO } from 'src/pokemon/presentation/DTO/pokemon.dto';

export const transformToDTO = (pokemon: Pokemon): PokemonDTO => {
  const dto = new PokemonDTO();
  dto.pokedex = pokemon.getPokedex().getValue();
  dto.name = pokemon.getName().getValue();
  return dto;
};
