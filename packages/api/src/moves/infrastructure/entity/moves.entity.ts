import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('moves')
export class MovesEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'name_ko', nullable: false })
  nameKo: string;

  @Column({ type: 'varchar', length: 255, name: 'name_en', nullable: false })
  nameEn: string;

  @Column({ type: 'varchar', length: 50, name: 'type', nullable: false })
  type: string;

  @Column({ type: 'varchar', length: 50, name: 'category', nullable: false })
  category: string;

  @Column({ type: 'integer', name: 'power', nullable: true })
  power: number | null;

  @Column({ type: 'integer', name: 'pp', nullable: false })
  pp: number;

  @Column({ type: 'integer', name: 'accuracy', nullable: true })
  accuracy: number | null;
}
