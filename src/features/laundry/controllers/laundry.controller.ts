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
  async findAllUser(@Query() params: LaundryPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAll(params);
      return datas;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Post()
  async createUser(@Body() laundryCreateDto: LaundryCreateDto): Promise<any> {
    try {
      const data = await this.service.create(laundryCreateDto);
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
    @Body() laundryUpdateDto: LaundryUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.update(uuid, laundryUpdateDto);
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
