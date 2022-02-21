import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header"
import { PostDetailsCard } from "../../components/PostDetailsCard";
import { Post } from "../../hooks/usePosts";

import { 
  PostDetailsContainer,
  PostDetailsWrapper,
} from "./styles"

interface PostDetailsRouteProps {
  state: {
    post: Post;
  }
}

const PostDetails: React.FC = () => {
  const { state: { post } } = useLocation() as PostDetailsRouteProps;

  return (
    <PostDetailsContainer>
      <Header canBack/>

      <PostDetailsWrapper>
        <PostDetailsCard content={post} />
      </PostDetailsWrapper>
    </PostDetailsContainer>
  )
}

export { PostDetails };