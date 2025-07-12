"use client";

import React from 'react';
import { Header } from 'react-aria-components';
import { Card, CardLink, ImageWrapper, Details, Price, Address, SquareMeter, Specs, Spec, SpecIcon, SpecLabel, SpecValue } from './styled';
import Image from 'next/image';
import { TPropertyCardProps } from '../types';

export const PropertyCard: React.FC<TPropertyCardProps> = ({
  imageUrl,
  price,
  address,
  size,
  bedrooms,
  bathrooms,
  garages,
  href,
}) => {
  return (
    <Card>
      <CardLink href={"#"} aria-label={`View details for property at ${address}`}>
        <ImageWrapper>
          <Image src={imageUrl} alt={`Exterior view of the house at ${address}`} fill={true} />
        </ImageWrapper>
        <Details>
          <Header>
            <Price>{price}</Price>
            <Address>{address}</Address>
            <SquareMeter>{size} sq.m</SquareMeter>
          </Header>
          <Specs>
            <Spec>
              <SpecValue>{bedrooms}</SpecValue>
              <SpecIcon aria-hidden="true">
                <Image src="/icons/bed.svg" alt="Bedrooms icon" width={16} height={16} />
              </SpecIcon>
              <SpecLabel className="sr-only">Bedrooms</SpecLabel>
            </Spec>
            <Spec>
              <SpecValue>{bathrooms}</SpecValue>
              <SpecIcon aria-hidden="true"><Image src="/icons/shower.svg" alt="Bathroom icon" width={16} height={16} /></SpecIcon>
              <SpecLabel className="sr-only">Bathrooms</SpecLabel>
            </Spec>
            <Spec>
              <SpecValue>{garages}</SpecValue>
              <SpecIcon aria-hidden="true"><Image src="/icons/car-garage.svg" alt="Car Garage icon" width={16} height={16} /></SpecIcon>
              <SpecLabel className="sr-only">Garages</SpecLabel>
            </Spec>
          </Specs>
        </Details>
      </CardLink>
    </Card>
  );
};