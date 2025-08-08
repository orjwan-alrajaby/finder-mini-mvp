import { PropertyCard } from './PropertyCard';
import { StyledGridList } from './styled';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllPropertiesOptions } from '@/services/queries/properties';

export default function PropertiesList() {
  const { data: properties } = useSuspenseQuery(getAllPropertiesOptions);

  return (
    <StyledGridList aria-label="Property Listings">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          {...property}
        />
      ))}
    </StyledGridList>
  );
}