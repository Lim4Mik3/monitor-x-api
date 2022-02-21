import { useQuery } from "react-query";
import { api } from "../services/api";

export interface Post {
  id: number;
  employee_name: string;
  employee_company: string;
  title: string;
  body: string;
}

const getPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/posts");

  return response.data;
};

function usePosts() {
  return useQuery("@POSTS", getPosts, {
    staleTime: 1000 * 60,
  });
}

export { usePosts };
