import { Post } from "../../hooks/usePosts";
import { OwnerPost, PostContent, PostDetailsCardContainer, PostText, PostTitle } from "./styles";

interface PostDetailsCardProps {
  content: Post;
}

const PostDetailsCard: React.FC<PostDetailsCardProps> = ({ content }: PostDetailsCardProps) => {
  return (
    <PostDetailsCardContainer>
      <OwnerPost>
        <p><span>Nome:</span> {content.employee_name}</p>
        <p><span>Empresa:</span> {content.employee_company}</p>
      </OwnerPost>
      <PostContent>
        <PostTitle>{content.title}</PostTitle>
        <PostText>{content.body}</PostText>
      </PostContent>
    </PostDetailsCardContainer>
  )
}

export { PostDetailsCard };