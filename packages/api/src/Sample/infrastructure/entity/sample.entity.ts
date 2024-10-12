import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ItemEntity } from '../../../read_orm_entity/item.entity';
import { NatureEntity } from '../../../read_orm_entity/nature.entity';
import { TypesEntity } from '../../../read_orm_entity/types.entity';
import { PokemonEntity } from 'src/pokemon/infrastructure/entity/common/pokemon.entity';
import { SampleMovesEntity } from './sample_moves.entity';

@Entity('sample')
export class SampleEntity {
  @PrimaryGeneratedColumn()
  sample_index: number;

  @ManyToOne(
    () => PokemonEntity,
    (pokemon) => {
      pokemon.pokedex;
    },
    { nullable: true },
  )
  pokemon: PokemonEntity;

  @Column({ type: 'varchar', length: 10 })
  abilities: string;

  @Column({ type: 'varchar', length: 20 })
  title: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modified_at: Date;

  @Column({ type: 'varchar', length: 500 })
  content: string;

  // 비회원 작성자를 위한 id 필드 추가
  @Column({ type: 'varchar', length: 50, nullable: false })
  id: string;

  // 비회원 작성자를 위한 password 필드 추가
  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'integer', nullable: true })
  sample_tag_id: number;

  // 여러개의 Sample 레코드가, Item_id를 참조할 수 있다는 의미에 MTO
  @ManyToOne(
    () => ItemEntity,
    (item) => {
      item.item_name;
    },
    { nullable: true },
  )
  item: ItemEntity;

  @ManyToOne(() => NatureEntity, { nullable: true })
  @JoinColumn({ name: 'nature_id' })
  nature: NatureEntity;

  @ManyToOne(() => TypesEntity, { nullable: true })
  @JoinColumn({ name: 'tera' })
  tera: TypesEntity;

  @OneToMany(() => SampleMovesEntity, (sampleMove) => sampleMove.sample)
  moves: SampleMovesEntity[];
}
