import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between p-4 h-16 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]'>
        <div className='flex items-center gap-x-4'>
          <Search className='size-5' />
          <input
            type='text'
            className='text-sm outline-none'
            placeholder='Search'
          />
        </div>
        <div className='flex items-center gap-x-4'>
          <button>
            <Bell className='size-5 hover:opacity-75 transition' />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='rounded-full size-10 bg-neutral-200 flex items-center justify-center text-sm text-neutral-500 font-semibold'>
                RR
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
