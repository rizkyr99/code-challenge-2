import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import logo from '@/assets/logo.svg';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-black text-white px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between gap-x-16 gap-y-8 py-12 lg:py-20'>
          <div className='flex gap-12'>
            <div className='basis-1/2'>
              <div className='flex items-center gap-3 mb-6'>
                <Image src={logo} width={52} height={52} alt='canvix logo' />
                <span className='text-3xl font-roboto-serif font-semibold'>
                  Canvix
                </span>
              </div>
              <p className='text-lg'>
                We&apos;re a team of strategic creator and digital innovator,
                united focus in our pursuit of mastery and joyful.
              </p>
            </div>
            <div>
              <div className='font-roboto-serif font-semibold text-xl mb-5'>
                Pages
              </div>
              <div className='flex flex-col gap-2'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/services'>Services</Link>
                <Link href='/contact'>Contact Us</Link>
              </div>
            </div>
          </div>
          <div>
            <div className='font-roboto-serif font-semibold text-xl mb-5 text-center md:text-left'>
              Subscribe
            </div>
            <div className='md:bg-white p-3 rounded-full flex flex-col md:flex-row items-center'>
              <input
                type='text'
                placeholder='Enter your email here'
                className='flex-1 max-md:py-4 px-6 md:px-3 text-black text-lg outline-none rounded-full'
              />
              <Button variant='black'>Subscribe</Button>
            </div>
          </div>
        </div>
        <hr className='border-none h-px bg-neutral-500' />
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left pt-7 pb-14'>
          <div>
            <div className='font-roboto-serif font-semibold text-xl mb-5'>
              Copyright by
            </div>
            <p>
              Designed by{' '}
              <a href='ihttps://www.iconstica.com/'>Iconstica.com</a>
            </p>
          </div>
          <div>
            <div className='font-roboto-serif font-semibold text-xl mb-5'>
              Contact Us
            </div>
            <p>
              <a href='tel:+0124574578'>+0 12 457 4578</a>
            </p>
          </div>
          <div>
            <div className='font-roboto-serif font-semibold text-xl mb-5'>
              Address
            </div>
            <p>119 Tanglewood Lane Gulfport, MS 39503</p>
          </div>
          <div className='flex items-center gap-7'>
            <Link
              href='https://www.facebook.com/'
              className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
              <Facebook className='size-6 text-black stroke-1' />
            </Link>
            <Link
              href='https://www.facebook.com/'
              className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
              <Instagram className='size-6 text-black stroke-1' />
            </Link>
            <Link
              href='https://www.facebook.com/'
              className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
              <Linkedin className='size-6 text-black stroke-1' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
