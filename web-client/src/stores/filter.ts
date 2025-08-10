import { Key } from 'react-aria';
import { create } from 'zustand';

type Range = { min: number; max: number };

type FilterValState = {
  location: Key[];
  listingType: Key[];
  homeType: Key[];
  priceRange: Range;
  sqm: Range;
  yearBuilt: Range;
  numOfBedrooms: Key[];
  numOfBathrooms: Key[];
  amenities: string[];
  petsAllowed: string[];
  tags: string[];
};

interface FilterState extends FilterValState {
  // location
  toggleLocation: (locations: Key[]) => void;

  // listingType
  toggleListingType: (types: Key[]) => void;

  // homeType
  toggleHomeType: (types: Key[]) => void;

  // ranges
  setPriceRange: (range: Range) => void;
  setSqm: (range: Range) => void;
  setYearBuilt: (range: Range) => void;

  // bedrooms / bathrooms
  setBedrooms: (values: Key[]) => void;
  setBathrooms: (values: Key[]) => void;

  // amenities
  toggleAmenity: (value: string[]) => void;

  // pets
  togglePet: (value: string[]) => void;

  // tags
  toggleTag: (value: string[]) => void;

  // reset
  clearAll: () => void;
}

const initialFilters: FilterValState = {
  location: [],
  listingType: [],
  homeType: [],
  priceRange: { min: 0, max: 0 },
  sqm: { min: 0, max: 0 },
  yearBuilt: { min: 0, max: 0 },
  numOfBedrooms: [],
  numOfBathrooms: [],
  amenities: [],
  petsAllowed: [],
  tags: [],
};

const useFilterStore = create<FilterState>((set) => ({
  ...initialFilters,

  toggleLocation: (locations) =>
    set(() => ({
      location: [...locations],
    })),

  toggleListingType: (types) =>
    set(() => ({
      listingType: [...types],
    })),

  toggleHomeType: (types) =>
    set(() => ({
      homeType: [...types],
    })),

  setPriceRange: (range) =>
    set(() => ({
      priceRange: range,
    })),
  setSqm: (range) =>
    set(() => ({
      sqm: range,
    })),
  setYearBuilt: (range) =>
    set(() => ({
      yearBuilt: range,
    })),

  setBedrooms: (values) =>
    set(() => ({
      numOfBedrooms: values,
    })),
  setBathrooms: (values) =>
    set(() => ({
      numOfBathrooms: values,
    })),

  toggleAmenity: (amenities) =>
    set(() => ({
      amenities: [...amenities],
    })),

  togglePet: (petsAllowed) =>
    set(() => ({
      petsAllowed: [...petsAllowed],
    })),

  toggleTag: (tags) =>
    set(() => ({
      tags: [...tags],
    })),

  clearAll: () => set({ ...initialFilters }),
}));

export default useFilterStore;
