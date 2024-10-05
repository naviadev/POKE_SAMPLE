import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SampleEntity } from './sample.entity';
import { NatureEntity } from 'src/read_orm_entity/nature.entity';

@Entity('sample_nature')
export class SampleNature {
  @Column({ primary: true })
  sample_index: number;

  @Column({ primary: true })
  nature_id: number;

  @ManyToOne(() => SampleEntity, (sample) => sample.sample_index)
  @JoinColumn({ name: 'sample_index' })
  sample: SampleEntity;

  @ManyToOne(() => NatureEntity, (nature) => nature.nature_id)
  @JoinColumn({ name: 'nature_id' })
  nature: NatureEntity;
}
