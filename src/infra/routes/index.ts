import { Router } from "express";

import { getPostsController } from "../../domain/useCases/getPosts";

const routes = Router();

routes.get("/posts", (req, res) => getPostsController.handle(req, res));

export { routes };
