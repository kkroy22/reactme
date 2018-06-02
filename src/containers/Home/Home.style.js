
import styled, {css} from 'styled-components';
import { OLIVINE } from '../../theme/variables';
import { Relative } from '../../theme/grid';

export const Image = styled.img`
  width: 100%;
`;

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export const Title = styled.h1`
  margin-top: 0;
  color: ${OLIVINE};
`;


let state;
let obs;

// let background = setTimeout(function tick() {

//   background = setTimeout(tick, 5000);
// }, 5000);

state = 0
if(state == 0){
  state = 1;
  console.log(state)
  obs = require('../../assets/coffee_in_rain_by_kirokaze-d98qb8z.gif');
}
else{
  state = 0;
  console.log(state)
  obs = require('../../assets/waiting_the_snow_by_kirokaze-datjp1z.gif');
}

export const Artk = styled.div`
  height: 100vh;
  background-image: url('${obs}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 2em;
  h1 {
    margin-bottom: 0;
  }
`;

export const RevealPl = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${OLIVINE};
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
export const RevealPr = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${OLIVINE};
    transform-origin: right;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export const RevealPc = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${OLIVINE};
    transform-origin: center;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
