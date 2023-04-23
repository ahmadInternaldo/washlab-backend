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
import { UserService } from '../services/user.service';
import { UserUpdateDto } from '../dto/update.dto';
import { UserCreateDto } from '../dto/create.dto';
import { UserPaginationDto } from '../dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private service: UserService) {}
  @Get()
  async findAllUser(@Query() params: UserPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAllUser(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createUser(@Body() userCreateDto: UserCreateDto): Promise<any> {
    try {
      const data = await this.service.createUser(userCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneUser(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneUser(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateUser(
    @Param('uuid') uuid: string,
    @Body() userUpdateDto: UserUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateUser(uuid, userUpdateDto);
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteUser(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneUser(uuid);
      await this.service.deleteUser(uuid);
      return data;
    } catch (error) {}
  }
}
