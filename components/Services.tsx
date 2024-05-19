import { services } from '@/data';
import Button from '@/components/Button';

const Services = () => {
  return (
    <section className='max-w-7xl mx-auto py-24 px-4'>
      <h2 className='heading-2 text-dark-green'>Our Services</h2>
      <h3 className='heading-3'>
        High-impact services
        <br />
        for your business
      </h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-14'>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.name} className='bg-neutral-100 p-10 rounded-2xl'>
              <div className='h-16 w-16 bg-black rounded-full flex items-center justify-center mb-8 md:mb-14'>
                <Icon className='size-6 text-white' />
              </div>
              <p className='text-xl font-medium font-roboto-serif mb-4'>
                {service.name}
              </p>
              <p className='mb-6'>{service.description}</p>
              <Button variant='black' className='text-sm md:text-base'>
                Learn more
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
