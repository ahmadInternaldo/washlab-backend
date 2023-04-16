import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaundryEntity } from '../entities/laundry.entity';
import { LaundryCreateDto } from '../dto/create.dto';
import { LaundryUpdateDto } from '../dto/update.dto';
import { LaundryPaginationDto } from '../dto/pagination.dto';

@Injectable()
export class LaundryService {
  constructor(
    @InjectRepository(LaundryEntity)
    private repository: Repository<LaundryEntity>,
  ) {}

  async findAll(params: LaundryPaginationDto): Promise<any> {
    try {
      console.log(params);
      const datas = await this.repository.find();
      return datas;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async create(laundryCreateDto: LaundryCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(laundryCreateDto);
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

  async update(uuid: string, LaundryUpdateDto: LaundryUpdateDto): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...LaundryUpdateDto,
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
