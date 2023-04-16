import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InvoiceInterface } from '../interface/invoice.interface';

@Entity('invoices')
export class InvoiceEntity extends BaseEntity implements InvoiceInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'name', nullable: false })
  name: string;
}
