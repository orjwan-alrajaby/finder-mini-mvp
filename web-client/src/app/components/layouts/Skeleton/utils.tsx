import { css, keyframes } from "styled-components";

export const shimmer = keyframes`
  0% { background-position: -900px 0; }
  100% { background-position: 900px 0; }
`;

export const getSkeletonStyle = (isDark: boolean = true) => css`
background-color: #333D4C;
  background-image: linear-gradient(
    90deg,
    transparent,
    ${isDark ? 'rgba(202, 208, 217, 0.04)' : 'rgba(202, 208, 217, 0.12)'},
    transparent
  );
  background-size: 300px 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1.6s ease-in-out infinite;
`;