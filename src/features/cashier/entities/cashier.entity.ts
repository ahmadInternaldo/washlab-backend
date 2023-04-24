import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  CashierInterface,
  CashierStatusEnum,
} from '../interface/cashier.interface';
import { OutletInterface } from '../../../features/outlet/interface/outlet.interface';
import { OutletEntity } from '../../../features/outlet/entities/outlet.entity';

@Entity('cashiers')
export class CashierEntity extends BaseEntity implements CashierInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'username', nullable: false })
  username: string;

  @Column('varchar', { name: 'hash', nullable: false })
  hash: string;

  @Column('varchar', { name: 'address', nullable: false })
  address: string;

  @Column('varchar', { name: 'phone', nullable: false })
  phone: string;

  @Column('enum', {
    name: 'status',
    enum: CashierStatusEnum,
    default: CashierStatusEnum.ACTIVE,
    nullable: false,
  })
  status: CashierStatusEnum;

  @Column('varchar', { name: 'creator_uuid', nullable: false })
  creator_uuid: string;

  @Column('varchar', { name: 'editor_uuid', nullable: true })
  editor_uuid?: string;

  @Column('varchar', { name: 'created_at', nullable: false })
  created_at: Date;

  @Column('varchar', { name: 'updated_at', nullable: true })
  updated_at?: Date;

  @Column('varchar', { name: 'deleted_at', nullable: true })
  deleted_at?: Date;

  @Column('varchar', { name: 'outlet_uuid', nullable: false })
  outlet_uuid: string;

  @ManyToOne(() => OutletEntity, (outlet) => outlet.cashiers, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'outlet_uuid' })
  outlet: OutletInterface;
}
