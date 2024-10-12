import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pokemon_abilities')
export class PokemonAbilitiesEntity {
  @PrimaryGeneratedColumn()
  pokedex: number;
  @Column({ type: 'json' })
  abilities: any;
}
