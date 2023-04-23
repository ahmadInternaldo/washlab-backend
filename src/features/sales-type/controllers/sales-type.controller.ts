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
import { SalesTypeService } from '../services/sales-type.service';
import { SalesTypeUpdateDto } from '../dto/update.dto';
import { SalesTypeCreateDto } from '../dto/create.dto';
import { SalesTypePaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sales Types')
@Controller('sales-types')
export class SalesTypeController {
  constructor(private service: SalesTypeService) {}
  @Get()
  async findAllSalesType(
    @Query() params: SalesTypePaginationDto,
  ): Promise<any> {
    try {
      const datas = await this.service.findAllSalesType(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createSalesType(
    @Body() salesTypeCreateDto: SalesTypeCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.createSalesType(salesTypeCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneSalesType(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneSalesType(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateSalesType(
    @Param('uuid') uuid: string,
    @Body() salesTypeUpdateDto: SalesTypeUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateSalesType(uuid, salesTypeUpdateDto);
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteSalesType(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneSalesType(uuid);
      await this.service.deleteSalesType(uuid);
      return data;
    } catch (error) {}
  }
}
