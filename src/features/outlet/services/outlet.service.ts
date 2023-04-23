import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OutletEntity } from '../entities/outlet.entity';
import { OutletCreateDto } from '../dto/create.dto';
import { OutletUpdateDto } from '../dto/update.dto';
import { OutletPaginationDto } from '../dto/pagination.dto';

@Injectable()
export class OutletService {
  constructor(
    @InjectRepository(OutletEntity)
    private repository: Repository<OutletEntity>,
  ) {}

  async findAllOutlet(params: OutletPaginationDto): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createOutlet(outletCreateDto: OutletCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(outletCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneOutlet(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateOutlet(
    uuid: string,
    OutletUpdateDto: OutletUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...OutletUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteOutlet(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
