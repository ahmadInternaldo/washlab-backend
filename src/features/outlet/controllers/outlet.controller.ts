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
  async findAllOutlet(@Query() params: OutletPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAllOutlet(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createOutlet(@Body() outletCreateDto: OutletCreateDto): Promise<any> {
    try {
      const data = await this.service.createOutlet(outletCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneOutlet(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneOutlet(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateOutlet(
    @Param('uuid') uuid: string,
    @Body() outletUpdateDto: OutletUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateOutlet(uuid, outletUpdateDto);
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteOutlet(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneOutlet(uuid);
      await this.service.deleteOutlet(uuid);
      return data;
    } catch (error) {}
  }
}
