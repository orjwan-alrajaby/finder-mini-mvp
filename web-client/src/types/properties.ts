export type ListingType =
  | 'For Sale'
  | 'For Rent'
  | 'For Auction'
  | 'Rent-to-Own'
  | 'Shared Accommodation';

export type Flag = 'New' | 'Verified' | 'Featured';

export type HomeType =
  | 'Independent Residence'
  | 'Studio'
  | 'Apartment'
  | 'Townhouse'
  | 'Condo'
  | 'Duplex';

export type PropertyProps = {
  id: string;
  images: {
    thumbnail: string;
    gallery: string[];
  };
  price: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates?: {
      // TODO: handle this when Google Maps API is integrated
      latitude: number;
      longitude: number;
    };
  };
  size: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  homeType: HomeType;
  flags: Flag[];
  listingType?: ListingType;
  yearBuilt: number;
  amenities: string[];
  petsAllowed: string[];
};

export type PropertiesProps = PropertyProps[];
