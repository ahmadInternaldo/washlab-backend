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

  async findAllSalesType(params: SalesTypePaginationDto): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createSalesType(salesTypeCreateDto: SalesTypeCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(salesTypeCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneSalesType(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateSalesType(
    uuid: string,
    SalesTypeUpdateDto: SalesTypeUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...SalesTypeUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteSalesType(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
