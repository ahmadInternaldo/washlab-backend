import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerInterface } from '../interface/customer.interface';

@Entity('customers')
export class CustomerEntity extends BaseEntity implements CustomerInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
