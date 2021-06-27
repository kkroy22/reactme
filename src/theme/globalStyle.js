import { injectGlobal } from 'styled-components';
import { GRANITE_GRAY } from './variables';

/* eslint-disable */

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
