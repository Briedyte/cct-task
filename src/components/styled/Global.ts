import { createGlobalStyle } from "styled-components";
import { theme } from "../../App";

const media = {
  xs: "@media only screen and (max-width: 576px)",
};

export default createGlobalStyle<{ theme: typeof theme }>`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        ${media.xs} {
            font-size: 14px;
        }
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color:  ${({ theme }) => theme.colors.text};
        font-family: 'Manrope', sans-serif;
        font-weight: 700;
        margin: 0;
    }

    h1 {
        font-size: 4rem;
        margin-bottom: 29px;
        color: #000000;
    }

    li, h2 {
        font-size: 18px;
    }

    a {
        color:  ${({ theme }) => theme.colors.primary};
        text-decoration: none;
    }

`;
