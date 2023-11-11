import { createGlobalStyle } from 'styled-components';
import './font.css';

export const GlobalStyles = createGlobalStyle`

* {
  font-family: 'Roboto';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}
html {
    scrollbar-width: thin;
    scrollbar-color: #FF851C;
}
body {
  overflow-x: hidden;
  background: #fff;
 }

img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

::-webkit-scrollbar {
  width: 8px;
 }
 ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  background: #00D7FF;
}

::-webkit-scrollbar-thumb {
  height: 20px;
  background:  #FF851C;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`