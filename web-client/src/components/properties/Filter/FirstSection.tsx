import MultiSelectDropdown from "@/components/ui/MultiSelectDropdown";
import NumberRange from "@/components/ui/NumberRange";
import { StyledInputGrid } from "./styled";
import { homeType as homeTypeOptions, listingType as listingTypeOptions, sampleLocations } from "@/constants/staticData";
import useFilterStore from "@/stores/filter";

export default function FirstSection() {
    const location = useFilterStore(((state) => state.location));
    const listingType = useFilterStore(((state) => state.listingType));
    const homeType = useFilterStore(((state) => state.homeType));
    const priceRange = useFilterStore(((state) => state.priceRange));

    const toggleLocation = useFilterStore((state) => state.toggleLocation);

    const toggleListingType = useFilterStore((state) => state.toggleListingType);

    const toggleHomeType = useFilterStore((state) => state.toggleHomeType);

    const setPriceRange = useFilterStore((state) => state.setPriceRange);

    return (
        <>
            <StyledInputGrid>
                <MultiSelectDropdown
                    label="Location"
                    options={sampleLocations}
                    selectedKeys={location}
                    setSelectedKeys={toggleLocation}
                />
                <MultiSelectDropdown
                    label="Listing Type"
                    options={listingTypeOptions}
                    selectedKeys={listingType}
                    setSelectedKeys={toggleListingType}
                />
            </StyledInputGrid>
            <StyledInputGrid>
                <MultiSelectDropdown
                    label="Home Type"
                    options={homeTypeOptions}
                    selectedKeys={homeType}
                    setSelectedKeys={toggleHomeType}
                />
                <NumberRange
                    title="Price per month, $"
                    value={priceRange}
                    onChange={setPriceRange}
                />
            </StyledInputGrid>
        </>
    )
}