// ─────────────────────────────────────────────────
// shared/api/client.ts
// 모든 API 요청의 기반이 되는 fetch 래퍼
// Next.js 15의 fetch는 기본적으로 캐싱을 지원합니다.
// ─────────────────────────────────────────────────

const BASE_URL = 'https://fakestoreapi.com';

class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!res.ok) {
    throw new ApiError(res.status, `API Error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
