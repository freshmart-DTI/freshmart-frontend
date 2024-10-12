'use client';

import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { useStoreProducts } from '@/hooks/useStoreProducts';
import { ProductType } from '@/types/Product';
import { useEffect, useState } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

function Product() {
  const { data, isLoading, error } = useStoreProducts();
  const [location, setLocation] = useState<Location | null>(null);

  return (
    <div className='max-w-7xl mx-auto sm:px-6 md:px-8 py-4'>
      <div className='p-4 flex justify-between items-center'>
        <span>
          Shop from <span className='font-bold'>NONGSA</span>
        </span>
        <span className='flex-center'>
          <label className='mr-2 text-sm'>Sort by: </label>
          <select className='border border-fm-t1 rounded-md px-2 py-1 text-sm'>
            <option>Default</option>
            <option>Name A-Z</option>
            <option>Price Low to High</option>
          </select>
        </span>
      </div>
      <hr className='text-fm-2'></hr>
      <div className='px-4 pt-8 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {data?.products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <div className='flex justify-center mt-4 pb-4'>
        <button className='w-1/2 btn-anim flex items-center justify-center text-fm-t2 px-4 py-2 rounded-3xl bg-fm-1 hover:bg-fm-3'>
          Load More
        </button>
      </div>
    </div>
  );
}

export default Product;
