'use client';

import { Minus, Plus, Star } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProductDetailsPageParams {
  params: { productId: string };
}

const ProductDetailsPage = ({ params }: ProductDetailsPageParams) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const reduceQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  console.log(params.productId);

  return (
    <div className='p-6'>
      <div className='grid grid-cols-2 gap-5'>
        <Image src='' alt='' />
        <div>
          <h1 className='text-xl font-semibold mb-1'>Product Name</h1>
          <p className='text-orange-500 text-2xl font-bold mb-2'>Rp 30.000</p>
          <div className='flex items-center gap-2'>
            <Star className='size-4 text-orange-500' />
            <span className='font-semibold'>4.7/5</span>
            <span className='text-sm text-neutral-500'>38 reviews</span>
          </div>
          <div className='flex items-center gap-2 mt-8'>
            <button
              onClick={reduceQuantity}
              className='bg-neutral-800 text-white size-8 flex items-center justify-center rounded-full hover:opacity-75 transition disabled:bg-neutral-200 disabled:text-neutral-500 disabled:hover:opacity-100'
              disabled={quantity === 1}>
              <Minus className='size-4' />
            </button>
            <input
              className='border-none w-8 min-w-0 outline-none text-center text-sm'
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              onClick={addQuantity}
              className='bg-neutral-800 text-white size-8 flex items-center justify-center rounded-full hover:opacity-75 transition disabled:bg-neutral-200 disabled:text-neutral-500 disabled:hover:opacity-100'>
              <Plus className='size-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
