'use client';

import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import logo from '@/public/Logo.svg';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import toast from 'react-hot-toast';

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z
      .string()
      .min(8, 'Confirm Password must be at least 8 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

const SetPasswordPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email || '',
      password: '',
      confirmPassword: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: { password: string; email: string }) => {
      const response = await fetch(
        `http://localhost:8080/api/v1/users/set-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      return response.json();
    },
    onSuccess: () => {
      toast.success('Password set successfully! You can now log in.');
      router.push('/sign-in');
    },
    onError: (error: any) => {
      console.error(error);
      toast.error('Failed to set password. Please try again.');
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  };

  return (
    <div className='flex flex-col sm:flex-row h-screen bg-fm-2'>
      <div className='w-full sm:w-2/3 bg-fm-2 p-8 flex flex-col justify-center items-center'>
        <div className='mb-8 text-center sm:text-left'>
          <Image
            src={logo}
            alt='Freshmart Logo'
            className='mb-4 mx-auto sm:mx-0 size-40 sm:size-64'
          />
        </div>
      </div>
      <div className='w-full bg-white p-10 sm:p-24 flex flex-col justify-center sm:rounded-l-3xl'>
        <div className='sm:p-8'>
          <div className='hidden sm:flex justify-end mb-4'>
            <Link href='/' className='btn-anim text-fm-t1 font-bold'>
              <AiOutlineArrowLeft size={25} />
            </Link>
          </div>
          <h2 className='text-3xl font-bold mb-6 text-center sm:text-left'>
            Create Account
          </h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='py-4 space-y-4'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Enter your password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Confirm your password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type='submit'
                className='w-full p-4 bg-fm-2 rounded-lg hover:bg-fm-3'>
                Create Account
              </button>
            </form>
          </Form>

          <p className='mt-4 text-center text-fm-t1'>
            Already have an account?{' '}
            <Link href='/sign-in' className='text-fm-t2 font-bold'>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetPasswordPage;
