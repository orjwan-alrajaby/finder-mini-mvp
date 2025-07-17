'use client';

import {
  CheckboxProps,
} from 'react-aria-components';
import { StyledBox, StyledCheckbox, StyledCheckmarkIcon, StyledContainer } from './styled';

export default function SingleCheckbox({
  children,
  ...props
}: Omit<CheckboxProps, 'children'> & {
  children?: React.ReactNode;
}) {
    
  return (
    <StyledCheckbox {...props}>
      {({ isSelected }) => {
        return (
        <StyledContainer $isSelected={isSelected}>
          <StyledBox $isSelected={isSelected} className="checkbox">
              {isSelected ? (
                <StyledCheckmarkIcon src="/icons/checkmark.svg" alt="checkmark icon" fill={true} $isSelected={isSelected} />
              ) : (
                null
              )}
          </StyledBox>
          {children}
        </StyledContainer>
      )}}
    </StyledCheckbox>
  );
}