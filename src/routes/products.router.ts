import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', (req, res) => productsController.create(req, res));
productsRouter.get('/', (req, res) => productsController.getAll(req, res));

export default productsRouter;