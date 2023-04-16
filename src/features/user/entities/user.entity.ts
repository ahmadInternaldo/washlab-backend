import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from '../interface/user.interface';

@Entity('users')
export class UserEntity extends BaseEntity implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'full_name', nullable: false })
  full_name: string;
}
