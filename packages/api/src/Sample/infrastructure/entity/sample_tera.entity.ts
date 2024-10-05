import { Column, Entity } from 'typeorm';

@Entity('sample_tera')
export class SampleTeraEntity {
  @Column({ primary: true })
  sample_index: number;

  @Column({ primary: true })
  type_id: number;
}
