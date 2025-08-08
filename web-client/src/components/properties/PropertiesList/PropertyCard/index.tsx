import React from 'react';
import { Header } from 'react-aria-components';
import {
  Card,
  CardLink,
  StyledFavoriteBtn,
  StyledMapBtn,
  ImageWrapper,
  Details,
  Price,
  Address,
  SquareMeter,
} from './styled';
import Image from 'next/image';
import SpecsInfo from '@/components/ui/SpecsInfo';
import TagList from '@/components/ui/TagList';
import { PropertyProps } from '@/types/properties';
import { PROPERTIES_ROUTES } from '@/constants/routes';

export const PropertyCard: React.FC<PropertyProps> = ({
  id,
  images: { thumbnail },
  price,
  location,
  size,
  bedrooms,
  bathrooms,
  garages,
  flags,
  listingType
}) => {
  const isFavorite = false;
  const isLocationActive = false;

  const fullAddress = `${location.address}, ${location.city}, ${location.country}`
  return (
    <Card
      aria-label={`Property at ${fullAddress}`}
      $isLocationActive={isLocationActive}
    >
      <StyledFavoriteBtn
        aria-label="Add to favorites"
        className="favorite-button"
      >
        {
          <Image
            src={
              isFavorite ? '/icons/heart-fill.svg' : '/icons/heart-outline.svg'
            }
            alt="View details"
            width={18}
            height={18}
          />
        }
      </StyledFavoriteBtn>
      <ImageWrapper>
        <Image
          src={thumbnail}
          alt={`Exterior view of the house at ${fullAddress}`}
          fill
        />
        <CardLink
          href={PROPERTIES_ROUTES.singleProperty(id)}
          aria-label={`View details for property at ${fullAddress}`}
        />
      </ImageWrapper>
      <Details>
        <TagList flags={flags} listingType={listingType} />
        <Header>
          <Price>{price}</Price>
          <Address>{fullAddress}</Address>
          <SquareMeter>{size} sq.m</SquareMeter>
        </Header>
        <SpecsInfo
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          garages={garages}
        />
      </Details>
      <StyledMapBtn
        aria-label="Show Location"
        className="show-location-button"
        $isLocationActive={isLocationActive}
      >
        <Image
          src={
            isLocationActive
              ? '/icons/map-pin.svg'
              : '/icons/map-pin-outline.svg'
          }
          alt="View Location"
          width={18}
          height={18}
        />
      </StyledMapBtn>
    </Card>
  );
};
