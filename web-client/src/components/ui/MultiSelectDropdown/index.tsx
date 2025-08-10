import { Key, usePopover } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import { useRef } from 'react';
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
  isDark,
  selectedKeys = [],
  setSelectedKeys
}: Readonly<{
  label?: string;
  placeholder?: string;
  options: string[];
  isDark?: boolean;
  selectedKeys: Key[],
  setSelectedKeys: (keys: Key[]) => void;
}>) {
  const state = useOverlayTriggerState({});
  const triggerRef = useRef<HTMLButtonElement>(null);

  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps } = usePopover(
    {
      popoverRef,
      triggerRef,
    },
    state
  );

  const newPopoverProps = { ...popoverProps, style: {} };

  return (
    <div className="select-dropdown">
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledContainer>
        <StyledSelectTrigger
          onClick={state.toggle}
          ref={triggerRef}
          $isDark={!!isDark}
        >
          {selectedKeys?.length > 0 ? (
            <StyledChipList>
              {[...selectedKeys].map((key) => (
                <StyledChip $isDark={isDark} key={key}>
                  {key}
                </StyledChip>
              ))}
            </StyledChipList>
          ) : (
            <StyledPlaceholderValue>
              {label ?? placeholder}
            </StyledPlaceholderValue>
          )}
          <span className="num-of-selected-keys">
            {!!selectedKeys?.length && <span> ({selectedKeys?.length})</span>}
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
                    setSelectedKeys([...keys]);
                  }
                }}
              >
                {options.map((opt) => (
                  <StyledListBoxItem
                    key={opt}
                    id={opt}
                    $isSelected={selectedKeys.includes(opt)}
                    $isDark={isDark}
                  >
                    <span>{opt}</span>
                    <SingleCheckbox
                      isSelected={selectedKeys.includes(opt)}
                      isDark={isDark}
                    />
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
