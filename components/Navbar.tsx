'use client';

import Image from 'next/image';
import logo from '../assets/logo.svg';
import Button from './Button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const items = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const handleClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <header className='px-4 md:px-8'>
      <nav
        className={`max-w-7xl h-24 flex items-center justify-between mx-auto ${
          isHomePage ? 'text-white' : 'text-black'
        }`}>
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src={logo}
            width={40}
            height={40}
            alt='logo'
            className={`${!isHomePage && 'invert'}`}
          />
          <span
            className={`${
              isHomePage ? 'text-white' : 'text-black'
            } font-roboto-serif text-3xl font-semibold`}>
            Canvix
          </span>
        </Link>
        <div className='hidden lg:flex items-center gap-9'>
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={`text-xl ${
                pathname === item.path
                  ? 'opacity-100 font-semibold'
                  : 'opacity-75 font-normal'
              }`}>
              {item.label}
            </Link>
          ))}
        </div>
        <Button
          variant={isHomePage ? 'white' : 'black'}
          className='hidden lg:flex'>
          Get in touch
        </Button>

        <div className='block lg:hidden relative'>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className='size-8 flex flex-col items-center justify-center gap-2'>
            <div
              className={`h-1 w-full transition duration-300 ease-in ${
                isHomePage ? 'bg-white' : 'bg-black'
              } ${isOpen ? '-rotate-45 translate-y-3' : 'rotate-0'}`}></div>
            <div
              className={`h-1 w-full transition duration-300 ease-in ${
                isHomePage ? 'bg-white' : 'bg-black'
              } ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div
              className={`h-1 w-full transition duration-300 ease-in ${
                isHomePage ? 'bg-white' : 'bg-black'
              } ${isOpen ? 'rotate-45 -translate-y-3' : 'rotate-0'}`}></div>
          </div>
          <div
            className={`absolute z-[99] top-full mt-4 right-0 w-48 bg-white flex flex-col items-center gap-4 p-8 rounded-xl transition-all duration-300 ${
              isOpen
                ? 'scale-100 opacity-100'
                : 'scale-0 -translate-y-24 translate-x-16 overflow-hidden opacity-0'
            }`}>
            {items.map((item) => (
              <Link
                onClick={() => handleClick(item.path)}
                href={item.path}
                className={`text-black ${
                  pathname === item.path
                    ? 'font-semibold'
                    : 'opacity-75 font-normal'
                }`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
