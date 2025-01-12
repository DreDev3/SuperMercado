import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/ReactToastify.css';

import * as colors from '../config/colors';
import textura from '../images/textura.jpg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
//   background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
  font-family: 'Ubuntu', sans-serif;
  background-image: url(${textura});
}

html, body, #root{
  height: 100%;
}

button {
  cursor: pointer;
  background: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify__progress-bar--success {
  background: ${colors.successColor};
}
body .Toastify .Toastify__progress-bar--error {
  background: ${colors.errorColor};
}

`;
export const Container = styled.section`
max-width: 95%;
background: #fff;
margin: 30px auto;
padding: 30px;
border-radius: 4px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
