import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { PostCard } from '../../components/PostCard';
import { SearchBox } from '../../components/SearchBox';
import { Post, usePosts } from '../../hooks/usePosts';

import { 
  PostsListContainer, 
  PageTitle, 
  PostsListWrapper,
} from "./styles";

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  
  const navigate = useNavigate();
  const { data, error, isFetching } = usePosts();

  const filterInputREF = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!data) return;

    setPosts(data);
  }, [data])

  const filterList = () => {
    if (filterInputREF.current && data) {
      const searchTerm = filterInputREF.current.value.toLowerCase();

      let postsList = [...data];

      postsList = postsList.filter(post => 
        post.employee_name.toLowerCase().includes(searchTerm) ||
        post.employee_company.toLowerCase().includes(searchTerm)
      )

      setPosts(postsList);
    }
  }

  const handleCardClick = (post: Post) => {
    navigate('/details', {
      state: {
        post
      }
    });
  }

  return (
    <PostsListContainer>
      <Header />

      <PageTitle>
        Monitoramento de <br /> ponta.
      </PageTitle>

      <SearchBox
        ref={filterInputREF}
        onSubmit={filterList}
      />

      <PostsListWrapper>
        {
          isFetching ? (
            <Loader />
          ) : error ? (
            <p>Oh não, encontramos algum problema ao buscar os posts... 😓</p>
          ) : 
            posts.map(item => (
              <PostCard key={item.id} content={item} onClick={() => handleCardClick(item)} />
            ))
        }
      </PostsListWrapper>
    </PostsListContainer>
  )
}

export { PostsList };