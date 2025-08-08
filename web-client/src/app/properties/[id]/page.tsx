"use client";

import { use } from "react";
import PropertyDetails from '@/components/properties/PropertyDetails';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getPropertyByIdOptions } from '@/services/queries/properties';
import { getQueryClient } from "@/components/configs/TanstackQueryConfig/getClientQuery";

export default function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const id = use(params).id;
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(getPropertyByIdOptions(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PropertyDetails propertyId={id} />
    </HydrationBoundary>
  )
}
