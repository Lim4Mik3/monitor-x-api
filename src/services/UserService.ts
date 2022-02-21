import { API } from "../api";
import { IUser } from "../dtos/User";

const _BASE_URL = "https://jsonplaceholder.typicode.com/users";

export default class UserService {
  async getUsers() {
    try {
      const users = await API.get<IUser[]>(_BASE_URL);

      return users.data.filter((user) => user.company.name.match(/group/i));
    } catch (error) {
      throw new Error();
    }
  }
}
