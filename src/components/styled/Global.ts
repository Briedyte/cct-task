import { createGlobalStyle } from "styled-components";
import { ColorPalette, MediaQueries } from "../../config/style";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 18px;
        ${MediaQueries.xs} {
            font-size: 16px;
        }
    }

    body {
        background: ${ColorPalette.background};
        color:  ${ColorPalette.text};
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
        color:  ${ColorPalette.primary};
        text-decoration: none;
    }

`;
