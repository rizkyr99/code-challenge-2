import Image from 'next/image';
import React from 'react';
import heroTestimonial from '../../assets/about-hero-testi.png';
import star from '../../assets/star.svg';
import about1 from '@/assets/about1.png';
import Link from 'next/link';
import Button from '@/components/Button';
import CTA from '@/components/CTA';

const AboutPage = () => {
  return (
    <main>
      <section className='mb-24'>
        <div className='relative max-w-7xl mx-auto bg-black px-16 py-20 rounded-[20px] grid grid-cols-2 gap-12'>
          <div>
            <p className='text-white text-lg mb-2'>
              Pleasure and so read the was hope.
            </p>
            <h1 className='font-roboto-serif text-white text-6xl font-semibold leading-tight mb-8'>
              Ready to take
              <br />
              <span className='text-light-green'>your business</span>
              <br />
              to the next level?
            </h1>
            <p className='text-white mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>
            <div className='flex gap-3 items-center'>
              <Image src={heroTestimonial} width={70} height={70} alt='image' />
              <div>
                <p className='font-roboto-serif text-white text-xl font-semibold mb-1'>
                  Rated 4.9/5 stars
                </p>
                <div className='flex gap-0.5'>
                  <Image src={star} width={20} height={20} alt='star icon' />
                  <Image src={star} width={20} height={20} alt='star icon' />
                  <Image src={star} width={20} height={20} alt='star icon' />
                  <Image src={star} width={20} height={20} alt='star icon' />
                  <Image src={star} width={20} height={20} alt='star icon' />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute top-8 right-0 w-[calc(50%-100px)]'>
            <div className='relative mt-20'>
              <Image
                src={about1}
                alt='about'
                className='relative z-10 w-full aspect-square object-cover rounded-2xl'
              />
              <Image
                src={about1}
                alt='about'
                className='absolute -top-6 -left-12 w-full aspect-square object-cover rounded-2xl opacity-50'
              />
              <Image
                src={about1}
                alt='about'
                className='absolute -top-12 -left-24 w-full aspect-square object-cover rounded-2xl opacity-25'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto grid grid-cols-3 gap-16 my-24'>
        <div className='flex flex-col gap-4 text-center'>
          <p className='text-5xl font-roboto-serif font-semibold'>200+</p>
          <p className='font-medium text-2xl font-roboto-serif'>
            We're a family
          </p>
          <p>
            Speedily say has suitable disposal add boy. On fourth doubt miles of
            child. Exercise joy man children rejoiced.
          </p>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <p className='text-5xl font-roboto-serif font-semibold'>200+</p>
          <p className='font-medium text-2xl font-roboto-serif'>
            We're a family
          </p>
          <p>
            Speedily say has suitable disposal add boy. On fourth doubt miles of
            child. Exercise joy man children rejoiced.
          </p>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <p className='text-5xl font-roboto-serif font-semibold'>200+</p>
          <p className='font-medium text-2xl font-roboto-serif'>
            We're a family
          </p>
          <p>
            Speedily say has suitable disposal add boy. On fourth doubt miles of
            child. Exercise joy man children rejoiced.
          </p>
        </div>
      </section>
      <section className='bg-black mb-24'>
        <div className='max-w-7xl mx-auto py-64'>
          <div>
            <h2>Our Mission</h2>
            <h3>Boost your with your business</h3>
            <p>
              He moonlights difficult engrossed it, sportsmen. Interested has
              all Devonshire difficulty gay assistance joy.
            </p>
          </div>
        </div>
      </section>
      <section className='mb-24'>
        <div className='max-w-7xl mx-auto grid grid-cols-3 gap-16'>
          {[1, 2, 3].map(() => (
            <div className=''>
              <div className='relative'>
                <Image
                  src='/images/team1.png'
                  width={420}
                  height={500}
                  alt='team image'
                  className='rounded-2xl aspect-[4/5] object-cover'
                />
                <div className='absolute top-4 right-4 flex gap-5'>
                  <Link
                    href=''
                    className='h-9 w-9 flex items-center justify-center bg-white rounded-full'></Link>
                  <Link
                    href=''
                    className='h-9 w-9 flex items-center justify-center bg-white rounded-full'></Link>
                  <Link
                    href=''
                    className='h-9 w-9 flex items-center justify-center bg-white rounded-full'></Link>
                </div>
              </div>
              <p className='font-roboto-serif font-semibold text-2xl mt-4 mb-2'>
                Esther Howards
              </p>
              <p>Founded & CEO</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default AboutPage;
