import { Request, Response } from "express";

import { GetPostsUseCase } from "./GetPostsUseCase";

export class GetPostsController {
  constructor(private getPostsUseCase: GetPostsUseCase) {}

  async handle(request: Request, response: Response) {
    const posts = await this.getPostsUseCase.execute();

    return response.json(posts);
  }
}
