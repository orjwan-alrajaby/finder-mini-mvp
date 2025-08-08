import {
  StyledMainContainer,
  StyledSection,
  StyledArticle,
  StyledMainInfoSection,
  StyledPrice,
  StyledAddress,
  StyledSubSection,
  StyledH3,
} from './styled';
import AgentCard from './AgentCard';
import GeneralInfoSection from './GeneralInfoSection';
import AmenitiesSection from './AmenitiesSection';
import LocationSection from './LocationSection';
import TagList from '@/components/ui/TagList';
import SpecsInfo from '@/components/ui/SpecsInfo';
import Gallery from './Gallery';

import { useSuspenseQuery, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getAdvertiserByIdOptions, getPropertyByIdOptions } from '@/services/queries/properties';
import { getQueryClient } from '@/components/configs/TanstackQueryConfig/getClientQuery';

export default function PropertyDetails({ propertyId }: Readonly<{ propertyId: string }>) {
  const { data: property } = useSuspenseQuery(getPropertyByIdOptions(propertyId));
  const fullAddress = `${property.location.address}, ${property.location.city}, ${property.location.country}`;

  const queryClient = getQueryClient();
  queryClient.prefetchQuery(getAdvertiserByIdOptions(property.advertiserId));

  return (
    <StyledMainContainer>
      <Gallery gallery={property.images.gallery} />
      <StyledSection>
        <StyledArticle>
          <StyledMainInfoSection>
            <TagList flags={property.flags} listingType={property.listingType} />
            <StyledPrice className="price">{property.price}</StyledPrice>
            <StyledAddress>{fullAddress}</StyledAddress>
            <SpecsInfo bedrooms={property.bedrooms} bathrooms={property.bathrooms} garages={property.garages} sqm={property.size} />
          </StyledMainInfoSection>
          <section>
            <StyledH3>About</StyledH3>
            <p>
              {property.about}
            </p>
          </section>
          <StyledSubSection>
            <GeneralInfoSection
              propertyType={property.homeType}
              yearBuilt={property.yearBuilt}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              floor={property.floor}
              livingArea={property.size}
              garages={property.garages}
            />
            <AmenitiesSection amenities={property.amenities} />
          </StyledSubSection>
          <LocationSection />
        </StyledArticle>
        <section className="agent-section">
          <StyledH3>Reach out to the advertiser</StyledH3>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <AgentCard id={property.advertiserId} />
          </HydrationBoundary>
        </section>
      </StyledSection>
    </StyledMainContainer>
  );
}
