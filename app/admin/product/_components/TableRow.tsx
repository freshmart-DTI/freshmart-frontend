import { ProductType } from '@/types/Product';
import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TableRowParams {
  product: ProductType;
}

const TableRow = ({ product }: TableRowParams) => {
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
            <p className='text-sm font-semibold'>{product.name}</p>
            <p className='text-xs text-neutral-500'>{product.description}</p>
          </div>
        </div>
      </td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td className='pr-6 space-x-1 w-32 text-right'>
        <Link
          href={`/admin/product/edit/${product.id}`}
          className='inline-flex bg-sky-500 text-white p-2 rounded hover:opacity-75 transition'>
          <Edit className='size-5' />
        </Link>
        <Link
          href={`/admin/product/delete/${product.id}`}
          className='inline-flex bg-red-500 text-white p-2 rounded hover:opacity-75 transition'>
          <Trash2 className='size-5' />
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
