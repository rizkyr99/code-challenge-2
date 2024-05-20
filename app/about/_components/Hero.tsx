import Image from 'next/image';
import heroTestimonial from '@/assets/about-hero-testi.png';
import star from '@/assets/star.svg';
import about1 from '@/assets/about1.png';

const Hero = () => {
  return (
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
  );
};

export default Hero;
