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

import { useSuspenseQuery } from '@tanstack/react-query';
import { getPropertyByIdOptions } from '@/services/queries/properties';

export default function PropertyDetails({ propertyId }: Readonly<{ propertyId: string }>) {
  const { data: property } = useSuspenseQuery(getPropertyByIdOptions(propertyId));
  const fullAddress = `${property.location.address}, ${property.location.city}, ${property.location.country}`;

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
            {/* Add Description Field to Data */}
            <StyledH3>About</StyledH3>
            <p>
              It offers a comfortable living area leading to a formal dining
              room, gorgeous hardwood floors throughout, spacious renovated
              Island kitchen with granite countertops and stainless steel
              appliances. Additionally, revel in the convenience of a master
              bedroom featuring a built-in dressing room, complemented by a
              private bath and shower for added comfort. This inviting apartment
              is conveniently located close to transportation hubs, ensuring
              easy access to the city&apos;s heartbeat.{' '}
            </p>
          </section>
          <StyledSubSection>
            <GeneralInfoSection
              propertyType={property.homeType}
              yearBuilt={property.yearBuilt}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              floor={3}
              livingArea={property.size}
              garages={property.garages}
            />
            <AmenitiesSection amenities={property.amenities} />
          </StyledSubSection>
          <LocationSection />
        </StyledArticle>
        <section className="agent-section">
          <StyledH3>Reach out to the advertiser</StyledH3>
          <AgentCard />
        </section>
      </StyledSection>
    </StyledMainContainer>
  );
}
