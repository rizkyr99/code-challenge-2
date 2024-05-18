import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import logo from '@/assets/logo.svg';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';

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
              <h5 className='font-roboto-serif font-semibold text-xl mb-5'>
                Pages
              </h5>
              <div className='flex flex-col gap-2'>
                <Link href=''>Home</Link>
                <Link href=''>Home</Link>
                <Link href=''>Home</Link>
              </div>
            </div>
          </div>
          <div>
            <h5 className='font-roboto-serif font-semibold text-xl mb-5 text-center md:text-left'>
              Subscribe
            </h5>
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
            <h5 className='font-roboto-serif font-semibold text-xl mb-5'>
              Copyright by
            </h5>
            <p>
              Designed by{' '}
              <a href='ihttps://www.iconstica.com/'>Iconstica.com</a>
            </p>
          </div>
          <div>
            <h5 className='font-roboto-serif font-semibold text-xl mb-5'>
              Contact Us
            </h5>
            <p>
              <a href='tel:+0124574578'>+0 12 457 4578</a>
            </p>
          </div>
          <div>
            <h5 className='font-roboto-serif font-semibold text-xl mb-5'>
              Address
            </h5>
            <p>119 Tanglewood Lane Gulfport, MS 39503</p>
          </div>
          <div className='flex items-center gap-7'>
            <Link
              href='https://www.facebook.com/'
              className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
              <Image
                src={facebook}
                width={12}
                height={22}
                alt='facebook logo'
              />
            </Link>
            <Link
              href='https://www.facebook.com/'
              className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
              <Image
                src={instagram}
                width={22}
                height={22}
                alt='instagram logo'
              />
            </Link>
            <Link
              href='https://www.facebook.com/'
              className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
              <Image
                src={facebook}
                width={12}
                height={22}
                alt='facebook logo'
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
