import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample')
export class SampleEntity {
  @PrimaryGeneratedColumn()
  sample_index: number;

  @Column({ type: 'integer' })
  pokedex: number;

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

  @Column({ type: 'integer', nullable: true })
  sample_tag_id: number;
}
