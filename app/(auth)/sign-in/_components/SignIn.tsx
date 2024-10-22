'use client';

import logo from '@/public/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import { signIn } from '@/auth';
import { authenticate } from '@/actions/signIn';
import toast from 'react-hot-toast';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await authenticate(values);
      router.push('/');
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className='flex flex-col sm:flex-row h-screen bg-fm-2'>
      <div className='w-full sm:w-2/3 bg-fm-2 p-8 flex flex-col justify-center items-center'>
        <div className='mb-8 text-center sm:text-left'>
          <Image
            src={logo}
            alt='Freshmart Logo'
            className='mb-4 mx-auto sm:mx-0 size-64'
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
            Log In
          </h2>
          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 text-sm'>
            <button>
              <div className='p-4 border border-fm-6 rounded-lg'>
                <div className='btn-anim flex-center space-x-2'>
                  <span>Sign in with </span>
                  {<FcGoogle size={20} />}
                </div>
              </div>
            </button>
            <button>
              <div className='p-4 border border-fm-6 rounded-lg'>
                <div className='btn-anim flex-center space-x-2'>
                  <span>Sign in with </span>
                  {<BsFacebook size={20} />}
                </div>
              </div>
            </button>
          </div>

          <div className='flex items-center mb-6'>
            <hr className='flex-1 border-fm-t2' />
            <span className='px-4 text-fm-t1'>OR</span>
            <hr className='flex-1 border-fm-t2' />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='py-6 space-y-4'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Enter your e-mail' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
              </div>

              <div className='py-2'>
                <Link href='/sign-in/forgot-password'>
                  <span className='text-sm text-fm-t1 mb-4'>
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <button
                type='submit'
                className='w-full p-4 bg-fm-2 rounded-lg hover:bg-fm-3'>
                Log In
              </button>
            </form>
          </Form>

          <p className='mt-4 text-center text-fm-t1'>
            Don&apos;t have an account?{' '}
            <Link href='/sign-up' className='text-fm-t2 font-bold'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
