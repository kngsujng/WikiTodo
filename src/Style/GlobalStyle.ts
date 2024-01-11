import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    .screen-out{
      overflow: hidden; 
      position: absolute; 
      width: 0; 
      height: 0; 
      line-height: 0; 
      text-indent: -9999px;
    }
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
        padding: 0;
        background-color: ${({ theme }) => theme.defaultBtnColor};
        border : none;
        cursor : pointer;
    }
    input, textarea, select{
        border-radius: 5px;
        background-color: ${({ theme }) => theme.inpColor};
        &::placeholder{
            color: ${({ theme }) => theme.placeholderColor};
        }
    }
    input[type=checkbox], label{
      cursor: pointer;
    }
`;

export default GlobalStyle;
