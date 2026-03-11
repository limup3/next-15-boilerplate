'use client';

import { CheckCircle2, XCircle, Info } from 'lucide-react';
import { useToasts } from '@/shared/lib/toast';

const config = {
  success: {
    icon: CheckCircle2,
    className: 'border-green-200 bg-green-50 text-green-800',
    iconClassName: 'text-green-500',
  },
  error: {
    icon: XCircle,
    className: 'border-red-200 bg-red-50 text-red-800',
    iconClassName: 'text-red-500',
  },
  info: {
    icon: Info,
    className: 'border-blue-200 bg-blue-50 text-blue-800',
    iconClassName: 'text-blue-500',
  },
};

export function Toaster() {
  const toasts = useToasts();

  if (toasts.length === 0) return null;

  return (
    // 화면 상단 중앙에 고정
    <div className="fixed top-6 left-1/2 z-[200] flex -translate-x-1/2 flex-col gap-2">
      {toasts.map((toast) => {
        const { icon: Icon, className, iconClassName } = config[toast.type];
        return (
          <div
            key={toast.id}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 shadow-lg animate-toast-in ${className}`}
          >
            <Icon className={`h-5 w-5 shrink-0 ${iconClassName}`} />
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
}
