import Image from "next/image";
import { StyledSpecs, StyledSpec, StyledSpecValue, StyledSpecLabel } from "./styled";

export type Props = {
    bedrooms: number;
    bathrooms: number;
    garages: number;
    sqm?: number;
  };

export default function SpecsInfo({
  bedrooms,
  bathrooms,
  garages,
  sqm
}: Readonly<Props>) {
    return (
        <StyledSpecs>
            <StyledSpec>
                <StyledSpecValue>{bedrooms}</StyledSpecValue>
                <dt aria-hidden="true">
                <Image src="/icons/bed.svg" alt="Bedrooms icon" width={16} height={16} />
                </dt>
                <StyledSpecLabel className="sr-only">Bedrooms</StyledSpecLabel>
            </StyledSpec>
            <StyledSpec>
                <StyledSpecValue>{bathrooms}</StyledSpecValue>
                <dt aria-hidden="true"><Image src="/icons/shower.svg" alt="Bathroom icon" width={16} height={16} /></dt>
                <StyledSpecLabel className="sr-only">Bathrooms</StyledSpecLabel>
            </StyledSpec>
            <StyledSpec>
                <StyledSpecValue>{garages}</StyledSpecValue>
                <dt aria-hidden="true"><Image src="/icons/car-garage.svg" alt="Car Garage icon" width={16} height={16} /></dt>
                <StyledSpecLabel className="sr-only">Garages</StyledSpecLabel>
            </StyledSpec>
            {sqm && <StyledSpec>
                <StyledSpecValue>{sqm}</StyledSpecValue>
                <dt>Sq.m</dt>
                <StyledSpecLabel className="sr-only">Sq.m</StyledSpecLabel>
            </StyledSpec>}
        </StyledSpecs>
    )
}