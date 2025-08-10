import MultiSelectButtonGroup from "@/components/ui/MultiSelectButtons";
import NumberRange from "@/components/ui/NumberRange";
import { StyledInputGrid } from "./styled";
import useFilterStore from "@/stores/filter";

export default function SecondSection() {
    const sqm = useFilterStore(((state) => state.sqm));
    const yearBuilt = useFilterStore(((state) => state.yearBuilt));
    const numOfBedrooms = useFilterStore(((state) => state.numOfBedrooms));
    const numOfBathrooms = useFilterStore(((state) => state.numOfBathrooms));

    const setSqm = useFilterStore(((state) => state.setSqm));
    const setYearBuilt = useFilterStore(((state) => state.setYearBuilt));
    const setBedrooms = useFilterStore(((state) => state.setBedrooms));
    const setBathrooms = useFilterStore(((state) => state.setBathrooms));

    return (
        <>
            <StyledInputGrid>
                <NumberRange
                    title="Square metres"
                    value={sqm}
                    onChange={setSqm}
                />
                <NumberRange
                    title="Year built"
                    value={yearBuilt}
                    onChange={setYearBuilt}
                />
            </StyledInputGrid>
            <StyledInputGrid>
                <MultiSelectButtonGroup
                    label="Bedrooms"
                    selected={numOfBedrooms}
                    setSelected={setBedrooms}
                />
                <MultiSelectButtonGroup
                    label="Bathrooms"
                    selected={numOfBathrooms}
                    setSelected={setBathrooms}
                />
            </StyledInputGrid>
        </>
    )
}