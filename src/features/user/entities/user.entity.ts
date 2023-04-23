import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserInterface, UserRoleEnum } from '../interface/user.interface';
import { OutletEntity } from '../../../features/outlet/entities/outlet.entity';
import { OutletInterface } from '../../../features/outlet/interface/outlet.interface';

@Entity('users')
export class UserEntity extends BaseEntity implements UserInterface {
  Role: UserRoleEnum;
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'username', nullable: false })
  username: string;

  @Column('varchar', { name: 'hash', nullable: false })
  hash: string;

  @Column('varchar', { name: 'phone', nullable: true })
  phone?: string;

  @Column('varchar', { name: 'full_name', nullable: false })
  full_name: string;

  @Column('varchar', { name: 'first_name', nullable: false })
  first_name: string;

  @Column('varchar', { name: 'last_name', nullable: false })
  last_name: string;

  @Column('varchar', { name: 'email', nullable: true, unique: true })
  email?: string;

  @Column('varchar', { name: 'creator_uuid', nullable: true })
  creator_uuid?: string;

  @Column('varchar', { name: 'editor_uuid', nullable: true })
  editor_uuid?: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;

  @Column('enum', {
    name: 'role',
    enum: UserRoleEnum,
    default: UserRoleEnum.ADMIN,
    nullable: false,
  })
  role: UserRoleEnum;

  @Column('varchar', { name: 'pict_url', nullable: true })
  pict_url?: string;


  // relation to outlet
  @OneToMany(
    () => OutletEntity,
    (outlet) => outlet.user, {
      cascade: true,
    }
  )
  outlets: OutletInterface[]
}
