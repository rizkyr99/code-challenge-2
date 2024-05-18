import Image from 'next/image';
import Button from '@/components/Button';
import chevronRight from '@/assets/chevron-right-line.svg';
import brands1 from '@/assets/6496714814b331014c589cab_client-04.svg';
import heroImg from '@/assets/hero.png';

const Hero = () => {
  return (
    <section className='w-full h-screen bg-[url("/bg-hero.png")] bg-opacity-5 bg-cover -mt-24 pt-36 pb-8 md:pb-16 px-4 lg:px-12 overflow-hidden'>
      <div className='h-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-white font-roboto-serif text-3xl md:text-4xl xl:text-6xl font-semibold leading-tight mb-6 text-center lg:text-left'>
              Empowering Your
              <br />
              <span className='text-light-green'>Digital Future</span>
            </h1>
            <p className='text-white text-sm md:text-base mb-8 text-center lg:text-left max-w-lg'>
              From cutting-edge web development to powerful digital marketing
              strategies, our team of experts is here to elevate your brand and
              help you achieve your goals. Join us on a journey of creativity,
              technology, and excellence.
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
            <p className='text-center lg:text-left font-roboto-serif text-light-green font-semibold text-xl mb-3'>
              Trusted by Leading Brands
            </p>
            <div className='flex flex-wrap justify-center lg:justify-start items-center gap-2 -ml-4'>
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
                className='max-lg:hidden'
              />
              <Image
                src={brands1}
                width={148}
                height={54}
                alt='greenish logo'
                className='max-lg:hidden'
              />
            </div>
          </div>
        </div>
        <div className='group relative -translate-y-8 xl:translate-x-16 hidden lg:block'>
          <div className='absolute inset-0 h-[620px] w-[620px] bg-radial-1 m-auto rounded-full shadow-[0_0_20px_2px_#64CCC5] hidden xl:block'></div>
          <div className='absolute inset-0 h-[570px] w-[570px] rounded-full m-auto border-2 border-light-green/75 group-hover:scale-125 group-hover:blur-sm transition duration-300 hidden xl:block'></div>
          <div className='absolute inset-0 h-[490px] w-[490px] border rounded-full border-white/25 m-auto group-hover:scale-110 group-hover:blur-lg transition hidden xl:block'></div>
          <div className='absolute inset-0 h-[410px] w-[410px] m-auto rounded-full group-hover:scale-105 group-hover:shadow-[0_0_80px_20px_#64CCC525] transition'>
            <Image src={heroImg} width={410} height={410} alt='hero' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
