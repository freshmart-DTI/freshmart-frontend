'use client';
import logo from '@/public/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

function Confirm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const mutation = useMutation({
    mutationFn: async () => {
      // Make the POST request
      const data = {
        token,
        email,
      };

      const response = await fetch(
        'http://localhost:8080/api/v1/users/verify-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to verify email');
      }

      return response.json();
    },
    onSuccess: () => {
      router.push(`/set-password?email=${email}`);
    },
    onError: (error: any) => {
      console.error('Error:', error);
      toast.error(error.message);
      router.push(`/set-password?email=${email}`);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <Loader2 className='size-6 animate-spin' />
    </div>
  );
}

export default Confirm;
