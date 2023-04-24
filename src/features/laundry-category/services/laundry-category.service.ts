import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaundryCategoryEntity } from '../entities/laundry-category.entity';
import { LaundryCategoryCreateDto } from '../dto/create.dto';
import { LaundryCategoryUpdateDto } from '../dto/update.dto';
import { LaundryCategoryPaginationDto } from '../dto/pagination.dto';

@Injectable()
export class LaundryCategoryService {
  constructor(
    @InjectRepository(LaundryCategoryEntity)
    private repository: Repository<LaundryCategoryEntity>,
  ) {}

  async findAllLaundryCategory(
    params: LaundryCategoryPaginationDto,
  ): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createLaundryCategory(
    laundryCategoryCreateDto: LaundryCategoryCreateDto,
  ): Promise<any> {
    try {
      const createData = this.repository.create(laundryCategoryCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneLaundryCategory(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateLaundryCategory(
    uuid: string,
    laundryCategoryUpdateDto: LaundryCategoryUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...laundryCategoryUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteLaundryCategory(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
