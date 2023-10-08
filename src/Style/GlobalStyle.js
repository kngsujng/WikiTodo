import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    }
    body{
        background-color: ${({ theme }) => theme.bodyBgColor};
    }
    a{
        text-decoration : none;
        color: ${({ theme }) => theme.txtColor};
    }
    button{
        background-color: ${({ theme }) => theme.defaultBtnColor};
        border : none;
        cursor : pointer;
    }
    input{
        background-color: ${({ theme }) => theme.inpColor};
        &::placeholder{
            color: ${({ theme }) => theme.placeholderColor};
        }
    }
`;

export default GlobalStyle;
