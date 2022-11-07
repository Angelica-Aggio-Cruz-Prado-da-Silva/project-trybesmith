import ProductsModel from '../models/products.model';
import IProducts from '../interfaces/IProducts';
import connection from '../models/connection';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create(product: IProducts): Promise<IProducts> {
    return this.model.create(product);
  }

  public async getAll(): Promise<IProducts[]> {
    const products = await this.model.getAll();
    return products;
  }
}