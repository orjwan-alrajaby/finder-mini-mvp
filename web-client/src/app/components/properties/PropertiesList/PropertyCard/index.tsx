"use client";

import React from 'react';
import { Header } from 'react-aria-components';
import { Card, CardLink, ImageWrapper, Details, Price, Address, SquareMeter } from './styled';
import Image from 'next/image';
import SpecsInfo from '@/app/components/ui/SpecsInfo';
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
      <CardLink href={href} aria-label={`View details for property at ${address}`}>
        <ImageWrapper>
          <Image src={imageUrl} alt={`Exterior view of the house at ${address}`} fill />
        </ImageWrapper>
        <Details>
          <Header>
            <Price>{price}</Price>
            <Address>{address}</Address>
            <SquareMeter>{size} sq.m</SquareMeter>
          </Header>
          <SpecsInfo bedrooms={bedrooms} bathrooms={bathrooms} garages={garages} />
        </Details>
      </CardLink>
    </Card>
  );
};