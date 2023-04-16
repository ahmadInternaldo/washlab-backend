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
import { OutletService } from '../services/outlet.service';
import { OutletUpdateDto } from '../dto/update.dto';
import { OutletCreateDto } from '../dto/create.dto';
import { OutletPaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Outlets')
@Controller('outlets')
export class OutletController {
  constructor(private service: OutletService) {}
  @Get()
  async findAllUser(@Query() params: OutletPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAll(params);
      return datas;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Post()
  async createUser(@Body() outletCreateDto: OutletCreateDto): Promise<any> {
    try {
      const data = await this.service.create(outletCreateDto);
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
    @Body() outletUpdateDto: OutletUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.update(uuid, outletUpdateDto);
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
