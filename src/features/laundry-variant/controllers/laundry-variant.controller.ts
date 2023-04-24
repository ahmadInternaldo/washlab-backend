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
import { LaundryVariantService } from '../services/laundry-variant.service';
import { LaundryVariantUpdateDto } from '../dto/update.dto';
import { LaundryVariantCreateDto } from '../dto/create.dto';
import { LaundryVariantPaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Laundries')
@Controller('laundries')
export class LaundryVariantController {
  constructor(private service: LaundryVariantService) {}
  @Get()
  async findAllLaundryVariant(
    @Query() params: LaundryVariantPaginationDto,
  ): Promise<any> {
    try {
      const datas = await this.service.findAllLaundryVariant(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createLaundryVariant(
    @Body() laundryCreateDto: LaundryVariantCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.createLaundryVariant(laundryCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneLaundryVariant(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneLaundryVariant(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateLaundryVariant(
    @Param('uuid') uuid: string,
    @Body() laundryUpdateDto: LaundryVariantUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateLaundryVariant(
        uuid,
        laundryUpdateDto,
      );
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteLaundryVariant(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneLaundryVariant(uuid);
      await this.service.deleteLaundryVariant(uuid);
      return data;
    } catch (error) {}
  }
}
