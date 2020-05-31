import { createGlobalStyle } from "styled-components";

import { Colors } from "./";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'IBM Plex Serif', serif;
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
    color:${Colors.LIGHT_GREY};
}

`;
