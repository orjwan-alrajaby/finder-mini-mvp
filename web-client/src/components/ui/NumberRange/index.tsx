import { NumberField } from 'react-aria-components';
import { StyledDiv, StyledNumberInput, StyledLegend } from './styled';

type Range = { min: number; max: number };

interface NumberRangeProps {
  title: string;
  value: Range;
  onChange: (range: Range) => void;
}

export default function NumberRange({
  title,
  value,
  onChange
}: Readonly<NumberRangeProps>) {
  return (
    <fieldset>
      <StyledLegend>{title}</StyledLegend>
      <StyledDiv>
        <NumberField
          aria-label="min value"
          minValue={0}
          value={value.min}
          onChange={(min) => onChange({ ...value, min: min ?? 0 })}
        >
          <StyledNumberInput placeholder="Min value" />
        </NumberField>

        <span>—</span>

        <NumberField
          aria-label="max value"
          minValue={0}
          value={value.max}
          onChange={(max) => onChange({ ...value, max: max ?? 0 })}
        >
          <StyledNumberInput placeholder="Max value" />
        </NumberField>
      </StyledDiv>
    </fieldset>
  );
}
