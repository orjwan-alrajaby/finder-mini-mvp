import SelectDropdown from '@/components/ui/MultiSelectDropdown';
import { media } from '@/components/configs/StyledComponentsConfig/utils';
import { homeType as homeTypeOptions, listingType as listingTypeOptions, sampleLocations } from '@/constants/staticData';
import useFilterStore from '@/stores/filter';
import styled from 'styled-components';
import { Button } from 'react-aria-components';
import Filter from '@/components/properties/Filter';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

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
`;

const ClearBtn = styled(Button)`
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

export default function FiltersBar() {
  const location = useFilterStore((state) => state.location);
  const listingType = useFilterStore((state) => state.listingType);
  const homeType = useFilterStore((state) => state.homeType);

  const toggleLocation = useFilterStore((state) => state.toggleLocation);

  const toggleListingType = useFilterStore((state) => state.toggleListingType);

  const toggleHomeType = useFilterStore((state) => state.toggleHomeType);

  const clearAll = useFilterStore((state) => state.clearAll);

  return (
    <StyledHeader>
      <StyledDropdownsContainer>
        <SelectDropdown
          placeholder="Location"
          options={sampleLocations}
          isDark={true}
          selectedKeys={location}
          setSelectedKeys={toggleLocation}
        />
        <SelectDropdown
          placeholder="Listing Type"
          options={listingTypeOptions}
          isDark={true}
          selectedKeys={listingType}
          setSelectedKeys={toggleListingType}
        />
        <SelectDropdown
          placeholder="Home Type"
          options={homeTypeOptions}
          isDark={true}
          selectedKeys={homeType}
          setSelectedKeys={toggleHomeType}
        />
        <ClearBtn aria-label="Reset Dropdowns Filters" onClick={clearAll}>Clear all</ClearBtn>
      </StyledDropdownsContainer>
      <Filter />
    </StyledHeader>
  )
}

