import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('types')
export class TypesEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'type_id' })
  type_id: number;

  @Column({ type: 'varchar', length: 14, name: 'type_name', nullable: false })
  type_name: string;
}
