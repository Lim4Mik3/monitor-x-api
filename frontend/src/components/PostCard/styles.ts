import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 650px;
  width: 100%;
  height: 100px;
  padding: 0 1rem;

  background: #ffffff;
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.95);
    transform: scale(1.025);
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const PostOwnerInfo = styled.div`
  p {
    font-size: 20px;
    font-weight: bold;
    color: #3d3d4d;
  }
`;

export const PostOwnerName = styled.h4`
  padding: 0.5rem 0;
  font-size: 16px;
  font-weight: 400;
  color: #292929;

  span {
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #69abe8;
  }
`;
