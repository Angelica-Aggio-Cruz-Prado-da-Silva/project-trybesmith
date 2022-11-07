import { Pool } from 'mysql2/promise';
import IOrders from '../interfaces/IOrders';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const result = await this.connection
      .execute(
        `SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId,
      JSON_ARRAYAGG(Trybesmith.Products.id) AS productsIds
      FROM Trybesmith.Orders
      INNER JOIN Trybesmith.Products ON Trybesmith.Products.orderId = Trybesmith.Orders.id
      GROUP BY Trybesmith.Products.orderId;`,
      );
    const [rows] = result;
    return rows as IOrders[];
  }
}