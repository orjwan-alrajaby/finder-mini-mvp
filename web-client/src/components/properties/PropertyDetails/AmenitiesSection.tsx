import { StyledAmenitiesGrid, StyledH3 } from './styled';

const amenities = [
  'WiFi',
  'Dishwasher',
  'Air conditioning',
  'Parking place',
  'Laundry',
  'Gym',
  'Security cameras',
  'No smoking',
  'Pets allowed',
];

export default function AmenitiesSection() {
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
