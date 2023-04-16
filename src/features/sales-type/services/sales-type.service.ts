import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalesTypeEntity } from '../entities/sales-type.entity';
import { SalesTypeCreateDto } from '../dto/create.dto';
import { SalesTypeUpdateDto } from '../dto/update.dto';
import { SalesTypePaginationDto } from '../dto/pagination.dto';

@Injectable()
export class SalesTypeService {
  constructor(
    @InjectRepository(SalesTypeEntity)
    private repository: Repository<SalesTypeEntity>,
  ) {}

  async findAll(params: SalesTypePaginationDto): Promise<any> {
    try {
      console.log(params);
      const datas = await this.repository.find();
      return datas;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async create(salesTypeCreateDto: SalesTypeCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(salesTypeCreateDto);
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
    SalesTypeUpdateDto: SalesTypeUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...SalesTypeUpdateDto,
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
