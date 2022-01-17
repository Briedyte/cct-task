import styled from "styled-components";

interface Props {
  statusLineWidth: number;
}

export const OrderedList = styled.ol`
  width: 100%;
  list-style: none;
  counter-reset: steps-counter;
  cursor: pointer;
`;

export const OrderedItem = styled.li<Props>`
  width: 100%;
  list-style-position: inside;
  margin-bottom: 1.25rem;
  max-width: 100%;
  counter-increment: steps-counter;

  h2 {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.161);
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem;
    padding-left: 0;

    &:before {
      content: counter(steps-counter);
      font-size: 2.25rem;
      display: inline-block;
      min-width: 50px;
      height: 53px;
      text-align: center;
      background: ${({ theme }) => theme.colors.primary};
      background: linear-gradient(180deg, #00a9a7 0%, #00ba89 100%);
      color: white;
      margin: 16px 36px 16px 30px;
    }

    &:after {
      content: "";
      display: block;
      background: ${({ theme }) => theme.colors.primary};
      height: 2px;
      width: ${(props) =>
        props.statusLineWidth ? props.statusLineWidth : 200}px;
      transition: 0.5s all;
      position: absolute;
      bottom: 0;
    }
  }
`;
