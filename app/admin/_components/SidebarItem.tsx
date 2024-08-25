'use client';

import { cn } from '@/lib/utils';
import { ChevronRight, Circle, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface SidebarItemProps {
  title: string;
  icon: LucideIcon;
  link?: string;
  subItems?: {
    title: string;
    link: string;
  }[];
}

const SidebarItem = ({
  title,
  icon: Icon,
  link,
  subItems,
}: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (subItems) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const isActive = link && pathname === link;

  return (
    <div>
      <Link
        href={link || '#'}
        onClick={handleToggle}
        className={cn(
          'w-full bg-transparent px-4 py-3 flex items-center justify-between gap-x-2 text-sm rounded-lg hover:bg-neutral-200 transition',
          isActive && 'bg-gradient-to-r from-[#4C873D] to-[#68AB57] text-white'
        )}>
        <div className='flex items-center gap-x-2'>
          <Icon className='size-5' />
          {title}
        </div>
        {subItems && (
          <ChevronRight
            className={cn('size-5 transition', isOpen && 'rotate-90')}
          />
        )}
      </Link>
      {isOpen && subItems && (
        <div>
          {subItems.map((subItem, index) => {
            return (
              <Link
                key={index}
                href={subItem.link}
                className={cn(
                  'w-full bg-transparent pl-8 pr-4 py-3 flex items-center gap-x-2 text-sm rounded-lg hover:bg-neutral-200 transition',
                  isActive &&
                    'bg-gradient-to-r from-[#4C873D] to-[#68AB57] text-white'
                )}>
                <Circle className='size-3' />
                {subItem.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
