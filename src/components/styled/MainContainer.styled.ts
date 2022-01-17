import styled from "styled-components";
import { media } from "./MeadiaQuerries";

export const MainContainer = styled.main`
  width: 1400px;
  padding: 2.5rem 1.25rem;
  margin: 0 auto;

  ${media.xl} {
    width: 98%;
  }
`;
