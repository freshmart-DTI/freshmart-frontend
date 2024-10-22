'use server';

import { signIn } from '@/auth';

export const authenticate = async (data: {
  email: string;
  password: string;
}) => {
  try {
    await signIn('credentials', data);
  } catch (error) {
    throw new Error('Failed to login');
  }
};
