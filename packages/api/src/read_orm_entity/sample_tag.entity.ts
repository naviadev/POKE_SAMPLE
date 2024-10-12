import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample_tag')
export class SampleTagEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'sample_tag_id' })
  sample_tag_id: number;

  @Column({
    type: 'varchar',
    length: 10,
    name: 'sample_tag_name_ko',
    nullable: false,
  })
  sample_tag_name_ko: string;

  @Column({
    type: 'varchar',
    length: 10,
    name: 'sample_tag_name_en',
    nullable: true,
  })
  sample_tag_name_en: string;

  @Column({
    type: 'varchar',
    length: 10,
    name: 'sample_tag_name_jp',
    nullable: true,
  })
  sample_tag_name_jp: string;
}
