import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OutletInterface } from '../interface/outlet.interface';

@Entity('outlets')
export class OutletEntity extends BaseEntity implements OutletInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'name', nullable: false })
  name: string;
}
