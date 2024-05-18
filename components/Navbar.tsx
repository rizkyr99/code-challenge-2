'use client';

import Image from 'next/image';
import logo from '../assets/logo.svg';
import Button from './Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
        <div className='hidden md:flex items-center gap-9'>
          <Link href='/' className='text-xl'>
            Home
          </Link>
          <Link href='/about' className='text-xl'>
            About
          </Link>
          <Link href='/services' className='text-xl'>
            Services
          </Link>
          <Link href='/contact' className='text-xl'>
            Contact Us
          </Link>
        </div>
        <Button
          variant={isHomePage ? 'white' : 'black'}
          className='hidden lg:flex'>
          Get in touch
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
