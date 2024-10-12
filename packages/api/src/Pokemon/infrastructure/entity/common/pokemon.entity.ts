import { TypesEntity } from 'src/read_orm_entity/types.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity('pokemon')
export class PokemonEntity {
  @PrimaryColumn()
  pokedex: number;

  @Column({ nullable: true })
  name: string;

  @ManyToMany(() => TypesEntity)
  @JoinTable({
    name: 'pokemon_types', // 중간 테이블 이름
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
}
