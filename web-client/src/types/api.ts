export type PaginatedData<T> = {
  page: number;
  currentTotal: number;
  total: number;
  totalPages: number;
  data: T;
};
