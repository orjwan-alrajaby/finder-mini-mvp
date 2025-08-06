import { NumberField } from 'react-aria-components';
import { StyledDiv, StyledNumberField, StyledLegend } from './styled';

export default function NumberRange({ title }: Readonly<{ title: string }>) {
  return (
    <fieldset>
      <StyledLegend>{title}</StyledLegend>
      <StyledDiv>
        <NumberField aria-label="min value" minValue={0}>
          {() => {
            // TODO: use "({ state }) => {...}" to handle the functionality of this component
            return <StyledNumberField placeholder="Min value" />;
          }}
        </NumberField>
        <span>—</span>
        <NumberField aria-label="max value" minValue={0}>
          {() => {
            // TODO: use "({ state }) => {...}" to handle the functionality of this component
            return <StyledNumberField placeholder="Max value" />;
          }}
        </NumberField>
      </StyledDiv>
    </fieldset>
  );
}
