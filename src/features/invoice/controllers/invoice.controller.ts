import {
  BadGatewayException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { InvoiceService } from '../services/invoice.service';
import { InvoiceUpdateDto } from '../dto/update.dto';
import { InvoiceCreateDto } from '../dto/create.dto';
import { InvoicePaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoiceController {
  constructor(private service: InvoiceService) {}
  @Get()
  async findAllInvoice(@Query() params: InvoicePaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAllInvoice(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createInvoice(
    @Body() invoiceCreateDto: InvoiceCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.createInvoice(invoiceCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneInvoice(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneInvoice(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateInvoice(
    @Param('uuid') uuid: string,
    @Body() invoiceUpdateDto: InvoiceUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateInvoice(uuid, invoiceUpdateDto);
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteInvoice(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneInvoice(uuid);
      await this.service.deleteInvoice(uuid);
      return data;
    } catch (error) {}
  }
}
