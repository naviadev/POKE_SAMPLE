import { MovesEntity } from 'src/moves/infrastructure/entity/moves.entity';
import { TypesEntity } from 'src/read_orm_entity/types.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity('pokemon')
export class PokemonEntity {
  @PrimaryColumn()
  pokedex: number;

  @Column({ nullable: true })
  name: string;

  @ManyToMany(() => TypesEntity, { nullable: false })
  @JoinTable({
    name: 'pokemon_types',
    joinColumn: {
      name: 'pokedex',
      referencedColumnName: 'pokedex',
    },
    inverseJoinColumn: {
      name: 'type_id',
      referencedColumnName: 'type_id',
    },
  })
  types: TypesEntity[];

  @ManyToMany(() => MovesEntity, { nullable: false })
  @JoinTable({
    name: 'pokemon_moves',
    joinColumn: {
      name: 'pokedex',
      referencedColumnName: 'pokedex',
    },
    inverseJoinColumn: {
      name: 'moves_id',
      referencedColumnName: 'id',
    },
  })
  moves: MovesEntity[];
}
