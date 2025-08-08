import { queryOptions } from '@tanstack/react-query';
import {
  getAllProperties,
  getPropertyById,
} from '../apis/properties/getAllProperties';

export const getAllPropertiesOptions = queryOptions({
  queryKey: ['get-all-properties'],
  queryFn: getAllProperties,
});

export const getPropertyByIdOptions = (id: string) =>
  queryOptions({
    queryKey: ['get-property-byId'],
    queryFn: () => getPropertyById(id),
  });
