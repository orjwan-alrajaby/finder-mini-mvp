"use client";

import {PropertyCard} from './PropertyCard';
import {StyledGridList} from './styled';
import { dummyProperties } from '@/app/data';

export default function PropertiesList() {
    return (
      <StyledGridList aria-label="Property Listings">
        {dummyProperties.map((property) => ( 
            <PropertyCard
              key={property.address}
              imageUrl={property.imageUrl}
              price={property.price}
              address={property.address}
              size={property.size}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              garages={property.garages}
              href={property.href}
            />
        ))}
      </StyledGridList>
    )
}
