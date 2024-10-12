'use client';

import { StoreWithProducts } from '@/types/Store';
import { useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

interface Location {
  latitude: number;
  longitude: number;
}

const fetchProducts = async (
  queryString: string,
  location: Location | null
): Promise<StoreWithProducts> => {
  const parsedQuery = qs.parse(queryString);
  if (location) {
    parsedQuery.latitude = location.latitude.toString();
    parsedQuery.longitude = location.longitude.toString();
  }

  queryString = qs.stringify(parsedQuery);

  console.log(queryString);

  const response = await fetch(
    `http://localhost:8080/api/v1/stores/nearest/products?${queryString}`
  );

  const result = await response.json();

  return result.data;
};

export const useStoreProducts = () => {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error obtaining location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ['nearestProducts', queryString, location],
    queryFn: () => fetchProducts(queryString, location),
  });
  return { data, isLoading, error };
};
