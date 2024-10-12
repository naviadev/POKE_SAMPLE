import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nature')
export class NatureEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'nature_id' })
  nature_id: number;

  @Column({ type: 'varchar', length: 20, name: 'name_ko', nullable: false })
  nameKo: string;

  @Column({ type: 'varchar', length: 20, name: 'name_en', nullable: false })
  nameEn: string;

  @Column({ type: 'varchar', length: 20, name: 'name_jp', nullable: false })
  nameJp: string;
}
