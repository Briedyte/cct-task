import styled from "styled-components";

export const OrderedList = styled.ol`
  width: 100%;
  list-style: none;
  counter-reset: tasks-counter;
`;

export const OrderedItem = styled.li`
  width: 100%;
  list-style-position: inside;
  margin-bottom: 20px;
  max-width: 100%;
  counter-increment: tasks-counter;

  h2 {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.161);
    width: 100%;

    &:before {
      content: counter(tasks-counter);
      font-size: 36px;
      display: inline-block;
      width: 50px;
      height: 53px;
      text-align: center;
      background: linear-gradient(180deg, #00a9a7 0%, #00ba89 100%);
      color: white;
      margin: 16px 30px 16px 36px;
    }

    &:after {
      content: "";
      display: block;
      background: #00adaa;
      height: 2px;
      width: 200px;
      transition: 0.5s all;
    }
  }
`;