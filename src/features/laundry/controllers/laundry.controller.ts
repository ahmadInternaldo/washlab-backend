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
import { LaundryService } from '../services/laundry.service';
import { LaundryUpdateDto } from '../dto/update.dto';
import { LaundryCreateDto } from '../dto/create.dto';
import { LaundryPaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Laundries')
@Controller('laundries')
export class LaundryController {
  constructor(private service: LaundryService) {}
  @Get()
  async findAllLaundry(@Query() params: LaundryPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAllLaundry(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createLaundry(
    @Body() laundryCreateDto: LaundryCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.createLaundry(laundryCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneLaundry(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneLaundry(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateLaundry(
    @Param('uuid') uuid: string,
    @Body() laundryUpdateDto: LaundryUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateLaundry(uuid, laundryUpdateDto);
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteLaundry(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneLaundry(uuid);
      await this.service.deleteLaundry(uuid);
      return data;
    } catch (error) {}
  }
}
