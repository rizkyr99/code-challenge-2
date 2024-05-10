import Image from 'next/image';
import Button from '@/components/Button';
import chevronRight from '@/assets/chevron-right-line.svg';
import about1 from '@/assets/about1.png';

const AboutUs = () => {
  return (
    <section className='bg-black py-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 items-center'>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
            tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
          </p>
          <div className='flex gap-14 mb-6'>
            <div className='flex flex-col gap-2 text-white'>
              <span className='text-light-green font-roboto-serif text-5xl font-semibold'>
                330 +
              </span>
              Companies helped
            </div>
            <div className='flex flex-col gap-2 text-white'>
              <span className='text-light-green font-roboto-serif text-5xl font-semibold'>
                330 +
              </span>
              Companies helped
            </div>
          </div>
          <Button variant='white' isLarge>
            <div className='bg-black rounded-full'>
              <Image src={chevronRight} width={30} height={30} alt='icon' />
            </div>
            Start you Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
