import React from 'react';
import { Header } from 'react-aria-components';
import { Card, CardLink, StyledFavoriteBtn, StyledMapBtn, ImageWrapper, Details, Price, Address, SquareMeter } from './styled';
import Image from 'next/image';
import SpecsInfo from '@/app/components/ui/SpecsInfo';
import TagList from '@/app/components/ui/TagList';
import { PropertyProps } from '@/app/types/properties';

export const PropertyCard: React.FC<PropertyProps> = ({
  imageUrl,
  price,
  address,
  size,
  bedrooms,
  bathrooms,
  garages,
  href,
  tags,
}) => {
  const isFavorite = false;
  const isLocationActive = false;
  return (
    <Card aria-label={`Property at ${address}`} $isLocationActive={isLocationActive}>
        <StyledFavoriteBtn aria-label="Add to favorites" className="favorite-button">
          {<Image src={isFavorite ? "/icons/heart-fill.svg" : "/icons/heart-outline.svg"} alt="View details" width={18} height={18} />}
        </StyledFavoriteBtn>
        <ImageWrapper>
          <Image src={imageUrl} alt={`Exterior view of the house at ${address}`} fill />
          <CardLink href={href} aria-label={`View details for property at ${address}`} />
        </ImageWrapper>
        <Details>
          <TagList tags={tags} />
          <Header>
            <Price>{price}</Price>
            <Address>{address}</Address>
            <SquareMeter>{size} sq.m</SquareMeter>
          </Header>
          <SpecsInfo bedrooms={bedrooms} bathrooms={bathrooms} garages={garages} />
        </Details>
        <StyledMapBtn aria-label="Show Location" className="show-location-button" $isLocationActive={isLocationActive}>
          <Image src={isLocationActive ? "/icons/map-pin.svg" : "/icons/map-pin-outline.svg"} alt="View Location" width={18} height={18} />
        </StyledMapBtn>
    </Card>
  );
};