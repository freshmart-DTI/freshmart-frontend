'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Plus, Trash2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2),
});

const AddProductPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  return (
    <div>
      <div className='flex items-start justify-between mb-6'>
        <h1 className='font-semibold text-xl'>Add Product</h1>
        <div className='flex items-center gap-x-2'>
          <Button variant='ghost' className='bg-neutral-200'>
            Discard
          </Button>
          <Button variant='ghost' className='bg-[#68AB57]/15 text-[#68AB57]'>
            Save Draft
          </Button>
          <Button variant='ghost' className='bg-[#68AB57] text-white'>
            Publish
          </Button>
        </div>
      </div>
      <div className='bg-white p-6 rounded-lg'>
        <Form {...form}>
          <form action='' className='grid grid-cols-2 gap-6'>
            <div className='space-y-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-semibold'>
                      Product name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. Banana' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-semibold'>
                      Product name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. Banana' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <p className='text-sm font-semibold mb-2'>Image</p>
              <div className='grid grid-cols-4 gap-2'>
                <div className='group relative aspect-square border rounded-md overflow-hidden'>
                  <Image
                    src='/images/products/banana.png'
                    width={64}
                    height={64}
                    alt=''
                    className='w-full h-full object-contain'
                  />
                  <div className='absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition text-sm cursor-pointer'>
                    <Trash2 className='size-5' />
                    Delete image
                  </div>
                </div>
                <button className='aspect-square border rounded-md flex flex-col items-center justify-center gap-1 text-sm text-neutral-500'>
                  <Plus className='size-5' />
                  Add image
                </button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddProductPage;
