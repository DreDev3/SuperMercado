import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Main = styled.main`
    position: relative;
    width: 90%;
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
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
}

.product {
    text-align: center;
    position: relative;
    width: 250px;
    height: 260px;
}

.product h4{
    font-size: 14pt;
    color: ${colors.primaryColor};
    /* flex-wrap: wrap; */
}

.product h6 {
    font-size: 13pt;
    color: ${colors.secondColor};
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

