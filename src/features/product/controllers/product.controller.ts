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
import { ProductService } from '../services/product.service';
import { ProductUpdateDto } from '../dto/update.dto';
import { ProductCreateDto } from '../dto/create.dto';
import { ProductPaginationDto } from '../dto/pagination.dto';

@Controller('products')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  async findAllProduct(@Query() params: ProductPaginationDto): Promise<any> {
    try {
      const datas = await this.service.findAllProduct(params);
      return datas;
    } catch (error) {}
  }

  @Post()
  async createProduct(
    @Body() productCreateDto: ProductCreateDto,
  ): Promise<any> {
    try {
      const data = await this.service.createProduct(productCreateDto);
      return data;
    } catch (error) {}
  }

  @Get(':uuid')
  async findOneProduct(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneProduct(uuid);
      return data;
    } catch (error) {}
  }

  @Patch(':uuid')
  async updateProduct(
    @Param('uuid') uuid: string,
    @Body() productUpdateDto: ProductUpdateDto,
  ): Promise<any> {
    try {
      const data = await this.service.updateProduct(uuid, productUpdateDto);
      return data;
    } catch (error) {}
  }

  @Delete(':uuid')
  async deleteProduct(@Param('uuid') uuid: string): Promise<any> {
    try {
      const data = await this.service.findOneProduct(uuid);
      await this.service.deleteProduct(uuid);
      return data;
    } catch (error) {}
  }
}
