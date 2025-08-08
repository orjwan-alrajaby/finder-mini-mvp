export const PROPERTIES_ROUTES = {
  properties: `/properties`,
  singleProperty: (id: string) => `${PROPERTIES_ROUTES.properties}/${id}`,
};
