import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample_users_data')
export class SampleUsersData {
  @PrimaryGeneratedColumn()
  sample_index: number;

  @Column({ type: 'varchar', length: 10 })
  user_id: string;

  @Column({ type: 'varchar', length: 12 })
  password: string;

  @Column({ type: 'varchar', length: 45 })
  ip_address: string;
}
