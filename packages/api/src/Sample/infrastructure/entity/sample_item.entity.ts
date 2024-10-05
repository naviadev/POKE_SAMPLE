import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SampleEntity } from './sample.entity';
import { ItemEntity } from 'src/read_orm_entity/item.entity';

@Entity('sample_items')
export class SampleItems {
  @Column({ primary: true })
  sample_index: number;

  @Column({ primary: true })
  item_id: number;

  @ManyToOne(() => SampleEntity, (sample) => sample.sample_index)
  @JoinColumn({ name: 'sample_index' })
  sample: SampleEntity;

  @ManyToOne(() => ItemEntity, (item) => item.item_id)
  @JoinColumn({ name: 'item_id' })
  item: ItemEntity;
}
