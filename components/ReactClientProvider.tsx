"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Disabling automatic refetching on window focus
        refetchOnWindowFocus: false,
      },
    },
  });


const ReactClientProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </>
    )
}

export default ReactClientProvider
