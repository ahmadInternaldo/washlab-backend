import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TemplateInterface } from '../interface/template.interface';

@Entity('templates')
export class TemplateEntity extends BaseEntity implements TemplateInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
