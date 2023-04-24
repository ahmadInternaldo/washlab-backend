import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  OutletInterface,
  OutletStatusEnum,
} from '../interface/outlet.interface';
import { UserEntity } from '../../../features/user/entities/user.entity';
import { UserInterface } from '../../../features/user/interface/user.interface';
import { CashierEntity } from '../../../features/cashier/entities/cashier.entity';
import { CashierInterface } from '../../../features/cashier/interface/cashier.interface';
import { LaundryVariantEntity } from '../../../features/laundry-variant/entities/laundry-variant.entity';
import { LaundryVariantInterface } from '../../../features/laundry-variant/interface/laundry-variant.interface';

@Entity('outlets')
export class OutletEntity extends BaseEntity implements OutletInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'name', nullable: false, unique: true })
  name: string;

  @Column('varchar', { name: 'code', nullable: false, unique: true })
  code: string;

  @Column('varchar', { name: 'address', nullable: true })
  address?: string;

  @Column('varchar', { name: 'phone', nullable: true })
  phone?: string;

  @Column('enum', {
    name: 'status',
    enum: OutletStatusEnum,
    default: OutletStatusEnum.ACTIVE,
    nullable: false,
  })
  status: OutletStatusEnum;

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

  @Column('varchar', { name: 'user_uuid', nullable: false })
  user_uuid: string;

  @ManyToOne(() => UserEntity, (user) => user.outlets, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_uuid' })
  user?: UserInterface;

  @OneToMany(() => CashierEntity, (cashier) => cashier.outlet, {
    cascade: true,
  })
  cashiers?: CashierInterface[];

  @ManyToMany(
    () => LaundryVariantEntity,
    (laundryVariant) => laundryVariant.uuid,
  )
  @JoinTable({
    name: 'outlet_lvo_laundry_variants',
    joinColumn: { name: 'laundry_variant_uuid' },
    inverseJoinColumn: { name: 'outlet_uuid' },
  })
  laundry_variants?: LaundryVariantInterface[];
}
