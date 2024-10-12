import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
export class ItemEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'item_id' })
  item_id: number;

  @Column({ type: 'varchar', length: 15, name: 'item_name', nullable: false })
  item_name: string;
}
