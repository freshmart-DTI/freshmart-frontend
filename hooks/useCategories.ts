import { useQuery } from 'react-query';
import { Category } from '@/types/Product';

const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`http://localhost:8080/api/v1/categories`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  return result.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchCategories(),
  });
};
