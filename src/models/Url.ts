import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('urls')
export default class Url {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  code: string;

  @Column()
  long_url: string;

  @Column()
  short_url: string;

  @Column()
  clicks_count: number;
}
