import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider';
import { Toaster } from 'react-hot-toast';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Freshmart',
  description: 'E-Grocery Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
