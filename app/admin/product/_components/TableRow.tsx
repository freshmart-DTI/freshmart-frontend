import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';

const TableRow = () => {
  return (
    <tr className='h-16 text-sm border-y border-neutral-200'>
      <td className='px-6'>
        <input type='checkbox' />
      </td>
      <td>
        <div className='flex items-center gap-4'>
          <div className='bg-neutral-200 size-12 rounded-md'>
            <Image
              src='/images/products/product-9.png'
              width={48}
              height={48}
              alt='product1'
            />
          </div>
          <div className=''>
            <p className='text-sm font-semibold'>Air Jordan</p>
            <p className='text-xs text-neutral-500'>
              Air Jordan is a line of basketball shoes produced by Nike
            </p>
          </div>
        </div>
      </td>
      <td>Shoes</td>
      <td>Rp2.000.000</td>
      <td className='pr-6 space-x-1 w-32 text-right'>
        <button className='bg-sky-500 text-white p-2 rounded hover:opacity-75 transition'>
          <Edit className='size-5' />
        </button>
        <button className='bg-red-500 text-white p-2 rounded hover:opacity-75 transition'>
          <Trash2 className='size-5' />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
