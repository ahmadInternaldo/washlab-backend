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

  async findAll(params: OutletPaginationDto): Promise<any> {
    try {
      console.log(params);
      const datas = await this.repository.find();
      return datas;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async create(outletCreateDto: OutletCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(outletCreateDto);
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

  async update(uuid: string, OutletUpdateDto: OutletUpdateDto): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...OutletUpdateDto,
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
