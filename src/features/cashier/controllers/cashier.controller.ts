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
  async findAllUser(@Query() params: CashierPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAll(params);
      return datas;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Post()
  async createUser(@Body() cashierCreateDto: CashierCreateDto): Promise<any> {
    try {
      const data = await this.service.create(cashierCreateDto);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Get(':uuid')
  async findOneUser(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOne(uuid);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Patch(':uuid')
  async updateUser(
    @Param('uuid') uuid: string,
    @Body() cashierUpdateDto: CashierUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.update(uuid, cashierUpdateDto);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Delete(':uuid')
  async deleteUser(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOne(uuid);
      await this.service.delete(uuid);
      return data;
    } catch (error) {
      throw new BadGatewayException();
    }
  }
}
