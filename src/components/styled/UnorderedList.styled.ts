import styled from "styled-components";
import radioImg from "../../images/radio.svg";

const iconSize = 21;

export const UnorderedList = styled.ul`
  padding: 0 4rem;
  vertical-align: middle;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  li {
    margin: 0;
    margin-top: 1.25rem;
    padding-left: calc(${iconSize}px + 21px);
    list-style: none;
    background-image: url(${radioImg});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: ${iconSize}px;
  }
`;
