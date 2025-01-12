import styled from 'styled-components';
import * as colors from '../../config/colors';


export const HeaderGlobal = styled.header`
  background-color: ${colors.primaryColor};
  position: relative;

  .logo {
    width: 150px;
    font-size: 20pt;
    padding: 10px;
    text-align: center;
    color: ${colors.secondColor};
}

.logo span {
    color: #fff;
}

.carrinho {
    position: absolute;
    right: 22px;
    top: 10px;
    cursor: pointer;
}

.notify {
   position: absolute;
    width: 20px;
    height: 20px;
    margin: -8px 25px;
    background-color: ${colors.secondColor};
    color: #fff;
    border-radius: 50%;
    text-align: center;
}

  ul {
    display: flex;
    justify-content: space-around;
    font-family: 'Ubuntu', sans-serif;
    font-size: 14pt;
    list-style: none;
    margin-top: 50px;
  }

    li {
    /* width: 100%; */
    padding: 8px;
}

li a {
    padding: 10px;
    text-decoration: none;
    color: #fff;
}

li a:hover {
    text-decoration: 2px underline ${colors.secondColor};
}


.submenu a:hover {
    text-decoration: underline;
}

`;

export const MenuItem = styled.li`
    position: relative;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        color: ${colors.primaryColor};
    }
`;

export const SubMenu = styled.ul`
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.secondColor};
    box-shadow: 0 20px 45px #00000020;
    list-style-type: none;
    padding: 10px 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    &.active {
        opacity: 1;
        visibility: visible;
    }

    li {
        padding: 5px 20px;
        cursor: pointer;

        &:hover {
            background-color: ${colors.primaryColor};
            color: white;
        }
    }
`;


