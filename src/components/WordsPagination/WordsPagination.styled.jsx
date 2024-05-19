import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledReactPaginate = styled(ReactPaginate).attrs({
  // Тут ви можете додати класові імена для стилізації
})`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 10px;

  li {
    margin: 0 5px;
    cursor: pointer;

    &.active a {
      font-weight: bold;
      color: #fff;
      background-color: #007bff;
    }

    &.visible {
      display: inline;
    }

    &.hidden {
      display: none;
    }

    &.previous,
    &.next {
      font-weight: bold;
    }

    &.break {
      cursor: default;
    }
  }

  a {
    text-decoration: none;
    padding: 5px 10px;
    color: #007bff;
    &:hover {
      background-color: #e9ecef;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
