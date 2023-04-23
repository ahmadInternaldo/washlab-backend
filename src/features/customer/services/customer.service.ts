import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';
import { CustomerCreateDto } from '../dto/create.dto';
import { CustomerUpdateDto } from '../dto/update.dto';
import { CustomerPaginationDto } from '../dto/pagination.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private repository: Repository<CustomerEntity>,
  ) {}

  async findAllCustomer(params: CustomerPaginationDto): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createCustomer(customerCreateDto: CustomerCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(customerCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneCustomer(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateCustomer(
    uuid: string,
    CustomerUpdateDto: CustomerUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...CustomerUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteCustomer(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
