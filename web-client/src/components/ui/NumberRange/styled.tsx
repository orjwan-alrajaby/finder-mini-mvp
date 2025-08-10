import styled from 'styled-components';
import { Input } from 'react-aria-components';

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.palette.inputColor};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;

export const StyledNumberInput = styled(Input)`
  color: ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-weight: 500;
  height: 2.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.palette.inputColor};
  border-radius: 0.5rem;

  &[data-focused] {
    outline: 1px solid ${({ theme }) => theme.palette.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.inputColor};
    font-family: ${({ theme }) => theme.fonts.inter.medium};
    font-weight: 500;
  }
`;

export const StyledLegend = styled.legend`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-family: ${({ theme }) => theme.fonts.inter.semibold};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary};
  width: 100%;
  margin-bottom: 1rem;
`;
