import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('urls')
export default class Url {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  short_code: string;

  @Column()
  long_url: string;

  @Column()
  clicks_count: number;
}
