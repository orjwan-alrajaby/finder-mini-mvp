'use client';

import type { Key } from 'react-aria-components';
import {
  StyledToggleButton,
  StyledToggleButtonGroup,
  StyledDiv,
  StyledLabel,
} from './styled';

const options = ['Any', 1, 2, 3, '4+'];

export default function MultiSelectButtonGroup({
  label,
  selected,
  setSelected,
}: Readonly<{
  label: string;
  selected: Key[];
  setSelected: (keys: Key[]) => void;
}>) {

  const handleSetSelected = (keys: Set<Key>) => {
    setSelected([...keys])
  };

  return (
    <StyledDiv>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={handleSetSelected}
      >
        {options.map((opt) => (
          <StyledToggleButton key={opt} id={opt}>
            {opt}
          </StyledToggleButton>
        ))}
      </StyledToggleButtonGroup>
    </StyledDiv>
  );
}
