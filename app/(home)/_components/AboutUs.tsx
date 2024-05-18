'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import chevronRight from '@/assets/chevron-right-line.svg';
import about1 from '@/assets/about1.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { milestones } from '@/data';
import { useState } from 'react';

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex: number) => (prevIndex + 1) % milestones.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + milestones.length) % milestones.length
    );
  };

  const getYears = (index: number) => {
    const years = [];
    for (let i = index - 2; i <= index + 2; i++) {
      const yearIndex = (i + milestones.length) % milestones.length;
      years.push(milestones[yearIndex].year);
    }
    return years;
  };

  return (
    <section className='bg-black py-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-32'>
        <div className='relative ml-24'>
          <Image
            src={about1}
            alt='about'
            className='relative z-10 w-full aspect-square object-cover rounded-2xl'
          />
          <Image
            src={about1}
            alt='about'
            className='absolute -top-6 -left-10 w-full aspect-square object-cover rounded-2xl opacity-50'
          />
          <Image
            src={about1}
            alt='about'
            className='absolute -top-12 -left-20 w-full aspect-square object-cover rounded-2xl opacity-25'
          />
        </div>
        <div className='p-16'>
          <h2 className='text-2xl font-roboto-serif text-light-green font-medium mb-6'>
            About us
          </h2>
          <h3 className='text-white text-5xl font-semibold font-roboto-serif leading-tight'>
            The core mission behind all our work
          </h3>
          <p className='text-white text-lg mb-7'>
            Welcome to Canvix, where creativity meets technology to bring your
            vision to life.
          </p>
          <div className='flex gap-14 mb-6'>
            <div className='flex flex-col gap-2 text-white'>
              <span className='text-light-green font-roboto-serif text-5xl font-semibold'>
                100 +
              </span>
              Companies helped
            </div>
            <div className='flex flex-col gap-2 text-white'>
              <span className='text-light-green font-roboto-serif text-5xl font-semibold'>
                200 +
              </span>
              Projects completed
            </div>
          </div>
          <Button variant='white' isLarge>
            <div className='bg-black rounded-full'>
              <Image src={chevronRight} width={30} height={30} alt='icon' />
            </div>
            Start your Journey
          </Button>
        </div>
        <div>
          <h2 className='text-2xl font-roboto-serif text-light-green font-medium mb-6'>
            Company Timeline
          </h2>
          <h3 className='text-white text-5xl font-semibold font-roboto-serif leading-tight'>
            Milestones of Our Journey
          </h3>
          <div className='text-white text-4xl text-center font-bold mt-16 mb-4 font-roboto-serif'>
            {milestones[activeIndex].year}
          </div>
          <p className='h-32 text-white text-center px-4'>
            {milestones[activeIndex].description}
          </p>
          <div className='relative grid grid-cols-5 px-8 border-t border-neutral-500'>
            {getYears(activeIndex).map((year) => (
              <div
                key={year}
                className={`text-xl font-semibold ${
                  year === milestones[activeIndex].year
                    ? 'text-white'
                    : 'text-neutral-500'
                } text-center p-4 mt-8`}>
                {year}
              </div>
            ))}

            <button
              onClick={handlePrev}
              className='absolute top-0 -translate-y-1/2 left-0 size-14 bg-black text-white border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition'>
              <ChevronLeft className='size-8' />
            </button>
            <button
              onClick={handleNext}
              className='absolute top-0 -translate-y-1/2 right-0 size-14 bg-black text-white border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition'>
              <ChevronRight className='size-8' />
            </button>
          </div>
        </div>
        <div className='relative w-full h-full overflow-hidden rounded-2xl'>
          <Image
            src={milestones[activeIndex].image}
            fill
            alt={milestones[activeIndex].title}
            className='object-cover'
          />
          <div className='w-full absolute bottom-0 left-0 bg-black/75 flex items-end justify-center p-6'>
            <p className='text-white font-roboto-serif text-xl'>
              {milestones[activeIndex].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
