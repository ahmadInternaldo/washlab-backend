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
import { CustomerService } from '../services/customer.service';
import { CustomerUpdateDto } from '../dto/update.dto';
import { CustomerCreateDto } from '../dto/create.dto';
import { CustomerPaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomerController {
  constructor(private service: CustomerService) {}
  @Get()
  async findAllUser(@Query() params: CustomerPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAll(params);
      return datas;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Post()
  async createUser(@Body() customerCreateDto: CustomerCreateDto): Promise<any> {
    try {
      const data = await this.service.create(customerCreateDto);
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
    @Body() customerUpdateDto: CustomerUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.update(uuid, customerUpdateDto);
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
