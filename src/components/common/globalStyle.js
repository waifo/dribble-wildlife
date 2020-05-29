import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0px;
    padding:0px;
    a{
        text-decoration:none;
        cursor:pointer;
    }
    li{
        list-style:none;
    }
    button{
        outline:none;
        cursor:pointer;
        border:0;
    }
}

`;
