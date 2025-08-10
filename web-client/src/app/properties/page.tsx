'use client';

import PropertiesList from '@/components/properties/PropertiesList';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getAllPropertiesOptions } from '@/services/queries/properties';
import { getQueryClient } from "@/components/configs/TanstackQueryConfig/getClientQuery";
import FiltersBar from './_components/FiltersBar';

export default function PropertiesPage() {

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getAllPropertiesOptions);

  return (
    <div>
      <FiltersBar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PropertiesList />
      </HydrationBoundary>
    </div>
  );
}
