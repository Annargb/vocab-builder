import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import HelveticaRegular from "../fonts/HelveticaNeue-Regular.otf";
import HelveticaMedium from "../fonts/HelveticaNeueMedium.otf";
import HelveticaBold from "../fonts/HelveticaNeueBold.otf";

export const GlobalStyle = createGlobalStyle`


    @font-face {
        font-family: 'Helvetica';
        src: local('HelveticaRegular'),
        url(${HelveticaRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Helvetica';
        src: local('HelveticaMedium'),
        url(${HelveticaMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Helvetica';
        src: local('HelveticaBold'),
        url(${HelveticaBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
   
body {
  margin: 0; 
  padding: 0;
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Helvetica', sans-serif;
}

a {
    text-decoration: none;
    cursor: pointer;
  }


ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}


h1,
h2,
h3,
h4,
h5,
h6, 
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

input, textarea, select, button {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  }
  
`;
