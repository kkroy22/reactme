import { injectGlobal } from 'styled-components';
import { GRANITE_GRAY } from './variables';

/* eslint-disable */

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nova+Mono|VT323');
  body {
    font-family: 'VT323', monospace;
    #font-family: 'Nova Mono', monospace;
    font-size: 24px;
    color: ${GRANITE_GRAY};
  }
  h1, h2, h3 {
    font-weight: normal;
  }
`
