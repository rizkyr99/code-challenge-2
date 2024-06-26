import React from 'react';
import Button from './Button';

const CTA = () => {
  return (
    <section className='my-24 px-4 md:px-8'>
      <div className='relative max-w-7xl mx-auto h-56 bg-[url("/images/bg-wave.webp")] bg-cover bg-center bg-opacity-10 rounded-[20px] overflow-hidden'>
        <div className='absolute bg-black/70 inset-0 flex flex-col items-center justify-center gap-6 p-4'>
          <p className='text-white font-roboto-serif font-bold text-2xl md:text-3xl lg:text-5xl text-center'>
            Enough talk, let&apos;s get to work
          </p>
          <Button variant='white'>Get in touch</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
