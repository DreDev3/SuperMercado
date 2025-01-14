import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Main = styled.main`
    position: relative;
    margin: auto;
    border-radius: 10px;

    h1 {
    text-align: center;
    color: ${colors.secondColor};
    font-size: 26pt;
}

.date {
    position: relative;
    display: block;
    margin-top: 20px;
    text-align: center;
    color: #7aeb4a;
    font-weight: bold;
}

.offer {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
}

.product {
    text-align: center;
    position: relative;
    width: 220px;
    height: 260px;

    @media (max-width: 780px) {
      width: 150px;
      height: auto;

      img {
        width:100%;
      }
    }
}

.product h4{
  font-size: 17px;
}

.product h6 {
    font-size: 17px;
}

.product .title {
  height: 60px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
}

.product .description {
  font-size: 13px;
  overflow: hidden;
}

.purchase {
    display: flex;
    justify-content: space-around;
}

.purchase img {
    width: 30px;
    cursor: pointer;
}

.more img:active {
    background-color: #cbffb3;
    border-radius: 50%;
}

.less img:active {
    background-color: #ffaeae;
    border-radius: 50%;
}
`;

