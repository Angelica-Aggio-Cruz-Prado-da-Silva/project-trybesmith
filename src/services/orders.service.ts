import OrdersModel from '../models/orders.model';
import IOrders from '../interfaces/IOrders';
import connection from '../models/connection';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}