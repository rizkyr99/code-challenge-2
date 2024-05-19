'use client';

import Image from 'next/image';
import testimonials1 from '../../../assets/testimonials1.png';
import { useEffect, useState } from 'react';
import { testimonials } from '@/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);

  const handleNext = () => {
    if (activeIndex === testimonials.length - 1) return;
    setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };

  useEffect(() => {
    activeIndex === testimonials.length - 1
      ? setNextDisabled(true)
      : setNextDisabled(false);
    activeIndex === 0 ? setPrevDisabled(true) : setPrevDisabled(false);
  }, [activeIndex]);

  return (
    <section className='mb-24 px-4'>
      <div className='max-w-7xl mx-auto bg-[#F4F4F4] p-4 sm:p-8 md:p-12 rounded-2xl flex flex-col items-center'>
        <Image
          src={testimonials[activeIndex].image}
          width={144}
          height={144}
          alt='testimonials image'
          className='size-24 md:size-36 object-cover rounded-full object-center'
        />
        <p className='font-roboto-serif text-sm md:text-lg lg:text-2xl font-bold text-center my-8'>
          “{testimonials[activeIndex].content}”
        </p>
        <p className='font-roboto-serif font-bold text-xl mb-1.5'>
          {testimonials[activeIndex].name}
        </p>
        <p className='mb-6'>
          {testimonials[activeIndex].position} of{' '}
          {testimonials[activeIndex].company}
        </p>
        <div className='flex gap-3'>
          <button
            onClick={handlePrev}
            className='h-12 w-12 rounded-full bg-black border border-black flex items-center justify-center text-white hover:bg-transparent hover:text-black transition disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white'
            disabled={prevDisabled}
            aria-label='previous testimonial'
            title='previous testimonial'>
            <ChevronLeft className='size-6' />
          </button>
          <button
            onClick={handleNext}
            className='h-12 w-12 rounded-full bg-black border border-black flex items-center justify-center text-white hover:bg-transparent hover:text-black transition disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white'
            disabled={nextDisabled}
            aria-label='next testimonial'
            title='next testimonial'>
            <ChevronRight className='size-6' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
