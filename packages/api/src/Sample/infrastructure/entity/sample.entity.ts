import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample')
export class SampleEntity {
  @PrimaryGeneratedColumn('uuid')
  index: string;

  @Column()
  id: string;

  @Column()
  title: string;

  @Column({ nullable: false })
  pokedex: number;

  @Column()
  ability: string;

  @Column()
  item: string;

  @Column()
  content: string;

  @Column()
  tera: string;

  @Column()
  ivs: string;

  @Column()
  evs: string;

  @Column()
  password: string;
}
