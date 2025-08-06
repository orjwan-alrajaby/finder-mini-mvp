'use client';

import { CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components';
import { StyledCheckboxGroup, StyledList, StyledLabel } from './styled';
import SingleCheckbox from '../SingleCheckbox';

interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
  options: { label: string; value: string }[];
  label?: string;
}

export default function CheckboxGroup({
  label,
  options,
  ...props
}: Readonly<CheckboxGroupProps>) {
  const maxRows = 5;
  const numOptions = options.length;

  const numOfCols = Math.ceil(numOptions / maxRows);

  return (
    <StyledCheckboxGroup {...props}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledList $numOfCols={numOfCols}>
        {options.map((opt, index) => (
          <SingleCheckbox key={opt.label + index} value={opt.value}>
            {opt.label}
          </SingleCheckbox>
        ))}
      </StyledList>
    </StyledCheckboxGroup>
  );
}
