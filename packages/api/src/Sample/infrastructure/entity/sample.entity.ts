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

  @Column({ nullable: false })
  pokedex: number;
  @ManyToOne(() => PokemonEntity, { nullable: false }) // nullable: false로 설정
  @JoinColumn({ name: 'pokedex' })
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

  @Column({ type: 'varchar', length: 50, nullable: false })
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'integer', nullable: true })
  sample_tag_id: number;

  @Column({ nullable: false })
  item_id: number;
  @ManyToOne(() => ItemEntity, { nullable: false }) // nullable: false로 설정
  @JoinColumn({ name: 'item_id' })
  item: ItemEntity;

  @Column({ nullable: false })
  nature_id: number;
  @ManyToOne(() => NatureEntity, { nullable: false }) // nullable: false로 설정
  @JoinColumn({ name: 'nature_id' })
  natureEntity: NatureEntity;

  @Column({ nullable: false })
  tera: number;
  @ManyToOne(() => TypesEntity, { nullable: false }) // nullable: false로 설정
  @JoinColumn({ name: 'tera' })
  teraEntity: TypesEntity;

  @OneToMany(() => SampleMovesEntity, (sampleMove) => sampleMove.sample)
  moves: SampleMovesEntity[];
  @Column({ type: 'varchar', length: 30, nullable: false })
  ivs: string;
  @Column({ type: 'varchar', length: 30, nullable: false })
  evs: string;
}
