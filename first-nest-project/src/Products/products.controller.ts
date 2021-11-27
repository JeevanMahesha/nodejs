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
  addProduct(
    @Body('title') prodTitle: string,
    @Body('des') prodDes: string,
    @Body('price') prodPrice: number,
  ): { prodId: string } {
    return {
      prodId: this.productService.insertProduct(prodTitle, prodDes, prodPrice),
    };
  }

  @Get()
  getAllProducts(): { productsList: IProduct[] } {
    const productsList = this.productService.getAllProductDetails();
    return { productsList };
  }

  @Get(':id')
  getTheProductById(@Param('id') prodId: string): { product: IProduct } {
    const product = this.productService.getTheProductDetailById(prodId);
    return { product };
  }

  @Patch(':id')
  updateTheProductById(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('des') prodDes: string,
    @Body('price') prodPrice: number,
  ) {
    try {
      this.productService.updateTheProductById(
        prodId,
        prodTitle,
        prodDes,
        prodPrice,
      );
    } catch (error) {
      console.log(error);
      return 'Not able to Update';
    }
    return 'updated successfully';
  }

  @Delete(':id')
  deleteProductById(@Param('id') prodId: string) {
    try {
      this.productService.deleteProducById(prodId);
    } catch (error) {
      console.log(error);
      return 'Not able to Delete';
    }
    return 'Delete Successfully';
  }
}
