import { cn } from '@/shared/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
    />
  );
}

// 상품 카드 스켈레톤
export function ProductCardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <Skeleton className="mb-4 h-48 w-full rounded-lg" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="mb-3 h-3 w-1/2" />
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-9 w-24 rounded-lg" />
      </div>
    </div>
  );
}
