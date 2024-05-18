import Image from 'next/image';
import lightbulb from '@/assets/lightbulb.svg';
import { cultures } from '@/data';

const Cultures = () => {
  return (
    <section className='py-24'>
      <h2 className='text-2xl text-light-green font-roboto-serif font-medium text-center mb-4'>
        Our Culture
      </h2>
      <h3 className='text-5xl font-roboto-serif font-semibold text-center leading-tight mb-24'>
        The core values
        <br />
        that drive us forward
      </h3>
      <div className='max-w-7xl mx-auto grid grid-cols-3 gap-20'>
        {cultures.map((culture) => (
          <div
            key={culture.name}
            className='relative px-10 pt-14 pb-8 border-4 border-neutral-100 rounded-3xl'>
            <div className='bg-white min-w-full absolute top-0 left-1/4 -translate-y-1/2 flex items-center gap-8'>
              <div className='h-16 w-16 bg-black rounded-full flex items-center justify-center flex-shrink-0'>
                <Image src={lightbulb} width={24} alt='lightbulb' />
              </div>
              <p className='text-3xl font-semibold font-roboto-serif'>
                {culture.name}
              </p>
            </div>

            <p>{culture.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cultures;
