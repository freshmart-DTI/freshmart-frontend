'use client';

import { z } from 'zod';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(2),
  province: z.string().min(2),
  city: z.string().min(2),
  district: z.string().min(2),
  latitude: z.string().min(2),
  longitude: z.string().min(2),
  isMain: z.boolean(),
});

const AddStorePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      province: '',
      city: '',
      district: '',
      latitude: '',
      longitude: '',
      isMain: false,
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      const response = await fetch('http://localhost:8080/api/v1/stores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add store');
      }

      return response.json();
    },
    onSuccess: (data) => {
      toast.success('Store added successfully');
      router.push('/admin/store');
    },
    onError: (error: any) => {
      toast.error(`Failed to add store: ${error.message}`);
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-semibold'>
                      Store Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. Main Store' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='province'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-semibold'>
                      Province
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. Sumatera Selatan' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='city'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-semibold'>
                      City
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. Palembang' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='district'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-semibold'>
                      District
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. Seberang Ulu I' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='latitude'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-semibold'>
                      Latitude
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='e.g. -3.0359263213976204'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='longitude'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-semibold'>
                      Longitude
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='e.g. 104.7918322164476' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='isMain'
                render={({ field }) => (
                  <FormItem className='flex items-start gap-x-3'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className='leading-none !m-0'>
                      <FormLabel className='m-0'>Main store</FormLabel>
                      <FormDescription>
                        Check if this is the main store
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit' className='mt-8' disabled={isLoading}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddStorePage;
