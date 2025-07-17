import {Key, usePopover} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';
import {useRef, useState} from 'react';
import Image from 'next/image';

import {
  StyledContainer,
  StyledLabel,
  StyledSelectTrigger,
  StyledUnderlay,
  StyledPopover,
  StyledListBox, 
  StyledListBoxItem,
  StyledPlaceholderValue,
  StyledChipList,
  StyledChip,
} from './styled';
import SingleCheckbox from '../SingleCheckbox';

export default function MultiSelectDropdown({ label, options }: Readonly<{ label: string, options: string[] }>) {
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set());

  // Overlay state to control popover open/close
  const state = useOverlayTriggerState({});
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Popover props for managing overlay behaviors
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
    <StyledContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelectTrigger onClick={state.toggle} ref={triggerRef}>
        {selectedKeys.size > 0  
        
          ? <StyledChipList>
          {[...selectedKeys].map(key => <StyledChip key={key}>
             {key}
            </StyledChip>)}
            </StyledChipList>
          
          // <StyledSelectValue>{[...selectedKeys].join(', ')}</StyledSelectValue>
          : <StyledPlaceholderValue>{label}</StyledPlaceholderValue>}
        <span className="select-value-container">
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
        <StyledUnderlay {...underlayProps}>
          <StyledPopover
            ref={popoverRef}
            {...newPopoverProps}
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
                <StyledListBoxItem key={opt} id={opt} $isSelected={selectedKeys.has(opt)}>
                  <span>{opt}</span>
                  <SingleCheckbox isSelected={selectedKeys.has(opt)} />
                </StyledListBoxItem>
              ))}
            </StyledListBox>
          </StyledPopover>
        </StyledUnderlay>
      )}
    </StyledContainer>
  );
}
