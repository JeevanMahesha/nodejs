import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IProduct } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('des') prodDes: string,
    @Body('price') prodPrice: number,
  ): Promise<{ prodId: string }> {
    const result = await this.productService.insertProduct(
      prodTitle,
      prodDes,
      prodPrice,
    );
    return {
      prodId: result,
    };
  }

  @Get()
  async getAllProducts(): Promise<{ productsList: IProduct[] }> {
    const productsList = await this.productService.getAllProductDetails();
    return { productsList };
  }

  @Get(':id')
  async getTheProductById(
    @Param('id') prodId: string,
  ): Promise<{ product: IProduct }> {
    const product = await this.productService.getTheProductDetailById(prodId);
    return { product };
  }

  // @Patch(':id')
  // updateTheProductById(
  //   @Param('id') prodId: string,
  //   @Body('title') prodTitle: string,
  //   @Body('des') prodDes: string,
  //   @Body('price') prodPrice: number,
  // ) {
  //   try {
  //     this.productService.updateTheProductById(
  //       prodId,
  //       prodTitle,
  //       prodDes,
  //       prodPrice,
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     return 'Not able to Update';
  //   }
  //   return 'updated successfully';
  // }

  // @Delete(':id')
  // deleteProductById(@Param('id') prodId: string) {
  //   try {
  //     this.productService.deleteProducById(prodId);
  //   } catch (error) {
  //     console.log(error);
  //     return 'Not able to Delete';
  //   }
  //   return 'Delete Successfully';
  // }
}
