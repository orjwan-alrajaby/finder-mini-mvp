import { StyledAmenitiesGrid, StyledH3 } from './styled';

export default function AmenitiesSection({
  amenities
}: Readonly<{ amenities: string[] }>) {
  return (
    <section>
      <StyledH3>Amenities</StyledH3>
      <StyledAmenitiesGrid>
        {amenities.map((amenity) => (
          <li key={amenity}>{amenity}</li>
        ))}
      </StyledAmenitiesGrid>
    </section>
  );
}
