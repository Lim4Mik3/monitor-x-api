import { MdArrowForwardIos } from "react-icons/md";
import { Post } from "../../hooks/usePosts";
import { PostCardContainer, PostOwnerInfo, PostOwnerName } from "./styles";

interface PostCardProps {
  content: Post;
  onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ content, onClick }: PostCardProps) => {
  return (
    <PostCardContainer onClick={onClick}>
      <PostOwnerInfo>
        <p>{content.title}</p>
        <PostOwnerName>
          {content.employee_name} - <span>{content.employee_company}</span>
        </PostOwnerName>
      </PostOwnerInfo>
      <MdArrowForwardIos size={28} color="#C9C9D4" />
    </PostCardContainer>
  )
}

export { PostCard };