import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemplateEntity } from '../entities/template.entity';
import { TemplateCreateDto } from '../dto/create.dto';
import { TemplateUpdateDto } from '../dto/update.dto';
import { TemplatePaginationDto } from '../dto/pagination.dto';

@Injectable()
export class TemplateService {
  constructor(
    @InjectRepository(TemplateEntity)
    private repository: Repository<TemplateEntity>,
  ) {}

  async findAll(params: TemplatePaginationDto): Promise<any> {
    try {
      console.log(params);
      const datas = await this.repository.find();
      return datas;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async create(templateCreateDto: TemplateCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(templateCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async update(
    uuid: string,
    TemplateUpdateDto: TemplateUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...TemplateUpdateDto,
      });
      return updatedData;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async delete(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
