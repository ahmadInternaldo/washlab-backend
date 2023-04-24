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
  LaundryCategoryInterface,
  LaundryCategoryStatusEnum,
} from '../interface/laundry-category.interface';

@Entity('laundry_categories')
export class LaundryCategoryEntity
  extends BaseEntity
  implements LaundryCategoryInterface
{
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'name', nullable: false })
  name: string;

  @Column('enum', {
    name: 'status',
    enum: LaundryCategoryStatusEnum,
    default: LaundryCategoryStatusEnum.ACTIVE,
    nullable: false,
  })
  status: LaundryCategoryStatusEnum;
}
