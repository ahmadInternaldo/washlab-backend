import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CashierInterface } from '../interface/cashier.interface';

@Entity('cashiers')
export class CashierEntity extends BaseEntity implements CashierInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
