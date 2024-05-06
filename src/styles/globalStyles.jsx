import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import FixelDisplayRegular from "../fonts/FixelDisplay-Regular.otf";
import FixelDisplayMedium from "../fonts/FixelDisplay-Medium.otf";
import FixelDisplaySemiBold from "../fonts/FixelDisplay-SemiBold.otf";
import FixelDisplayBold from "../fonts/FixelDisplay-Bold.otf";
import SFProDisplayLight from "../fonts/SF-Pro-Display-Light.otf";
import SFProDisplayRegular from "../fonts/SF-Pro-Display-Regular.otf";

export const GlobalStyle = createGlobalStyle`


    @font-face {
        font-family: 'FixelDisplay';
        src: local('FixelDisplayRegular'),
        url(${FixelDisplayRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'FixelDisplay';
        src: local('FixelDisplayMedium'),
        url(${FixelDisplayMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'FixelDisplay';
        src: local('FixelDisplaySemiBold'),
        url(${FixelDisplaySemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'FixelDisplay';
        src: local('FixelDisplayBold'),
        url(${FixelDisplayBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

     @font-face {
        font-family: 'SFProDisplay';
        src: local('SFProDisplayLight'),
        url(${SFProDisplayLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

      @font-face {
        font-family: 'SFProDisplay';
        src: local('SFProDisplayRegular'),
        url(${SFProDisplayRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
   
body {
  margin: 0; 
  padding: 0;
  font-family: 'FixelDisplay', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'FixelDisplay', sans-serif;
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
