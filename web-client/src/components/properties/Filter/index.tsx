'use client';

import React, { useRef } from 'react';
import {
  ToggleButton,
  Backdrop,
  Drawer,
  DrawerContent,
  DrawerHeader,
  CloseButton,
  StyledH3,
  StyledActionsBar,
  ClearBtn,
} from './styled';
import Image from 'next/image';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useModalOverlay, useDialog, FocusScope } from 'react-aria';
import Button from '@/components/ui/Button';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import useFilterStore from '@/stores/filter';

export default function Filter() {
  const state = useOverlayTriggerState({});
  const ref = useRef<HTMLDivElement>(null);
  const clearAll = useFilterStore((state) => state.clearAll);

  const { modalProps, underlayProps } = useModalOverlay(
    {
      isDismissable: true,
    },
    state,
    ref
  );

  const { dialogProps } = useDialog({}, ref);

  return (
    <div>
      <ToggleButton
        onClick={() => (state.isOpen ? state.close() : state.open())}
        aria-label={state.isOpen ? 'Close filter' : 'Open filter'}
        aria-expanded={state.isOpen}
        aria-controls="filter-drawer"
      >
        <Image
          src="/icons/filter.svg"
          alt="filter icon"
          width={22}
          height={22}
        />
      </ToggleButton>

      <Backdrop $isOpen={state.isOpen} {...underlayProps}>
        <FocusScope contain restoreFocus autoFocus>
          <Drawer
            $isOpen={state.isOpen}
            id="filter-drawer"
            {...modalProps}
            {...dialogProps}
            ref={ref}
            onClick={(e) => e.stopPropagation()}
          >
            <DrawerContent>
              <DrawerHeader>
                <StyledH3>All Filters</StyledH3>
                <CloseButton onClick={state.close} aria-label="Close filter">
                  <Image
                    src="/icons/close-dark.svg"
                    alt="close icon"
                    width={24}
                    height={24}
                  />
                </CloseButton>
              </DrawerHeader>
              <FirstSection />
              <SecondSection />
              <ThirdSection />
            </DrawerContent>
            <StyledActionsBar>
              <ClearBtn aria-label="Reset Dropdowns Filters" onClick={clearAll}>
                Clear all
              </ClearBtn>
              <Button
                label="Apply Filters"
                type="button"
                aria-label="Apply Filters"
                size="md"
              />
            </StyledActionsBar>
          </Drawer>
        </FocusScope>
      </Backdrop>
    </div>
  );
}
