import CheckboxGroup from "@/components/ui/CheckboxGroup";
import { StyledGrid } from "./styled";
import { amenities as amenitiesOptions, pets as petsOptions, tags as tagsOptions } from "@/constants/staticData";
import useFilterStore from "@/stores/filter";

export default function ThirdSection() {
    const amenities = useFilterStore(((state) => state.amenities));
    const petsAllowed = useFilterStore(((state) => state.petsAllowed));
    const tags = useFilterStore(((state) => state.tags));

    const toggleAmenity = useFilterStore((state) => state.toggleAmenity);

    const togglePet = useFilterStore((state) => state.togglePet);

    const toggleTag = useFilterStore((state) => state.toggleTag);

    return (
        <>
            <CheckboxGroup
                label="Amenities"
                options={amenitiesOptions}
                checkedOptions={amenities}
                onChange={toggleAmenity}
            />
            <StyledGrid>
                <CheckboxGroup
                    label="Pets Allowed"
                    options={petsOptions}
                    checkedOptions={petsAllowed}
                    onChange={togglePet}
                />
                <CheckboxGroup
                    label="Additional options"
                    options={tagsOptions}
                    checkedOptions={tags}
                    onChange={toggleTag}
                />
            </StyledGrid>
        </>
    )
}