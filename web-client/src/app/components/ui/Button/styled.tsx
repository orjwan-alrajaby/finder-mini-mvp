import styled, { css } from 'styled-components';
import { Button as AriaButton } from 'react-aria-components';
import Link from 'next/link';

type Size = 'md' | 'lg';

type SizeProps = {
  $size?: Size;
};

export const sizeVariants: Record<Size, ReturnType<typeof css>> = {
  lg: css`
    max-width: 352px;
    height: 48px;
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  `,
  md: css`
    max-width: 167px;
    height: 40px;
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  `,
};

const sharedBaseStyles = css<SizeProps>`
  width: 100%;
  ${({ $size = 'lg' }) => sizeVariants[$size]};
  padding: 12px 0px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

const StyledBaseButton = styled(AriaButton)<SizeProps>`
  ${sharedBaseStyles};
`;

const StyledBaseLink = styled(Link)<SizeProps>`
  ${sharedBaseStyles};
`;

const sharedPrimaryStyles = css`
  color: ${({ theme }) => theme.palette.text};
  background-color: ${({ theme }) => theme.palette.accent};
`;

export const StyledPrimaryBtn = styled(StyledBaseButton)`
  ${sharedPrimaryStyles};
`;

export const StyledPrimaryLink = styled(StyledBaseLink)`
  ${sharedPrimaryStyles};
`;