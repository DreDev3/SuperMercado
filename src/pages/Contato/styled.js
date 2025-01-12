import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Main = styled.main`
h2 {
  text-align: center;
  line-height: 50px;
}

span:first-of-type {
  color: ${colors.secondColor};
}
h2 span {
  background-color: ${colors.primaryColor};
  color: #fff;
  padding: 8px;
}

.instagram, .facebook, .linkedin, .email {
  width: 250px;
  height: 70px;
  margin: 5px;
}

.instagram a, .facebook a, .linkedin a, .email a{
 color: #fff;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.instagram span {
  background-color: transparent;
  color: #fff;
}

.instagram {
  background: linear-gradient(80deg, rgba(252, 204, 99),rgba(251, 173, 80), rgba(205, 72, 107),rgba(76, 104, 215));
  color: #fff;
  padding: 8px;

}

.instagram span, .facebook span, .linkedin span, .email span{
  padding: 0;
  font-size: 36px;
}

.instagram, .facebook, .linkedin, .email {
  display: flex;
  align-items: center;
  justify-content: center;
}

.facebook, .facebook span {
  background: #000080;
  color: #fff;
  padding: 8px;
}


.linkedin, .linkedin span {
  background: rgb(0, 114, 177) ;
  color: #fff;
  padding: 8px;
}

.email, .email span {
  background: ${colors.secondColor} ;
  color: #fff;
  padding: 8px;
}
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: ${colors.secondColor};
  margin-bottom: 30px;
`;

export const Social = styled.div`
display: flex;
justify-content: space-around;
margin-top: 100px;
flex-wrap: wrap;
`;

