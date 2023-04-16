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
  async findAllUser(@Query() params: InvoicePaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAll(params);
      return datas;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Post()
  async createUser(@Body() invoiceCreateDto: InvoiceCreateDto): Promise<any> {
    try {
      const data = await this.service.create(invoiceCreateDto);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Get(':uuid')
  async findOneUser(@Param() uuid: string): Promise<any> {
    try {
      const data = await this.service.findOne(uuid);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Patch(':uuid')
  async updateUser(
    @Param() uuid: string,
    @Body() invoiceUpdateDto: InvoiceUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.update(uuid, invoiceUpdateDto);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Delete(':uuid')
  async deleteUser(@Param() uuid: string): Promise<any> {
    try {
      const data = await this.service.findOne(uuid);
      await this.service.delete(uuid);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
}
