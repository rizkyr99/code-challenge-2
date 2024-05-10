import Image from 'next/image';
import lightbulb from '@/assets/lightbulb.svg';

const Process = () => {
  return (
    <section className='py-24'>
      <h2 className='text-2xl text-light-green font-roboto-serif font-medium text-center'>
        Process
      </h2>
      <h3 className='text-5xl font-roboto-serif font-semibold text-center leading-tight mb-24'>
        Process that moves
        <br />
        things forward
      </h3>
      <div className='max-w-7xl mx-auto grid grid-cols-4 gap-20'>
        {[1, 2, 3, 4].map((process) => (
          <div
            key={process}
            className='relative px-10 pt-14 pb-8 border-4 border-neutral-100 rounded-3xl'>
            <div className='bg-white min-w-full absolute top-0 left-1/4 -translate-y-1/2 flex items-center gap-8'>
              <div className='h-16 w-16 bg-black rounded-full flex items-center justify-center'>
                <Image src={lightbulb} width={24} alt='lightbulb' />
              </div>
              <p className='text-3xl font-semibold font-roboto-serif'>Ideate</p>
            </div>
            The ideation process is a crucial phase in the design process where
            creative thinking and brainstorming
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
