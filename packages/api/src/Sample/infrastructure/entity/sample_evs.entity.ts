import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample_evs')
export class SampleEvsEntity {
  @PrimaryGeneratedColumn()
  sample_index: number;

  @Column({ type: 'integer' })
  h: number;

  @Column({ type: 'integer' })
  a: number;

  @Column({ type: 'integer' })
  b: number;

  @Column({ type: 'integer' })
  c: number;

  @Column({ type: 'integer' })
  d: number;

  @Column({ type: 'integer' })
  s: number;
}
