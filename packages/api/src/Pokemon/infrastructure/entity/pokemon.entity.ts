import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('pokemon')
export class PokemonEntity {
  @PrimaryColumn()
  pokedex: number;

  @Column({ nullable: true })
  name: string;
}
