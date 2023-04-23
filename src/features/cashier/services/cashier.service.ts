import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CashierEntity } from '../entities/cashier.entity';
import { CashierCreateDto } from '../dto/create.dto';
import { CashierUpdateDto } from '../dto/update.dto';
import { CashierPaginationDto } from '../dto/pagination.dto';

@Injectable()
export class CashierService {
  constructor(
    @InjectRepository(CashierEntity)
    private repository: Repository<CashierEntity>,
  ) {}

  async findAllCashier(params: CashierPaginationDto): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createCashier(cashierCreateDto: CashierCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(cashierCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneCashier(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateCashier(
    uuid: string,
    CashierUpdateDto: CashierUpdateDto,
  ): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...CashierUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteCashier(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
