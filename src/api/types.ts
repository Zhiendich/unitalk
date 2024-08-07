export type PaginationType = {
  page: number;
  pageSize: number;
};

export type GetByPageParams = {
  page: number;
  limit?: number;
  name: string;
};

export type AxiosResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
};

export const PAGE_SIZE = 20;
