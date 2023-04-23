import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserCreateDto } from '../dto/create.dto';
import { UserUpdateDto } from '../dto/update.dto';
import { UserPaginationDto } from '../dto/pagination.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async findAllUser(params: UserPaginationDto): Promise<any> {
    try {
      const datas = await this.repository.find();
      return datas;
    } catch (error) {}
  }

  async createUser(userCreateDto: UserCreateDto): Promise<any> {
    try {
      const createData = this.repository.create(userCreateDto);
      const savedData = await this.repository.save(createData);
      return savedData;
    } catch (error) {}
  }

  async findOneUser(uuid: string): Promise<any> {
    try {
      const data = await this.repository.findOne({
        where: {
          uuid,
        },
      });
      return data;
    } catch (error) {}
  }

  async updateUser(uuid: string, UserUpdateDto: UserUpdateDto): Promise<any> {
    try {
      const updatedData = await this.repository.save({
        uuid,
        ...UserUpdateDto,
      });
      return updatedData;
    } catch (error) {}
  }

  async deleteUser(uuid: string): Promise<any> {
    try {
      await this.repository.delete(uuid);
      return;
    } catch (error) {}
  }
}
