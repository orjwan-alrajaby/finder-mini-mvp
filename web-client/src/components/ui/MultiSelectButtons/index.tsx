'use client';

import { useState } from 'react';
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
}: Readonly<{
  label: string;
}>) {
  const [selected, setSelected] = useState(new Set<Key>(['bold']));

  return (
    <StyledDiv>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
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
