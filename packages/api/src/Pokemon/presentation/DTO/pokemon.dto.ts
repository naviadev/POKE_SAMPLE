import { IsNumber, IsString } from 'class-validator';

export class PokemonDTO {
  @IsNumber()
  pokedex: number;
  @IsString()
  name: string;
}
