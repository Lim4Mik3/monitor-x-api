import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.5rem 0;
`;

export const GoBackButton = styled.div`
  display: flex;
  align-items: center;

  color: #a8a8b3;
  padding: 0 0.5rem;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
    text-decoration: underline;
  }
`;
