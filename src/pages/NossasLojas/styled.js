import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Main = styled.main`

  .storeOne {
    display: flex;
    margin-bottom: 50px;
}

.infoLoja {
  width: 100%;
  height: 255px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 50%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 50%;
    height: auto;
  }
}

.right {
  text-align: right;
}

.image {
    margin: 0 10px;
    width: 355px;

    @media (max-width: 768px) {
    width: 50%;
    height: auto;
  }
}
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: ${colors.secondColor};
  margin-bottom: 30px;
`;

