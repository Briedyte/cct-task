import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 1400px;
  padding: 2.5rem 1.25rem;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 1400px) {
    & {
        width: 95%;
    }
`;