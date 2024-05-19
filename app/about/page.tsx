import Image from 'next/image';
import React from 'react';
import heroTestimonial from '../../assets/about-hero-testi.png';
import star from '../../assets/star.svg';
import about1 from '@/assets/about1.png';
import Link from 'next/link';
import Button from '@/components/Button';
import CTA from '@/components/CTA';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import AboutUs from '@/components/AboutUs';
import Cultures from '@/components/Cultures';
import Teams from './_components/Teams';

const AboutPage = () => {
  return (
    <main>
      <section className='mb-24 px-4'>
        <div className='relative max-w-7xl mx-auto bg-black px-16 py-20 rounded-[20px] grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h1 className='font-roboto-serif text-white text-2xl md:text-4xl lg:text-5xl text-center lg:text-left font-semibold leading-tight mb-8'>
              Ready to take
              <br />
              <span className='text-light-green'>your business</span>
              <br />
              to the next level?
            </h1>
            <p className='text-white text-center lg:text-left mb-10'>
              We&apos;re more than just a digital agency, we&apos;re a team of
              passionate innovators dedicated to transforming your digital
              presence. Learn about our journey, meet the experts driving our
              success, and explore the values that make us unique.
            </p>
            <div className='flex gap-3 justify-center lg:justify-start items-center'>
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

          <div className='relative mt-20 max-lg:max-w-lg max-lg:mx-auto'>
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
      </section>
      <section className='max-w-7xl mx-4 md:mx-8 xl:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16 my-24'>
        <div className='flex flex-col gap-4 text-center mx-auto'>
          <p className='text-3xl xl:text-5xl font-roboto-serif font-semibold'>
            8+
          </p>
          <p className='font-medium text-xl xl:text-2xl font-roboto-serif'>
            Years in Business
          </p>
          <p>Providing top-tier digital solutions since 2016.</p>
        </div>
        <div className='flex flex-col gap-4 text-center mx-auto'>
          <p className='text-3xl xl:text-5xl font-roboto-serif font-semibold'>
            90%
          </p>
          <p className='font-medium text-xl xl:text-2xl font-roboto-serif'>
            Satisfaction Rate
          </p>
          <p>Ensuring ongoing satisfaction and long-term partnerships.</p>
        </div>
        <div className='flex flex-col gap-4 text-center mx-auto'>
          <p className='text-3xl xl:text-5xl font-roboto-serif font-semibold'>
            200+
          </p>
          <p className='font-medium text-xl xl:text-2xl font-roboto-serif'>
            Projects Completed
          </p>
          <p>Successfully delivering a wide range of digital projects.</p>
        </div>
      </section>
      <AboutUs />
      <Teams />
      <Cultures />
      <CTA />
    </main>
  );
};

export default AboutPage;
