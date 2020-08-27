import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 * {
  margin: 0 ;
  padding: 0 ;
  box-sizing:border-box;
  outline:none;
}

body{
  overflow-x:hidden;
  font-family: 'Open Sans', sans-serif;
  scrollbar-color: #000 white;
  scrollbar-width: thin; 
  max-width:100%;
  -webkit-font-smoothing: antialiased !important; 
  

}

body::-webkit-scrollbar {
  color:#fff; 
  width: 10px; 
}
body::-webkit-scrollbar-track {
  background: #fff;
  scrollbar-width: thin; 
}
body::-webkit-scrollbar-thumb {
  background-color: black;    /* color of the scroll thumb */
  scrollbar-width: thin;
   /* creates padding around scroll thumb */
}
textarea,
input[type="text"],
input[type="number"],
input[type="button"],
input[type="submit"],
input[type="email"],
input[type="tel"],
input[type="password"]{
     -webkit-appearance: none;
     border-radius: 0;
}
button, input,textarea{
  outline:none !important;
}
a{
  text-decoration:none !important;
  color:#fff;
}
ul {
  list-style:none;
}

`;

export default GlobalStyle;
