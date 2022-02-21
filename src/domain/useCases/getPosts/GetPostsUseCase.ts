import Post from "../../entities/Post";

import { IPost } from "./interfaces/Post";
import { IUser } from "./interfaces/User";

import { API } from "../../../infra/api";

export class GetPostsUseCase {
  private readonly USERS_URL = "https://jsonplaceholder.typicode.com/users";
  private readonly POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

  async execute() {
    const users = await this.getUsers();

    const POSTS_URL = this.urlQueryPostsFactory(users);

    try {
      const response = await API.get<IPost[]>(POSTS_URL);

      const posts = response.data.map((post) => {
        const currentUser = users.find(
          (user) => user.id === post.userId
        ) as IUser;

        return new Post(
          post.id,
          currentUser.name,
          currentUser.company.name,
          post.title,
          post.body
        );
      });

      return posts;
    } catch (error) {
      throw new Error();
    }
  }

  private urlQueryPostsFactory(users: IUser[]) {
    const queries = users
      .reduce((acc, user) => {
        return `${acc}&userId=${user.id}`;
      }, "")
      .slice(1);

    return `${this.POSTS_URL}?${queries}`;
  }

  private async getUsers(): Promise<IUser[]> {
    try {
      const users = await API.get<IUser[]>(this.USERS_URL);

      return users.data.filter((user) => user.company.name.match(/group/i));
    } catch (error) {
      throw new Error();
    }
  }
}
