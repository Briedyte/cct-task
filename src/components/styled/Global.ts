import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: #FFFFFF;
        color: #000000;
        font-family: 'Manrope', sans-serif;
        font-weight: 700;
        margin: 0;
    }

    h1 {
        font-size: 4rem;
        margin-bottom: 29px;
    }

    li, h2 {
        font-size: 18px;
    }
`;
