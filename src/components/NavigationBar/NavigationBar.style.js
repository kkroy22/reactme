import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { CAMOUFLAGE_GREEN, FLAX, OLIVINE } from '../../theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 1em;
  top: 1em;
`;

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export const NavItem = styled(Link)`
  margin-right: 6px;
  font-size: 1.5em;
  cursor: pointer;
  color: ${CAMOUFLAGE_GREEN};
  position: relative;
  text-decoration: none;
  &:hover {
    color: ${FLAX};
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${OLIVINE};
      z-index: -1;
      transform: scale(1.3, 1.5);
    }
  }
`;

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/
