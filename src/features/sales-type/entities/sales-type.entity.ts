import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SalesTypeInterface } from '../interface/sales-type.interface';

@Entity('sales_types')
export class SalesTypeEntity extends BaseEntity implements SalesTypeInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
