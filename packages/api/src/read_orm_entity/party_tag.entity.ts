import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('party_tag')
export class PartyTagEntity {
  @PrimaryGeneratedColumn()
  party_tag_id: number;

  @Column({ type: 'varchar', length: 10 })
  party_tag_name_ko: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  party_tag_name_en: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  party_tag_name_jp: string;
}
