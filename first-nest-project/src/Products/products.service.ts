import { Injectable, NotFoundException } from '@nestjs/common';
import { IpcNetConnectOpts } from 'net';
import { IProduct } from './products.model';

@Injectable()
export class ProductsService {
  productsList: IProduct[] = [];

  insertProduct(title: string, des: string, price: number): string {
    const prodId = Math.floor(Math.random() * 9999).toString();
    const newProduct = new IProduct(prodId, title, des, price);
    this.productsList.push(newProduct);
    return prodId;
  }

  getAllProductDetails(): IProduct[] {
    return this.productsList.slice();
  }

  getTheProductDetailById(id: string): IProduct {
    const [productIndex = null, productById = null] =
      this.findTheProductById(id);
    return { ...productById };
  }

  updateTheProductById(
    id: string,
    title: string,
    des: string,
    price: number,
  ): void {
    const [productIndex = null, productById = null] =
      this.findTheProductById(id);
    const updateProduct = { ...productById };
    if (!title || !des || !price) {
      throw new Error('Data is Incomplete');
    }
    updateProduct.title = title;
    updateProduct.des = des;
    updateProduct.price = price;
    this.productsList[productIndex] = updateProduct;
  }

  deleteProducById(id: any) {
    const [productIndex = null, productById = null] =
      this.findTheProductById(id);
    this.productsList.splice(productIndex, 1);
  }

  private findTheProductById(id: string): [number, IProduct] {
    const productById = this.productsList.find(
      (eachProduct: IProduct) => eachProduct.id === id,
    );
    if (!productById) {
      throw new NotFoundException('Product not found');
    }
    const productIndex = this.productsList.findIndex(
      (eachProduct: IProduct) => eachProduct.id === id,
    );
    return [productIndex, productById];
  }
}
