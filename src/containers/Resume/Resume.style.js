import styled from 'styled-components';
import { OLIVINE } from '../../theme/variables';
import { Relative } from '../../theme/grid';

export const Title = styled.h1`
  margin-top: 0;
  color: ${OLIVINE};
`;

export const VideoContainer = styled(Relative)`
  width: 40%;
  flex-shrink: 0;
  flex-grow: 0;
`;
