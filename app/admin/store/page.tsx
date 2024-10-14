'use client';

import Table from '../_components/Table';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStores } from '@/hooks/useStores';

const AdminStorePage = () => {
  const columns = ['Name', 'Province', 'City'];
  const { data, isLoading } = useStores();

  if (isLoading) {
    return (
      <div className='h-16 w-full flex items-center justify-center'>
        Loading...
      </div>
    );
  }

  console.log(data);

  return (
    <div className='bg-white rounded-lg'>
      <div className='p-6'>
        <input />
      </div>
      <Table columns={columns} data={data} />
      <div className='flex items-start justify-between px-6 py-4'>
        <p className='text-sm text-neutral-500'>
          Displaying 1 to 6 of 100 entries
        </p>
        <div className='flex items-center flex-nowrap gap-x-1'>
          <button className='size-8 bg-neutral-200 rounded flex items-center justify-center hover:opacity-75 transition text-sm'>
            <ChevronLeft className='size-4' />
          </button>
          <button className='size-8 bg-[#68AB57] text-white rounded flex items-center justify-center hover:opacity-75 transition text-sm'>
            1
          </button>
          <button className='size-8 bg-neutral-200 rounded flex items-center justify-center hover:opacity-75 transition text-sm'>
            2
          </button>
          <button className='size-8 bg-neutral-200 rounded flex items-center justify-center hover:opacity-75 transition text-sm'>
            3
          </button>
          <button className='size-8 bg-neutral-200 rounded flex items-center justify-center hover:opacity-75 transition text-sm'>
            4
          </button>
          <button className='size-8 bg-neutral-200 rounded flex items-center justify-center hover:opacity-75 transition text-sm'>
            <ChevronRight className='size-4' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminStorePage;
