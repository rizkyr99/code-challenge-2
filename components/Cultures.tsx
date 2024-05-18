import Image from 'next/image';
import lightbulb from '@/assets/lightbulb.svg';
import { cultures } from '@/data';

const Cultures = () => {
  return (
    <section className='py-24 px-4 lg:px-12 w-full overflow-x-hidden'>
      <h2 className='heading-2'>Our Culture</h2>
      <h3 className='heading-3'>
        The core values
        <br />
        that drive us forward
      </h3>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 xl:gap-20'>
        {cultures.map((culture) => (
          <div
            key={culture.name}
            className='relative px-10 pt-14 pb-8 border-4 border-neutral-100 rounded-3xl max-w-sm mx-auto'>
            <div className='bg-white min-w-full absolute top-0 left-0 lg:left-8  -translate-y-1/2 flex items-center gap-4 xl:gap-8'>
              <div className='h-16 w-16 bg-black rounded-full flex items-center justify-center flex-shrink-0'>
                <Image src={lightbulb} width={24} alt='lightbulb' />
              </div>
              <p className='text-xl xl:text-3xl font-semibold font-roboto-serif'>
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
