import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  OutletInterface,
  OutletStatusEnum,
} from '../interface/outlet.interface';
import { UserEntity } from '../../../features/user/entities/user.entity';
import { UserInterface } from '../../../features/user/interface/user.interface';

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
  user: UserInterface;
}
