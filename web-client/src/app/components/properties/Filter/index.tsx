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
  StyledGrid,
  StyledInputGrid,
  StyledActionsBar,
  ClearBtn
} from './styled';
import Image from 'next/image';
import {
  useOverlayTriggerState,
} from '@react-stately/overlays';
import {
  useModalOverlay,
  useDialog,
  FocusScope,
} from 'react-aria';
import CheckboxGroup from '../../ui/CheckboxGroup';
import MultiSelectButtonGroup from '../../ui/MultiSelectButtons';
import NumberRange from '../../ui/NumberRange';
import MultiSelectDropdown from '../../ui/MultiSelectDropdown';
import Button from '../../ui/Button';

export default function Filter() {
  const state = useOverlayTriggerState({});
  const ref = useRef<HTMLDivElement>(null);

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
        <Image src="/icons/filter.svg" alt="filter icon" width={22} height={22} />
      </ToggleButton>

      <Backdrop $isOpen={state.isOpen} {...underlayProps}>
            <FocusScope contain restoreFocus autoFocus>
              <Drawer
                $isOpen={state.isOpen}
                id="filter-drawer"
                {...modalProps}
                {...dialogProps}
                ref={ref}
                onClick={e => e.stopPropagation()}
              >
                <DrawerContent>
                  <DrawerHeader>
                    <StyledH3>All Filters</StyledH3>
                    <CloseButton onClick={state.close} aria-label="Close filter">
                      <Image src="/icons/close-dark.svg" alt="close icon" width={24} height={24} />
                    </CloseButton>
                  </DrawerHeader>
                  <StyledInputGrid>
                  <MultiSelectDropdown 
                      label="Location"
                      options={[
                        'Brooklyn, New York',
                        'Queens, New York',
                        'Downtown New York',
                      ]} 
                    />
                  <MultiSelectDropdown 
                  label="Listing Type"
                  options={[
                      'For Rent',
                      'For Sale',
                      'Rent-to-Own',
                      'Shared Accommodation'
                    ]} />
                  </StyledInputGrid>
                  <StyledInputGrid>
                    <MultiSelectDropdown 
                    label="Home Type"
                    options={[
                      'Apartment',
                      'House',
                      'Studio',
                      'Townhouse',
                      'Duplex',
                      'Loft',
                      'Condo'
                    ]} />
                    <NumberRange title="Price per month, $" />
                  </StyledInputGrid>
                  <StyledInputGrid>
                    <NumberRange title="Square metres" />
                    <NumberRange title="Year built" />
                  </StyledInputGrid>
                  <StyledInputGrid>
                    <MultiSelectButtonGroup label="Bedrooms" />
                    <MultiSelectButtonGroup label="Bathrooms" />
                  </StyledInputGrid>
                  <CheckboxGroup 
                    label="Amenities" 
                    options={[
                      { label: "Air conditioning", value: "air conditioning" },
                      { label: "Pool", value: "pool" },
                      { label: "Balcony", value: "balcony" },
                      { label: "Security cameras", value: "security cameras" },
                      { label: "Garage", value: "garage" },
                      { label: "WiFi", value: "wifi" },
                      { label: "Gym", value: "gym" },
                      { label: "Laundry", value: "laundry" },
                      { label: "Parking", value: "parking" },
                      { label: "Dishwasher", value: "dishwasher" }
                  ]}/>
                <StyledGrid>
                  <CheckboxGroup 
                      label="Pets" 
                      options={[
                        { label: "Cats allowed", value: "cats allowed" },
                        { label: "Dogs allowed", value: "dogs allowed" },
                    ]}/>
                    <CheckboxGroup 
                      label="Additional options" 
                      options={[
                        { label: "Verified", value: "verified" },
                        { label: "New", value: "new" },
                        { label: "Upcoming", value: "upcoming" },
                        { label: "Popular", value: "popular" },
                    ]}/>
                </StyledGrid>
                </DrawerContent>
                <StyledActionsBar>
                  <ClearBtn aria-label="Reset Dropdowns Filters">
                    Clear all
                  </ClearBtn>
                  <Button label='Apply Filters' type="button" aria-label="Apply Filters" size="md" />
                </StyledActionsBar>
              </Drawer>
            </FocusScope>
          </Backdrop>
    </div>
  );
}