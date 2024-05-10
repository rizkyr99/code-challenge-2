import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import logo from '@/assets/logo.svg';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-3 gap-20 py-20'>
          <div>
            <div className='flex items-center gap-3 mb-6'>
              <Image src={logo} width={52} height={52} alt='canvix logo' />
              <span className='text-3xl font-roboto-serif font-semibold'>
                Canvix
              </span>
            </div>
            <p className='text-lg'>
              We’re a team of strategic creator and digital innovator, united
              focus in our pursuit of mastery and joyful.
            </p>
          </div>
          <div className='grid grid-cols-2'>
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
            <h5 className='font-roboto-serif font-semibold text-xl mb-5'>
              Subscribe
            </h5>
            <div className='bg-white p-3 rounded-full flex items-center'>
              <input
                type='text'
                placeholder='Enter your email here'
                className='flex-1 px-3 text-black text-lg outline-none'
              />
              <Button variant='black'>Subscribe</Button>
            </div>
          </div>
        </div>
        <hr className='border-none h-px bg-neutral-500' />
        <div className='flex justify-between pt-7 pb-14'>
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
