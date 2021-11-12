import styled from "styled-components";

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
    background-image: url("./images/radio.svg");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: ${iconSize}px;
  }
`;