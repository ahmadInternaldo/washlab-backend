import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OutletInterface } from '../interface/outlet.interface';

@Entity('outlets')
export class OutletEntity extends BaseEntity implements OutletInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
