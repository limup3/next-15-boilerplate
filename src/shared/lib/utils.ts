import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind 클래스 충돌 방지 유틸
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 가격 포맷터
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price);
}

// 별점 배열 생성 (★ 표시용)
export function getStarArray(rate: number): ('full' | 'half' | 'empty')[] {
  return Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(rate)) return 'full';
    if (i < rate) return 'half';
    return 'empty';
  });
}
