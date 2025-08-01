import {Key, usePopover} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';
import {useRef, useState} from 'react';
import Image from 'next/image';

import {
  StyledContainer,
  StyledLabel,
  StyledSelectTrigger,
  StyledPopover,
  StyledListBox, 
  StyledListBoxItem,
  StyledPlaceholderValue,
  StyledChipList,
  StyledChip,
} from './styled';
import SingleCheckbox from '../SingleCheckbox';

export default function MultiSelectDropdown({ 
  label, 
  placeholder, 
  options, 
  isDark 
}: Readonly<{ 
  label?: string, 
  placeholder?: string, 
  options: string[], 
  isDark?: boolean 
}>) {
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set());

  const state = useOverlayTriggerState({});
  const triggerRef = useRef<HTMLButtonElement>(null);

  const popoverRef = useRef<HTMLDivElement>(null);
  const {popoverProps, underlayProps } = usePopover(
    {
      popoverRef,
      triggerRef,
    },
    state
  );

  const newPopoverProps = {...popoverProps, style: {}}

  return (
    <div className="select-dropdown">
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledContainer>
        <StyledSelectTrigger onClick={state.toggle} ref={triggerRef} $isDark={!!(isDark)}>
          {selectedKeys.size > 0  
          
            ? <StyledChipList>
            {[...selectedKeys].map(key => <StyledChip $isDark={isDark} key={key}>
              {key}
              </StyledChip>)}
              </StyledChipList>
                : <StyledPlaceholderValue>{label ?? placeholder}</StyledPlaceholderValue>}
          <span className="num-of-selected-keys">
            {!!selectedKeys.size && <span> ({selectedKeys.size})</span>}
            <Image
              src="/icons/down-arrow.svg"
              width={14}
              height={14}
              alt=""
              aria-hidden="true"
            />
          </span>
        </StyledSelectTrigger>
        {state.isOpen && (
          <div {...underlayProps}>
            <StyledPopover
              ref={popoverRef}
              {...newPopoverProps}
              $isDark={isDark}
            >
              <StyledListBox
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={(keys) => {
                  if (keys instanceof Set) {
                    setSelectedKeys(keys);
                  }
                }}
              >
                {options.map((opt) => (
                  <StyledListBoxItem key={opt} id={opt} $isSelected={selectedKeys.has(opt)} $isDark={isDark}>
                    <span>{opt}</span>
                    <SingleCheckbox isSelected={selectedKeys.has(opt)} isDark={isDark} />
                  </StyledListBoxItem>
                ))}
              </StyledListBox>
            </StyledPopover>
          </div>
        )}
      </StyledContainer>
    </div>
  );
}
