import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    }
    body{
        background-color: #E8E8E8;
    }
    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

`;

export default GlobalStyle;
