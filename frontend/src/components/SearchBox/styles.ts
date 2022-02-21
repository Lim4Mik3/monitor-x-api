import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  padding: 2.5rem 0;

  .search--input {
    max-width: 400px;
    width: 100%;
    height: 48px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 0;

    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      color: #ccc;
    }
  }

  .search--button {
    width: 150px;
    height: 48px;

    border: 0;
    border-radius: 4px;
    background-color: #04d361;

    color: #f7ebfa;
    font-weight: bold;
    font-size: 1.1rem;

    transition: filter 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;
