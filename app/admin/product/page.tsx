import { ChevronLeft, ChevronRight, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import TableRow from './_components/TableRow';

const AdminProductPage = () => {
  return (
    <div className='bg-white rounded-lg'>
      <div className='p-6'>
        <input />
      </div>
      <table className='w-full'>
        <thead>
          <tr className='border-y border-neutral-200 h-16 text-left text-sm text-neutral-500 font-semibold'>
            <th className='px-6'>
              <input type='checkbox' />
            </th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th className='pr-6'></th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
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

export default AdminProductPage;
