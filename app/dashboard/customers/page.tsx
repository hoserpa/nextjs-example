import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({searchParams}: {searchParams?: { query?: string} }) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <Suspense key={query} fallback={<TableRowSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}