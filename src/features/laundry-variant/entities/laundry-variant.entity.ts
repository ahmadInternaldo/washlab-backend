import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  LaundryVariantInterface,
  LaundryVariantStatusEnum,
} from '../interface/laundry-variant.interface';
import { OutletInterface } from '../../../features/outlet/interface/outlet.interface';
import { OutletEntity } from '../../../features/outlet/entities/outlet.entity';

@Entity('laundry_variants')
export class LaundryVariantEntity
  extends BaseEntity
  implements LaundryVariantInterface
{
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'name', nullable: false })
  name: string;

  @Column('varchar', { name: 'code', nullable: false })
  code: string;

  @Column('enum', {
    name: 'status',
    enum: LaundryVariantStatusEnum,
    default: LaundryVariantStatusEnum.ACTIVE,
    nullable: false,
  })
  status: LaundryVariantStatusEnum;

  @Column('float8', { name: 'price', nullable: false, default: 0 })
  price: number;

  @Column('varchar', { name: 'pict_url', nullable: true })
  pict_url: string;

  @Column('varchar', { name: 'creator_uuid', nullable: false })
  creator_uuid: string;

  @Column('varchar', { name: 'editor_uuid', nullable: true })
  editor_uuid?: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deleted_at?: Date;

  @ManyToMany(() => OutletEntity, (outlet) => outlet.uuid)
  @JoinTable({
    name: 'outlet_lvo_laundry_variants',
    joinColumn: { name: 'outlet_uuid' },
    inverseJoinColumn: { name: 'laundry_variant_uuid' },
  })
  outlets: OutletInterface[];
}
