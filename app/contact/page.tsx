import Link from 'next/link';
import facebook from '@/assets/facebook.svg';
import Image from 'next/image';
import Button from '@/components/Button';

const ContactPage = () => {
  return (
    <main className='max-w-7xl mx-auto my-24'>
      <section className='flex gap-16'>
        <div className=''>
          <h1 className='font-roboto-serif font-semibold text-6xl mb-9'>
            Let&apos;s talk
          </h1>
          <p className='mb-8'>
            We collaborate with thousands of creators, entrepreneurs and
            complete legends.
          </p>
          <div className='py-8 space-y-5 border-y'>
            <div className='flex items-center gap-6'>
              <div className='bg-black rounded-full h-12 w-12 flex items-center justify-center'></div>
              <div>
                <p className='font-roboto-serif text-xl font-semibold'>
                  Our Email
                </p>
                <p>hello@example.com</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='bg-black rounded-full h-12 w-12 flex items-center justify-center'></div>
              <div>
                <p className='font-roboto-serif text-xl font-semibold'>
                  Our Email
                </p>
                <p>hello@example.com</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='bg-black rounded-full h-12 w-12 flex items-center justify-center'></div>
              <div>
                <p className='font-roboto-serif text-xl font-semibold'>
                  Our Email
                </p>
                <p>hello@example.com</p>
              </div>
            </div>
          </div>
          <div className='flex gap-10 mt-8'>
            <Link href='/'>
              <Image
                src={facebook}
                width={22}
                height={22}
                alt='facebook icon'
              />
            </Link>
            <Link href='/'>
              <Image
                src={facebook}
                width={22}
                height={22}
                alt='facebook icon'
              />
            </Link>
            <Link href='/'>
              <Image
                src={facebook}
                width={22}
                height={22}
                alt='facebook icon'
              />
            </Link>
          </div>
        </div>
        <form
          action=''
          className='bg-neutral-100 p-10 rounded-[20px] space-y-12'>
          <div className='grid grid-cols-2 gap-16'>
            <div className='space-y-4'>
              <label htmlFor=''>First name</label>
              <input
                type='text'
                className='w-full bg-transparent border-b border-neutral-300 outline-none'
              />
            </div>
            <div className='space-y-4'>
              <label htmlFor=''>First name</label>
              <input
                type='text'
                className='w-full bg-transparent border-b border-neutral-300 outline-none'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-16'>
            <div className='space-y-4'>
              <label htmlFor=''>First name</label>
              <input
                type='text'
                className='w-full bg-transparent border-b border-neutral-300 outline-none'
              />
            </div>
            <div className='space-y-4'>
              <label htmlFor=''>First name</label>
              <input
                type='text'
                className='w-full bg-transparent border-b border-neutral-300 outline-none'
              />
            </div>
          </div>
          <div className='space-y-4'>
            <label htmlFor=''>First name</label>
            <input
              type='text'
              className='w-full bg-transparent border-b border-neutral-300 outline-none'
            />
          </div>
          <Button variant='black'>Submit Now</Button>
        </form>
      </section>
      <section className='max-w-7xl mx-auto rounded-[20px] overflow-hidden my-24'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9644261048297!2d104.09909067501304!3d1.185416198803261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da27e2a4951e67%3A0xb4fde627f3a44477!2sNongsa%20Digital%20Park!5e0!3m2!1sid!2sid!4v1715584205027!5m2!1sid!2sid'
          height='300'
          style={{ border: 0, width: '100%' }}
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
        />
      </section>
    </main>
  );
};

export default ContactPage;
