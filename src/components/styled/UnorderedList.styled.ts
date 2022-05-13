import styled from "styled-components";
import radioImg from "../../images/radio.svg";
import { MediaQueries } from "../../config/style";

interface UnorderedListProps {
  opacity: number;
  height: number;
}

const iconSize = 21;

export const UnorderedList = styled.ul`
  padding: 0.1rem 4rem;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  opacity: ${(props: UnorderedListProps) => props.opacity || 0};
  height: ${(props: UnorderedListProps) => `${props.height}px` || 0};
  transition: all 0.5s ease-in;

  ${MediaQueries.xs} {
    padding: 0.1rem 1rem;
  }

  li {
    margin: 0;
    margin-top: 1.25rem;
    padding-left: calc(${iconSize}px + 21px);
    list-style: none;
    background-image: url(${radioImg});
    background-repeat: no-repeat;
    background-size: ${iconSize}px;
  }
`;
