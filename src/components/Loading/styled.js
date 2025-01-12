import styled, {keyframes} from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

import * as colors from '../../config/colors';

export const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 30px;
transition: all 300ms;

div {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);
}

span {
  z-index: 2;
}
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(FaSpinner)`
  animation: ${spin} 2s linear infinite;
  font-size: 2rem;
  color: ${colors.primaryColor};
`;
