import axiosInstance from '@/services/config/axiosInstance';
import { PropertiesProps, PropertyProps } from '@/types/properties';
import { PROPERTIES_ENDPOINTS } from '@/constants/endpoints';

export async function getAllProperties(): Promise<PropertiesProps> {
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
