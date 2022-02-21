import { API } from "../api";
import { IUser } from "../dtos/User";
import { IPost } from "../dtos/Post";

import UserService from "./UserService";
import Post from "../models/Post";

const _BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export default class PostService {
  constructor(private userService: UserService) {}

  async show() {
    let users = await this.userService.getUsers();

    const QUERY_URL = `${_BASE_URL}?${this.factoryQueries(users)}`;

    try {
      const response = await API.get<IPost[]>(QUERY_URL);

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

  private factoryQueries(users: IUser[]) {
    return users
      .reduce((acc, user) => {
        return `${acc}&userId=${user.id}`;
      }, "")
      .slice(1);
  }
}
