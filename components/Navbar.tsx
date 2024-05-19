'use client';

import Image from 'next/image';
import logo from '../assets/logo.svg';
import Button from './Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

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
        <div className='hidden lg:flex items-center gap-9'>
          {items.map((item) => (
            <Link
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
      </nav>
    </header>
  );
};

export default Navbar;
