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
  advertiserId: string;
  about: string;
  price: string;
  size: number;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  homeType: HomeType;
  flags: Flag[];
  listingType?: ListingType;
  yearBuilt: number;
  amenities: string[];
  petsAllowed: string[];
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
};

export type PropertiesProps = PropertyProps[];

export type AdvertiserProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  advertiserType: string;
  bookingLink: string;
  company: string;
  avatar: {
    thumbnail: string | null; // TODO: remove null when this is resolved
    url: string;
  };
};
