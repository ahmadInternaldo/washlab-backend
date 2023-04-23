import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { ProductCreateDto } from '../dto/create.dto';
import { ProductUpdateDto } from '../dto/update.dto';
import { ProductPaginationDto } from '../dto/pagination.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
  ) {}

  async findAllProduct(params: ProductPaginationDto): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createProduct(productCreateDto: ProductCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(productCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneProduct(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateProduct(
    uuid: string,
    ProductUpdateDto: ProductUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...ProductUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteProduct(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
