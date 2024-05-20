const Achievements = () => {
  return (
    <section className='max-w-7xl mx-4 md:mx-8 xl:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16 my-24'>
      <div className='flex flex-col gap-4 text-center mx-auto'>
        <p className='text-3xl xl:text-5xl font-roboto-serif font-semibold'>
          8+
        </p>
        <p className='font-medium text-xl xl:text-2xl font-roboto-serif'>
          Years in Business
        </p>
        <p>Providing top-tier digital solutions since 2016.</p>
      </div>
      <div className='flex flex-col gap-4 text-center mx-auto'>
        <p className='text-3xl xl:text-5xl font-roboto-serif font-semibold'>
          90%
        </p>
        <p className='font-medium text-xl xl:text-2xl font-roboto-serif'>
          Satisfaction Rate
        </p>
        <p>Ensuring ongoing satisfaction and long-term partnerships.</p>
      </div>
      <div className='flex flex-col gap-4 text-center mx-auto'>
        <p className='text-3xl xl:text-5xl font-roboto-serif font-semibold'>
          200+
        </p>
        <p className='font-medium text-xl xl:text-2xl font-roboto-serif'>
          Projects Completed
        </p>
        <p>Successfully delivering a wide range of digital projects.</p>
      </div>
    </section>
  );
};

export default Achievements;
