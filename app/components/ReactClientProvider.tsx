"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from "react"

const queryClient = new QueryClient()


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
