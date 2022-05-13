import styled from "styled-components";
import { ColorPalette } from "../../config/style";


export const OrderedList = styled.ol`
  width: 100%;
  list-style: none;
  counter-reset: steps-counter;
  cursor: pointer;
`;

export const OrderedItem = styled.li`
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
      background: ${ColorPalette.gradient};
      color: ${ColorPalette.white};
      margin: 16px 36px 16px 30px;
    }

    &:after {
      content: "";
      display: block;
      background: ${ColorPalette.primary};
      height: 2px;
      width: ${({ statusLineWidth }: { statusLineWidth: number }) =>
        statusLineWidth || 200}px;
      transition: 0.5s all;
      position: absolute;
      bottom: 0;
    }
  }
`;
