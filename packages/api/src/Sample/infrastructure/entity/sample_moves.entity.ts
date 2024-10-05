import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SampleEntity } from './sample.entity';
import { MovesEntity } from 'src/moves/infrastructure/entity/moves.entity';

@Entity('sample_moves')
export class SampleMovesEntity {
  @Column({ primary: true })
  sample_index: number;

  @Column({ primary: true })
  moves_id: number;

  @ManyToOne(() => SampleEntity, (sample) => sample.sample_index)
  @JoinColumn({ name: 'sample_index' })
  sample: SampleEntity;

  @ManyToOne(() => MovesEntity, (move) => move.id)
  @JoinColumn({ name: 'moves_id' })
  move: MovesEntity;
}
