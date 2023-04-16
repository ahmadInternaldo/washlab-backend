import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerInterface } from '../interface/customer.interface';

@Entity('customers')
export class CustomerEntity extends BaseEntity implements CustomerInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'name', nullable: false })
  name: string;
}
