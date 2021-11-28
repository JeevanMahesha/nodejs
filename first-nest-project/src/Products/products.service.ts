import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly productModel: Model<IProduct>,
  ) {}

  productsList: IProduct[] = [];

  async insertProduct(
    title: string,
    description: string,
    price: number,
  ): Promise<string> {
    const newProduct = new this.productModel({ title, description, price });
    const saveResult = await newProduct.save();
    return saveResult.id;
  }

  async getAllProductDetails(): Promise<IProduct[]> {
    const productsList = await this.productModel.find().exec();
    return productsList.map(this.filterTheReturnData);
  }

  async getTheProductDetailById(id: string): Promise<IProduct> {
    const productById = await this.findTheProductById(id);
    return { ...productById };
  }

  // updateTheProductById(
  //   id: string,
  //   title: string,
  //   des: string,
  //   price: number,
  // ): void {
  //   const [productIndex = null, productById = null] =
  //     this.findTheProductById(id);
  //   const updateProduct = { ...productById };
  //   if (!title || !des || !price) {
  //     throw new Error('Data is Incomplete');
  //   }
  //   updateProduct.title = title;
  //   updateProduct.description = des;
  //   updateProduct.price = price;
  //   this.productsList[productIndex] = updateProduct;
  // }

  // deleteProducById(id: any) {
  //   const [productIndex = null, productById = null] =
  //     this.findTheProductById(id);
  //   this.productsList.splice(productIndex, 1);
  // }

  private async findTheProductById(id: string): Promise<IProduct> {
    const productById = await this.productModel.findById(id);
    const filteredData = this.filterTheReturnData(productById);
    if (!productById) {
      throw new NotFoundException('Product not found');
    }
    return filteredData;
  }

  private filterTheReturnData(products: IProduct): IProduct {
    return {
      id: products.id,
      title: products.title,
      description: products.description,
      price: products.price,
    };
  }
}
