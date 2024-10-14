import { useQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';
import { ProductType } from '@/types/Product';
import { Store } from '@/types/Store';

const fetchStores = async (): Promise<Store[]> => {
  const response = await fetch(`http://localhost:8080/api/v1/stores`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  return result.data;
};

export const useStores = () => {
  return useQuery({
    queryKey: ['stores'],
    queryFn: () => fetchStores(),
  });
};
