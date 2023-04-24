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
import { LaundryCategoryService } from '../services/laundry-category.service';
import { LaundryCategoryUpdateDto } from '../dto/update.dto';
import { LaundryCategoryCreateDto } from '../dto/create.dto';
import { LaundryCategoryPaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Laundries')
@Controller('laundries')
export class LaundryCategoryController {
  constructor(private service: LaundryCategoryService) {}
  @Get()
  async findAllLaundryCategory(
    @Query() params: LaundryCategoryPaginationDto,
  ): Promise<any> {
    try {
      const datas = await this.service.findAllLaundryCategory(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createLaundryCategory(
    @Body() laundryCategoryCreateDto: LaundryCategoryCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.createLaundryCategory(
        laundryCategoryCreateDto,
      );
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneLaundryCategory(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneLaundryCategory(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateLaundryCategory(
    @Param('uuid') uuid: string,
    @Body() laundryCategoryUpdateDto: LaundryCategoryUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateLaundryCategory(
        uuid,
        laundryCategoryUpdateDto,
      );
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteLaundryCategory(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneLaundryCategory(uuid);
      await this.service.deleteLaundryCategory(uuid);
      return data;
    } catch (error) {}
  }
}
