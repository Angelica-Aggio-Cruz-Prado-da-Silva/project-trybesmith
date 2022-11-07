import { Request, Response } from 'express';
import UserService from '../services/users.service';

export default class UserController {
  constructor(private usersService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.usersService.create(user);

    res.status(201).json({ token });
  };
}