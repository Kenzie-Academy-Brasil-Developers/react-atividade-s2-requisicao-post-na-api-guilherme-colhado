import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #a5cfd4;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        text-align: center;
        color: white;
    }

    h3{
        margin-top: 30px;
        border-radius: 10px;
        padding-bottom: 5px;
    }

    h3.falha{
        color: red;
        background-color: #ff00008c;
    }
    h3.completa{
        color: #007400;
        background-color: #00ff008c;
    }
`