'use client';

import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from './getClientQuery';

export default function QueryClientProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const queryClient = getQueryClient()

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </TanstackQueryClientProvider>
  )
}
