import Image from 'next/image';
import Button from '@/components/Button';
import chevronRight from '@/assets/chevron-right-line.svg';
import brands1 from '@/assets/6496714814b331014c589cab_client-04.svg';
import heroImg from '@/assets/hero.png';

const Hero = () => {
  return (
    <section className='w-full h-screen bg-[url("/bg-hero.png")] bg-opacity-5 bg-cover -mt-24 pt-36 pb-16 overflow-hidden'>
      <div className='h-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16'>
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-white font-roboto-serif text-6xl font-semibold leading-tight mb-6'>
              Ready to take your
              <br />
              <span className='text-light-green'>Business Growth</span>
              <br />
              to the next level?
            </h1>
            <p className='text-white text-lg mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>
            <Button variant='white' isLarge>
              <div className='rounded-full bg-black'>
                <Image
                  src={chevronRight}
                  alt='chevron-right-icon'
                  width={28}
                  height={28}
                />
              </div>
              Start your Free Trial
            </Button>
          </div>
          <div>
            <p className='font-roboto-serif text-light-green font-semibold text-xl mb-3'>
              Trusted by Leading Brands
            </p>
            <div className='flex items-center gap-2 -ml-4'>
              <Image
                src={brands1}
                width={148}
                height={54}
                alt='greenish logo'
              />
              <Image
                src={brands1}
                width={148}
                height={54}
                alt='greenish logo'
              />
              <Image
                src={brands1}
                width={148}
                height={54}
                alt='greenish logo'
              />
              <Image
                src={brands1}
                width={148}
                height={54}
                alt='greenish logo'
              />
            </div>
          </div>
        </div>
        <div className='group relative -translate-y-8 translate-x-16'>
          <div className='absolute inset-0 h-[640px] w-[640px] bg-radial-1 m-auto rounded-full shadow-[0_0_20px_2px_#64CCC5]'></div>
          <div className='absolute inset-0 h-[590px] w-[590px] rounded-full m-auto border-2 border-light-green/75 group-hover:scale-125 group-hover:blur-sm transition duration-300'></div>
          <div className='absolute inset-0 h-[510px] w-[510px] border rounded-full border-white/25 m-auto group-hover:scale-110 group-hover:blur-lg transition'></div>
          <Image
            src={heroImg}
            width={430}
            height={430}
            alt='hero'
            className='absolute inset-0 m-auto group-hover:scale-105 transition'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
