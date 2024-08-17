import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample')
export class SampleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nick_name: string;

  @Column()
  password: string;

  @Column()
  pokedex: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column('simple-array')
  tags: string[];
}
