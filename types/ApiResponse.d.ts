interface ApiResponse<T> {
  statusCode: number;
  message: string;
  success: boolean;
  data: T;
}

interface PagedResponse<T> {
  content: T[];
  last: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
