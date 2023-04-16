import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoiceEntity } from '../entities/invoice.entity';
import { InvoiceCreateDto } from '../dto/create.dto';
import { InvoiceUpdateDto } from '../dto/update.dto';
import { InvoicePaginationDto } from '../dto/pagination.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private repository: Repository<InvoiceEntity>,
  ) {}

  async findAll(params: InvoicePaginationDto): Promise<any> {
    try {
      console.log(params);
      const datas = await this.repository.find();
      return datas;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async create(invoiceCreateDto: InvoiceCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(invoiceCreateDto);
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

  async update(uuid: string, InvoiceUpdateDto: InvoiceUpdateDto): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...InvoiceUpdateDto,
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
