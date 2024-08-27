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
  const pathname = usePathname();

  const isActive = link && pathname === link;
  const isSubItemActive =
    subItems && subItems.some((subItem) => pathname === subItem.link);

  const [isOpen, setIsOpen] = useState(isSubItemActive || false);

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (subItems) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className='space-y-1'>
      <Link
        href={link || '#'}
        onClick={handleToggle}
        className={cn(
          'w-full bg-transparent px-4 py-3 flex items-center justify-between gap-x-2 text-sm rounded-lg hover:bg-neutral-200 transition',
          isActive && 'bg-gradient-to-r from-[#4C873D] to-[#68AB57] text-white',
          isSubItemActive && 'bg-neutral-200'
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
        <div className='space-y-1'>
          {subItems.map((subItem, index) => {
            const subItemActive = pathname === subItem.link;
            return (
              <Link
                key={index}
                href={subItem.link}
                className={cn(
                  'w-full bg-transparent pl-8 pr-4 py-3 flex items-center gap-x-2 text-sm rounded-lg hover:bg-neutral-200 transition',
                  subItemActive &&
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
