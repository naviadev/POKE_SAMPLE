import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('pokemon_abilities')
export class PokemonAbilitiesEntity {
  @PrimaryColumn()
  pokedex: number;
  @Column('json', { nullable: true })
  abilities: string[];
}
