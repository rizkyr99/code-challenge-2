import Image from 'next/image';
import pencilIcon from '@/assets/pencil-line.svg';
import { services } from '@/data';

const Services = () => {
  return (
    <section className='max-w-7xl mx-auto py-24'>
      <h2 className='text-2xl text-light-green font-semibold font-roboto-serif text-center mb-4'>
        Our Services
      </h2>
      <h3 className='text-5xl font-semibold font-roboto-serif text-center leading-tight mb-16'>
        High-impact services
        <br />
        for your business
      </h3>
      <div className='grid grid-cols-3 gap-14'>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.name} className='bg-neutral-100 p-10 rounded-2xl'>
              <div className='h-16 w-16 bg-black rounded-full flex items-center justify-center mb-14'>
                <Icon className='size-6 text-white' />
              </div>
              <p className='text-xl font-medium font-roboto-serif mb-4'>
                {service.name}
              </p>
              <p className=''>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
