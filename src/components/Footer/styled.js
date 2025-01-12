import styled from 'styled-components';
import * as colors from '../../config/colors';


export const Section = styled.section`
  width: 100%;
  background-color: ${colors.secondColor};
  margin-top: 20px;
  color: #fff;
  padding: 8px;
  display: flex;
  bottom: 35px;

.payForm {
    text-align: left;
    padding: 10px;
    width: 50%;
}

.payForm h4 {
    text-align: center;
}

.payForm img {
    width: 80px;
}

.minor {
    width: 50%;
    font-size: 10pt;
    margin-top: 20px;
}
`;

export const FooterGlobal = styled.footer`
width: 100%;
height: 45px;
background-color: ${colors.secondColor};
color: #fff;
padding: 8px;
text-align: center;
display: block;
bottom: 0;


  p {
    font-size: 12px;
}

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}

  a:hover {
    color: ${colors.primaryColor};
    text-decoration: underline;
}
`;

export const PageUp = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 1;

    img {
    width: 50px;
}
`;
