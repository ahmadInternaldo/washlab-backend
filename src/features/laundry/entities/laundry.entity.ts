import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LaundryInterface } from '../interface/laundry.interface';

@Entity('laundries')
export class LaundryEntity extends BaseEntity implements LaundryInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
