import axiosInstance from '@/services/config/axiosInstance';
import {
  PaginatedProperties,
  PropertyProps,
  AdvertiserProps,
} from '@/types/properties';
import { PROPERTIES_ENDPOINTS } from '@/constants/endpoints';

export async function getAllProperties(): Promise<PaginatedProperties> {
  const response = await axiosInstance.get(
    PROPERTIES_ENDPOINTS.getAllProperties
  );
  return response.data;
}

export async function getPropertyById(id: string): Promise<PropertyProps> {
  const response = await axiosInstance.get(
    PROPERTIES_ENDPOINTS.getPropertyById(id)
  );
  return response.data;
}

export async function getAdvertiserById(id: string): Promise<AdvertiserProps> {
  const response = await axiosInstance.get(
    PROPERTIES_ENDPOINTS.getAdvertiserById(id)
  );
  return response.data;
}
