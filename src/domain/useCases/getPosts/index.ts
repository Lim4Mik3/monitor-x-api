import { GetPostsController } from "./GetPostsController";
import { GetPostsUseCase } from "./GetPostsUseCase";

const getPostsUseCase = new GetPostsUseCase();
const getPostsController = new GetPostsController(getPostsUseCase);

export { getPostsController };
