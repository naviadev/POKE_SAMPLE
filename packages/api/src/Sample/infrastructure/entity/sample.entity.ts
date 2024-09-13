import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  Check,
} from 'typeorm';

@Entity('sample')
@Check(`"party_tag" = ANY (ARRAY['싸이클', '대면', '랭크업']::varchar[])`)
@Check(
  `"sample_tag" = ANY (ARRAY['특수 어태커', '물리 어태커', '물리막이', '특수막이', '딜탱', '스카프', '기점', '변칙', '스위퍼', '선봉', '서포터']::varchar[])`,
)
export class SampleEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'index' })
  index: number;

  @Column({ type: 'integer', name: 'pokedex', nullable: false })
  pokedex: number;

  @Column({ type: 'varchar', length: 255, name: 'id' })
  id: string;

  @Column({ type: 'varchar', length: 255, name: 'title' })
  title: string;

  @Column({ type: 'varchar', length: 255, name: 'ability' })
  ability: string;

  @Column({ type: 'varchar', length: 255, name: 'item' })
  item: string;

  @Column({ type: 'varchar', length: 255, name: 'content' })
  content: string;

  @Column({ type: 'varchar', length: 255, name: 'tera' })
  tera: string;

  @Column({ type: 'varchar', length: 255, name: 'ivs' })
  ivs: string;

  @Column({ type: 'varchar', length: 255, name: 'evs' })
  evs: string;

  @Column({ type: 'varchar', length: 255, name: 'password' })
  password: string;

  @Column({ type: 'varchar', length: 20, name: 'party_tag', nullable: false })
  party_tag: string;

  @Column({ type: 'varchar', length: 10, name: 'sample_tag', nullable: false })
  @IsNotEmpty()
  sample_tag: string;

  @Column('text', { array: true, name: 'moves', nullable: false })
  moves: string[];

  @Column({ type: 'varchar', length: 5, name: 'nature', nullable: false })
  nature: string;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
