import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LaundryInterface } from '../interface/laundry.interface';

@Entity('laundries')
export class LaundryEntity extends BaseEntity implements LaundryInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'name', nullable: false })
  name: string;
}
