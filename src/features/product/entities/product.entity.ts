import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductInterface } from '../interface/product.interface';

@Entity('products')
export class ProductEntity extends BaseEntity implements ProductInterface {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
