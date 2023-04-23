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
import { CashierService } from '../services/cashier.service';
import { CashierUpdateDto } from '../dto/update.dto';
import { CashierCreateDto } from '../dto/create.dto';
import { CashierPaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cashiers')
@Controller('cashiers')
export class CashierController {
  constructor(private service: CashierService) {}

  @Get()
  async findAllCashier(@Query() params: CashierPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAllCashier(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createCashier(
    @Body() cashierCreateDto: CashierCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.createCashier(cashierCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneCashier(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneCashier(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateCashier(
    @Param('uuid') uuid: string,
    @Body() cashierUpdateDto: CashierUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateCashier(uuid, cashierUpdateDto);
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteCashier(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneCashier(uuid);
      await this.service.deleteCashier(uuid);
      return data;
    } catch (error) {}
  }
}
