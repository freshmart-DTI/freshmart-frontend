'use client';

import { ChevronRight, LayoutDashboard, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='fixed h-screen w-64 hidden lg:block bg-white p-4'>
      <Image
        src='/images/Logo.png'
        width={170}
        height={56}
        alt=''
        className='mx-auto'
      />
      <div className='mt-10 space-y-1'>
        <SidebarItem title='Dashboard' icon={LayoutDashboard} link='/admin' />
        <SidebarItem
          title='Product'
          icon={ShoppingCart}
          subItems={[
            { title: 'All Products', link: '/admin/product' },
            { title: 'Add Product', link: '/admin/product/add' },
          ]}
        />
        {/* <Link
          href='/admin/dashboard'
          className='bg-gradient-to-r from-[#4C873D] to-[#68AB57] px-4 py-3 flex items-center justify-between gap-x-2 text-sm text-white rounded-lg hover:opacity-75 transition'>
          <div className='flex items-center gap-x-2'>
            <LayoutDashboard className='size-5' />
            Dashboard
          </div>
        </Link> */}
        {/* <button className='w-full bg-transparent px-4 py-3 flex items-center justify-between gap-x-2 text-sm rounded-lg hover:bg-neutral-200 transition'>
          <div className='flex items-center gap-x-2'>
            <LayoutDashboard className='size-5' />
            Products
          </div>
          <ChevronRight className='size-5' />
        </button> */}
      </div>
    </div>
  );
};

export default Sidebar;
