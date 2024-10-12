import { MovesEntity } from 'src/moves/infrastructure/entity/moves.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PokemonEntity } from '../common/pokemon.entity';

@Entity('pokemon_moves')
export class PokemonMoves {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PokemonEntity, (pokemon) => pokemon.pokedex)
  @JoinColumn({ name: 'pokedex' })
  pokedex: number;

  @ManyToOne(() => MovesEntity, (move) => move.id)
  @JoinColumn({ name: 'moves_id' })
  moves_id: number;
}
