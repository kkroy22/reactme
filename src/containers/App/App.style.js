import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { PALE_GOLDENROD } from '../../theme/variables';

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export const Background = styled.div`
  position: fixed;
  left: 0vw;
  width: 100vw;
  top: 0vh;
  height: 100vh;
  background-image: url(${require('../../assets/kk.gif')});
  background-color: ${PALE_GOLDENROD};
  opacity: 0.2;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;


export const SideContainer = styled(Flex)`
  position: fixed;
`;
