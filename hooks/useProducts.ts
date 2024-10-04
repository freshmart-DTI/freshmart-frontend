import { useQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';

const fetchProducts = async (queryString: string) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/products?${queryString}`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  return result.data;
};

export const useProducts = () => {
  const params = useSearchParams();
  const queryString = params.toString();

  return useQuery({
    queryKey: ['products', queryString],
    queryFn: () => fetchProducts(queryString),
  });
};
