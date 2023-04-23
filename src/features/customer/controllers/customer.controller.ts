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
  async findAllCustomer(@Query() params: CustomerPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAllCustomer(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createCustomer(
    @Body() customerCreateDto: CustomerCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.createCustomer(customerCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneCustomer(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneCustomer(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateCustomer(
    @Param('uuid') uuid: string,
    @Body() customerUpdateDto: CustomerUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateCustomer(uuid, customerUpdateDto);
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteCustomer(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneCustomer(uuid);
      await this.service.deleteCustomer(uuid);
      return data;
    } catch (error) {}
  }
}
