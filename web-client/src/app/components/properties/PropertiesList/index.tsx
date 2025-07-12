"use client";

import {PropertyCard} from './PropertyCard';
import {StyledGridList} from './styled';
import { TPropertyCardProps } from './types';

export default function PropertiesList({ properties }: Readonly<{properties: TPropertyCardProps[]}>) {
    return (
        <StyledGridList aria-label="Property Listings">
          {properties.map((property) => ( 
            <div key={property.address} className="property-card">
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
            </div>
          ))}
        </StyledGridList>
    )
}
