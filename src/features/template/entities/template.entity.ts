import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TemplateInterface } from '../interface/template.interface';

@Entity('templates')
export class TemplateEntity extends BaseEntity implements TemplateInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('varchar', { name: 'name', nullable: false })
  name: string;
}
