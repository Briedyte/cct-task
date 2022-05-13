import styled from "styled-components";
import { MediaQueries } from "../../config/style";

export const MainContainer = styled.main`
  width: 1400px;
  padding: 2.5rem 1.25rem;
  margin: 0 auto;

  ${MediaQueries.xl} {
    width: 98%;
  }
`;
