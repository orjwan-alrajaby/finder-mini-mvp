import { queryOptions } from '@tanstack/react-query';
import {
  getAdvertiserById,
  getAllProperties,
  getPropertyById,
} from '../apis/properties';

export const getAllPropertiesOptions = queryOptions({
  queryKey: ['get-all-properties'],
  queryFn: getAllProperties,
});

export const getPropertyByIdOptions = (id: string) =>
  queryOptions({
    queryKey: ['get-property-byId'],
    queryFn: () => getPropertyById(id),
  });

export const getAdvertiserByIdOptions = (id: string) =>
  queryOptions({
    queryKey: ['get-advertiser-byId'],
    queryFn: () => getAdvertiserById(id),
  });
