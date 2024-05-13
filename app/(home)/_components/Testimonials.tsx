import Image from 'next/image';
import testimonials1 from '../../../assets/testimonials1.png';

const Testimonials = () => {
  return (
    <section className='mb-24'>
      <div className='max-w-7xl mx-auto bg-[#F4F4F4] p-12 rounded-2xl flex flex-col items-center'>
        <Image
          src={testimonials1}
          width={150}
          height={150}
          alt='testimonials image'
        />
        <p className='font-roboto-serif text-2xl font-bold text-center my-8'>
          “Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the product
          or service.”
        </p>
        <p className='font-roboto-serif font-bold text-xl mb-1.5'>
          Jacqueline Miller
        </p>
        <p className='mb-6'>CEO of eduport</p>
        <div className='flex gap-3'>
          <button className='h-12 w-12 rounded-full bg-black flex items-center justify-center'></button>
          <button className='h-12 w-12 rounded-full bg-transparent border border-black flex items-center justify-center'></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
