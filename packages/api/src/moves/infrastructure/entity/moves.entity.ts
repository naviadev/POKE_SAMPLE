import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('moves')
export class MovesEntity {
  // 자동 증가하는 고유 키
  @PrimaryGeneratedColumn()
  id: number;

  // name_ko: 문자열
  @Column({ type: 'varchar', length: 255 })
  name_ko: string;

  // name_en: 문자열
  @Column({ type: 'varchar', length: 255 })
  name_en: string;

  // type: 문자열
  @Column({ type: 'varchar', length: 50 })
  type: string;

  // category: 문자열
  @Column({ type: 'varchar', length: 50 })
  category: string;

  // power: 정수형
  @Column({ type: 'int', nullable: true })
  power: number;

  // pp: 정수형
  @Column({ type: 'int' })
  pp: number;

  // accuracy: 정수형
  @Column({ type: 'int', nullable: true })
  accuracy: number;
}
