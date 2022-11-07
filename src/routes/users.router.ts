import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const usersController = new UsersController();

const usersRouter = Router();

usersRouter.post('/', (req, res) => usersController.create(req, res));

export default usersRouter;