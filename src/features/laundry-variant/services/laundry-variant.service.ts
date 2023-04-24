import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaundryVariantEntity } from '../entities/laundry-variant.entity';
import { LaundryVariantCreateDto } from '../dto/create.dto';
import { LaundryVariantUpdateDto } from '../dto/update.dto';
import { LaundryVariantPaginationDto } from '../dto/pagination.dto';

@Injectable()
export class LaundryVariantService {
  constructor(
    @InjectRepository(LaundryVariantEntity)
    private repository: Repository<LaundryVariantEntity>,
  ) {}

  async findAllLaundryVariant(
    params: LaundryVariantPaginationDto,
  ): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createLaundryVariant(
    laundryCreateDto: LaundryVariantCreateDto,
  ): Promise<any> {
    try {
      const createData = this.repository.create(laundryCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneLaundryVariant(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateLaundryVariant(
    uuid: string,
    LaundryVariantUpdateDto: LaundryVariantUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...LaundryVariantUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteLaundryVariant(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
