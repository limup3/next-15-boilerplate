// ─────────────────────────────────────────────────
// shared/lib/query-client.ts
// TanStack Query 클라이언트 싱글톤
// "use server" 환경과 클라이언트 환경을 분리하기 위해
// 클라이언트용 QueryClient를 별도로 생성합니다.
// ─────────────────────────────────────────────────

import { QueryClient } from '@tanstack/react-query';

// 클라이언트 컴포넌트에서 사용 (providers.tsx에서 생성)
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR 시 서버에서 바로 stale로 처리되지 않도록 설정
        staleTime: 60 * 1000, // 1분
        gcTime: 5 * 60 * 1000, // 5분
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
}
