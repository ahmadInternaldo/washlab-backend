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

  async findAllLaundry(params: LaundryPaginationDto): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createLaundry(laundryCreateDto: LaundryCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(laundryCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneLaundry(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateLaundry(
    uuid: string,
    LaundryUpdateDto: LaundryUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...LaundryUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteLaundry(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
