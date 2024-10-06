import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ProductType } from '@/types/Product';

function ProductCard(product: ProductType) {
  return (
    <div className='border rounded-lg overflow-hidden relative h-full flex flex-col'>
      <div className='relative h-40'>
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[0].url}
            alt={product.name}
            className='w-full h-full object-contain'
            width={600}
            height={400}
          />
        </Link>
      </div>

      <div className='p-4 sm:p-6 flex flex-col flex-grow'>
        <div className='flex-grow'>
          <Link href={`/products/${product.id}`}>
            <h3 className='text-md sm:text-lg font-semibold mb-2 line-clamp-2'>
              {product.name}
            </h3>
          </Link>
        </div>

        <hr className='my-4' />

        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <p className='text-sm font-medium'>Rp {product.price}</p>
            <p className='text-xs text-fm-t1 font-light'>{product.category}</p>
          </div>
          <Button className='w-2/5 btn-anim bg-fm-1 border border-fm-4 text-fm-4 hover:bg-fm-4 hover:text-fm-t3'>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
