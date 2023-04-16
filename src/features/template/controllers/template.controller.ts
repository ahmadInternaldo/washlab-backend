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
import { TemplateService } from '../services/template.service';
import { TemplateUpdateDto } from '../dto/update.dto';
import { TemplateCreateDto } from '../dto/create.dto';
import { TemplatePaginationDto } from '../dto/pagination.dto';

@Controller('templates')
export class TemplateController {
  constructor(private service: TemplateService) {}
  @Get()
  async findAllUser(@Query() params: TemplatePaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAll(params);
      return datas;
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  @Post()
  async createUser(@Body() templateCreateDto: TemplateCreateDto): Promise<any> {
    try {
      const data = await this.service.create(templateCreateDto);
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
    @Body() templateUpdateDto: TemplateUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.update(uuid, templateUpdateDto);
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
