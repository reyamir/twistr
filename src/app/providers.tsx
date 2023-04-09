'use client';
import RelayProvider from '@twistr/components/relaysProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <RelayProvider>{children}</RelayProvider>;
}
