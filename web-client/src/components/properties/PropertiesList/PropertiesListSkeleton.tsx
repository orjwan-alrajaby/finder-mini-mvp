import PropertyCardSkeleton from './PropertyCard/PropertyCardSkeleton';
import { StyledGridList } from './styled';

export default function PropertiesListSkeleton() {
  return (
    <StyledGridList aria-label="Loading properties listing" aria-busy="true">
      {[...new Array(10).fill((i: number) => i)].map((property) => {
        return <PropertyCardSkeleton key={property} />;
      })}
    </StyledGridList>
  );
}
