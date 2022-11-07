import jwt from 'jsonwebtoken';
import UserModel from '../models/users.model';
import IUsers from '../interfaces/IUsers';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUsers) {
    const createdUser = this.model.create(user);
    const token = jwt.sign(
      { user: (await createdUser).username, password: (await createdUser).password }, 
      process.env.JWT_SECRET as string,
    );

    return token;
  }
}