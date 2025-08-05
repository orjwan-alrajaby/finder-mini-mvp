'use client';

import { CheckboxProps } from 'react-aria-components';
import {
  StyledBox,
  StyledCheckbox,
  StyledCheckmarkIcon,
  StyledContainer,
} from './styled';

export default function SingleCheckbox({
  children,
  isDark,
  ...props
}: Omit<CheckboxProps, 'children'> & {
  children?: React.ReactNode;
  isDark?: boolean;
}) {
  return (
    <StyledCheckbox $isDark={isDark} {...props}>
      {({ isSelected }) => (
        <StyledContainer $isSelected={isSelected}>
          <StyledBox $isSelected={isSelected} className="checkbox">
            <StyledCheckmarkIcon
              src={isDark ? "/icons/checkmark-dark.svg" : "/icons/checkmark.svg"}
              alt="checkmark icon"
              fill
              $isSelected={isSelected}
            />
          </StyledBox>
          {children}
        </StyledContainer>
      )}
    </StyledCheckbox>
  );
}
