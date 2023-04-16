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

  async findAll(params: CustomerPaginationDto): Promise<any> {
    try {
      console.log(params);
      const datas = await this.repository.find();
      return datas;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async create(customerCreateDto: CustomerCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(customerCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async update(
    uuid: string,
    CustomerUpdateDto: CustomerUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...CustomerUpdateDto,
      });
      return updatedData;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async delete(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
