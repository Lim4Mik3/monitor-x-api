import { Request, Response } from "express";

import PostService from "../services/PostService";
import UserService from "../services/UserService";

const userService = new UserService();
const postService = new PostService(userService);

export default class PostController {
  async handle(request: Request, response: Response) {
    const posts = await postService.show();

    return response.json(posts);
  }
}
