import { Router } from 'express'

import PostController from '../controllers/PostController';

const postController = new PostController();

const routes = Router();

routes.get('/posts', postController.handle);

export { routes };