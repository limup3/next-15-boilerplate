// 공통 API 응답 타입
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

// 공통 페이지네이션 타입
export interface PaginationParams {
  page: number;
  limit: number;
}
