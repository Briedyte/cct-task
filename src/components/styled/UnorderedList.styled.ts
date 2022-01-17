import styled from "styled-components";
import radioImg from "../../images/radio.svg";
import { media } from "./MeadiaQuerries";

const iconSize = 21;

export const UnorderedList = styled.ul`
  padding: 0.1rem 4rem;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  ${media.xs} {
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
