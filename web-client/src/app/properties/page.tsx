"use client";

import PropertiesList from "@/components/properties/PropertiesList";
import Filter from "@/components/properties/Filter";
import styled from "styled-components";
import SelectDropdown from "../../components/ui/MultiSelectDropdown";
import { Button } from "react-aria-components";
import { media } from "../../components/configs/StyledComponentsConfig/utils";

const StyledHeader = styled.header` 
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`

const StyledDropdownsContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  ${media.min.xs`
  .select-dropdown {
    max-width: 90%;
  };
`};
  ${media.min.sm`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    .select-dropdown {
      width: 100%;
      min-width: 220px;
      max-width: calc(100% / 3.25);
    }
  `};
  ${media.min.lg`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    .select-dropdown {
      max-width: 300px;
    }
  `};
`

export const ClearBtn = styled(Button)`
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.text};
  font-size: ${({ theme }) => theme.fonts.sizes.extraSmall};
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-weight: 500;
  max-width: fit-content;
`;

export default function Home() {
  return (
    <div>
      <StyledHeader>
        <StyledDropdownsContainer>
          <SelectDropdown 
            placeholder="Location"
            options={[
              'Brooklyn, New York',
              'Queens, New York',
              'Downtown New York',
            ]} 
            isDark={true}
          />
        <SelectDropdown 
          placeholder="Listing Type"
          options={[
              'For Rent',
              'For Sale',
              'Rent-to-Own',
              'Shared Accommodation'
            ]}
            isDark={true} 
          />
          <SelectDropdown 
            placeholder="Home Type"
            options={[
              'Apartment',
              'House',
              'Studio',
              'Townhouse',
              'Duplex',
              'Loft',
              'Condo'
            ]}
            isDark={true} 
          />
          <ClearBtn aria-label="Reset Dropdowns Filters">
            Clear all
          </ClearBtn>
        </StyledDropdownsContainer>
        <Filter />
      </StyledHeader>
        <PropertiesList />
    </div>
  );
}