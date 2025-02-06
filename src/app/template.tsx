'use client';

import PageLoadAnimation from '@/components/ui/PageLoadAnimation';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <PageLoadAnimation key={pathname}>{children}</PageLoadAnimation>;
}
