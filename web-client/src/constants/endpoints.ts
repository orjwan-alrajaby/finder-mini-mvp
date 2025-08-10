export const PROPERTIES_ENDPOINTS = {
  getAllProperties: `/properties`,
  getPropertyById: (id: string) =>
    `${PROPERTIES_ENDPOINTS.getAllProperties}/${id}`,
  getAdvertiserById: (id: string) => `/advertisers/${id}`,
};
