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

  async findAllInvoice(params: InvoicePaginationDto): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createInvoice(invoiceCreateDto: InvoiceCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(invoiceCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneInvoice(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateInvoice(
    uuid: string,
    InvoiceUpdateDto: InvoiceUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...InvoiceUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteInvoice(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
