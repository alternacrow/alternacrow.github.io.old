import { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const bound = keyframes`
  0%   { transform: translate(0%, 0%) }
  100% { transform: translate(0%, -45px) }
`;

export const fadein = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeout = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
