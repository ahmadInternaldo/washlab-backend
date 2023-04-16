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
  async findAllUser(@Query() params: SalesTypePaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAll(params);
      return datas;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Post()
  async createUser(
    @Body() salesTypeCreateDto: SalesTypeCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.create(salesTypeCreateDto);
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
    @Body() salesTypeUpdateDto: SalesTypeUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.update(uuid, salesTypeUpdateDto);
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
