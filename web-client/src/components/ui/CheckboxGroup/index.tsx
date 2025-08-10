'use client';

import { CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components';
import { StyledCheckboxGroup, StyledList, StyledLabel } from './styled';
import SingleCheckbox from '../SingleCheckbox';

interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
  options: string[];
  label?: string;
  checkedOptions: string[];
  onChange: (checkedOptions: string[]) => void;
}

export default function CheckboxGroup({
  label,
  options,
  checkedOptions = [],
  onChange,
  ...props
}: Readonly<CheckboxGroupProps>) {
  const maxRows = 5;
  const numOptions = options.length;

  const numOfCols = Math.ceil(numOptions / maxRows);

  return (
    <StyledCheckboxGroup {...props} onChange={onChange} value={checkedOptions}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledList $numOfCols={numOfCols}>
        {options.map((opt) => (
          <SingleCheckbox key={opt} value={opt}>
            {opt}
          </SingleCheckbox>
        ))}
      </StyledList>
    </StyledCheckboxGroup>
  );
}
