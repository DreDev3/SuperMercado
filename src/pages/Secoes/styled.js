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

.offer {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
}

.title-sector {
    width: 100%;
    margin: 20px;
}

.product {
    text-align: center;
    position: relative;
}

.product h4{
    font-size: 14pt;
    /* flex-wrap: wrap; */
}

.product h6 {
    font-size: 13pt;
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

