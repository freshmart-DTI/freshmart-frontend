'use client';

import { useCategories } from '@/hooks/useCategories';
import Table from '../_components/Table';

const CategoryPage = () => {
  const columns = ['Name'];
  const { data, isLoading } = useCategories();
  console.log(data);

  return (
    <div className='bg-white rounded-lg'>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default CategoryPage;
