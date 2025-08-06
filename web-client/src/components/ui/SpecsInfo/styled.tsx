import styled from 'styled-components';

export const StyledSpecs = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const StyledSpec = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledSpecLabel = styled.span`
  position: absolute;
  left: -9999px;
`;

export const StyledSpecValue = styled.dd`
  font-family: ${(props) => props.theme.fonts.inter.regular};
  font-weight: 400;
  font-size: ${(props) => props.theme.fonts.sizes.small};
  color: ${(props) => props.theme.palette.textMuted};
`;
